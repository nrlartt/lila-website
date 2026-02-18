import { startWorld } from "./world";
import { createUI } from "./ui";
import { signInWithEthereum } from "./wallet";
import { connectWorld } from "./ws";
import { createTask, getAgentMemories } from "./api";
import { shouldShowPlayOverlay } from "./pointerLockFlow";

const app = document.getElementById("app") || (() => {
  const mount = document.createElement("div");
  mount.id = "app";
  document.body.appendChild(mount);
  return mount;
})();

const ui = createUI(app);
ui.setLoadProgress(10);

let pointerLockEnabled = true;
const worldContainer = document.createElement("div");
app.appendChild(worldContainer);
const world = startWorld(worldContainer, { pointerLockEnabled: () => pointerLockEnabled });
ui.setLoadProgress(75);

const chainId = Number(import.meta.env.VITE_CHAIN_ID || 8453);
const domain = import.meta.env.VITE_DOMAIN || "lilagent.xyz";
const wsUrl = import.meta.env.VITE_WS_URL || `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/agentverse-ws`;
const apiBase = (window as any).__API_BASE__ || (import.meta.env.VITE_API_BASE ?? "/agentverse-api");

let accessToken = "";
let wsToken = "";
let worldSocket: ReturnType<typeof connectWorld> | null = null;

async function ensureGuestWsToken() {
  if (wsToken) return wsToken;
  const r = await fetch(`${apiBase}/realtime/guest-token`);
  if (!r.ok) throw new Error(`Guest token failed (${r.status})`);
  const data = await r.json();
  wsToken = data.wsToken;
  return wsToken;
}

async function ensureRealtimeConnection() {
  if (worldSocket) return;
  await ensureGuestWsToken();
  worldSocket = connectWorld(
    wsUrl,
    wsToken,
    (m) => {
      if (m.type === "agent_state_update" && m.id) {
        const lastSeen = new Date().toLocaleTimeString();
        ui.upsertAgent({ id: m.id, name: m.displayName, state: m.state, taskId: m.taskId, statusText: m.statusText, lastSeen });
        world.upsertAgent(m.id, m.x ?? 0, m.y ?? 1.6, m.z ?? 0, { name: m.displayName, state: m.state, taskId: m.taskId, lastSeen });
      }
      if (m.type === "conversation_event" || (m.type === "chat" && m.message)) {
        ui.appendAgentChat(m.from || m.userId || "agent", m.message || "...");
      }
      if (m.type === "task_update") {
        ui.appendAgentChat("task", `${m.agentId}: ${m.status} • ${m.detail}`);
      }
      if (m.type === "profile_event") {
        ui.renderProfile({ personality: m.personality || "-", memories: m.memories || [] });
      }
    },
    (status) => ui.setStatus(status),
    (state, detail) => ui.setWsState(state, detail)
  );
  worldSocket.send({ type: "event", worldId: "lobby", name: "snapshot_request", payload: {} });
}

ui.onReconnect(async () => {
  if (!worldSocket) {
    await ensureRealtimeConnection();
    return;
  }
  worldSocket.reconnect();
});

ui.onPlayClick(() => {
  if (pointerLockEnabled) world.tryLockPointer();
});

ui.onPointerLockToggle((enabled) => {
  pointerLockEnabled = enabled;
  world.setPointerLookEnabled(enabled);
});

world.onPointerLockChange((locked) => {
  ui.setOverlayVisible(shouldShowPlayOverlay(locked, pointerLockEnabled));
});

world.onSelectionChanged((agent) => {
  ui.openAgent(agent.id);
  ui.appendAgentChat("system", `Selected ${agent.name} (${agent.status})`);
  worldSocket?.send({
    type: "interaction",
    worldId: "lobby",
    targetAgentId: agent.id,
    action: "profile_request",
    payload: {}
  });
});
world.onHeadingChange((h) => ui.setCompass(h));

ui.onLogin(async () => {
  try {
    ui.setStatus("Signing in with SIWE");
    const auth = await signInWithEthereum(chainId, domain);
    accessToken = auth.accessToken;
    wsToken = auth.wsToken;
    ui.setStatus("Wallet connected");
    if (worldSocket) {
      worldSocket.setToken(wsToken);
      worldSocket.reconnect();
    }
  } catch (err: any) {
    if (err?.endpoint && err?.status) {
      ui.setNonceDebug(err.endpoint, err.status);
    } else {
      ui.setStatus(err.message || "Wallet connection failed");
    }
  }
});

ui.onChatSend((agentId, text) => {
  worldSocket?.send({ type: "interaction", worldId: "lobby", targetAgentId: agentId, action: "chat", payload: { text } });
  worldSocket?.send({ type: "chat", worldId: "lobby", message: text });
});

ui.onAssignTask(async (agentId, title) => {
  try {
    if (!accessToken) throw new Error("Connect wallet first for ownership actions");
    const pos = world.getCameraPosition();
    const task = await createTask(accessToken, {
      assignedTo: agentId,
      title,
      description: "Created from AgentVerse interaction panel",
      reward: 5,
      rewardToken: "AGXP",
      location: { worldId: "lobby", ...pos },
      requiredCapabilities: ["navigation", "interaction"]
    });
    worldSocket?.send({ type: "task_assign", worldId: "lobby", agentId, taskId: task.task.id });
    const memories = await getAgentMemories(accessToken, agentId).catch(() => ({ memories: [] }));
    ui.appendAgentChat("system", `Task assigned: ${title}. Memory entries: ${memories.memories?.length || 0}`);
  } catch (err: any) {
    ui.appendAgentChat("system", err.message || "Task assignment failed");
  }
});

// Start realtime even as guest for world visibility.
ensureRealtimeConnection().catch((err) => ui.setStatus(err.message || "Realtime bootstrap failed"));

setInterval(() => {
  if (!worldSocket) return;
  worldSocket.send({ type: "presence", worldId: "lobby", ...world.getCameraPosition() });
  const interaction = world.getLastInteraction();
  if (interaction) {
    worldSocket.send({ type: "event", worldId: "lobby", name: "interaction", payload: { interaction } });
    world.clearLastInteraction();
  }
}, 800);

ui.setLoadProgress(100);
ui.setStatus("Ready");

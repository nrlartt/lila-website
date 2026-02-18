import { startWorld } from "./world";
import { createUI } from "./ui";
import { signInWithEthereum } from "./wallet";
import { connectWorld } from "./ws";
import { createTask, getAgentMemories, getGuestToken, getSessionToken, chatAgent, getKioskTasks } from "./api";
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
ui.setLoadProgress(70);

const chainId = Number(import.meta.env.VITE_CHAIN_ID || 8453);
const domain = import.meta.env.VITE_DOMAIN || "lilagent.xyz";
const wsUrl = import.meta.env.VITE_WS_URL || `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/realtime`;
const rawApiBase = (typeof window !== "undefined" && (window as any).__API_BASE__) || (import.meta.env.VITE_API_BASE ?? "/agentverse-api");
const apiBase = String(rawApiBase).startsWith("http") || String(rawApiBase).startsWith("/") ? String(rawApiBase) : `/${String(rawApiBase)}`;


let accessToken = "";
let wsToken = "";
let worldSocket: ReturnType<typeof connectWorld> | null = null;
let offlineMode = false;
let offlineTick: number | null = null;
const minimapAgents = new Map<string, { x: number; z: number }>();

const offlineAgents = Array.from({ length: 10 }).map((_, i) => ({
  id: `offline_${i + 1}`,
  name: `LOCAL-${i + 1}`,
  angle: Math.random() * Math.PI * 2,
  radius: 8 + Math.random() * 24,
  cx: -8 + Math.random() * 16,
  cz: -32 + Math.random() * 16
}));

function startOfflineSandbox() {
  if (offlineTick) return;
  offlineMode = true;
  ui.setOfflineMode(true);
  ui.setStatus("Offline sandbox mode");
  offlineTick = window.setInterval(() => {
    for (const a of offlineAgents) {
      a.angle += 0.015 + Math.random() * 0.01;
      const x = a.cx + Math.cos(a.angle) * a.radius;
      const z = a.cz + Math.sin(a.angle) * a.radius;
      world.upsertAgent(a.id, x, 1.6, z, { name: a.name, state: "wandering", lastSeen: new Date().toLocaleTimeString() });
      ui.upsertAgent({ id: a.id, name: a.name, state: "wandering", lastSeen: new Date().toLocaleTimeString() });
      minimapAgents.set(a.id, { x, z });
    }
  }, 250);
}

function stopOfflineSandbox() {
  offlineMode = false;
  ui.setOfflineMode(false);
  if (offlineTick) {
    clearInterval(offlineTick);
    offlineTick = null;
  }
}

async function ensureGuestWsToken() {
  if (wsToken) return wsToken;
  const data = await getGuestToken();
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
        stopOfflineSandbox();
        const lastSeen = new Date().toLocaleTimeString();
        ui.upsertAgent({ id: m.id, name: m.displayName, state: m.state, taskId: m.taskId, statusText: m.statusText, lastSeen });
        world.upsertAgent(m.id, m.x ?? 0, m.y ?? 1.6, m.z ?? 0, { name: m.displayName, state: m.state, taskId: m.taskId, lastSeen, path: m.path });
        minimapAgents.set(m.id, { x: m.x ?? 0, z: m.z ?? 0 });
      }
      if (m.type === "world_snapshot" && Array.isArray(m.agents)) {
        stopOfflineSandbox();
        for (const a of m.agents) {
          ui.upsertAgent({ id: a.id, name: a.displayName, state: a.state, lastSeen: new Date().toLocaleTimeString() });
          world.upsertAgent(a.id, a.x ?? 0, a.y ?? 1.6, a.z ?? 0, { name: a.displayName, state: a.state, path: a.path });
          minimapAgents.set(a.id, { x: a.x ?? 0, z: a.z ?? 0 });
        }
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
    (state, detail) => {
      ui.setWsState(state, detail);
      if (state === "CONNECTED") stopOfflineSandbox();
      if (state === "DISCONNECTED" || state === "RETRYING") startOfflineSandbox();
    }
  );
  worldSocket.send({ type: "event", worldId: "lobby", name: "snapshot_request", payload: {} });
}

ui.onReconnect(async () => {
  if (!worldSocket) {
    await ensureRealtimeConnection().catch((err) => {
      ui.setStatus(err.message);
      startOfflineSandbox();
    });
    return;
  }
  worldSocket.reconnect();
});

const tryEnterWorld = () => {
  if (pointerLockEnabled) world.tryLockPointer();
};
ui.onPlayClick(tryEnterWorld);
ui.onEnterWorld(tryEnterWorld);

ui.onPointerLockToggle((enabled) => {
  pointerLockEnabled = enabled;
  world.setPointerLookEnabled(enabled);
});
ui.onAudioToggle((enabled) => world.setAmbientAudioEnabled(enabled));
ui.onDebugToggle((flags) => world.setDebugFlags(flags));

world.onPointerLockChange((locked) => {
  ui.setOverlayVisible(shouldShowPlayOverlay(locked, pointerLockEnabled));
});

// optional canvas click-to-enter only when click is not on UI
world.canvas.addEventListener("mousedown", (ev: MouseEvent) => {
  const target = ev.target as HTMLElement;
  const isUi = !!target.closest("#interactionPanel") || !!target.closest("#playOverlay") || !!target.closest("button") || !!target.closest("label") || !!target.closest("input") || !!target.closest("select");
  if (!isUi && pointerLockEnabled && !world.isPointerLocked()) {
    world.tryLockPointer();
  }
});

world.onSelectionChanged((agent) => {
  ui.openAgent(agent.id);
  ui.appendAgentChat("system", `Selected ${agent.name} (${agent.status})`);
  if (offlineMode) {
    ui.renderProfile({
      personality: "Local stub agent in offline sandbox.",
      memories: [{ at: Date.now(), type: "observation", content: "Realtime unavailable, running local simulation." }]
    });
  } else {
    worldSocket?.send({
      type: "interaction",
      worldId: "lobby",
      targetAgentId: agent.id,
      action: "profile_request",
      payload: {}
    });
  }
});
world.onHeadingChange((h) => ui.setCompass(h));

ui.onWalletConnectClick(() => {
  window.open("https://walletconnect.com/", "_blank", "noopener,noreferrer");
  ui.setStatus("No injected wallet detected? Use WalletConnect or install MetaMask.");
});

ui.onLogin(async () => {
  try {
    ui.setStatus("Signing in with SIWE");
    const auth = await signInWithEthereum(chainId, domain);
    accessToken = auth.accessToken;
    const session = await getSessionToken(accessToken).catch(() => ({ wsToken: auth.wsToken }));
    wsToken = session.wsToken;
    ui.setStatus("Wallet connected");
    if (worldSocket) {
      worldSocket.setToken(wsToken);
      worldSocket.reconnect();
    }
  } catch (err: any) {
    if (err?.endpoint && err?.status) {
      ui.setStatus(`Nonce failed: ${err.method || 'POST'} ${err.endpoint} -> ${err.status}`);
      ui.setNonceDebug(err.endpoint, err.status);
    } else if ((err?.message || "").includes("No wallet provider found")) {
      ui.setStatus("No injected wallet detected. Use WalletConnect or install MetaMask.");
    } else {
      ui.setStatus(err.message || "Wallet connection failed");
    }
  }
});

ui.onChatSend(async (agentId, text) => {
  if (offlineMode) {
    const response = text.toLowerCase().includes("portal")
      ? "Offline agent: Portal Gate is west of the plaza road."
      : text.toLowerCase().includes("patrol")
      ? "Offline agent: Starting plaza patrol now."
      : "Offline agent: Request acknowledged in local sandbox.";
    setTimeout(() => ui.appendAgentChat(agentId, response), 250);
    return;
  }
  try {
    const r = await chatAgent(agentId, text, accessToken || undefined);
    ui.appendAgentChat(agentId, r.reply || "Acknowledged");
  } catch (err: any) {
    ui.appendAgentChat("system", err.message || "Online agent chat failed");
  }
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
    if (offlineMode) {
      ui.appendAgentChat("task", `Offline mode queued task: ${title}`);
    } else {
      worldSocket?.send({ type: "task_assign", worldId: "lobby", agentId, taskId: task.task.id });
    }
    const memories = await getAgentMemories(accessToken, agentId).catch(() => ({ memories: [] }));
    ui.appendAgentChat("system", `Task assigned: ${title}. Memory entries: ${memories.memories?.length || 0}`);
  } catch (err: any) {
    ui.appendAgentChat("system", err.message || "Task assignment failed");
  }
});

ensureRealtimeConnection().catch((err) => {
  ui.setStatus(err.message || "Realtime bootstrap failed");
  startOfflineSandbox();
});

setInterval(() => {
  const p = world.getCameraPosition();
  ui.renderMinimap({ x: p.x, z: p.z }, [...minimapAgents.values()]);
  if (!worldSocket) return;
  worldSocket.send({ type: "presence", worldId: "lobby", ...p });
  const interaction = world.getLastInteraction();
  if (interaction) {
    if (interaction === "context_interaction") {
      getKioskTasks().then((res) => {
        const titles = (res.tasks || []).map((t: any) => `${t.title} (${t.rewardCredits} credits)`).join(" | ");
        ui.appendAgentChat("kiosk", `Available tasks: ${titles}`);
      }).catch(() => {
        ui.appendAgentChat("kiosk", "Task kiosk unavailable right now.");
      });
    }
    worldSocket.send({ type: "event", worldId: "lobby", name: "interaction", payload: { interaction } });
    world.clearLastInteraction();
  }
}, 800);

ui.setLoadProgress(100);
ui.setStatus("Ready");

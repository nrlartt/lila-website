import { startWorld } from "./world";
import { createUI } from "./ui";
import { signInWithEthereum } from "./wallet";
import { connectWorld } from "./ws";
import { createTask, getAgentMemories } from "./api";

const app = document.getElementById("app") || (() => {
  const mount = document.createElement("div");
  mount.id = "app";
  document.body.appendChild(mount);
  return mount;
})();
const worldContainer = document.createElement("div");
app.appendChild(worldContainer);
const world = startWorld(worldContainer);
const ui = createUI(app);

const chainId = Number(import.meta.env.VITE_CHAIN_ID || 8453);
const domain = import.meta.env.VITE_DOMAIN || "lilagent.xyz";
const wsUrl = import.meta.env.VITE_WS_URL || `ws://${location.host}/agentverse-ws`;

let accessToken = "";
let worldSocket: ReturnType<typeof connectWorld> | null = null;

ui.onLogin(async () => {
  try {
    ui.setStatus("Signing in with SIWE");
    const auth = await signInWithEthereum(chainId, domain);
    accessToken = auth.accessToken;
    ui.setStatus("Connected");

    worldSocket = connectWorld(wsUrl, auth.wsToken, (m) => {
      if (m.type === "agent_state_update" && m.id) {
        ui.upsertAgent({ id: m.id, name: m.displayName, state: m.state, taskId: m.taskId, statusText: m.statusText });
        world.upsertAgent(m.id, m.x ?? 0, m.y ?? 1.6, m.z ?? 0, { name: m.displayName, state: m.state, taskId: m.taskId });
      }

      if (m.type === "conversation_event" || (m.type === "chat" && m.message)) {
        ui.appendAgentChat(m.from || m.userId || "agent", m.message || "...");
      }

      if (m.type === "task_update") {
        ui.appendAgentChat("task", `${m.agentId}: ${m.status} • ${m.detail}`);
      }

      if (m.type === "environment_event") {
        ui.setStatus(`Connected • phase: ${m.dayPhase || "day"}`);
      }
    });

    setInterval(() => {
      if (!worldSocket) return;
      const pos = world.getCameraPosition();
      worldSocket.send({ type: "presence", worldId: "lobby", ...pos });

      const interaction = world.getLastInteraction();
      if (interaction) {
        worldSocket.send({ type: "event", worldId: "lobby", name: "interaction", payload: { interaction } });
        world.clearLastInteraction();
      }
    }, 800);
  } catch (err: any) {
    ui.setStatus(err.message || "Failed");
  }
});

ui.onChatSend((agentId, text) => {
  worldSocket?.send({ type: "interaction", worldId: "lobby", targetAgentId: agentId, action: "chat", payload: { text } });
  worldSocket?.send({ type: "chat", worldId: "lobby", message: text });
});

ui.onAssignTask(async (agentId, title) => {
  try {
    if (!accessToken) throw new Error("Connect wallet first");
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
    ui.appendAgentChat("system", `Task assigned: ${title}. Memory summary entries: ${memories.memories?.length || 0}`);
  } catch (err: any) {
    ui.appendAgentChat("system", err.message || "Task assignment failed");
  }
});

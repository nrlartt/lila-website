import { startWorld } from "./world";
import { createUI } from "./ui";
import { signInWithEthereum } from "./wallet";
import { connectWorld } from "./ws";

const app = document.getElementById("app")!;
const worldContainer = document.createElement("div");
app.appendChild(worldContainer);
const world = startWorld(worldContainer);
const ui = createUI(app);

const chainId = Number(import.meta.env.VITE_CHAIN_ID || 8453);
const domain = import.meta.env.VITE_DOMAIN || "lilagent.xyz";
const wsUrl = import.meta.env.VITE_WS_URL || `ws://${location.host}/agentverse-ws`;

ui.onLogin(async () => {
  try {
    ui.setStatus("signing in");
    const auth = await signInWithEthereum(chainId, domain);
    ui.setStatus("connected");
    const ws = connectWorld(wsUrl, auth.wsToken, (m) => {
      if (m.type === "presence" && m.userId) {
        ui.addAgent(m.userId);
        world.upsertAgent(m.userId, m.x ?? 0, m.y ?? 1.6, m.z ?? 0);
      }
    });
    setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "presence", worldId: "lobby", x: 0, y: 1.6, z: 0 }));
      }
    }, 1500);
  } catch (err: any) {
    ui.setStatus(err.message || "failed");
  }
});

import dotenv from "dotenv";
import { WebSocketServer, type WebSocket } from "ws";
import { createClient } from "redis";
import { verifyWsToken } from "./auth.js";
import { createBucket } from "./rateLimit.js";
import {
  helloSchema,
  heartbeatSchema,
  presenceSchema,
  chatSchema,
  eventSchema,
  interactionSchema,
  taskAssignSchema
} from "./schema.js";
import { inRadius, quantizePosition, type Position } from "./aoi.js";
import { AgentBrainEngine } from "./brain.js";

dotenv.config();
const port = Number(process.env.AGENTVERSE_WS_PORT || 8081);
const maxBytes = Number(process.env.WS_MAX_PAYLOAD_BYTES || 16384);
const secret = process.env.JWT_SECRET || "change_me";
const chatRadius = Number(process.env.AGENTVERSE_CHAT_RADIUS || 35);
const updateRadius = Number(process.env.AGENTVERSE_AOI_RADIUS || 55);

interface ClientSocket extends WebSocket {
  userId?: string;
  worldId?: string;
  pos?: Position;
}

const pub = createClient({ url: process.env.REDIS_URL });
const sub = createClient({ url: process.env.REDIS_URL });
await pub.connect();
await sub.connect();

const wss = new WebSocketServer({ port, maxPayload: maxBytes });
const clients = new Set<ClientSocket>();
const brain = new AgentBrainEngine();

const send = (ws: ClientSocket, payload: unknown) => {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(payload));
};

for (const id of ["npc_alpha", "npc_beta", "npc_gamma", "npc_delta"]) {
  brain.upsertAgent({ id, worldId: "lobby", displayName: id.replace("npc_", "").toUpperCase() });
}

await sub.subscribe("agentverse:broadcast", (message) => {
  let parsed: any;
  try { parsed = JSON.parse(message); } catch { return; }

  for (const ws of clients) {
    if (!ws.userId || !ws.pos || !parsed.worldId) continue;
    const src = { worldId: parsed.worldId, x: parsed.x ?? 0, y: parsed.y ?? 1.6, z: parsed.z ?? 0 };
    if (inRadius(ws.pos, src, parsed.type === "chat" ? chatRadius : updateRadius)) {
      send(ws, parsed);
    }
  }
});

wss.on("connection", (ws: ClientSocket) => {
  const bucket = createBucket();
  let authed = false;
  clients.add(ws);

  const timeout = setTimeout(() => {
    if (!authed) ws.close(4401, "Authentication timeout");
  }, 5000);

  ws.on("message", async (raw) => {
    if (!bucket.allow()) return ws.close(4408, "Rate limit exceeded");

    let msg: any;
    try { msg = JSON.parse(raw.toString()); } catch { return; }

    if (!authed) {
      const hello = helloSchema.safeParse(msg);
      if (!hello.success) return ws.close(4401, "Invalid hello message");

      const user = verifyWsToken(hello.data.wsToken, secret);
      if (!user) return ws.close(4401, "Invalid wsToken");

      authed = true;
      ws.userId = user.sub;
      ws.worldId = "lobby";
      ws.pos = { worldId: "lobby", x: 0, y: 1.6, z: 0 };
      clearTimeout(timeout);

      send(ws, { type: "hello", ok: true, userId: user.sub });
      send(ws, { type: "environment_event", dayPhase: "day", serverTs: Date.now() });
      return;
    }

    if (heartbeatSchema.safeParse(msg).success) {
      send(ws, { type: "heartbeat", ok: true, ts: Date.now() });
      return;
    }

    const presence = presenceSchema.safeParse(msg);
    if (presence.success) {
      ws.worldId = presence.data.worldId;
      ws.pos = quantizePosition(presence.data.x, presence.data.y, presence.data.z) as Position;
      ws.pos.worldId = presence.data.worldId;
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...presence.data, userId: ws.userId, type: "agent_state_update" }));
      return;
    }

    if (chatSchema.safeParse(msg).success || eventSchema.safeParse(msg).success || interactionSchema.safeParse(msg).success || taskAssignSchema.safeParse(msg).success) {
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...msg, userId: ws.userId }));
      return;
    }
  });

  ws.on("close", () => clients.delete(ws));
});

setInterval(() => {
  const now = Date.now();
  brain.tick(now);

  const byWorld = new Map<string, any[]>();
  for (const worldId of ["lobby"]) {
    byWorld.set(worldId, brain.getSnapshots(worldId));
  }

  for (const ws of clients) {
    if (!ws.userId || !ws.pos || !ws.worldId) continue;
    const agents = (byWorld.get(ws.worldId) || []).filter((a) => inRadius(ws.pos!, { worldId: a.worldId, x: a.x, y: a.y, z: a.z }, updateRadius));

    send(ws, {
      type: "world_update",
      worldId: ws.worldId,
      ts: now,
      agents
    });

    // synthetic conversation/task stream for live world feel
    if (Math.random() < 0.03 && agents.length >= 2) {
      const a = agents[Math.floor(Math.random() * agents.length)];
      const b = agents[Math.floor(Math.random() * agents.length)];
      if (a.id !== b.id) {
        send(ws, {
          type: "conversation_event",
          worldId: ws.worldId,
          from: a.id,
          to: b.id,
          message: `${a.displayName} synced route strategy with ${b.displayName}`,
          ts: now
        });
      }
    }

    if (Math.random() < 0.02 && agents.length > 0) {
      const a = agents[Math.floor(Math.random() * agents.length)];
      send(ws, {
        type: "task_update",
        worldId: ws.worldId,
        agentId: a.id,
        status: a.taskId ? "in_progress" : "idle",
        detail: a.taskId ? `Task ${a.taskId} checkpoint reached` : "No active task",
        ts: now
      });
    }
  }
}, 200);

console.log(JSON.stringify({ level: "info", msg: "agentverse-realtime started", port }));

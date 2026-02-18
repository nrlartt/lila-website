import dotenv from "dotenv";
import http from "http";
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
import { AgentBrainEngine } from "./brain.js";

dotenv.config();
const port = Number(process.env.AGENTVERSE_WS_PORT || 8081);
const maxBytes = Number(process.env.WS_MAX_PAYLOAD_BYTES || 16384);
const secret = process.env.JWT_SECRET || "change_me";

interface ClientSocket extends WebSocket {
  userId?: string;
  worldId?: string;
  pos?: { x: number; y: number; z: number };
  tokenAuthed?: boolean;
}

type AgentProfile = {
  personality: string;
  capabilities: string[];
};

type AgentMemory = { at: number; type: "interaction" | "task" | "observation"; content: string };

const pub = createClient({ url: process.env.REDIS_URL });
const sub = createClient({ url: process.env.REDIS_URL });
await pub.connect();
await sub.connect();

const server = http.createServer((req, res) => {
  if (req.url?.startsWith("/health") || req.url?.startsWith("/healthz")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "agentverse-realtime" }));
    return;
  }
  res.writeHead(404);
  res.end();
});

const wss = new WebSocketServer({ noServer: true, maxPayload: maxBytes });
const clients = new Set<ClientSocket>();
const brain = new AgentBrainEngine();

const seedAgents = [
  "npc_alpha", "npc_beta", "npc_gamma", "npc_delta", "npc_sigma",
  "npc_omega", "npc_lambda", "npc_rho", "npc_tau", "npc_zeta"
];
for (const id of seedAgents) {
  brain.upsertAgent({ id, worldId: "lobby", displayName: id.replace("npc_", "").toUpperCase() });
}

const profiles = new Map<string, AgentProfile>([
  ["npc_alpha", { personality: "Calm scout focused on mapping paths.", capabilities: ["navigation", "observation"] }],
  ["npc_beta", { personality: "Analytical coordinator who assigns tasks.", capabilities: ["planning", "coordination"] }],
  ["npc_gamma", { personality: "Friendly greeter that monitors arrivals.", capabilities: ["social", "support"] }],
  ["npc_delta", { personality: "Operations specialist for plaza patrol.", capabilities: ["patrol", "reporting"] }],
  ["npc_sigma", { personality: "Experimental researcher for portal events.", capabilities: ["research", "interaction"] }]
]);

const memories = new Map<string, AgentMemory[]>();
for (const id of seedAgents) {
  memories.set(id, [
    { at: Date.now() - 60_000, type: "observation", content: "Initialized in lobby." },
    { at: Date.now() - 30_000, type: "observation", content: "Monitoring nearby activity." }
  ]);
}

function pushMemory(agentId: string, memory: AgentMemory) {
  const list = memories.get(agentId) || [];
  list.unshift(memory);
  memories.set(agentId, list.slice(0, 20));
}

function send(ws: ClientSocket, payload: unknown) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(payload));
}

function parseTokenFromRequest(req: http.IncomingMessage) {
  const auth = req.headers.authorization;
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  return url.searchParams.get("token") || undefined;
}

function agentReply(agentId: string, text: string) {
  const t = text.toLowerCase();
  if (t.includes("portal")) return "I can route you to the Portal Gate. Stay close to the central road.";
  if (t.includes("patrol")) return "Patrol task acknowledged. I will sweep the plaza perimeter.";
  if (t.includes("meet")) return "I can coordinate a meetup. Tell me which agent you want to meet.";
  return "Acknowledged. I am processing your request and updating local memory.";
}

server.on("upgrade", (req, socket, head) => {
  const token = parseTokenFromRequest(req);
  let userId: string | null = null;
  if (token) {
    const verified = verifyWsToken(token, secret);
    if (verified) userId = verified.sub;
  }

  wss.handleUpgrade(req, socket, head, (ws) => {
    const client = ws as ClientSocket;
    client.userId = userId || `guest_${Math.random().toString(36).slice(2, 8)}`;
    client.tokenAuthed = !!userId;
    client.worldId = "lobby";
    client.pos = { x: 0, y: 1.6, z: 0 };
    wss.emit("connection", client, req);
  });
});

await sub.subscribe("agentverse:broadcast", (message) => {
  let parsed: any;
  try { parsed = JSON.parse(message); } catch { return; }

  for (const ws of clients) {
    if (!ws.worldId || parsed.worldId !== ws.worldId) continue;
    send(ws, parsed);
  }
});

wss.on("connection", (ws: ClientSocket) => {
  clients.add(ws);
  const bucket = createBucket();

  send(ws, {
    type: "hello",
    ok: true,
    userId: ws.userId,
    mode: ws.tokenAuthed ? "authenticated" : "guest"
  });

  ws.on("message", async (raw) => {
    if (!bucket.allow()) return ws.close(4408, "Rate limit exceeded");

    let msg: any;
    try { msg = JSON.parse(raw.toString()); } catch { return; }

    const hello = helloSchema.safeParse(msg);
    if (hello.success) {
      const token = hello.data.wsToken;
      const user = token && token !== "guest" ? verifyWsToken(token, secret) : null;
      if (user) {
        ws.userId = user.sub;
        ws.tokenAuthed = true;
      }
      send(ws, { type: "hello", ok: true, userId: ws.userId, mode: ws.tokenAuthed ? "authenticated" : "guest" });
      return;
    }

    if (heartbeatSchema.safeParse(msg).success) {
      send(ws, { type: "heartbeat", ok: true, ts: Date.now() });
      return;
    }

    const presence = presenceSchema.safeParse(msg);
    if (presence.success) {
      ws.worldId = presence.data.worldId;
      ws.pos = { x: presence.data.x, y: presence.data.y, z: presence.data.z };
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...presence.data, type: "agent_state_update", id: ws.userId, displayName: ws.userId, state: "walking", lastSeen: new Date().toISOString() }));
      return;
    }

    const interaction = interactionSchema.safeParse(msg);
    if (interaction.success) {
      const { targetAgentId, action } = interaction.data;
      if (action === "chat") {
        const text = String(interaction.data.payload?.text || "");
        pushMemory(targetAgentId, { at: Date.now(), type: "interaction", content: `User ${ws.userId} said: ${text}` });
        const reply = agentReply(targetAgentId, text);
        setTimeout(async () => {
          await pub.publish("agentverse:broadcast", JSON.stringify({
            type: "conversation_event",
            worldId: interaction.data.worldId,
            from: targetAgentId,
            to: ws.userId,
            message: reply,
            ts: Date.now()
          }));
          pushMemory(targetAgentId, { at: Date.now(), type: "interaction", content: `Replied: ${reply}` });
        }, 450);
        return;
      }

      if (action === "profile_request") {
        const profile = profiles.get(targetAgentId) || { personality: "Adaptive autonomous agent.", capabilities: ["navigation"] };
        const recent = (memories.get(targetAgentId) || []).slice(0, 5);
        send(ws, {
          type: "profile_event",
          worldId: interaction.data.worldId,
          agentId: targetAgentId,
          personality: profile.personality,
          capabilities: profile.capabilities,
          memories: recent
        });
        return;
      }

      await pub.publish("agentverse:broadcast", JSON.stringify({ ...interaction.data, type: "interaction", userId: ws.userId }));
      return;
    }

    const taskAssign = taskAssignSchema.safeParse(msg);
    if (taskAssign.success) {
      pushMemory(taskAssign.data.agentId, { at: Date.now(), type: "task", content: `Assigned task ${taskAssign.data.taskId}` });
      await pub.publish("agentverse:broadcast", JSON.stringify({
        type: "task_update",
        worldId: taskAssign.data.worldId,
        agentId: taskAssign.data.agentId,
        status: "accepted",
        detail: `Task accepted: ${taskAssign.data.taskId}`,
        ts: Date.now()
      }));
      return;
    }

    const event = eventSchema.safeParse(msg);
    if (event.success) {
      if (event.data.name === "snapshot_request") {
        send(ws, {
          type: "world_snapshot",
          worldId: ws.worldId || "lobby",
          ts: Date.now(),
          agents: brain.getSnapshots(ws.worldId || "lobby")
        });
        return;
      }
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...event.data, userId: ws.userId }));
      return;
    }

    if (chatSchema.safeParse(msg).success) {
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...msg, userId: ws.userId }));
    }
  });

  ws.on("close", () => clients.delete(ws));
});

setInterval(() => {
  const now = Date.now();
  brain.tick(now);

  for (const ws of clients) {
    if (!ws.worldId) continue;
    send(ws, {
      type: "world_update",
      worldId: ws.worldId,
      ts: now,
      agents: brain.getSnapshots(ws.worldId)
    });
  }

  // proximity greeting baseline
  const snaps = brain.getSnapshots("lobby");
  if (snaps.length >= 2 && Math.random() < 0.1) {
    const a = snaps[0];
    const b = snaps[1];
    pub.publish("agentverse:broadcast", JSON.stringify({
      type: "conversation_event",
      worldId: "lobby",
      from: a.id,
      to: b.id,
      message: `Hello ${b.displayName}, maintaining patrol route in lobby.`,
      ts: now
    }));
  }
}, 200);

server.listen(port, () => {
  console.log(JSON.stringify({ level: "info", msg: "agentverse-realtime started", port }));
});

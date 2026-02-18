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

for (const id of ["npc_alpha", "npc_beta", "npc_gamma", "npc_delta", "npc_sigma"]) {
  brain.upsertAgent({ id, worldId: "lobby", displayName: id.replace("npc_", "").toUpperCase() });
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
      // runtime auth upgrade via hello token
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
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...presence.data, type: "agent_state_update", id: ws.userId, displayName: ws.userId, state: "walking" }));
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
  brain.tick(Date.now());
  for (const ws of clients) {
    if (!ws.worldId) continue;
    send(ws, {
      type: "world_update",
      worldId: ws.worldId,
      ts: Date.now(),
      agents: brain.getSnapshots(ws.worldId)
    });
  }
}, 200);

server.listen(port, () => {
  console.log(JSON.stringify({ level: "info", msg: "agentverse-realtime started", port }));
});

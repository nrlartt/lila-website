import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import { createClient } from "redis";
import { verifyWsToken } from "./auth.js";
import { createBucket } from "./rateLimit.js";
import { helloSchema, heartbeatSchema, presenceSchema, chatSchema, eventSchema } from "./schema.js";

dotenv.config();
const port = Number(process.env.AGENTVERSE_WS_PORT || 8081);
const maxBytes = Number(process.env.WS_MAX_PAYLOAD_BYTES || 16384);
const secret = process.env.JWT_SECRET || "change_me";

const pub = createClient({ url: process.env.REDIS_URL });
const sub = createClient({ url: process.env.REDIS_URL });
await pub.connect();
await sub.connect();

const wss = new WebSocketServer({ port, maxPayload: maxBytes });
const clients = new Set<any>();

await sub.subscribe("agentverse:broadcast", (message) => {
  for (const ws of clients) {
    if (ws.readyState === ws.OPEN) ws.send(message);
  }
});

wss.on("connection", (ws) => {
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
      (ws as any).userId = user.sub;
      clearTimeout(timeout);
      ws.send(JSON.stringify({ type: "hello", ok: true, userId: user.sub }));
      return;
    }

    if (heartbeatSchema.safeParse(msg).success) {
      ws.send(JSON.stringify({ type: "heartbeat", ok: true, ts: Date.now() }));
      return;
    }

    if (presenceSchema.safeParse(msg).success || chatSchema.safeParse(msg).success || eventSchema.safeParse(msg).success) {
      await pub.publish("agentverse:broadcast", JSON.stringify({ ...msg, userId: (ws as any).userId }));
    }
  });

  ws.on("close", () => clients.delete(ws));
});

console.log(JSON.stringify({ level: "info", msg: "agentverse-realtime started", port }));

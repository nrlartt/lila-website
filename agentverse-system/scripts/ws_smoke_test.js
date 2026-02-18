#!/usr/bin/env node

const url = process.env.AGENTVERSE_WS_URL || "ws://localhost:8081";
const token = process.env.AGENTVERSE_WS_TOKEN || "guest";
const full = `${url}?token=${encodeURIComponent(token)}`;

console.log(`[WS_SMOKE] Connecting to ${full}`);
const ws = new WebSocket(full);

let gotAck = false;
const timeout = setTimeout(() => {
  console.error("[WS_SMOKE] FAIL: timeout waiting for hello ack");
  process.exit(1);
}, 5000);

ws.on("open", () => {
  ws.send(JSON.stringify({ type: "hello", wsToken: token }));
});

ws.on("message", (raw) => {
  const msg = JSON.parse(raw.toString());
  if (msg.type === "hello" && msg.ok) {
    gotAck = true;
    console.log("[WS_SMOKE] PASS: hello ack received", msg);
    clearTimeout(timeout);
    ws.close();
    process.exit(0);
  }
});

ws.on("error", (err) => {
  console.error("[WS_SMOKE] FAIL:", err.message);
  process.exit(1);
});

ws.on("close", (code, reason) => {
  if (!gotAck) {
    console.error(`[WS_SMOKE] FAIL: closed before ack code=${code} reason=${reason.toString()}`);
    process.exit(1);
  }
});

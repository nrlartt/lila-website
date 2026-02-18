#!/usr/bin/env node

const httpBase = process.env.AGENTVERSE_HTTP_BASE || "http://localhost";
const wsBase = process.env.AGENTVERSE_WS_URL || "ws://localhost/realtime";

async function main() {
  const guestUrl = `${httpBase}/agentverse-api/realtime/guest-token`;
  console.log(`[WS_SMOKE] Fetching guest token: ${guestUrl}`);
  const tokenResp = await fetch(guestUrl);
  if (!tokenResp.ok) {
    console.error(`[WS_SMOKE] FAIL: guest-token ${tokenResp.status}`);
    process.exit(1);
  }
  const tokenJson = await tokenResp.json();
  const wsToken = tokenJson.wsToken;

  const fullWs = `${wsBase}?token=${encodeURIComponent(wsToken)}`;
  console.log(`[WS_SMOKE] Connecting: ${fullWs}`);

  const ws = new WebSocket(fullWs);
  let ack = false;

  const timer = setTimeout(() => {
    if (!ack) {
      console.error("[WS_SMOKE] FAIL: timeout waiting for hello ack");
      process.exit(1);
    }
  }, 2000);

  ws.onopen = () => {
    ws.send(JSON.stringify({ type: "hello", wsToken }));
  };

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.type === "hello" && msg.ok) {
      ack = true;
      clearTimeout(timer);
      console.log("[WS_SMOKE] PASS", msg);
      ws.close();
      process.exit(0);
    }
  };

  ws.onerror = (err) => {
    console.error("[WS_SMOKE] FAIL: ws error", err?.message || err);
    process.exit(1);
  };
}

main().catch((err) => {
  console.error("[WS_SMOKE] FAIL:", err.message);
  process.exit(1);
});

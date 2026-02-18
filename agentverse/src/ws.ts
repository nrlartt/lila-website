type OnMessage = (m: any) => void;

export function connectWorld(wsUrl: string, wsToken: string, onMessage: OnMessage) {
  const ws = new WebSocket(wsUrl);
  const queue: any[] = [];

  ws.onopen = () => ws.send(JSON.stringify({ type: "hello", wsToken }));
  ws.onmessage = (ev) => {
    const payload = JSON.parse(ev.data);
    if (payload.type === "world_update" && Array.isArray(payload.agents)) {
      // split batched update for consumer simplicity
      for (const agent of payload.agents) onMessage({ type: "agent_state_update", ...agent });
      return;
    }
    onMessage(payload);
  };

  const flush = () => {
    if (ws.readyState !== WebSocket.OPEN || queue.length === 0) return;
    const batch = queue.splice(0, 20);
    ws.send(JSON.stringify({ type: "event", worldId: "lobby", name: "client_batch", payload: { batch } }));
  };

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "heartbeat", ts: Date.now() }));
    flush();
  }, 5000);

  return {
    raw: ws,
    send: (msg: any) => {
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg));
      else queue.push(msg);
    }
  };
}

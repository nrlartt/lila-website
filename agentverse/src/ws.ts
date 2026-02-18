export function connectWorld(wsUrl: string, wsToken: string, onMessage: (m: any) => void) {
  const ws = new WebSocket(wsUrl);
  ws.onopen = () => ws.send(JSON.stringify({ type: "hello", wsToken }));
  ws.onmessage = (ev) => onMessage(JSON.parse(ev.data));
  setInterval(() => { if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "heartbeat", ts: Date.now() })); }, 10000);
  return ws;
}

type OnMessage = (m: any) => void;
type OnStatus = (text: string) => void;

export function connectWorld(wsUrl: string, wsToken: string, onMessage: OnMessage, onStatus?: OnStatus) {
  let ws: WebSocket | null = null;
  let retryCount = 0;
  let closedByUser = false;
  const queue: any[] = [];

  const flush = () => {
    if (!ws || ws.readyState !== WebSocket.OPEN || queue.length === 0) return;
    while (queue.length > 0) ws.send(JSON.stringify(queue.shift()));
  };

  const connect = () => {
    const url = wsUrl.startsWith("ws") ? wsUrl : `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}${wsUrl}`;
    console.log("[AgentVerse WS] Connecting to", url);
    onStatus?.("Connecting realtime");
    ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("[AgentVerse WS] Connected");
      retryCount = 0;
      onStatus?.("Realtime connected");
      ws?.send(JSON.stringify({ type: "hello", wsToken: wsToken || "guest" }));
      flush();
    };

    ws.onmessage = (ev) => {
      const payload = JSON.parse(ev.data);
      if (payload.type === "world_update" && Array.isArray(payload.agents)) {
        for (const agent of payload.agents) onMessage({ type: "agent_state_update", ...agent });
        return;
      }
      onMessage(payload);
    };

    ws.onerror = () => {
      console.error("[AgentVerse WS] Socket error");
      onStatus?.("Realtime error");
    };

    ws.onclose = () => {
      if (closedByUser) return;
      const backoffMs = Math.min(30000, 1000 * Math.pow(2, retryCount));
      retryCount += 1;
      console.warn(`[AgentVerse WS] Disconnected. Retrying in ${backoffMs}ms`);
      onStatus?.(`Realtime disconnected, retry in ${Math.round(backoffMs / 1000)}s`);
      setTimeout(connect, backoffMs);
    };
  };

  connect();
  const heartbeat = setInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "heartbeat", ts: Date.now() }));
  }, 10000);

  return {
    send: (msg: any) => {
      if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg));
      else queue.push(msg);
    },
    reconnect: () => {
      console.log("[AgentVerse WS] Manual reconnect requested");
      if (ws && ws.readyState === WebSocket.OPEN) ws.close();
      retryCount = 0;
      connect();
    },
    close: () => {
      closedByUser = true;
      clearInterval(heartbeat);
      ws?.close();
    }
  };
}

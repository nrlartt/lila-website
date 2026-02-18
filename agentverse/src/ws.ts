type OnMessage = (m: any) => void;
type OnStatus = (text: string) => void;
type OnWsState = (state: "CONNECTING" | "CONNECTED" | "DISCONNECTED" | "RETRYING", detail: { url: string; closeCode?: number; closeReason?: string; error?: string }) => void;

export function connectWorld(wsUrl: string, wsToken: string, onMessage: OnMessage, onStatus?: OnStatus, onWsState?: OnWsState) {
  let ws: WebSocket | null = null;
  let retryCount = 0;
  let closedByUser = false;
  let lastError = "";
  let lastCloseCode = 0;
  let lastCloseReason = "";
  const queue: any[] = [];

  const url = wsUrl.startsWith("ws") ? wsUrl : `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}${wsUrl}`;

  const flush = () => {
    if (!ws || ws.readyState !== WebSocket.OPEN || queue.length === 0) return;
    while (queue.length > 0) ws.send(JSON.stringify(queue.shift()));
  };

  const connect = () => {
    console.log("[AgentVerse WS] Connecting", url);
    onStatus?.("Connecting realtime");
    onWsState?.("CONNECTING", { url, closeCode: lastCloseCode, closeReason: lastCloseReason, error: lastError });

    const tokenParam = wsToken ? `?token=${encodeURIComponent(wsToken)}` : "";
    ws = new WebSocket(`${url}${tokenParam}`);

    ws.onopen = () => {
      retryCount = 0;
      lastError = "";
      console.log("[AgentVerse WS] Connected");
      onStatus?.("Realtime connected");
      onWsState?.("CONNECTED", { url });
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
      lastError = "Socket error";
      console.error("[AgentVerse WS] Error");
    };

    ws.onclose = (ev) => {
      lastCloseCode = ev.code;
      lastCloseReason = ev.reason;
      onWsState?.("DISCONNECTED", { url, closeCode: ev.code, closeReason: ev.reason, error: lastError });
      if (closedByUser) return;
      const base = Math.min(30000, 1000 * Math.pow(2, retryCount));
      const jitter = Math.floor(base * (Math.random() * 0.3));
      const backoffMs = base + jitter;
      retryCount += 1;
      onStatus?.(`Realtime disconnected, retry in ${Math.round(backoffMs / 1000)}s`);
      onWsState?.("RETRYING", { url, closeCode: ev.code, closeReason: ev.reason, error: lastError });
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
      retryCount = 0;
      if (ws && ws.readyState === WebSocket.OPEN) ws.close();
      connect();
    },
    setToken: (token: string) => {
      wsToken = token;
    },
    close: () => {
      closedByUser = true;
      clearInterval(heartbeat);
      ws?.close();
    }
  };
}

type AgentRecord = { id: string; name?: string; state?: string; taskId?: string; statusText?: string; lastSeen?: string };

export function createUI(root: HTMLElement) {
  root.insertAdjacentHTML(
    "beforeend",
    `<div id="playOverlay" style="position:fixed;inset:0;z-index:30;background:rgba(2,6,23,.75);display:flex;align-items:center;justify-content:center;pointer-events:auto;">
      <button id="playBtn" style="padding:14px 20px;border:1px solid #334155;border-radius:10px;background:#0f172a;color:#e2e8f0;font-weight:700;cursor:pointer">Click to Play</button>
    </div>

    <div style="position:fixed;top:12px;left:12px;z-index:20;background:rgba(8,10,20,.86);padding:12px;border:1px solid #334155;border-radius:10px;max-width:360px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;pointer-events:auto">
      <div style="font-weight:700;letter-spacing:.08em">AGENTVERSE</div>
      <div id="status" style="margin-top:8px;font-size:12px;color:#94a3b8">Status: booting</div>
      <div id="wsBadge" style="margin-top:4px;font-size:12px;color:#facc15">WS: CONNECTING</div>
      <div id="wsMeta" style="margin-top:2px;font-size:11px;color:#93c5fd">URL: -</div>
      <div id="wsError" style="margin-top:2px;font-size:11px;color:#fda4af">Close: - | Error: -</div>
      <div id="compass" style="margin-top:2px;font-size:11px;color:#a7f3d0">Compass: N</div>
      <div id="load" style="margin-top:4px;font-size:12px;color:#93c5fd">Loading: 0%</div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <button id="login" style="padding:8px 12px;background:#fff;color:#000;border:none;border-radius:6px;cursor:pointer">Connect Wallet</button>
        <button id="reconnect" style="padding:8px 12px;background:#1d4ed8;color:#fff;border:none;border-radius:6px;cursor:pointer">Reconnect</button>
      </div>
      <label style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:12px;color:#cbd5e1">
        <input id="mouseLookToggle" type="checkbox" checked /> FPS Mouse Look (Pointer Lock)
      </label>
      <div style="margin-top:10px;font-size:12px">Active Agents</div>
      <ul id="agents" style="max-height:130px;overflow:auto;padding-left:18px"></ul>
    </div>

    <div id="interactionPanel" style="display:none;position:fixed;right:12px;top:12px;z-index:20;background:rgba(8,10,20,.9);padding:12px;border:1px solid #334155;border-radius:10px;width:360px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;pointer-events:auto">
      <div id="selectedAgent" style="font-weight:700">No agent selected</div>
      <div id="selectedState" style="margin-top:4px;font-size:12px;color:#94a3b8">State: -</div>
      <div id="selectedSeen" style="margin-top:2px;font-size:12px;color:#94a3b8">Last seen: -</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button id="tabChat" style="padding:6px 10px;border-radius:6px;border:1px solid #334155;background:#1e293b;color:#e2e8f0">Chat</button>
        <button id="tabTask" style="padding:6px 10px;border-radius:6px;border:1px solid #334155;background:#0f172a;color:#e2e8f0">Tasks</button>
        <button id="tabProfile" style="padding:6px 10px;border-radius:6px;border:1px solid #334155;background:#0f172a;color:#e2e8f0">Profile</button>
      </div>
      <div id="chatTab" style="margin-top:8px;display:block">
        <div id="chatLog" style="height:120px;overflow:auto;background:#020617;border:1px solid #1e293b;border-radius:6px;padding:6px;font-size:12px"></div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <input id="chatInput" placeholder="Say something..." style="flex:1;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
          <button id="chatSend" style="padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Send</button>
        </div>
      </div>
      <div id="taskTab" style="margin-top:8px;display:none">
        <select id="taskPreset" style="width:100%;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px">
          <option>Go to Portal</option>
          <option>Meet Agent X</option>
          <option>Patrol Plaza</option>
        </select>
        <input id="taskInput" placeholder="Optional custom task title" style="margin-top:8px;width:100%;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
        <button id="taskAssign" style="margin-top:8px;padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Assign</button>
      </div>
      <div id="profileTab" style="margin-top:8px;display:none;font-size:12px">
        <div id="profilePersonality" style="color:#cbd5e1">Personality: -</div>
        <div style="margin-top:6px;color:#93c5fd">Last 5 memories</div>
        <ul id="profileMemories" style="margin-top:4px;padding-left:16px;max-height:120px;overflow:auto"></ul>
      </div>
    </div>

    <div style="position:fixed;left:50%;bottom:10px;transform:translateX(-50%);z-index:15;background:rgba(8,10,20,.72);border:1px solid #334155;border-radius:999px;padding:6px 10px;color:#e2e8f0;font-size:12px;font-family:Inter,system-ui,sans-serif;pointer-events:none">
      [W/A/S/D] Move • [Shift] Sprint • [E] Interact • [Esc] Exit mouse lock
    </div>`
  );

  const agentMap = new Map<string, AgentRecord>();
  let selectedAgentId: string | null = null;

  const agentsList = document.getElementById("agents") as HTMLUListElement;
  const panel = document.getElementById("interactionPanel") as HTMLElement;

  const redraw = () => {
    agentsList.innerHTML = "";
    for (const a of agentMap.values()) {
      const li = document.createElement("li");
      li.style.cursor = "pointer";
      li.textContent = `${a.name || a.id} (${a.state || "idle"})`;
      li.onclick = () => selectAgent(a.id);
      agentsList.appendChild(li);
    }
  };

  const selectAgent = (id: string) => {
    selectedAgentId = id;
    const a = agentMap.get(id);
    if (!a) return;
    panel.style.display = "block";
    (document.getElementById("selectedAgent") as HTMLElement).textContent = a.name || a.id;
    (document.getElementById("selectedState") as HTMLElement).textContent = `State: ${a.state || "idle"}`;
    (document.getElementById("selectedSeen") as HTMLElement).textContent = `Last seen: ${a.lastSeen || "-"}`;
  };

  const showTab = (tab: "chat" | "task" | "profile") => {
    (document.getElementById("chatTab") as HTMLElement).style.display = tab === "chat" ? "block" : "none";
    (document.getElementById("taskTab") as HTMLElement).style.display = tab === "task" ? "block" : "none";
    (document.getElementById("profileTab") as HTMLElement).style.display = tab === "profile" ? "block" : "none";
  };
  (document.getElementById("tabChat") as HTMLButtonElement).onclick = () => showTab("chat");
  (document.getElementById("tabTask") as HTMLButtonElement).onclick = () => showTab("task");
  (document.getElementById("tabProfile") as HTMLButtonElement).onclick = () => showTab("profile");

  return {
    setStatus: (v: string) => ((document.getElementById("status") as HTMLElement).textContent = `Status: ${v}`),
    setWsState: (state: "CONNECTING" | "CONNECTED" | "DISCONNECTED" | "RETRYING", detail: { url: string; closeCode?: number; closeReason?: string; error?: string }) => {
      (document.getElementById("wsBadge") as HTMLElement).textContent = `WS: ${state}`;
      (document.getElementById("wsMeta") as HTMLElement).textContent = `URL: ${detail.url}`;
      (document.getElementById("wsError") as HTMLElement).textContent = `Close: ${detail.closeCode ?? "-"} ${detail.closeReason ?? ""} | Error: ${detail.error ?? "-"}`;
    },
    setLoadProgress: (p: number) => ((document.getElementById("load") as HTMLElement).textContent = `Loading: ${Math.round(p)}%`),
    setCompass: (label: string) => ((document.getElementById("compass") as HTMLElement).textContent = `Compass: ${label}`),
    onLogin: (cb: () => void) => ((document.getElementById("login") as HTMLButtonElement).onclick = cb),
    onReconnect: (cb: () => void) => ((document.getElementById("reconnect") as HTMLButtonElement).onclick = cb),
    onPlayClick: (cb: () => void) => ((document.getElementById("playBtn") as HTMLButtonElement).onclick = cb),
    onPointerLockToggle: (cb: (enabled: boolean) => void) => {
      const el = document.getElementById("mouseLookToggle") as HTMLInputElement;
      el.onchange = () => cb(el.checked);
    },
    setOverlayVisible: (visible: boolean) => ((document.getElementById("playOverlay") as HTMLElement).style.display = visible ? "flex" : "none"),
    upsertAgent: (record: AgentRecord) => {
      agentMap.set(record.id, { ...(agentMap.get(record.id) || {}), ...record });
      redraw();
      if (selectedAgentId === record.id) selectAgent(record.id);
    },
    openAgent: (id: string) => selectAgent(id),
    onChatSend: (cb: (agentId: string, text: string) => void) => {
      (document.getElementById("chatSend") as HTMLButtonElement).onclick = () => {
        if (!selectedAgentId) return;
        const i = document.getElementById("chatInput") as HTMLInputElement;
        const text = i.value.trim();
        if (!text) return;
        cb(selectedAgentId, text);
        i.value = "";
      };
    },
    onAssignTask: (cb: (agentId: string, title: string) => void) => {
      (document.getElementById("taskAssign") as HTMLButtonElement).onclick = () => {
        if (!selectedAgentId) return;
        const preset = (document.getElementById("taskPreset") as HTMLSelectElement).value;
        const i = document.getElementById("taskInput") as HTMLInputElement;
        const title = i.value.trim() || preset;
        cb(selectedAgentId, title);
        i.value = "";
      };
    },
    renderProfile: (payload: { personality: string; memories: Array<{ at: number; type: string; content: string }> }) => {
      (document.getElementById("profilePersonality") as HTMLElement).textContent = `Personality: ${payload.personality}`;
      const list = document.getElementById("profileMemories") as HTMLUListElement;
      list.innerHTML = "";
      for (const m of payload.memories || []) {
        const li = document.createElement("li");
        li.textContent = `${new Date(m.at).toLocaleTimeString()} • ${m.type}: ${m.content}`;
        list.appendChild(li);
      }
    },
    appendAgentChat: (from: string, text: string) => {
      const log = document.getElementById("chatLog") as HTMLDivElement;
      log.innerHTML += `<div><b>${from}:</b> ${text}</div>`;
      log.scrollTop = log.scrollHeight;
    },
    setNonceDebug: (endpoint: string, status: number) => {
      const msg = `Nonce request failed at ${endpoint} (HTTP ${status})`;
      (document.getElementById("status") as HTMLElement).textContent = `Status: ${msg}`;
    }
  };
}

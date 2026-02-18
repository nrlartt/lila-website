type AgentRecord = { id: string; name?: string; state?: string; taskId?: string; statusText?: string };

export function createUI(root: HTMLElement) {
  root.innerHTML = `
  <div style="position:fixed;top:12px;left:12px;z-index:50;background:rgba(8,10,20,.86);padding:12px;border:1px solid #334155;border-radius:10px;max-width:340px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif">
    <div style="font-weight:700;letter-spacing:.08em">AGENTVERSE</div>
    <div id="status" style="margin-top:8px;font-size:12px;color:#94a3b8">Status: disconnected</div>
    <button id="login" style="margin-top:10px;padding:8px 12px;background:#fff;color:#000;border:none;border-radius:6px;cursor:pointer">Connect Wallet</button>
    <div style="margin-top:10px;font-size:12px">Active Agents</div>
    <ul id="agents" style="max-height:130px;overflow:auto;padding-left:18px"></ul>
  </div>

  <div id="interactionPanel" style="display:none;position:fixed;right:12px;top:12px;z-index:55;background:rgba(8,10,20,.9);padding:12px;border:1px solid #334155;border-radius:10px;width:340px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif">
    <div id="selectedAgent" style="font-weight:700">No agent selected</div>
    <div id="selectedState" style="margin-top:4px;font-size:12px;color:#94a3b8">State: -</div>
    <div style="margin-top:8px;font-size:12px">Chat</div>
    <div id="chatLog" style="height:120px;overflow:auto;background:#020617;border:1px solid #1e293b;border-radius:6px;padding:6px;font-size:12px"></div>
    <div style="display:flex;gap:6px;margin-top:8px">
      <input id="chatInput" placeholder="Say something..." style="flex:1;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
      <button id="chatSend" style="padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Send</button>
    </div>
    <div style="margin-top:10px;font-size:12px">Assign Task</div>
    <input id="taskInput" placeholder="Task title" style="width:100%;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
    <button id="taskAssign" style="margin-top:8px;padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Assign</button>
  </div>

  <div style="position:fixed;left:50%;bottom:10px;transform:translateX(-50%);z-index:40;background:rgba(8,10,20,.72);border:1px solid #334155;border-radius:999px;padding:6px 10px;color:#e2e8f0;font-size:12px;font-family:Inter,system-ui,sans-serif">
    [W/A/S/D] Move • [E] Interact
  </div>`;

  const agentMap = new Map<string, AgentRecord>();
  let selectedAgentId: string | null = null;

  const redrawAgentList = () => {
    const list = document.getElementById("agents") as HTMLUListElement;
    list.innerHTML = "";
    for (const a of agentMap.values()) {
      const li = document.createElement("li");
      li.style.cursor = "pointer";
      li.textContent = `${a.name || a.id} (${a.state || "idle"})`;
      li.onclick = () => {
        selectedAgentId = a.id;
        (document.getElementById("interactionPanel") as HTMLElement).style.display = "block";
        (document.getElementById("selectedAgent") as HTMLElement).textContent = a.name || a.id;
        (document.getElementById("selectedState") as HTMLElement).textContent = `State: ${a.state || "idle"} | ${a.statusText || "-"}`;
      };
      list.appendChild(li);
    }
  };

  return {
    setStatus: (v: string) => ((document.getElementById("status") as HTMLElement).textContent = `Status: ${v}`),
    onLogin: (cb: () => void) => ((document.getElementById("login") as HTMLButtonElement).onclick = cb),
    upsertAgent: (record: AgentRecord) => {
      agentMap.set(record.id, { ...(agentMap.get(record.id) || {}), ...record });
      redrawAgentList();
      if (selectedAgentId === record.id) {
        (document.getElementById("selectedState") as HTMLElement).textContent = `State: ${record.state || "idle"} | ${record.statusText || "-"}`;
      }
    },
    onChatSend: (cb: (agentId: string, text: string) => void) => {
      (document.getElementById("chatSend") as HTMLButtonElement).onclick = () => {
        if (!selectedAgentId) return;
        const i = document.getElementById("chatInput") as HTMLInputElement;
        const text = i.value.trim();
        if (!text) return;
        cb(selectedAgentId, text);
        const log = document.getElementById("chatLog") as HTMLDivElement;
        log.innerHTML += `<div><b>You:</b> ${text}</div>`;
        log.scrollTop = log.scrollHeight;
        i.value = "";
      };
    },
    onAssignTask: (cb: (agentId: string, title: string) => void) => {
      (document.getElementById("taskAssign") as HTMLButtonElement).onclick = () => {
        if (!selectedAgentId) return;
        const i = document.getElementById("taskInput") as HTMLInputElement;
        const title = i.value.trim();
        if (!title) return;
        cb(selectedAgentId, title);
        i.value = "";
      };
    },
    appendAgentChat: (from: string, text: string) => {
      const log = document.getElementById("chatLog") as HTMLDivElement;
      log.innerHTML += `<div><b>${from}:</b> ${text}</div>`;
      log.scrollTop = log.scrollHeight;
    }
  };
}

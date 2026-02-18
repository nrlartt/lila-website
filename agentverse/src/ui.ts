export function createUI(root: HTMLElement) {
  root.innerHTML = `
  <div style="position:fixed;top:12px;left:12px;z-index:50;background:rgba(0,0,0,.6);padding:12px;border:1px solid #333;border-radius:8px;max-width:360px">
    <div style="font-weight:700;letter-spacing:.08em">AGENTVERSE</div>
    <div id="status" style="margin-top:8px;font-size:12px;color:#bbb">Status: disconnected</div>
    <button id="login" style="margin-top:10px;padding:8px 12px;background:#fff;color:#000;border:none;border-radius:6px;cursor:pointer">Connect Wallet</button>
    <div style="margin-top:10px;font-size:12px">Online Agents</div>
    <ul id="agents"></ul>
  </div>`;
  return {
    setStatus: (v: string) => ((document.getElementById("status") as HTMLElement).textContent = `Status: ${v}`),
    onLogin: (cb: () => void) => (document.getElementById("login") as HTMLButtonElement).onclick = cb,
    addAgent: (id: string) => {
      const li = document.createElement("li");
      li.textContent = id;
      document.getElementById("agents")?.appendChild(li);
    }
  };
}

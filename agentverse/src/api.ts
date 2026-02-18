const rawApiBase = (typeof window !== "undefined" && (window as any).__API_BASE__) || (import.meta.env.VITE_API_BASE ?? "/agentverse-api");
const API_BASE = String(rawApiBase).startsWith("http") || String(rawApiBase).startsWith("/") ? String(rawApiBase) : `/${String(rawApiBase)}`;

export async function getNonce(address: string, chainId: number) {
  const endpoint = `${API_BASE}/wallet/siwe/nonce`;
  const method = "POST";
  const r = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, chainId })
  });
  if (!r.ok) {
    const err: any = new Error("Failed to request nonce");
    err.endpoint = endpoint;
    err.status = r.status;
    err.method = method;
    throw err;
  }
  return r.json();
}

export async function verifySiwe(message: string, signature: string) {
  const endpoint = `${API_BASE}/wallet/siwe/verify`;
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, signature })
  });
  if (!r.ok) throw new Error(`Failed to verify SIWE (${r.status})`);
  return r.json();
}

function authHeaders(token: string) {
  return { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
}

export async function getGuestToken() {
  const endpoint = `${API_BASE}/realtime/guest-token`;
  const r = await fetch(endpoint);
  if (!r.ok) throw new Error(`Guest token failed: GET ${endpoint} -> ${r.status}`);
  return r.json();
}

export async function getSessionToken(accessToken: string) {
  const endpoint = `${API_BASE}/realtime/session-token`;
  const r = await fetch(endpoint, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!r.ok) throw new Error(`Session token failed: GET ${endpoint} -> ${r.status}`);
  return r.json();
}

export async function chatAgent(agentId: string, message: string, userId?: string) {
  const endpoint = `${API_BASE}/agents/${agentId}/chat`;
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, userId })
  });
  if (!r.ok) throw new Error(`Agent chat failed: POST ${endpoint} -> ${r.status}`);
  return r.json();
}

export async function getKioskTasks() {
  const endpoint = `${API_BASE}/tasks/kiosk`;
  const r = await fetch(endpoint);
  if (!r.ok) throw new Error(`Kiosk task fetch failed (${r.status})`);
  return r.json();
}

export async function createTask(accessToken: string, payload: {
  assignedTo?: string;
  title: string;
  description?: string;
  reward?: number;
  rewardToken?: string;
  location: { worldId: string; x: number; y: number; z: number };
  requiredCapabilities?: string[];
}) {
  const r = await fetch(`${API_BASE}/tasks/create`, {
    method: "POST",
    headers: authHeaders(accessToken),
    body: JSON.stringify(payload)
  });
  if (!r.ok) throw new Error("Task creation failed");
  return r.json();
}

export async function getAgentMemories(accessToken: string, agentId: string) {
  const r = await fetch(`${API_BASE}/memories/${agentId}`, {
    method: "GET",
    headers: authHeaders(accessToken)
  });
  if (!r.ok) throw new Error("Failed to load memories");
  return r.json();
}

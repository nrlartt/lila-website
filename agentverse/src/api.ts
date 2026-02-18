const API_BASE = (window as any).__API_BASE__ || (import.meta.env.VITE_API_BASE ?? "/agentverse-api");

export async function getNonce(address: string, chainId: number) {
  const endpoint = `${API_BASE}/wallet/siwe/nonce`;
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, chainId })
  });
  if (!r.ok) {
    const err: any = new Error("Failed to request nonce");
    err.endpoint = endpoint;
    err.status = r.status;
    throw err;
  }
  return r.json();
}

export async function verifySiwe(message: string, signature: string) {
  const r = await fetch(`${API_BASE}/wallet/siwe/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, signature })
  });
  if (!r.ok) throw new Error("Failed to verify SIWE");
  return r.json();
}

function authHeaders(token: string) {
  return { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
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

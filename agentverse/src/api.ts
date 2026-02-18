const API_BASE = (window as any).__API_BASE__ || (import.meta.env.VITE_API_BASE ?? "/agentverse-api");

export async function getNonce(address: string, chainId: number) {
  const r = await fetch(`${API_BASE}/wallet/siwe/nonce`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address, chainId }) });
  if (!r.ok) throw new Error("Failed to request nonce");
  return r.json();
}

export async function verifySiwe(message: string, signature: string) {
  const r = await fetch(`${API_BASE}/wallet/siwe/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, signature }) });
  if (!r.ok) throw new Error("Failed to verify SIWE");
  return r.json();
}

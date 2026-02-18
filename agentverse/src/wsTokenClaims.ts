export function validateWsTokenClaims(payload: any) {
  if (!payload || payload.typ !== "ws") return false;
  if (!payload.worldId) return false;
  if (!payload.userId && !payload.guestId && !payload.sub) return false;
  if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return false;
  return true;
}

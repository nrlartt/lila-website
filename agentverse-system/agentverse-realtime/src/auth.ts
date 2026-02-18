import jwt from "jsonwebtoken";

export type WsTokenClaims = {
  sub: string;
  worldId: string;
  userId?: string;
  guestId?: string;
};

export function verifyWsToken(token: string, secret: string): WsTokenClaims | null {
  try {
    const payload = jwt.verify(token, secret) as any;
    if (payload.typ !== "ws") return null;
    if (!payload.worldId) return null;
    if (!payload.userId && !payload.guestId && !payload.sub) return null;
    return {
      sub: payload.sub,
      worldId: payload.worldId,
      userId: payload.userId,
      guestId: payload.guestId
    };
  } catch {
    return null;
  }
}

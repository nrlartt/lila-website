import jwt from "jsonwebtoken";

export function verifyWsToken(token: string, secret: string): { sub: string } | null {
  try {
    const payload = jwt.verify(token, secret) as { typ: string; sub: string };
    if (payload.typ !== "ws") return null;
    return { sub: payload.sub };
  } catch {
    return null;
  }
}

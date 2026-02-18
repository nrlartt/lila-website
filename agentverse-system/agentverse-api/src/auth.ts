import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "./config.js";

export type AuthRequest = Request & { userId?: string };

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.status(401).json({ error: "Missing bearer token" });
  try {
    const token = header.slice(7);
    const payload = jwt.verify(token, config.jwtSecret) as { sub: string; typ: string };
    if (payload.typ !== "api") return res.status(401).json({ error: "Invalid token type" });
    req.userId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

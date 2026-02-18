import { Router } from "express";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { config } from "../config.js";
import { requireAuth, type AuthRequest } from "../auth.js";

const router = Router();

router.get("/guest-token", (_req, res) => {
  const guestId = `guest_${randomUUID().slice(0, 12)}`;
  const wsToken = jwt.sign(
    { sub: guestId, typ: "ws", guestId, worldId: "lobby" },
    config.jwtSecret,
    { expiresIn: config.wsTokenTtlSeconds }
  );
  res.json({ success: true, wsToken, expiresIn: config.wsTokenTtlSeconds, mode: "guest" });
});

router.get("/session-token", requireAuth, (req: AuthRequest, res) => {
  const userId = req.userId!;
  const wsToken = jwt.sign(
    { sub: userId, typ: "ws", userId, worldId: "lobby" },
    config.jwtSecret,
    { expiresIn: config.wsTokenTtlSeconds }
  );
  res.json({ success: true, wsToken, expiresIn: config.wsTokenTtlSeconds, mode: "session" });
});

export default router;

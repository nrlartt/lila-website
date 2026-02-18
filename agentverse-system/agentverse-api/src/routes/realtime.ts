import { Router } from "express";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { config } from "../config.js";
import { requireAuth, type AuthRequest } from "../auth.js";

const router = Router();

function issueGuest(worldId = "lobby") {
  const guestId = `guest_${randomUUID().slice(0, 12)}`;
  const wsToken = jwt.sign(
    { sub: guestId, typ: "ws", guestId, worldId },
    config.jwtSecret,
    { expiresIn: config.wsTokenTtlSeconds }
  );
  return { wsToken, worldId, expiresIn: config.wsTokenTtlSeconds, mode: "guest", guestId };
}

router.get("/guest-token", (req, res) => {
  const requestId = randomUUID().slice(0, 8);
  const issued = issueGuest("lobby");
  console.log(JSON.stringify({ level: "info", msg: "guest-token issued", requestId, guestId: issued.guestId, worldId: issued.worldId }));
  res.json({ success: true, requestId, wsToken: issued.wsToken, worldId: issued.worldId, expiresIn: issued.expiresIn });
});

router.get("/session-token", requireAuth, (req: AuthRequest, res) => {
  const userId = req.userId!;
  const worldId = "lobby";
  const wsToken = jwt.sign(
    { sub: userId, typ: "ws", userId, worldId },
    config.jwtSecret,
    { expiresIn: config.wsTokenTtlSeconds }
  );
  res.json({ success: true, wsToken, worldId, expiresIn: config.wsTokenTtlSeconds, mode: "session" });
});

router.get("/routes", (_req, res) => {
  res.json({
    success: true,
    routes: [
      "GET /realtime/guest-token",
      "GET /realtime/session-token",
      "GET /realtime/routes",
      "POST /wallet/siwe/nonce",
      "POST /wallet/siwe/verify"
    ]
  });
});

export default router;

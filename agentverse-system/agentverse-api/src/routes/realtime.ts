import { Router } from "express";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { config } from "../config.js";

const router = Router();

router.get("/guest-token", (_req, res) => {
  const sub = `guest_${randomUUID().slice(0, 12)}`;
  const wsToken = jwt.sign({ sub, typ: "ws", guest: true }, config.jwtSecret, {
    expiresIn: config.wsTokenTtlSeconds
  });
  res.json({ success: true, wsToken, expiresIn: config.wsTokenTtlSeconds, mode: "guest" });
});

export default router;

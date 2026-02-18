import { Router } from "express";
import { z } from "zod";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import { SiweMessage } from "siwe";
import { config } from "../config.js";
import { pool } from "../db.js";

const router = Router();

router.post("/siwe/nonce", async (req, res) => {
  const parsed = z.object({ address: z.string().min(42), chainId: z.number() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid request body" });
  if (parsed.data.chainId !== config.chainId) return res.status(400).json({ error: "Invalid chainId" });

  const nonce = randomUUID().replace(/-/g, "");
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  await pool.query(
    `INSERT INTO agentverse_nonces (nonce,address,domain,chain_id,expires_at) VALUES ($1,$2,$3,$4,$5)`,
    [nonce, parsed.data.address.toLowerCase(), config.domain, config.chainId, expiresAt]
  );

  res.json({ nonce, domain: config.domain, chainId: config.chainId, uri: `https://${config.domain}/agentverse` });
});

router.post("/siwe/verify", async (req, res) => {
  const parsed = z.object({ message: z.string(), signature: z.string() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid request body" });

  const siwe = new SiweMessage(parsed.data.message);
  const verified = await siwe.verify({ signature: parsed.data.signature }).catch(() => null);
  if (!verified?.success) return res.status(401).json({ error: "Invalid SIWE signature" });
  if (siwe.domain !== config.domain) return res.status(401).json({ error: "Invalid SIWE domain" });
  if (Number(siwe.chainId) !== config.chainId) return res.status(401).json({ error: "Invalid SIWE chainId" });

  const nonceResult = await pool.query(
    `SELECT id, consumed, expires_at FROM agentverse_nonces WHERE nonce=$1 AND address=$2`,
    [siwe.nonce, siwe.address.toLowerCase()]
  );
  if (!nonceResult.rowCount) return res.status(401).json({ error: "Nonce not found" });
  const nonce = nonceResult.rows[0];
  if (nonce.consumed) return res.status(401).json({ error: "Nonce already used" });
  if (new Date(nonce.expires_at).getTime() < Date.now()) return res.status(401).json({ error: "Nonce expired" });

  await pool.query(`UPDATE agentverse_nonces SET consumed=true WHERE id=$1`, [nonce.id]);

  const userRes = await pool.query(`INSERT INTO agentverse_users DEFAULT VALUES RETURNING id`);
  const userId = userRes.rows[0].id;
  await pool.query(
    `INSERT INTO agentverse_wallets (user_id,address,chain_id,is_primary) VALUES ($1,$2,$3,true)
     ON CONFLICT(address,chain_id) DO NOTHING`,
    [userId, siwe.address.toLowerCase(), config.chainId]
  );

  const apiJti = randomUUID();
  const wsJti = randomUUID();
  const accessToken = jwt.sign({ sub: userId, typ: "api", jti: apiJti }, config.jwtSecret, { expiresIn: config.jwtTtlSeconds });
  const wsToken = jwt.sign({ sub: userId, typ: "ws", jti: wsJti }, config.jwtSecret, { expiresIn: config.wsTokenTtlSeconds });

  await pool.query(
    `INSERT INTO agentverse_sessions (user_id,api_jti,ws_jti,api_expires_at,ws_expires_at)
     VALUES ($1,$2,$3,NOW()+($4||' seconds')::interval,NOW()+($5||' seconds')::interval)`,
    [userId, apiJti, wsJti, config.jwtTtlSeconds, config.wsTokenTtlSeconds]
  );

  res.json({ accessToken, wsToken, expiresIn: config.jwtTtlSeconds });
});

export default router;

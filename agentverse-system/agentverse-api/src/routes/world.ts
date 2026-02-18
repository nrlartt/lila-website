import { Router } from "express";
import { requireAuth } from "../auth.js";
import { pool } from "../db.js";

const router = Router();

router.get("/state", requireAuth, async (_req, res) => {
  const rows = await pool.query(`SELECT world_id, user_id, agent_id, x, y, z, updated_at FROM agentverse_presence ORDER BY updated_at DESC LIMIT 200`);
  res.json({ success: true, presence: rows.rows });
});

export default router;

import { Router } from "express";
import { z } from "zod";
import { requireAuth, type AuthRequest } from "../auth.js";
import { pool } from "../db.js";

const router = Router();

router.post("/register", requireAuth, async (req: AuthRequest, res) => {
  const parsed = z.object({ externalAgentId: z.string().min(1), displayName: z.string().min(1) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid request body" });

  const insert = await pool.query(
    `INSERT INTO agentverse_agents (user_id,external_agent_id,display_name,status) VALUES ($1,$2,$3,'registered')
     ON CONFLICT (external_agent_id) DO UPDATE SET updated_at=NOW() RETURNING id, external_agent_id, display_name, status`,
    [req.userId, parsed.data.externalAgentId, parsed.data.displayName]
  );

  res.json({ success: true, agent: insert.rows[0] });
});

router.post("/dispatch", requireAuth, async (req: AuthRequest, res) => {
  const parsed = z.object({ agentId: z.string().uuid(), worldId: z.string().default("lobby") }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid request body" });

  const update = await pool.query(
    `UPDATE agentverse_agents SET world_id=$1, status='active', updated_at=NOW() WHERE id=$2 RETURNING id, status, world_id`,
    [parsed.data.worldId, parsed.data.agentId]
  );
  if (!update.rowCount) return res.status(404).json({ error: "Agent not found" });

  res.json({ success: true, dispatch: update.rows[0] });
});

router.get("/status/:id", requireAuth, async (req: AuthRequest, res) => {
  const id = req.params.id;
  const q = await pool.query(`SELECT id, external_agent_id, display_name, status, world_id, updated_at FROM agentverse_agents WHERE id=$1`, [id]);
  if (!q.rowCount) return res.status(404).json({ error: "Agent not found" });
  res.json({ success: true, agent: q.rows[0] });
});

export default router;

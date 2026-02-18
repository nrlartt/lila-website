import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../auth.js";
import { pool } from "../db.js";

const router = Router();

router.get("/metrics", requireAuth, async (_req, res) => {
  const [agents, tasks, memories, presence] = await Promise.all([
    pool.query(`SELECT COUNT(*)::int AS count FROM agentverse_agents`),
    pool.query(`SELECT COUNT(*)::int AS count FROM agentverse_tasks WHERE status IN ('pending','accepted','in_progress')`),
    pool.query(`SELECT COUNT(*)::int AS count FROM agentverse_memories`),
    pool.query(`SELECT COUNT(*)::int AS count FROM agentverse_presence WHERE updated_at > NOW() - INTERVAL '2 minutes'`)
  ]);

  res.json({
    success: true,
    metrics: {
      agentsOnlineApprox: presence.rows[0].count,
      agentsTotal: agents.rows[0].count,
      openTasks: tasks.rows[0].count,
      memoriesTotal: memories.rows[0].count
    }
  });
});

router.post("/profiles/:agentId", requireAuth, async (req, res) => {
  const parsed = z.object({ personality: z.record(z.any()), capabilities: z.array(z.string()) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid profile payload" });

  const q = await pool.query(
    `INSERT INTO agentverse_agent_profiles (agent_id, personality, capabilities, updated_at)
     VALUES ($1,$2::jsonb,$3::jsonb,NOW())
     ON CONFLICT (agent_id)
     DO UPDATE SET personality=EXCLUDED.personality, capabilities=EXCLUDED.capabilities, updated_at=NOW()
     RETURNING agent_id, personality, capabilities, updated_at`,
    [req.params.agentId, JSON.stringify(parsed.data.personality), JSON.stringify(parsed.data.capabilities)]
  );

  res.json({ success: true, profile: q.rows[0] });
});

export default router;

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
  const parsed = z.object({
    agentId: z.string().uuid(),
    worldId: z.string().default("lobby"),
    personality: z.record(z.any()).optional(),
    taskPreset: z.object({ title: z.string().min(2), requiredCapabilities: z.array(z.string()).default([]) }).optional()
  }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid request body" });

  const update = await pool.query(
    `UPDATE agentverse_agents SET world_id=$1, status='active', updated_at=NOW() WHERE id=$2 RETURNING id, status, world_id`,
    [parsed.data.worldId, parsed.data.agentId]
  );
  if (!update.rowCount) return res.status(404).json({ error: "Agent not found" });

  if (parsed.data.personality) {
    await pool.query(
      `INSERT INTO agentverse_agent_profiles (agent_id, personality, updated_at)
       VALUES ($1,$2::jsonb,NOW())
       ON CONFLICT (agent_id) DO UPDATE SET personality=EXCLUDED.personality, updated_at=NOW()`,
      [parsed.data.agentId, JSON.stringify(parsed.data.personality)]
    );
  }

  if (parsed.data.taskPreset) {
    await pool.query(
      `INSERT INTO agentverse_tasks (assigned_to, created_by_user, title, description, status, location, required_capabilities)
       VALUES ($1,$2,$3,$4,'accepted',$5::jsonb,$6::jsonb)`,
      [
        parsed.data.agentId,
        req.userId,
        parsed.data.taskPreset.title,
        "Created from dispatch preset",
        JSON.stringify({ worldId: parsed.data.worldId, x: 0, y: 1.6, z: 0 }),
        JSON.stringify(parsed.data.taskPreset.requiredCapabilities)
      ]
    );
  }

  res.json({ success: true, dispatch: update.rows[0] });
});

router.get("/status/:id", requireAuth, async (req: AuthRequest, res) => {
  const id = req.params.id;
  const q = await pool.query(`SELECT id, external_agent_id, display_name, status, world_id, updated_at FROM agentverse_agents WHERE id=$1`, [id]);
  if (!q.rowCount) return res.status(404).json({ error: "Agent not found" });
  res.json({ success: true, agent: q.rows[0] });
});

router.post("/:id/chat", async (req, res) => {
  const parsed = z.object({ message: z.string().min(1).max(500), userId: z.string().optional() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid chat payload" });

  const agentQ = await pool.query(`SELECT id, display_name, status, world_id FROM agentverse_agents WHERE id=$1 OR external_agent_id=$1`, [req.params.id]);
  if (!agentQ.rowCount) return res.status(404).json({ error: "Agent not found" });
  const agent = agentQ.rows[0];

  const userId = parsed.data.userId || "guest";
  const reply = parsed.data.message.toLowerCase().includes("portal")
    ? `${agent.display_name}: I can guide you to the Portal Gate via Town Center.`
    : parsed.data.message.toLowerCase().includes("patrol")
      ? `${agent.display_name}: Patrol task accepted. Moving to plaza loop.`
      : `${agent.display_name}: Acknowledged. I stored this message in short-term memory.`;

  const participants = JSON.stringify([userId, agent.id]);
  const lastMessage = JSON.stringify({ from: userId, to: agent.id, text: parsed.data.message, reply, ts: Date.now() });

  await pool.query(
    `INSERT INTO agentverse_conversations (world_id, participants, state, last_message, updated_at)
     VALUES ($1,$2::jsonb,$3::jsonb,$4::jsonb,NOW())`,
    [agent.world_id || "lobby", participants, JSON.stringify({ phase: "active" }), lastMessage]
  );

  res.json({ success: true, reply, messageId: `msg_${Date.now()}` });
});

export default router;

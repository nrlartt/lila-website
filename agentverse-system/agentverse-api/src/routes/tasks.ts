import { Router } from "express";
import { z } from "zod";
import { requireAuth, type AuthRequest } from "../auth.js";
import { pool } from "../db.js";

const router = Router();

const createTaskSchema = z.object({
  assignedTo: z.string().uuid().optional(),
  title: z.string().min(3).max(120),
  description: z.string().max(2000).default(""),
  reward: z.number().nonnegative().default(0),
  rewardToken: z.string().min(1).max(16).default("AGXP"),
  location: z.object({ worldId: z.string(), x: z.number(), y: z.number(), z: z.number() }),
  requiredCapabilities: z.array(z.string()).default([])
});

router.post("/create", requireAuth, async (req: AuthRequest, res) => {
  const parsed = createTaskSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid task payload" });

  const q = await pool.query(
    `INSERT INTO agentverse_tasks (assigned_to,created_by_user,title,description,reward,reward_token,location,required_capabilities)
     VALUES ($1,$2,$3,$4,$5,$6,$7::jsonb,$8::jsonb)
     RETURNING id,assigned_to,status,title,reward,reward_token,location,required_capabilities,created_at`,
    [
      parsed.data.assignedTo ?? null,
      req.userId,
      parsed.data.title,
      parsed.data.description,
      parsed.data.reward,
      parsed.data.rewardToken,
      JSON.stringify(parsed.data.location),
      JSON.stringify(parsed.data.requiredCapabilities)
    ]
  );

  res.json({ success: true, task: q.rows[0] });
});

router.post("/:id/assign", requireAuth, async (req: AuthRequest, res) => {
  const parsed = z.object({ assignedTo: z.string().uuid() }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid assignment payload" });

  const q = await pool.query(
    `UPDATE agentverse_tasks
      SET assigned_to=$1, status='accepted', updated_at=NOW()
      WHERE id=$2
      RETURNING id,status,assigned_to,updated_at`,
    [parsed.data.assignedTo, req.params.id]
  );

  if (!q.rowCount) return res.status(404).json({ error: "Task not found" });
  res.json({ success: true, task: q.rows[0] });
});

router.get("/list", async (_req, res) => {
  const q = await pool.query(
    `SELECT id,assigned_to,title,status,reward,reward_token,location,required_capabilities,updated_at
       FROM agentverse_tasks
      ORDER BY updated_at DESC
      LIMIT 200`
  );
  res.json({ success: true, tasks: q.rows });
});

router.get("/kiosk", async (_req, res) => {
  res.json({
    success: true,
    tasks: [
      { id: "kiosk_portal", title: "Go to Portal", description: "Inspect Portal Gate resonance.", zone: "Town Center", rewardCredits: 25, difficulty: "easy", estimatedTime: "3m" },
      { id: "kiosk_meet", title: "Meet Agent X", description: "Coordinate with a research agent.", zone: "Research District", rewardCredits: 35, difficulty: "medium", estimatedTime: "5m" },
      { id: "kiosk_patrol", title: "Patrol Plaza", description: "Run one full patrol loop.", zone: "Town Center", rewardCredits: 20, difficulty: "easy", estimatedTime: "4m" }
    ]
  });
});

export default router;

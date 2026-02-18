import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../auth.js";
import { pool } from "../db.js";

const router = Router();

router.get("/:agentId", requireAuth, async (req, res) => {
  const agentId = req.params.agentId;
  const q = await pool.query(
    `SELECT id,agent_id,type,content,importance_score,metadata,timestamp
       FROM agentverse_memories
      WHERE agent_id=$1
      ORDER BY importance_score DESC, timestamp DESC
      LIMIT 50`,
    [agentId]
  );
  res.json({ success: true, memories: q.rows });
});

router.post("/sync", requireAuth, async (req, res) => {
  const parsed = z.object({
    entries: z.array(
      z.object({
        agentId: z.string().uuid(),
        type: z.enum(["interaction", "task", "observation"]),
        content: z.string().min(1),
        importanceScore: z.number().min(0).max(1).default(0.5),
        metadata: z.record(z.any()).default({})
      })
    ).min(1).max(100)
  }).safeParse(req.body);

  if (!parsed.success) return res.status(400).json({ error: "Invalid memory payload" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    for (const e of parsed.data.entries) {
      await client.query(
        `INSERT INTO agentverse_memories (agent_id,type,content,importance_score,metadata)
         VALUES ($1,$2,$3,$4,$5::jsonb)`,
        [e.agentId, e.type, e.content, e.importanceScore, JSON.stringify(e.metadata)]
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    return res.status(500).json({ error: "Failed to sync memories" });
  } finally {
    client.release();
  }

  res.json({ success: true, inserted: parsed.data.entries.length });
});

export default router;

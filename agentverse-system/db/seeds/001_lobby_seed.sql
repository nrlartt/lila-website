-- AgentVerse lobby seed (non-breaking)
-- Inserts lobby world + 5 default agents if missing.

INSERT INTO agentverse_world_instances (world_id, status)
VALUES ('lobby', 'online')
ON CONFLICT (world_id) DO NOTHING;

INSERT INTO agentverse_agents (external_agent_id, display_name, status, world_id)
VALUES
  ('npc_alpha', 'ALPHA', 'active', 'lobby'),
  ('npc_beta', 'BETA', 'active', 'lobby'),
  ('npc_gamma', 'GAMMA', 'active', 'lobby'),
  ('npc_delta', 'DELTA', 'active', 'lobby'),
  ('npc_sigma', 'SIGMA', 'active', 'lobby')
ON CONFLICT (external_agent_id)
DO UPDATE SET status='active', world_id='lobby', updated_at=NOW();

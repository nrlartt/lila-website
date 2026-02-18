-- AGENTVERSE Advanced Expansion (non-breaking)
-- Adds memory/task/conversation/group/world-event/profile systems

CREATE TABLE IF NOT EXISTS agentverse_agent_profiles (
  agent_id UUID PRIMARY KEY REFERENCES agentverse_agents(id) ON DELETE CASCADE,
  identity JSONB NOT NULL DEFAULT '{}'::jsonb,
  personality JSONB NOT NULL DEFAULT '{}'::jsonb,
  capabilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  state_machine JSONB NOT NULL DEFAULT '{"state":"idle"}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agentverse_memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES agentverse_agents(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('interaction','task','observation')),
  content TEXT NOT NULL,
  importance_score DOUBLE PRECISION NOT NULL DEFAULT 0.5,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_agentverse_memories_agent_time ON agentverse_memories(agent_id, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_agentverse_memories_importance ON agentverse_memories(agent_id, importance_score DESC);

CREATE TABLE IF NOT EXISTS agentverse_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assigned_to UUID NULL REFERENCES agentverse_agents(id) ON DELETE SET NULL,
  created_by_user UUID NULL REFERENCES agentverse_users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','accepted','in_progress','completed','failed','cancelled')),
  reward NUMERIC(20,8) NOT NULL DEFAULT 0,
  reward_token TEXT NOT NULL DEFAULT 'AGXP',
  location JSONB NOT NULL DEFAULT '{"worldId":"lobby","x":0,"y":1.6,"z":0}'::jsonb,
  required_capabilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  progress JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_agentverse_tasks_status ON agentverse_tasks(status, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_agentverse_tasks_assigned_to ON agentverse_tasks(assigned_to, updated_at DESC);

CREATE TABLE IF NOT EXISTS agentverse_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id TEXT NOT NULL,
  participants JSONB NOT NULL DEFAULT '[]'::jsonb,
  state JSONB NOT NULL DEFAULT '{"phase":"active"}'::jsonb,
  last_message JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_agentverse_conversations_world ON agentverse_conversations(world_id, updated_at DESC);

CREATE TABLE IF NOT EXISTS agentverse_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id TEXT NOT NULL,
  name TEXT NOT NULL,
  leader_agent_id UUID NULL REFERENCES agentverse_agents(id) ON DELETE SET NULL,
  members JSONB NOT NULL DEFAULT '[]'::jsonb,
  purpose TEXT NOT NULL DEFAULT 'temporary',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agentverse_world_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_agentverse_world_events_world ON agentverse_world_events(world_id, created_at DESC);

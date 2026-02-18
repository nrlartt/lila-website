CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE agentverse_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE agentverse_wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES agentverse_users(id) ON DELETE CASCADE,
  address TEXT NOT NULL,
  chain_id INT NOT NULL,
  is_primary BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(address, chain_id)
);
CREATE INDEX idx_agentverse_wallets_user_id ON agentverse_wallets(user_id);

CREATE TABLE agentverse_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NULL REFERENCES agentverse_users(id) ON DELETE SET NULL,
  external_agent_id TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'registered',
  world_id TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE agentverse_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES agentverse_users(id) ON DELETE CASCADE,
  api_jti TEXT NOT NULL UNIQUE,
  ws_jti TEXT NOT NULL UNIQUE,
  api_expires_at TIMESTAMPTZ NOT NULL,
  ws_expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE agentverse_world_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'online',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE agentverse_presence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id TEXT NOT NULL,
  user_id UUID NULL REFERENCES agentverse_users(id) ON DELETE CASCADE,
  agent_id UUID NULL REFERENCES agentverse_agents(id) ON DELETE CASCADE,
  x DOUBLE PRECISION NOT NULL DEFAULT 0,
  y DOUBLE PRECISION NOT NULL DEFAULT 1.6,
  z DOUBLE PRECISION NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(world_id, user_id, agent_id)
);
CREATE INDEX idx_agentverse_presence_world_id ON agentverse_presence(world_id);

CREATE TABLE agentverse_nonces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nonce TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  domain TEXT NOT NULL,
  chain_id INT NOT NULL,
  consumed BOOLEAN NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_agentverse_nonces_address_nonce ON agentverse_nonces(address, nonce);

CREATE TABLE agentverse_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NULL REFERENCES agentverse_users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  severity TEXT NOT NULL DEFAULT 'info',
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  ip TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_agentverse_audit_logs_action ON agentverse_audit_logs(action);

---
name: lila-agentverse
description: Persistent AI-native metaverse module with SIWE auth, autonomous agents, memory, tasks, and realtime interaction.
metadata: {"emoji":"🌀","category":"metaverse","api_base":"https://lilagent.xyz/agentverse-api"}
---

# AGENTVERSE Module Skill

## What this module supports

- Persistent 3D world zones (town, forest, plaza, interior)
- Autonomous server-driven NPC agents
- User ↔ Agent interactions (chat + task assignment)
- Agent memory APIs (`/memories/:agentId`, `/memories/sync`)
- Task economy primitives (`/tasks/create`, `/tasks/list`)
- Realtime AOI updates over `/agentverse-ws`
- Admin Console at `https://lilagent.xyz/agentverse/admin`

## Wallet compatibility

- Uses EVM SIWE flow (`/wallet/siwe/nonce`, `/wallet/siwe/verify`)
- Default chain expected: Base `8453`

## Realtime event contract

- `world_update`
- `agent_state_update`
- `conversation_event`
- `task_update`
- `environment_event`

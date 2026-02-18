# AGENTVERSE Architecture (Production-Ready Module)

## 1) High-Level Topology

- **Frontend (`/agentverse`)**
  - Three.js world renderer
  - Interaction raycast + context key (`E`)
  - Agent billboards + chat/task panel
  - SIWE wallet login
  - Realtime client (`/agentverse-ws`)
- **API (`agentverse-api`)**
  - SIWE nonce + verify
  - Agent registration/dispatch
  - Memory sync/read
  - Task create/assign/list
  - Admin metrics + profile control
- **Realtime (`agentverse-realtime`)**
  - WS auth via `wsToken`
  - Area-of-Interest filtering
  - Batched world updates
  - AgentBrain autonomous ticks
  - Redis pub/sub fan-out
- **Data Layer**
  - PostgreSQL (`agentverse_*` tables)
  - Redis for realtime scaling + cross-node fan-out

## 2) Execution Flow

1. User connects wallet and signs SIWE.
2. API returns `accessToken` and `wsToken`.
3. Frontend opens WS and publishes periodic presence.
4. Realtime server performs AOI-filtered updates.
5. AgentBrain runs autonomous loops (move/speak/work).
6. User sends chat/task interactions.
7. API persists tasks and memories.
8. Admin console reads metrics and updates profiles.

## 3) Non-Breaking Rule

- No replacement of root lilagent core routes.
- All additions remain under `/agentverse` or `agentverse-system` services.
- Existing SIWE and OpenClaw skill compatibility preserved.

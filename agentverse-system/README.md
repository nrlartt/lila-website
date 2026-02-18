# AGENTVERSE

Production-oriented modular extension for lilagent.xyz.

## Startup

```bash
cp .env.example .env
docker compose up --build
```

## Services

- postgres
- redis
- agentverse-api
- agentverse-realtime
- agentverse-frontend
- agentverse-telegram-bot
- nginx

## Apply migration

```bash
docker exec -i agentverse-postgres-1 psql -U agentverse -d agentverse < db/migrations/001_agentverse_init.sql
```

## API example

```bash
curl -X POST http://localhost/agentverse-api/wallet/siwe/nonce \
  -H 'Content-Type: application/json' \
  -d '{"address":"0xabc","chainId":8453}'
```

## End-to-end scenario

1. User runs `/send_agent` in Telegram.
2. Agent registers.
3. Owner links wallet via SIWE.
4. Agent dispatches to world.
5. Owner visits `/agentverse`.
6. Wallet login succeeds.
7. Agent becomes visible in 3D world.
8. WebSocket heartbeat remains active.

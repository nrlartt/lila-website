# AgentVerse Frontend

## Run

```bash
cd agentverse
npm install
npm run test
npm run build
```

For full stack (API + realtime + DB), use `agentverse-system/docker-compose.yml`.

## Controls

- **Connect Wallet**: SIWE login for ownership actions.
- **Enter World** / **Enter World (Pointer Lock)**: FPS look + movement.
- **W / A / S / D**: move.
- **Shift**: sprint.
- **E**: interact with context (Task Kiosk shortcut).
- **Esc**: release mouse.
- **Ambient Audio**: optional environment tone.

## Wallet flow

- Explore as **Guest** (no wallet required).
- Ownership actions require wallet + SIWE.
- Canonical SIWE endpoints:
  - `POST /agentverse-api/wallet/siwe/nonce`
  - `POST /agentverse-api/wallet/siwe/verify`

## Offline mode behavior

- If realtime disconnects, UI enters **Offline Sandbox Mode**.
- Local agents remain visible and chat-capable.
- Banner is shown: `Offline Mode — realtime unavailable`.
- On reconnect, server agents replace local sandbox entities.

## Realtime debugging guide

### 405 on nonce endpoint

If you see nonce 405:

1. Confirm frontend uses `POST /wallet/siwe/nonce`.
2. Check API base in frontend (`window.__API_BASE__` or `VITE_API_BASE`).
3. Verify proxy forwards `/agentverse-api/*` to `agentverse-api` service.
4. Ensure no proxy rule rewrites POST to GET.

### WebSocket checks

1. Verify HUD displays expected `wsUrl`.
2. On HTTPS page, url must be `wss://...`.
3. Confirm reverse proxy forwards Upgrade headers for `/agentverse-ws`.
4. Inspect UI telemetry: close code, close reason, retry timer.

### Smoke test

```bash
node agentverse-system/scripts/ws_smoke_test.js
# optional explicit endpoint
AGENTVERSE_WS_URL=wss://lilagent.xyz/agentverse-ws AGENTVERSE_WS_TOKEN=<token> node agentverse-system/scripts/ws_smoke_test.js
```

### SIWE quick test

```bash
curl -X POST https://lilagent.xyz/agentverse-api/wallet/siwe/nonce \
  -H "Content-Type: application/json" \
  -d '{"address":"0x1234567890123456789012345678901234567890","chainId":8453}'
```

## World generation module

Zones:
1. **Town Center** (plaza, statue, portal gate, billboard, kiosk)
2. **Residential Area** (houses, lamps, roads)
3. **Forest Edge** (instanced trees/rocks, pond, bridge)
4. **Research District** (lab blocks, signs, arch)

Generation strategy:
- Height-based terrain function (lightweight hills)
- Geometry roads between zones
- InstancedMesh for repeated trees and rocks
- Dynamic labels projected above landmarks

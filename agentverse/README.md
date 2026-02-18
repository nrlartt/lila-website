# AgentVerse Frontend

## Run

```bash
cd agentverse
npm install
npm run test
npm run build
```

For full stack (API + realtime + DB + proxy), use `agentverse-system/docker-compose.yml`.

## Controls

- **Connect Wallet**: SIWE login for ownership actions.
- **WalletConnect**: fallback when no injected wallet is available.
- **Enter World**: requests pointer lock.
- **W / A / S / D**: move.
- **Shift**: sprint.
- **E**: interact with context (Task Kiosk shortcut).
- **Esc**: release mouse.
- **Ambient Audio**: optional environment tone.
- **Debug toggles**: colliders, navmesh overlay, agent paths.

## Wallet flow

- Explore as **Guest** (no wallet required).
- Ownership actions require wallet + SIWE.
- If no injected wallet is found, UI shows:
  - `No injected wallet detected. Use WalletConnect or install MetaMask.`
- Canonical SIWE endpoints:
  - `POST /agentverse-api/wallet/siwe/nonce`
  - `POST /agentverse-api/wallet/siwe/verify`

## Offline mode behavior

- If realtime disconnects, UI enters **Offline Sandbox Mode**.
- Local agents remain visible and chat-capable.
- Banner appears: `Offline Mode — realtime unavailable`.
- On reconnect, server agents replace local sandbox entities.

## Realtime debugging guide

### Guest-token 404 checklist

1. Confirm API route exists: `GET /realtime/guest-token`.
2. Confirm proxy forwards `/agentverse-api/*` to `agentverse-api`.
3. Confirm frontend API base is `/agentverse-api`.
4. Confirm API service restart after route changes.

### 405 on nonce endpoint

1. Frontend must use `POST /wallet/siwe/nonce` with JSON body.
2. Ensure proxy forwards HTTP methods unchanged.
3. Verify no rewrite rules convert POST to GET.

### WebSocket checks

1. HUD must show `wsUrl` and state telemetry.
2. On HTTPS pages, websocket URL must be `wss://.../realtime`.
3. Proxy must pass websocket upgrade headers.
4. Inspect close code/reason/retry countdown in UI.

### Nginx snippet (production)

```nginx
location /agentverse-api/ {
  rewrite ^/agentverse-api/?(.*)$ /$1 break;
  proxy_pass http://agentverse-api:8080/;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

location /realtime {
  proxy_pass http://agentverse-realtime:8081;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $host;
}
```

## Smoke tests

### HTTP smoke

```bash
AGENTVERSE_HTTP_BASE=https://lilagent.xyz agentverse-system/scripts/http_smoke_test.sh
```

### WS smoke

```bash
AGENTVERSE_HTTP_BASE=https://lilagent.xyz AGENTVERSE_WS_URL=wss://lilagent.xyz/realtime node agentverse-system/scripts/ws_smoke_test.js
```

## Physics and navigation design

- Player collision uses local capsule-vs-static AABB checks for buildings/landmarks.
- Static colliders are simplified boxes to keep runtime cost low.
- Server agents use grid-based pathfinding (A*-style) around obstacle rectangles.
- Local separation steering avoids tight clustering.
- Stuck recovery triggers if movement is near-zero for >2s:
  1. path recompute
  2. alternate recovery offset
  3. warning log with `agentId` and location

## World generation module

Zones:
1. **Town Center** (plaza, statue, portal gate, billboard, kiosk)
2. **Residential Area** (houses, lamps, roads)
3. **Forest Edge** (instanced trees/rocks, pond, bridge)
4. **Research District** (lab blocks, signs, arch)

Generation strategy:
- Height-based terrain function
- Geometry roads between zones
- Instanced meshes for trees and rocks
- Landmark labels projected in screen space

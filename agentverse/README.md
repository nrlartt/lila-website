# AgentVerse Frontend

## Controls

- **Enter World** or **Enter World (Pointer Lock)**: activates FPS mouse look.
- **W / A / S / D**: move.
- **Shift**: sprint.
- **E**: context interaction.
- **Esc**: release mouse and return to UI mode.
- **Ambient Audio**: optional low-volume atmosphere.

## Wallet Flow

- You can explore as **Guest** without wallet.
- Wallet connection (EVM + SIWE) is required for ownership actions (task assignment and protected actions).
- Guest realtime token endpoint: `GET /agentverse-api/realtime/guest-token`.

## Offline Mode Behavior

- If realtime is unavailable, AgentVerse switches to **Offline Sandbox Mode**.
- A banner appears: `Offline Mode — realtime unavailable`.
- Local agents remain visible and interactive.
- Local stub brain handles chat responses and basic task acknowledgements.
- When realtime reconnects, server entities replace sandbox flow automatically.

## World Generation Module

The world is generated procedurally with four connected zones:

1. **Town Center**
   - plaza, statue, portal gate, billboard, kiosk, fountain.
2. **Residential Area**
   - clustered houses, yards, street lamps.
3. **Forest Edge**
   - instanced trees, rocks, pond, bridge.
4. **Research District**
   - lab structures, signs, terminals, arch landmark.

### Generation strategy

- Terrain uses a lightweight height function (small hills, no heavy assets).
- Roads are geometry-based strips across zones.
- Repeated assets use **InstancedMesh** for performance.
- Landmark labels are projected in screen space.

## Realtime Debugging Guide

### Common close codes

- `1000`: normal close.
- `1006`: abnormal close (network/proxy interruption).
- `4401`: token invalid or expired.
- `4408`: realtime rate limit exceeded.

### Verify WS URL

1. Check WS URL shown in the HUD status area.
2. Confirm console logs: `[AgentVerse WS] Connecting ...`.
3. On HTTPS pages, URL must be `wss://...`.

### Why guest-token might return 404

1. API route not mounted: verify `/realtime/guest-token` is registered in API app.
2. Reverse proxy missing `/agentverse-api` forwarding.
3. Wrong API base in frontend (`VITE_API_BASE` / `window.__API_BASE__`).
4. API container not restarted after route changes.

### Reverse proxy checklist

1. Forward `/agentverse-api/*` to API service.
2. Forward `/agentverse-ws` with websocket upgrade headers.
3. Ensure idle timeout supports long-lived websocket sessions.

### Smoke test

```bash
node agentverse-system/scripts/ws_smoke_test.js
# optional explicit target
AGENTVERSE_WS_URL=wss://lilagent.xyz/agentverse-ws AGENTVERSE_WS_TOKEN=<token> node agentverse-system/scripts/ws_smoke_test.js
```

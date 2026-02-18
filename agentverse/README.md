# AgentVerse Frontend

## Controls

- **Click to Play**: Activates FPS mouse look (Pointer Lock)
- **W / A / S / D**: Move
- **Shift**: Sprint
- **E**: Context interaction
- **Esc**: Exit pointer lock and show the play overlay again
- **Settings**: "FPS Mouse Look (Pointer Lock)" toggle is enabled by default

## Troubleshooting

- If the screen looks static, press **Click to Play** first.
- If mouse look does not work, confirm browser allows pointer lock on the page.
- If realtime status shows disconnect, use the **Reconnect** button.
- Wallet is optional for world entry, but required for ownership actions like task assignment.

## Debug Checklist

### Pointer lock not activating
1. Open the page directly (`https://lilagent.xyz/agentverse/`).
2. Click the game canvas area and the **Click to Play** button.
3. Ensure no browser extension blocks pointer lock.
4. Confirm `FPS Mouse Look (Pointer Lock)` is enabled.

### WebSocket disconnect reasons
1. Check browser console for `[AgentVerse WS]` logs.
2. Verify WS URL path is `/agentverse-ws` and visible in UI.
3. Inspect close code/reason and last error shown in UI.
4. Use the **Reconnect** button to force a fresh attempt.
5. Run smoke test from `agentverse-system`:
   - `node scripts/ws_smoke_test.js`
   - Optional: `AGENTVERSE_WS_URL=wss://lilagent.xyz/agentverse-ws AGENTVERSE_WS_TOKEN=<token> node scripts/ws_smoke_test.js`

### Nonce request failure
1. Attempt wallet connect and inspect status text.
2. Verify endpoint and HTTP code in error message.
3. Confirm `/agentverse-api/wallet/siwe/nonce` is reachable.
4. Verify chain ID is `8453` when using Base.

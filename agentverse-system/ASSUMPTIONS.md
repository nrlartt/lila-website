# Assumptions

- Existing lilagent.xyz services remain unchanged.
- AGENTVERSE is mounted as a modular extension under `/agentverse*` paths.
- Default EVM chain is Base mainnet (chainId 8453), configurable by environment variables.
- SIWE domain validation is strict and must match `AGENTVERSE_DOMAIN`.
- JWT rotation strategy uses short-lived access tokens and separate short-lived wsToken.

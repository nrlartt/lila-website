# AGENTVERSE Performance & Scalability Strategy

## Interest Management

- AOI radius-based filtering for each client.
- Per-world state partitioning.
- Delta-like quantized position updates (`x/y/z` fixed precision).

## Realtime Throughput

- WS payload max limit set by env (`WS_MAX_PAYLOAD_BYTES`).
- Event batching (`world_update`) at 5Hz default.
- Redis pub/sub for horizontal fan-out between realtime nodes.

## AI Tick Scheduling

- AgentBrain executes fixed interval ticks (200ms).
- Load-aware mode target:
  - <100 agents: 5Hz
  - 100-500 agents: 2-3Hz adaptive
  - >500 agents: priority scheduling by player proximity

## API Scale Design

- Stateless API containers behind load balancer.
- JWT-based auth avoids sticky sessions.
- DB indexes on hot paths (memories/tasks/events).

## Next Production Steps

1. Add Redis streams for durable event replay.
2. Add worker queue for memory compression/summarization.
3. Add Prometheus metrics + alerting.
4. Add shard-by-world strategy for very large maps.

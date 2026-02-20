/**
 * EventBus: Lightweight typed event dispatcher for decoupled system communication.
 */
export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(type, handler) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type).add(handler);
  }

  off(type, handler) {
    if (!this.listeners.has(type)) return;
    this.listeners.get(type).delete(handler);
  }

  emit(type, data) {
    if (!this.listeners.has(type)) return;
    this.listeners.get(type).forEach(handler => handler(data));
  }
}

/**
 * MetricsStore: Aggregates and maintains global system state for visualization and coordination.
 */
export class MetricsStore {
  constructor() {
    this.snapshot = {
      executingCount: 0,
      syncingCount: 0,
      errorCount: 0,
      activeAgentsCount: 0,
      avgStress: 0,
      zoneActivity: new Map() // zoneName -> activityScore
    };
  }

  update(swarm) {
    let totalStress = 0;
    this.snapshot.executingCount = 0;
    this.snapshot.syncingCount = 0;
    this.snapshot.errorCount = 0;
    this.snapshot.activeAgentsCount = swarm.length;
    this.snapshot.zoneActivity.clear();

    for (const agent of swarm) {
      const state = agent.state;
      if (state === 'EXECUTE') this.snapshot.executingCount++;
      if (state === 'SYNC') this.snapshot.syncingCount++;
      if (state === 'ERROR') this.snapshot.errorCount++;
      
      totalStress += agent.ctx.stress || 0;

      if (agent.ctx.zone) {
        const z = agent.ctx.zone.toUpperCase();
        this.snapshot.zoneActivity.set(z, (this.snapshot.zoneActivity.get(z) || 0) + 1);
      }
    }

    this.snapshot.avgStress = swarm.length > 0 ? totalStress / swarm.length : 0;
  }

  getSnapshot() {
    return this.snapshot;
  }
}

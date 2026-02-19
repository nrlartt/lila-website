import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * SwarmCoordinator: Higher-level logic for emergent agent behavior.
 */
export class SwarmCoordinator {
  constructor(eventBus, seed = 1234) {
    this.bus = eventBus;
    this.seed = seed;
    this.roles = new Map(); // id -> role
    this.capacity = 12;
  }

  _random() {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  assignRoles(swarm) {
    const r = ['WORKER', 'SCOUT', 'EVALUATOR', 'OPTIMIZER', 'RELAY'];
    swarm.forEach((a, i) => this.roles.set(a.ctx.id, r[i % r.length]));
  }

  observe(swarm, centers, metrics) {
    swarm.forEach(agent => {
      const state = agent.state;
      const id = agent.ctx.id;

      // 1. Help Response
      if (state === 'HELP') {
        this.bus.emit('HELP_REQUEST', { agentId: id, reason: 'logic_block' });
        // Nearby RELAY/OPTIMIZER response logic
        const helper = swarm.find(o => {
          const role = this.roles.get(o.ctx.id);
          return (role === 'RELAY' || role === 'OPTIMIZER') && (o.state === 'IDLE');
        });
        if (helper) this.bus.emit('ROUTE_SUGGESTION', { agentId: helper.ctx.id, targetPosition: agent.ctx.position });
      }

      // 2. Load Balancing
      if (agent.ctx.zone && metrics.zoneActivity.get(agent.ctx.zone.toUpperCase()) > this.capacity) {
        if (state === 'IDLE' || state === 'SEEK_TASK') {
          const zones = Array.from(metrics.zoneActivity.keys());
          const target = zones.sort((a,b) => metrics.zoneActivity.get(a) - metrics.zoneActivity.get(b))[0];
          this.bus.emit('ROUTE_SUGGESTION', { agentId: id, targetZone: target });
          this.bus.emit('LOAD_SHED', { fromZone: agent.ctx.zone, toZone: target, count: 1 });
        }
      }

      // 3. Separation (Simple)
      swarm.forEach(other => {
        if (id === other.ctx.id) return;
        const dx = agent.ctx.position.x - other.ctx.position.x;
        const dz = agent.ctx.position.z - other.ctx.position.z;
        const dist = Math.hypot(dx, dz);
        if (dist < 2.5) {
          agent.ctx.position.x += dx * 0.01;
          agent.ctx.position.z += dz * 0.01;
        }
      });
    });
  }
}

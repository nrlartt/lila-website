import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * SwarmCoordinator: Manages emergent behaviors, role-based logic, 
 * and load balancing for OpenClaw agents.
 */
export const AgentRole = {
  WORKER: 'WORKER',
  SCOUT: 'SCOUT',
  EVALUATOR: 'EVALUATOR',
  OPTIMIZER: 'OPTIMIZER',
  RELAY: 'RELAY'
};

const ROLE_ZONE_PREFERENCE = {
  [AgentRole.WORKER]: ['/AGENTS/STATUS', '/AGENTS/DEPLOY', '/ARCHIVE'],
  [AgentRole.SCOUT]: ['/MARKETPLACE', '/GATEWAY', '/AGENTS/STATUS'],
  [AgentRole.EVALUATOR]: ['/EVALUATION', '/SIMULATION'],
  [AgentRole.OPTIMIZER]: ['/OPTIMIZATION', '/TASK/ASSIGN'],
  [AgentRole.RELAY]: ['/GATEWAY', '/AGENTS/DEPLOY']
};

export class SwarmCoordinator {
  constructor(options = {}) {
    this.agentRoles = new Map(); // id -> role
    this.personalSpace = options.personalSpace || 2.5;
    this.helpRadius = options.helpRadius || 35;
    this.zoneCapacity = options.zoneCapacity || 12;
  }

  assignInitialRoles(swarm) {
    const roles = Object.values(AgentRole);
    swarm.forEach((agent, i) => {
      // Balanced distribution
      const role = roles[i % roles.length];
      this.agentRoles.set(agent.ctx.id, role);
    });
  }

  /**
   * coordinate(swarm, zones, dt)
   * Returns a list of events/suggestions for the simulator.
   */
  coordinate(swarm, zoneCenters, dt) {
    const events = [];
    const zoneCounts = new Map();

    // 1. Grouping and Counting
    swarm.forEach(a => {
      if (a.ctx.zone) {
        const z = a.ctx.zone.toUpperCase();
        zoneCounts.set(z, (zoneCounts.get(z) || 0) + 1);
      }
    });

    // 2. Process emergent rules
    swarm.forEach(agent => {
      const id = agent.ctx.id;
      const role = this.agentRoles.get(id);
      const state = agent.state;

      // Rule: HELP behavior (Emergent assistance)
      if (state === 'HELP') {
        events.push({ type: 'HELP_REQUEST', agentId: id, role });
        this.requestAssistance(agent, swarm, events);
      }

      // Rule: Load Balancing (Avoid congestion)
      if (agent.ctx.zone && zoneCounts.get(agent.ctx.zone.toUpperCase()) > this.zoneCapacity) {
        if (state === 'IDLE' || state === 'SEEK_TASK') {
          events.push({ 
            type: 'ROUTE_SUGGESTION', 
            agentId: id, 
            reason: 'CONGESTION',
            targetZone: this.findQuietZone(ROLE_ZONE_PREFERENCE[role], zoneCounts) 
          });
        }
      }

      // Rule: Role-based destination filtering
      if (state === 'SEEK_TASK' && Math.random() < 0.05) {
        const pref = ROLE_ZONE_PREFERENCE[role];
        const target = pref[(Math.random() * pref.length) | 0];
        events.push({ type: 'ROUTE_SUGGESTION', agentId: id, targetZone: target, reason: 'ROLE_BIAS' });
      }

      // Rule: Personal Space (Avoid clumping)
      this.applySeparation(agent, swarm, dt);
    });

    return events;
  }

  requestAssistance(troubledAgent, swarm, events) {
    const pos = troubledAgent.ctx.position;
    // Find nearby RELAY or OPTIMIZER
    const helper = swarm.find(a => {
      const role = this.agentRoles.get(a.ctx.id);
      const isHelperRole = role === AgentRole.RELAY || role === AgentRole.OPTIMIZER;
      if (!isHelperRole || a.ctx.id === troubledAgent.ctx.id) return false;
      if (a.state !== 'IDLE' && a.state !== 'COOLDOWN') return false;
      
      const dist = Math.hypot(a.ctx.position.x - pos.x, a.ctx.position.z - pos.z);
      return dist < this.helpRadius;
    });

    if (helper) {
      events.push({
        type: 'ROUTE_SUGGESTION',
        agentId: helper.ctx.id,
        targetPosition: { x: pos.x + 2, y: 0, z: pos.z + 2 },
        reason: 'ASSIST_PEER',
        targetAgentId: troubledAgent.ctx.id
      });
    }
  }

  applySeparation(agent, swarm, dt) {
    // Simple steering behavior for personal space
    const pos = agent.ctx.position;
    let sx = 0, sz = 0;
    let count = 0;

    swarm.forEach(other => {
      if (other.ctx.id === agent.ctx.id) return;
      const dx = pos.x - other.ctx.position.x;
      const dz = pos.z - other.ctx.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist < this.personalSpace) {
        sx += dx / (dist || 0.1);
        sz += dz / (dist || 0.1);
        count++;
      }
    });

    if (count > 0) {
      // Subtle nudge
      agent.ctx.position.x += (sx / count) * 0.15;
      agent.ctx.position.z += (sz / count) * 0.15;
    }
  }

  findQuietZone(preferences, zoneCounts) {
    // Pick the least busy zone from preferred list
    return preferences.sort((a, b) => (zoneCounts.get(a) || 0) - (zoneCounts.get(b) || 0))[0];
  }
}

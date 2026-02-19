import { initialAgent, step, AgentState, ZONE_FOR_TASK } from './agent_fsm.js';

const TASK_TYPES = ['DEPLOY', 'SCAN_MARKET', 'EVALUATE', 'OPTIMIZE', 'ROUTE_GATEWAY', 'ARCHIVE'];

const zoneCenter = (zones, name) => zones.get(name) || { x: 0, y: 0, z: 0 };

const makeTask = (id) => {
  const type = TASK_TYPES[(Math.random() * TASK_TYPES.length) | 0];
  return { id, type, targetZone: '/TASK/ASSIGN', ttlMs: 12000 };
};

function moveTowards(machine, dt) {
  const c = machine.ctx;
  if (!c.destination) return machine;
  const speed = 2.2;
  const dx = c.destination.x - c.position.x;
  const dz = c.destination.z - c.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist < 0.15) return step(machine, { type: 'ARRIVED', zone: c.destinationZone || c.zone });

  const stepLen = Math.min(dist, speed * dt);
  c.position.x += (dx / dist) * stepLen;
  c.position.z += (dz / dist) * stepLen;
  return machine;
}

export function createSwarm(n, now = Date.now()) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const m = initialAgent(`CLAW-${String(i).padStart(3, '0')}`, now);
    m.ctx.position.x = (Math.random() - 0.5) * 10;
    m.ctx.position.z = (Math.random() - 0.5) * 10;
    arr.push(m);
  }
  return arr;
}

export function tickAgents(agents, now, dt, zones) {
  return agents.map((m) => {
    let next = step(m, { type: 'TICK', now, dt });

    if (next.state === AgentState.SEEK_TASK && Math.random() < 0.2) {
      next = step(next, { type: 'TASK_ASSIGNED', task: makeTask(`task-${now}-${next.ctx.id}`) });
    }

    if (next.state === AgentState.NAVIGATE && next.ctx.destinationZone && !next.ctx.destination) {
      const d = zoneCenter(zones, next.ctx.destinationZone);
      next.ctx.destination = { ...d };
    }

    next = moveTowards(next, dt);

    if (next.state === AgentState.IDLE && Math.random() < 0.004) {
      // light wandering near status zone to keep scene alive
      const d = zoneCenter(zones, '/AGENTS/STATUS');
      next.ctx.position.x += (d.x - next.ctx.position.x) * 0.02;
      next.ctx.position.z += (d.z - next.ctx.position.z) * 0.02;
    }

    return next;
  });
}

export { ZONE_FOR_TASK };

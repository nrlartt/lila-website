export const AgentState = {
  IDLE: 'IDLE', SEEK_TASK: 'SEEK_TASK', NAVIGATE: 'NAVIGATE', EXECUTE: 'EXECUTE',
  REPORT: 'REPORT', SYNC: 'SYNC', HELP: 'HELP', ERROR: 'ERROR', COOLDOWN: 'COOLDOWN'
};

export const ZONE_FOR_TASK = {
  DEPLOY: '/AGENTS/DEPLOY',
  SCAN_MARKET: '/MARKETPLACE',
  EVALUATE: '/EVALUATION',
  OPTIMIZE: '/OPTIMIZATION',
  ROUTE_GATEWAY: '/GATEWAY',
  ARCHIVE: '/ARCHIVE'
};

const enter = (m, state, now, patch = {}) => ({ state, ctx: { ...m.ctx, ...patch, stateEnteredAt: now } });

export function initialAgent(id, now, startZone = '/AGENTS/STATUS') {
  return {
    state: AgentState.IDLE,
    ctx: {
      id, zone: startZone, position: { x: 0, y: 0, z: 0 }, destination: null, destinationZone: null,
      task: null, lastResult: null, stateEnteredAt: now, executeUntil: 0, cooldownUntil: 0,
      stress: 0, retries: 0
    }
  };
}

export function statusFromState(s) {
  if (s === AgentState.EXECUTE) return 'executing';
  if (s === AgentState.SYNC) return 'syncing';
  if (s === AgentState.ERROR) return 'error';
  return 'idle';
}

export function step(machine, ev) {
  const now = ev.type === 'TICK' ? ev.now : Date.now();
  const { state, ctx } = machine;

  if (ev.type === 'RESET') return enter(machine, AgentState.IDLE, now, { task: null, retries: 0, stress: 0 });
  if (ev.type === 'HELP_REQUESTED') return enter(machine, AgentState.HELP, now);
  if (ev.type === 'SYNC_NEEDED' && state !== AgentState.ERROR) return enter(machine, AgentState.SYNC, now);

  switch (state) {
    case AgentState.IDLE:
      if (ev.type === 'TASK_ASSIGNED') {
        const targetZone = ZONE_FOR_TASK[ev.task.type] || ev.task.targetZone;
        return enter(machine, AgentState.NAVIGATE, now, { task: ev.task, destinationZone: targetZone });
      }
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 500 + Math.random() * 700) {
        return enter(machine, AgentState.SEEK_TASK, now);
      }
      return machine;

    case AgentState.SEEK_TASK:
      if (ev.type === 'TASK_ASSIGNED') {
        const targetZone = ZONE_FOR_TASK[ev.task.type] || ev.task.targetZone;
        return enter(machine, AgentState.NAVIGATE, now, { task: ev.task, destinationZone: targetZone });
      }
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 1200) return enter(machine, AgentState.IDLE, now);
      return machine;

    case AgentState.NAVIGATE:
      if (!ctx.task) return enter(machine, AgentState.IDLE, now);
      if (ev.type === 'ARRIVED') {
        const n = enter(machine, AgentState.NAVIGATE, now, { zone: ev.zone, destinationZone: null, destination: null });
        const required = ZONE_FOR_TASK[n.ctx.task.type] || n.ctx.task.targetZone;
        if (ev.zone === required) {
          const execMs = n.ctx.task.type === 'DEPLOY' ? 1800 : n.ctx.task.type === 'EVALUATE' ? 2200 : n.ctx.task.type === 'OPTIMIZE' ? 2600 : 1400;
          return enter(n, AgentState.EXECUTE, now, { executeUntil: now + execMs });
        }
        return n;
      }
      if (ev.type === 'TICK' && ctx.task && now - ctx.stateEnteredAt > ctx.task.ttlMs) {
        return enter(machine, AgentState.ERROR, now, { stress: Math.min(1, ctx.stress + 0.2) });
      }
      return machine;

    case AgentState.EXECUTE:
      if (!ctx.task) return enter(machine, AgentState.IDLE, now);
      if (ev.type === 'EXEC_OK') return enter(machine, AgentState.REPORT, now, { lastResult: ev.result, retries: 0 });
      if (ev.type === 'EXEC_FAIL') {
        const retries = ctx.retries + 1;
        if (retries <= 2) return enter(machine, AgentState.SYNC, now, { retries, stress: Math.min(1, ctx.stress + 0.15) });
        return enter(machine, AgentState.ERROR, now, { stress: Math.min(1, ctx.stress + 0.35) });
      }
      if (ev.type === 'TICK' && ctx.executeUntil && now >= ctx.executeUntil) {
        const failProb = 0.08 + ctx.stress * 0.25;
        return Math.random() < failProb
          ? step(machine, { type: 'EXEC_FAIL', error: 'simulated_failure' })
          : step(machine, { type: 'EXEC_OK', result: { ok: true, taskId: ctx.task.id } });
      }
      return machine;

    case AgentState.REPORT:
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 600) {
        return enter(machine, AgentState.COOLDOWN, now, { task: null, cooldownUntil: now + 700 + Math.random() * 900 });
      }
      return machine;

    case AgentState.SYNC:
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 900) {
        if (ctx.task && ctx.retries > 0) return enter(machine, AgentState.EXECUTE, now);
        return enter(machine, AgentState.SEEK_TASK, now);
      }
      return machine;

    case AgentState.HELP:
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 1600) {
        return enter(machine, AgentState.SEEK_TASK, now, { stress: Math.max(0, ctx.stress - 0.1) });
      }
      return machine;

    case AgentState.ERROR:
      if (ev.type === 'TICK' && now - ctx.stateEnteredAt > 1200) {
        return enter(machine, AgentState.COOLDOWN, now, {
          zone: '/AGENTS/STATUS', task: null, retries: 0,
          stress: Math.min(1, ctx.stress + 0.05), cooldownUntil: now + 1400 + Math.random() * 1200
        });
      }
      return machine;

    case AgentState.COOLDOWN:
      if (ev.type === 'TICK' && (!ctx.cooldownUntil || now >= ctx.cooldownUntil)) {
        return enter(machine, AgentState.IDLE, now, { stress: Math.max(0, ctx.stress - 0.08) });
      }
      return machine;

    default:
      return machine;
  }
}

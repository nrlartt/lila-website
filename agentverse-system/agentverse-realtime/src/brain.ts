export type AgentMode = "idle" | "moving" | "speaking" | "working" | "interacting";

export interface AgentSnapshot {
  id: string;
  worldId: string;
  x: number;
  y: number;
  z: number;
  state: AgentMode;
  statusText: string;
  taskId?: string;
  displayName: string;
  path?: Array<{ x: number; z: number }>;
}

type RuntimeAgent = {
  id: string;
  worldId: string;
  x: number;
  y: number;
  z: number;
  targetX: number;
  targetZ: number;
  path: Array<{ x: number; z: number }>;
  state: AgentMode;
  statusText: string;
  displayName: string;
  taskId?: string;
  lastSpokeAt: number;
  stuckMs: number;
  lastX: number;
  lastZ: number;
};

type Rect = { minX: number; maxX: number; minZ: number; maxZ: number };

const OBSTACLES: Rect[] = [
  { minX: -30, maxX: -18, minZ: -30, maxZ: -18 },
  { minX: 18, maxX: 34, minZ: -34, maxZ: -18 },
  { minX: -8, maxX: 8, minZ: 88, maxZ: 110 },
  { minX: -10, maxX: 10, minZ: -38, maxZ: -24 }
];

const GRID_MIN = -160;
const GRID_MAX = 160;
const CELL = 4;

function blocked(x: number, z: number) {
  return OBSTACLES.some((o) => x >= o.minX && x <= o.maxX && z >= o.minZ && z <= o.maxZ);
}

function toCell(v: number) {
  return Math.round((v - GRID_MIN) / CELL);
}
function toWorld(c: number) {
  return GRID_MIN + c * CELL;
}

function findPath(start: { x: number; z: number }, target: { x: number; z: number }) {
  const sx = toCell(start.x), sz = toCell(start.z);
  const tx = toCell(target.x), tz = toCell(target.z);
  const maxCell = toCell(GRID_MAX);

  const key = (x: number, z: number) => `${x},${z}`;
  const open = new Set<string>([key(sx, sz)]);
  const came = new Map<string, string>();
  const g = new Map<string, number>([[key(sx, sz), 0]]);

  const neighbors = [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  function h(x: number, z: number) {
    return Math.hypot(tx - x, tz - z);
  }

  while (open.size) {
    let best = "";
    let bestF = Infinity;
    for (const n of open) {
      const [x, z] = n.split(",").map(Number);
      const score = (g.get(n) || Infinity) + h(x, z);
      if (score < bestF) {
        bestF = score;
        best = n;
      }
    }

    const [cx, cz] = best.split(",").map(Number);
    if (cx === tx && cz === tz) {
      const path: Array<{ x: number; z: number }> = [];
      let cur = best;
      while (cur !== key(sx, sz)) {
        const [px, pz] = cur.split(",").map(Number);
        path.unshift({ x: toWorld(px), z: toWorld(pz) });
        cur = came.get(cur)!;
      }
      return path;
    }

    open.delete(best);

    for (const [dx, dz] of neighbors) {
      const nx = cx + dx;
      const nz = cz + dz;
      if (nx < 0 || nz < 0 || nx > maxCell || nz > maxCell) continue;
      if (blocked(toWorld(nx), toWorld(nz))) continue;
      const nk = key(nx, nz);
      const tentative = (g.get(best) || Infinity) + Math.hypot(dx, dz);
      if (tentative < (g.get(nk) || Infinity)) {
        came.set(nk, best);
        g.set(nk, tentative);
        open.add(nk);
      }
    }
  }

  return [];
}

export class AgentBrainEngine {
  private agents = new Map<string, RuntimeAgent>();

  upsertAgent(seed: Partial<RuntimeAgent> & { id: string; worldId: string; displayName?: string }) {
    const prev = this.agents.get(seed.id);
    this.agents.set(seed.id, {
      id: seed.id,
      worldId: seed.worldId,
      x: seed.x ?? prev?.x ?? Math.random() * 20 - 10,
      y: 1.6,
      z: seed.z ?? prev?.z ?? -30 + Math.random() * 20,
      targetX: seed.targetX ?? prev?.targetX ?? Math.random() * 40 - 20,
      targetZ: seed.targetZ ?? prev?.targetZ ?? -35 + Math.random() * 30,
      path: prev?.path ?? [],
      state: seed.state ?? prev?.state ?? "idle",
      statusText: seed.statusText ?? prev?.statusText ?? "Idle",
      displayName: seed.displayName ?? prev?.displayName ?? `Agent-${seed.id.slice(0, 4)}`,
      taskId: seed.taskId ?? prev?.taskId,
      lastSpokeAt: prev?.lastSpokeAt ?? 0,
      stuckMs: 0,
      lastX: prev?.lastX ?? seed.x ?? 0,
      lastZ: prev?.lastZ ?? seed.z ?? 0
    });
  }

  setMoveTarget(agentId: string, target: { x: number; z: number }) {
    const agent = this.agents.get(agentId);
    if (!agent) return false;
    agent.targetX = target.x;
    agent.targetZ = target.z;
    agent.path = findPath({ x: agent.x, z: agent.z }, target);
    agent.state = "moving";
    agent.statusText = "Moving to assigned target";
    return true;
  }

  assignTask(agentId: string, taskId: string, target: { x: number; z: number }) {
    const ok = this.setMoveTarget(agentId, target);
    if (!ok) return false;
    const a = this.agents.get(agentId)!;
    a.taskId = taskId;
    a.state = "working";
    a.statusText = "Executing task route";
    return true;
  }

  tick(now = Date.now()) {
    const dt = 0.2;

    for (const agent of this.agents.values()) {
      if (agent.path.length === 0) {
        if (Math.hypot(agent.targetX - agent.x, agent.targetZ - agent.z) < 2) {
          if (agent.taskId) {
            agent.statusText = "Task completed";
            agent.taskId = undefined;
          }
          agent.targetX = Math.random() * 60 - 30;
          agent.targetZ = -60 + Math.random() * 160;
        }
        agent.path = findPath({ x: agent.x, z: agent.z }, { x: agent.targetX, z: agent.targetZ });
      }

      const node = agent.path[0];
      if (!node) {
        agent.state = "idle";
        continue;
      }

      const dx = node.x - agent.x;
      const dz = node.z - agent.z;
      const dist = Math.hypot(dx, dz);

      if (dist < 0.9) {
        agent.path.shift();
      } else {
        let vx = (dx / dist) * 2.2 * dt;
        let vz = (dz / dist) * 2.2 * dt;

        // local separation to reduce clustering
        for (const other of this.agents.values()) {
          if (other.id === agent.id) continue;
          const odx = agent.x - other.x;
          const odz = agent.z - other.z;
          const d = Math.hypot(odx, odz);
          if (d > 0 && d < 2.2) {
            vx += (odx / d) * 0.04;
            vz += (odz / d) * 0.04;
          }
        }

        const nx = agent.x + vx;
        const nz = agent.z + vz;
        if (!blocked(nx, nz)) {
          agent.x = nx;
          agent.z = nz;
          agent.state = agent.taskId ? "working" : "moving";
          agent.statusText = agent.taskId ? "Executing assigned task" : "Navigating route";
        } else {
          agent.path = findPath({ x: agent.x, z: agent.z }, { x: agent.targetX, z: agent.targetZ });
        }
      }

      // stuck detection and recovery
      const moved = Math.hypot(agent.x - agent.lastX, agent.z - agent.lastZ);
      if (moved < 0.02 && agent.path.length > 0) {
        agent.stuckMs += dt * 1000;
      } else {
        agent.stuckMs = 0;
      }
      agent.lastX = agent.x;
      agent.lastZ = agent.z;

      if (agent.stuckMs > 2000) {
        console.warn(JSON.stringify({ level: "warn", msg: "agent stuck detected", agentId: agent.id, x: agent.x, z: agent.z }));
        agent.path = findPath({ x: agent.x, z: agent.z }, { x: agent.targetX, z: agent.targetZ });
        if (agent.path.length === 0) {
          agent.x += Math.random() * 2 - 1;
          agent.z += Math.random() * 2 - 1;
        }
        agent.stuckMs = 0;
      }

      if (now - agent.lastSpokeAt > 14000 && Math.random() < 0.05) {
        agent.state = "speaking";
        agent.statusText = "Sharing route status";
        agent.lastSpokeAt = now;
      }
    }
  }

  getSnapshots(worldId: string): AgentSnapshot[] {
    return [...this.agents.values()]
      .filter((a) => a.worldId === worldId)
      .map((a) => ({
        id: a.id,
        worldId: a.worldId,
        x: a.x,
        y: a.y,
        z: a.z,
        state: a.state,
        statusText: a.statusText,
        taskId: a.taskId,
        displayName: a.displayName,
        path: a.path.slice(0, 12)
      }));
  }
}

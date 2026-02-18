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
}

interface RuntimeAgent {
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
}

export class AgentBrainEngine {
  private agents = new Map<string, RuntimeAgent>();

  upsertAgent(seed: Partial<RuntimeAgent> & { id: string; worldId: string; displayName?: string }) {
    const prev = this.agents.get(seed.id);
    this.agents.set(seed.id, {
      id: seed.id,
      worldId: seed.worldId,
      x: seed.x ?? prev?.x ?? Math.random() * 30 - 15,
      y: 1.6,
      z: seed.z ?? prev?.z ?? Math.random() * 30 - 15,
      targetX: seed.targetX ?? prev?.targetX ?? Math.random() * 30 - 15,
      targetZ: seed.targetZ ?? prev?.targetZ ?? Math.random() * 30 - 15,
      path: prev?.path ?? [],
      state: seed.state ?? prev?.state ?? "idle",
      statusText: seed.statusText ?? prev?.statusText ?? "Idle",
      displayName: seed.displayName ?? prev?.displayName ?? `Agent-${seed.id.slice(0, 4)}`,
      taskId: seed.taskId ?? prev?.taskId,
      lastSpokeAt: prev?.lastSpokeAt ?? 0
    });
  }

  tick(now = Date.now()) {
    for (const agent of this.agents.values()) {
      if (agent.path.length === 0) {
        if (Math.hypot(agent.targetX - agent.x, agent.targetZ - agent.z) < 1.0) {
          agent.targetX = Math.random() * 40 - 20;
          agent.targetZ = Math.random() * 40 - 20;
        }
        // lightweight planner (task -> sub-actions waypoints)
        const midX = (agent.x + agent.targetX) / 2 + (Math.random() * 6 - 3);
        const midZ = (agent.z + agent.targetZ) / 2 + (Math.random() * 6 - 3);
        agent.path = [
          { x: midX, z: midZ },
          { x: agent.targetX, z: agent.targetZ }
        ];
      }

      const node = agent.path[0];
      const dx = node.x - agent.x;
      const dz = node.z - agent.z;
      const dist = Math.hypot(dx, dz);

      if (dist < 0.8) {
        agent.path.shift();
        if (agent.path.length === 0) {
          agent.state = "idle";
          agent.statusText = agent.taskId ? "Task step completed" : "Observing world";
          if (now - agent.lastSpokeAt > 12000) {
            agent.state = "speaking";
            agent.statusText = "Sharing local insights";
            agent.lastSpokeAt = now;
          }
        }
      } else {
        const step = 0.2;
        agent.x += (dx / dist) * step;
        agent.z += (dz / dist) * step;
        agent.state = "moving";
        agent.statusText = agent.taskId ? "Executing assigned task" : "Navigating zone route";
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
        displayName: a.displayName
      }));
  }
}

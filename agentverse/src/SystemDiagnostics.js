/**
 * SystemDiagnostics: Handles trace buffers, metrics sampling, and recording.
 * Designed for ring-buffer efficiency and non-blocking operation.
 */
export class SystemDiagnostics {
  constructor(maxTraceSize = 10) {
    this.agentTraces = new Map(); // id -> [{ state, ts }]
    this.maxTraceSize = maxTraceSize;
    this.watchTargets = new Set(); // ids
    this.isRecording = false;
    this.recordBuffer = []; // [{ type, payload, ts }]
    this.startTime = 0;
  }

  /** Record a state transition for an agent */
  logTransition(agentId, state) {
    if (!this.agentTraces.has(agentId)) {
      this.agentTraces.set(agentId, []);
    }
    const trace = this.agentTraces.get(agentId);
    trace.push({ state, ts: Date.now() });
    if (trace.length > this.maxTraceSize) trace.shift();

    if (this.watchTargets.has(agentId)) {
      return { type: 'WATCH_UPDATE', agentId, state };
    }
    
    if (this.isRecording) {
      this.recordBuffer.push({ type: 'TRANSITION', agentId, state, ts: Date.now() });
    }
    return null;
  }

  getTrace(agentId) {
    return this.agentTraces.get(agentId) || [];
  }

  startRecording() {
    this.isRecording = true;
    this.recordBuffer = [];
    this.startTime = Date.now();
  }

  stopRecording() {
    this.isRecording = false;
    return this.recordBuffer;
  }

  getMetrics(swarm) {
    const total = swarm.length;
    const states = { idle: 0, executing: 0, syncing: 0, error: 0 };
    let totalStress = 0;

    swarm.forEach(a => {
      states[a.state.toLowerCase().includes('exec') ? 'executing' : a.state.toLowerCase()]++;
      totalStress += a.ctx.stress || 0;
    });

    return {
      ts: Date.now(),
      swarmSize: total,
      avgStress: totalStress / total,
      stateDistribution: states
    };
  }
}

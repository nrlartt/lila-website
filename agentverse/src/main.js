import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { HubControls } from './HubControls.js';
import { createSwarm, tickAgents } from './sim_loop.js';
import { statusFromState } from './agent_fsm.js';
import { AgentLabelSystem } from './AgentLabelSystem.js';
import { HoverInteractionSystem } from './HoverInteractionSystem.js';
import { LoadVizSystem } from './LoadVizSystem.js';
import { DataFlowVizSystem } from './DataFlowVizSystem.js';
import { SwarmCoordinator } from './SwarmCoordinator.js';
import { TerminalCore, CommandRegistry, OutputType } from './TerminalCore.js';
import { TerminalUI } from './TerminalUI.js';
import { SystemDiagnostics } from './SystemDiagnostics.js';

const app = document.getElementById('app');
const container = document.getElementById('terminal-container') || app;

// 1. Initial Core Modules
const registry = new CommandRegistry();
const terminalCore = new TerminalCore(registry);
const terminalUI = new TerminalUI(container, terminalCore);
const diag = new SystemDiagnostics();

const ZONES = [
  '/AGENTS/STATUS', '/AGENTS/DEPLOY', '/TASK/ASSIGN', '/SIMULATION', '/EVALUATION',
  '/OPTIMIZATION', '/REPUTATION', '/MARKETPLACE', '/GATEWAY', '/ARCHIVE'
];
const layout = [
  [-64, -28], [-20, -28], [24, -28], [68, -28],
  [-64, 10], [-20, 10], [24, 10], [68, 10],
  [2, 48], [46, 48]
];

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8f8f8f);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
app.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1200);
camera.position.set(90, 90, 90);

scene.add(new THREE.AmbientLight(0xffffff, 0.78));
const key = new THREE.DirectionalLight(0xffffff, 0.45);
key.position.set(40, 90, 20);
scene.add(key);
scene.add(new THREE.GridHelper(640, 128, 0x838383, 0x8f8f8f));

const zoneMap = new Map();
const zoneCenters = new Map();
const zoneLabels = [];
const interactableMeshes = [];

const controls = new HubControls({ domElement: renderer.domElement, camera, groundY: 0 });
const labels = new AgentLabelSystem(scene, camera);
const interaction = new HoverInteractionSystem(renderer.domElement, camera, controls);
const loadViz = new LoadVizSystem(scene);
const dataFlow = new DataFlowVizSystem(scene);
const swarmCoordinator = new SwarmCoordinator();

function textCanvas(text, w = 720, h = 130, bg = '#101010', fg = '#fff', font = 'bold 56px monospace') {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2 + 1);
  return c;
}

function addZone(path, x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(30, 0.24, 22), new THREE.MeshLambertMaterial({ color: 0xd8d8d8 }));
  floor.position.y = 0.12;
  g.add(floor);
  const labelTex = new THREE.CanvasTexture(textCanvas(path));
  const label = new THREE.Mesh(new THREE.PlaneGeometry(16, 2.8), new THREE.MeshBasicMaterial({ map: labelTex }));
  label.rotation.x = -Math.PI / 8;
  label.position.set(0, 5.9, -9.5);
  g.add(label);
  g.userData = { id: path, type: 'zone' };
  scene.add(g);
  zoneCenters.set(path.toUpperCase(), new THREE.Vector3(x, 0, z));
  zoneLabels.push(label);
  interactableMeshes.push(g);
  loadViz.registerZone(path.toUpperCase(), g);
}
ZONES.forEach((z, i) => addZone(z, layout[i][0], layout[i][1]));

const swarm = createSwarm(140);
const agentMeshesMap = new Map();
const statusColor = { idle: 0x9ca3af, executing: 0x10b981, syncing: 0x3b82f6, error: 0xef4444 };
swarmCoordinator.assignInitialRoles(swarm);

swarm.forEach((m) => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 0.9, 4, 8), new THREE.MeshLambertMaterial({ color: 0x2f2f2f }));
  body.position.y = 0.95;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 10), new THREE.MeshBasicMaterial({ color: statusColor.idle }));
  core.position.set(0, 1.38, 0.28);
  g.add(body, core);
  g.position.set(m.ctx.position.x, 0, m.ctx.position.z);
  g.userData = { id: m.ctx.id, type: 'agent', core, body };
  scene.add(g);
  agentMeshesMap.set(m.ctx.id, g);
  interactableMeshes.push(g);
});

// 2. Command Extensions
registry.register('goto', 'Navigate to zone', (args) => {
  const target = (args[0] || '').toUpperCase();
  const center = zoneCenters.get(target);
  if (!center) return { type: OutputType.ERROR, text: `Zone ${target} not found.` };
  controls.focusTo(center, { distance: 34 });
  return { type: OutputType.SYSTEM, text: `Navigating to ${target}...` };
});

registry.register('trace', 'Print last transitions for agent', (args) => {
  const id = (args[0] || '').toUpperCase();
  const trace = diag.getTrace(id);
  if (trace.length === 0) return { type: OutputType.INFO, text: `No trace data for ${id}` };
  const lines = trace.map(t => `[${new Date(t.ts).toLocaleTimeString()}] ${t.state}`).join(' -> ');
  return { type: OutputType.AGENT, text: `${id} TRACE: ${lines}` };
});

registry.register('watch', 'Live stream agent updates', (args) => {
  const id = (args[0] || '').toUpperCase();
  if (diag.watchTargets.has(id)) {
    diag.watchTargets.delete(id);
    return { type: OutputType.SYSTEM, text: `Stopped watching ${id}` };
  }
  diag.watchTargets.add(id);
  return { type: OutputType.SYSTEM, text: `Now watching ${id} [Live updates stream]` };
});

registry.register('metrics', 'System-wide metrics', () => {
  const m = diag.getMetrics(swarm);
  return { 
    type: OutputType.SYSTEM, 
    text: `SWARM:${m.swarmSize} | STRESS:${(m.avgStress * 100).toFixed(1)}% | E:${m.stateDistribution.executing} S:${m.stateDistribution.syncing} ERR:${m.stateDistribution.error}`
  };
});

registry.register('record', 'Start/Stop recording session', (args) => {
  if (args[0] === 'start') {
    diag.startRecording();
    return { type: OutputType.SYSTEM, text: 'Recording started.' };
  }
  const data = diag.stopRecording();
  return { type: OutputType.SUCCESS, text: `Recording stopped. Captured ${data.length} events.` };
});

registry.register('dump', 'List agents in zone', (args) => {
  const zoneName = (args[0] || '').toUpperCase();
  const agentsInZone = swarm.filter(a => a.ctx.zone?.toUpperCase() === zoneName);
  return { 
    type: OutputType.INFO, 
    text: `${zoneName} AGENTS: ${agentsInZone.map(a => a.ctx.id).join(', ') || 'None'}` 
  };
});

registry.register('clear', 'Clear console', () => {
  terminalUI.outputArea.innerHTML = '';
  return { type: OutputType.SYSTEM, text: 'Terminal cleared.' };
});

// 3. Animation Loop
let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  interaction.update(now, interactableMeshes);
  
  const coordEvents = swarmCoordinator.coordinate(swarm, zoneCenters, dt);
  coordEvents.forEach(ev => {
    if (ev.type === 'ROUTE_SUGGESTION') {
      const a = swarm.find(s => s.ctx.id === ev.agentId);
      if (a && (a.state === 'IDLE' || a.state === 'SEEK_TASK')) {
        a.ctx.destinationZone = ev.targetZone;
        a.state = 'NAVIGATE';
      }
    }
  });

  const ticked = tickAgents(swarm, Date.now(), dt, zoneCenters);
  const metrics = { avgStress: 0, execRatio: 0, errorRatio: 0 };
  const zoneActivity = new Map();

  for (let i = 0; i < ticked.length; i++) {
    const s = ticked[i];
    const prevMachine = swarm[i];
    
    // Log transitions to diag
    if (prevMachine.state !== s.state) {
      const update = diag.logTransition(s.ctx.id, s.state);
      if (update) terminalUI.print(`WATCH: ${update.agentId} shifted to ${update.state}`, OutputType.AGENT);
    }

    swarm[i] = s;
    const m = agentMeshesMap.get(s.ctx.id);
    m.position.set(s.ctx.position.x, 0, s.ctx.position.z);
    
    const st = statusFromState(s.state);
    m.userData.core.material.color.setHex(statusColor[st]);
    
    const isHovered = (interaction.hoveredObject === s.ctx.id);
    labels.updateLabel(s.ctx.id, m, s.ctx.id, st, isHovered);

    metrics.avgStress += s.ctx.stress / swarm.length;
    if (st === 'executing') metrics.execRatio += 1 / swarm.length;
    if (st === 'error') metrics.errorRatio += 1 / swarm.length;
    if (s.ctx.zone) {
      const z = s.ctx.zone.toUpperCase();
      zoneActivity.set(z, (zoneActivity.get(z) || 0) + 1);
    }
  }

  loadViz.update(dt, metrics, zoneActivity);
  dataFlow.update(dt, agentMeshesMap);
  controls.update(dt);
  renderer.render(scene, camera);
}

animate(performance.now());
terminalUI.print('OPENCLAW KERNEL READY.', OutputType.SYSTEM);
terminalUI.print('Live-ops diagnostics enabled.', OutputType.INFO);

import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { HubControls } from './HubControls.js';
import { createSwarm, tickAgents } from './sim_loop.js';
import { statusFromState } from './agent_fsm.js';
import { AgentLabelSystem } from './AgentLabelSystem.js';
import { HoverInteractionSystem } from './HoverInteractionSystem.js';
import { TerminalCore, CommandRegistry, OutputType } from './TerminalCore.js';
import { TerminalUI } from './TerminalUI.js';
import { EventBus, MetricsStore } from './CoreSystems.js';
import { LoadVizSystem } from './LoadVizSystem.js';
import { DataFlowVizSystem } from './DataFlowVizSystem.js';
import { SwarmCoordinator } from './SwarmCoordinator.js';

const app = document.getElementById('app');
const terminalContainer = document.getElementById('terminal-container') || app;

// 1. Setup Kernel Systems
const bus = new EventBus();
const metrics = new MetricsStore();
const registry = new CommandRegistry();
const termCore = new TerminalCore(registry);
const termUI = new TerminalUI(terminalContainer, termCore);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8f8f8f);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
app.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1500);
camera.position.set(90, 90, 90);

const controls = new HubControls({ domElement: renderer.domElement, camera });
const loadViz = new LoadVizSystem(scene);
const dataFlow = new DataFlowVizSystem(scene);
const coordinator = new SwarmCoordinator(bus);
const labels = new AgentLabelSystem(scene, camera);
const interaction = new HoverInteractionSystem(renderer.domElement, camera, controls);

scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const key = new THREE.DirectionalLight(0xffffff, 0.4);
key.position.set(40, 90, 20);
scene.add(key);

// 2. Scene Layout
const ZONES = ['/AGENTS/STATUS', '/AGENTS/DEPLOY', '/TASK/ASSIGN', '/SIMULATION', '/EVALUATION', '/OPTIMIZATION', '/REPUTATION', '/MARKETPLACE', '/GATEWAY', '/ARCHIVE'];
const zoneCenters = new Map();
const interactables = [];

ZONES.forEach((path, i) => {
  const x = (i % 4) * 40 - 60, z = Math.floor(i / 4) * 40 - 40;
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(30, 0.2, 22), new THREE.MeshLambertMaterial({ color: 0xd8d8d8 }));
  g.add(floor);
  g.userData = { id: path, type: 'zone' };
  scene.add(g);
  zoneCenters.set(path.toUpperCase(), new THREE.Vector3(x, 0, z));
  interactables.push(g);
});

// 3. Swarm Initialization
const swarm = createSwarm(140);
const meshMap = new Map();
coordinator.assignRoles(swarm);

swarm.forEach(a => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.9, 4, 8), new THREE.MeshLambertMaterial({ color: 0x2f2f2f }));
  body.position.y = 0.9;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshBasicMaterial({ color: 0x999999 }));
  core.position.set(0, 1.4, 0.2);
  g.add(body, core);
  g.position.set(a.ctx.position.x, 0, a.ctx.position.z);
  g.userData = { id: a.ctx.id, type: 'agent', core, body };
  scene.add(g);
  meshMap.set(a.ctx.id, g);
  interactables.push(g);
});

// 4. Command Interface
registry.register('focus', 'Focus camera', (args) => {
  const target = (args[0] || '').toUpperCase();
  const center = zoneCenters.get(target);
  if (center) controls.focusTo(center);
  return { type: OutputType.SYSTEM, text: `Focusing ${target}` };
});

registry.register('metrics', 'Show system metrics', () => {
  const s = metrics.getSnapshot();
  return { type: OutputType.SUCCESS, text: `E:${s.executingCount} S:${s.syncingCount} ERR:${s.errorCount} STRESS:${(s.avgStress*100).toFixed(1)}%` };
});

bus.on('ROUTE_SUGGESTION', ev => {
  const a = swarm.find(s => s.ctx.id === ev.agentId);
  if (a && a.state === 'IDLE') {
    if (ev.targetZone) a.ctx.destinationZone = ev.targetZone, a.state = 'NAVIGATE';
    if (ev.targetPosition) a.ctx.destination = { ...ev.targetPosition }, a.state = 'NAVIGATE';
  }
});

// 5. Render Loop
let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  metrics.update(swarm);
  coordinator.observe(swarm, zoneCenters, metrics.getSnapshot());
  interaction.update(now, interactables);
  loadViz.update(dt, metrics.getSnapshot());
  dataFlow.update(dt, meshMap);

  const ticked = tickAgents(swarm, Date.now(), dt, zoneCenters);
  ticked.forEach((s, i) => {
    swarm[i] = s;
    const m = meshMap.get(s.ctx.id);
    m.position.set(s.ctx.position.x, 0, s.ctx.position.z);
    const st = statusFromState(s.state);
    m.userData.core.material.color.setHex({idle:0x9ca3af, executing:0x10b981, syncing:0x3b82f6, error:0xef4444}[st]);
    labels.updateLabel(s.ctx.id, m, s.ctx.id, st, interaction.hoveredObject === s.ctx.id);
    
    if (Math.random() < 0.002) {
      const target = swarm[Math.floor(Math.random()*swarm.length)].ctx.id;
      if (target !== s.ctx.id) dataFlow.pushMessage({ fromId: s.ctx.id, toId: target, topic: 'sync' }, meshMap);
    }
  });

  controls.update(dt);
  renderer.render(scene, camera);
}

animate(performance.now());
termUI.print('OPENCLAW KERNEL v2.0.0-PRO', OutputType.SYSTEM);

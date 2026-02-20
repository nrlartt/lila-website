import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { HubControls } from './HubControls.js';
import { createSwarm, tickAgents } from './sim_loop.js';
import { statusFromState } from './agent_fsm.js';
import { AgentLabelSystem } from './AgentLabelSystem.js';
import { HoverInteractionSystem } from './HoverInteractionSystem.js';
import { TerminalCore, CommandRegistry, OutputType } from './TerminalCore.js';
import { TerminalUI } from './TerminalUI.js';
import { EventBus, MetricsStore } from './SystemsCore.js';
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
scene.background = new THREE.Color(0x1a1a1a); // Daha koyu, profesyonel zemin
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
app.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 2000);
camera.position.set(120, 120, 120);

const controls = new HubControls({ domElement: renderer.domElement, camera });
const loadViz = new LoadVizSystem(scene, { baseColor: new THREE.Color(0x1a1a1a) });
const dataFlow = new DataFlowVizSystem(scene);
const coordinator = new SwarmCoordinator(bus);
const labels = new AgentLabelSystem(scene, camera);
const interaction = new HoverInteractionSystem(renderer.domElement, camera, controls);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const key = new THREE.DirectionalLight(0xffffff, 0.8);
key.position.set(50, 100, 50);
scene.add(key);

// Helper for zone labels
function createTextTexture(text) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 128;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 40px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// 2. Scene Layout (Zones & Walls)
const ZONES = ['/AGENTS/STATUS', '/AGENTS/DEPLOY', '/TASK/ASSIGN', '/SIMULATION', '/EVALUATION', '/OPTIMIZATION', '/REPUTATION', '/MARKETPLACE', '/GATEWAY', '/ARCHIVE'];
const zoneCenters = new Map();
const interactables = [];

ZONES.forEach((path, i) => {
  const x = (i % 4) * 60 - 90, z = Math.floor(i / 4) * 50 - 50;
  const g = new THREE.Group(); 
  g.position.set(x, 0, z);
  
  // Floor
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(40, 0.5, 30), 
    new THREE.MeshLambertMaterial({ color: 0x2a2a2a })
  );
  g.add(floor);

  // Walls
  const wallMat = new THREE.MeshLambertMaterial({ color: 0x333333, transparent: true, opacity: 0.5 });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(40, 8, 1), wallMat);
  backWall.position.set(0, 4, -15);
  g.add(backWall);

  // Label
  const labelTex = createTextTexture(path);
  const label = new THREE.Mesh(new THREE.PlaneGeometry(24, 6), new THREE.MeshBasicMaterial({ map: labelTex, transparent: true }));
  label.position.set(0, 9, -14.5);
  label.rotation.x = -Math.PI / 12;
  g.add(label);

  g.userData = { id: path, type: 'zone' };
  scene.add(g);
  zoneCenters.set(path.toUpperCase(), new THREE.Vector3(x, 0, z));
  interactables.push(g);
  loadViz.registerZone(path.toUpperCase(), g);
});

// 3. Swarm Initialization
const swarm = createSwarm(140);
const meshMap = new Map();
coordinator.assignRoles(swarm);

swarm.forEach(a => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.0, 4, 8), new THREE.MeshLambertMaterial({ color: 0x333333 }));
  body.position.y = 1.0;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), new THREE.MeshBasicMaterial({ color: 0x999999 }));
  core.position.set(0, 1.5, 0.3);
  g.add(body, core);
  
  // Start at random positions to avoid clumping
  const rx = (Math.random() - 0.5) * 200;
  const rz = (Math.random() - 0.5) * 200;
  a.ctx.position = { x: rx, y: 0, z: rz };
  g.position.set(rx, 0, rz);
  
  g.userData = { id: a.ctx.id, type: 'agent', core, body };
  scene.add(g);
  meshMap.set(a.ctx.id, g);
  interactables.push(g);
});

// 4. Events & Logic
bus.on('ROUTE_SUGGESTION', ev => {
  const a = swarm.find(s => s.ctx.id === ev.agentId);
  if (a && (a.state === 'IDLE' || a.state === 'COOLDOWN')) {
    if (ev.targetZone) {
      const center = zoneCenters.get(ev.targetZone.toUpperCase());
      if (center) {
        a.ctx.destination = { x: center.x + (Math.random()-0.5)*10, y: 0, z: center.z + (Math.random()-0.5)*10 };
        a.state = 'NAVIGATE';
      }
    }
  }
});

// 5. Render Loop
let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  try {
    const snap = metrics.getSnapshot();
    metrics.update(swarm);
    coordinator.observe(swarm, zoneCenters, snap);
    interaction.update(now, interactables);
    loadViz.update(dt, snap);
    dataFlow.update(dt, meshMap);

    const ticked = tickAgents(swarm, Date.now(), dt, zoneCenters);
    
    for (let i = 0; i < ticked.length; i++) {
      swarm[i] = ticked[i];
      const s = swarm[i];
      const m = meshMap.get(s.ctx.id);
      if (!m) continue;

      m.position.set(s.ctx.position.x, 0, s.ctx.position.z);
      const st = statusFromState(s.state);
      
      // Update core color
      const colors = { idle: 0x9ca3af, executing: 0x10b981, syncing: 0x3b82f6, error: 0xef4444 };
      m.userData.core.material.color.setHex(colors[st] || 0x999999);
      
      // Update labels
      labels.updateLabel(s.ctx.id, m, s.ctx.id, st, interaction.hoveredObject === s.ctx.id);

      // Random data flow
      if (Math.random() < 0.001) {
        const target = swarm[Math.floor(Math.random() * swarm.length)].ctx.id;
        if (target !== s.ctx.id) {
          dataFlow.pushMessage({ fromId: s.ctx.id, toId: target, topic: 'sync' }, meshMap);
        }
      }
    }
  } catch (err) {
    console.error("Loop Error:", err);
  }

  controls.update(dt);
  renderer.render(scene, camera);
}

// Global Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate(performance.now());
termUI.print('OPENCLAW KERNEL v2.1.0-STABLE', OutputType.SUCCESS);
termUI.print('All systems synchronized.', OutputType.INFO);

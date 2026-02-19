import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { HubControls } from './HubControls.js';
import { createSwarm, tickAgents } from './sim_loop.js';
import { statusFromState } from './agent_fsm.js';
import { AgentLabelSystem } from './AgentLabelSystem.js';
import { HoverInteractionSystem } from './HoverInteractionSystem.js';
import { LoadVizSystem } from './LoadVizSystem.js';
import { DataFlowVizSystem } from './DataFlowVizSystem.js';

const app = document.getElementById('app');
const out = document.getElementById('out');
const cmd = document.getElementById('cmd');
const run = document.getElementById('run');

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

// Modules
const controls = new HubControls({
  domElement: renderer.domElement,
  camera,
  groundY: 0,
  minZoom: 10,
  maxZoom: 120,
  panSpeed: 1.0,
  zoomSpeed: 0.0028,
  rotateSpeed: 0.0032
});

const labels = new AgentLabelSystem(scene, camera);
const interaction = new HoverInteractionSystem(renderer.domElement, camera, controls);
const loadViz = new LoadVizSystem(scene, { baseColor: new THREE.Color(0x8f8f8f) });
const dataFlow = new DataFlowVizSystem(scene, { maxLinks: 80 });

function textCanvas(text, w = 720, h = 130, bg = '#101010', fg = '#fff', font = 'bold 56px monospace') {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2 + 1);
  return c;
}

function zoneLabel(path) {
  const t = new THREE.CanvasTexture(textCanvas(path));
  const m = new THREE.Mesh(new THREE.PlaneGeometry(16, 2.8), new THREE.MeshBasicMaterial({ map: t }));
  m.rotation.x = -Math.PI / 8;
  m.userData.id = path;
  m.userData.type = 'zone';
  return m;
}

function addZone(path, x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(30, 0.24, 22), new THREE.MeshLambertMaterial({ color: 0xd8d8d8 }));
  floor.position.y = 0.12;
  g.add(floor);
  const wallMat = new THREE.MeshLambertMaterial({ color: 0xe3e3e3 });
  const left = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 22), wallMat); left.position.set(-15, 2, 0);
  const right = left.clone(); right.position.x = 15;
  const back = new THREE.Mesh(new THREE.BoxGeometry(30, 4, 1), wallMat); back.position.set(0, 2, -11);
  g.add(left, right, back);
  const label = zoneLabel(path);
  label.position.set(0, 5.9, -9.5);
  g.add(label);
  g.userData.id = path;
  g.userData.type = 'zone';
  scene.add(g);
  zoneMap.set(path.toUpperCase(), label);
  zoneCenters.set(path.toUpperCase(), new THREE.Vector3(x, 0, z));
  zoneLabels.push(label);
  interactableMeshes.push(g);
  loadViz.registerZone(path.toUpperCase(), g);
}

ZONES.forEach((z, i) => addZone(z, layout[i][0], layout[i][1]));

const cMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
[[170, -28, 16], [170, 10, 16], [16, 8, 122], [88, 48, 16]].forEach(([w, z, d], i) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), cMat);
  mesh.position.set(i === 2 ? 2 : (i === 3 ? 24 : 2), 0.06, z);
  scene.add(mesh);
});

const swarm = createSwarm(140);
const agentMeshes = [];
const agentMeshesMap = new Map();
const statusColor = { idle: 0x9ca3af, executing: 0x10b981, syncing: 0x3b82f6, error: 0xef4444 };

swarm.forEach((m) => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 0.9, 4, 8), new THREE.MeshLambertMaterial({ color: 0x2f2f2f }));
  body.position.y = 0.95;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 10), new THREE.MeshBasicMaterial({ color: statusColor.idle }));
  core.position.set(0, 1.38, 0.28);
  g.add(body, core);
  g.position.set(m.ctx.position.x, 0, m.ctx.position.z);
  g.userData.id = m.ctx.id;
  g.userData.type = 'agent';
  g.userData.core = core;
  g.userData.body = body;
  scene.add(g);
  agentMeshes.push(g);
  agentMeshesMap.set(m.ctx.id, g);
  interactableMeshes.push(g);
});

// Hover Effect Integration
interaction.onHoverChange = (id, type, isHovering) => {
  if (type === 'agent') {
    const mesh = agentMeshesMap.get(id);
    if (mesh) {
      mesh.userData.body.material.emissive.setHex(isHovering ? 0x333333 : 0x000000);
      mesh.userData.body.material.emissiveIntensity = isHovering ? 0.4 : 0;
    }
  } else if (type === 'zone') {
    const label = zoneLabels.find(l => l.userData.id === id);
    if (label) label.material.color.setHex(isHovering ? 0xcccccc : 0xffffff);
  }
};

function focusZone(path, zoom) {
  const center = zoneCenters.get(path.toUpperCase());
  if (!center) return false;
  controls.focusTo(center, { distance: zoom ?? 34 });
  out.textContent = `Focused ${path}`;
  return true;
}

function runCommand(raw) {
  const line = String(raw || '').trim();
  if (!line) return;
  const U = line.toUpperCase();
  if (zoneMap.has(U)) return focusZone(U);
  if (U.startsWith('/FOCUS ')) return focusZone(line.slice(7).trim()) || (out.textContent = 'Unknown zone');
  if (U === '/STATUS') {
    const c = { idle: 0, executing: 0, syncing: 0, error: 0 };
    swarm.forEach(s => c[statusFromState(s.state)]++);
    out.textContent = `idle:${c.idle} executing:${c.executing} syncing:${c.syncing} error:${c.error}`;
    return;
  }
  out.textContent = `Unknown command: ${line}`;
}

run.addEventListener('click', () => runCommand(cmd.value));
cmd.addEventListener('keydown', (e) => { if (e.key === 'Enter') runCommand(cmd.value); });
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== cmd) { e.preventDefault(); cmd.focus(); }
  if (e.key === 'Escape') { cmd.blur(); out.textContent = 'Free camera mode'; }
});

let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  interaction.update(now, interactableMeshes);
  const ticked = tickAgents(swarm, Date.now(), dt, zoneCenters);
  const metrics = { avgStress: 0, execRatio: 0, errorRatio: 0 };
  const zoneActivity = new Map();

  for (let i = 0; i < ticked.length; i++) {
    swarm[i] = ticked[i];
    const m = agentMeshes[i];
    const s = swarm[i];
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

    // Occasional simulated messaging for traffic effect
    if (Math.random() < 0.002) {
      const target = swarm[(Math.random() * swarm.length) | 0].ctx.id;
      if (target !== s.ctx.id) {
        const topics = ['sync','task','help','metrics'];
        dataFlow.pushMessage({
          from: s.ctx.id,
          to: target,
          topic: topics[(Math.random() * topics.length) | 0],
          size: Math.random()
        }, agentMeshesMap);
      }
    }
  }

  loadViz.update(dt, metrics, zoneActivity);
  dataFlow.update(dt, agentMeshesMap);
  controls.update(dt);
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

focusZone('/AGENTS/STATUS', 34);
animate(performance.now());

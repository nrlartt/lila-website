import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';
import { HubControls } from './HubControls.js';
import { createSwarm, tickAgents } from './sim_loop.js';
import { statusFromState } from './agent_fsm.js';

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

const ground = new THREE.Mesh(new THREE.PlaneGeometry(1800, 1800), new THREE.MeshLambertMaterial({ color: 0x949494 }));
ground.rotation.x = -Math.PI / 2;
scene.add(ground);
scene.add(new THREE.GridHelper(640, 128, 0x838383, 0x8f8f8f));

const zoneMap = new Map();
const zoneCenters = new Map();
const zoneLabels = [];

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
  m.userData.path = path;
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

  const edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(30, 4, 22)), new THREE.LineBasicMaterial({ color: 0xb8b8b8 }));
  edge.position.y = 2;
  g.add(edge);

  const label = zoneLabel(path);
  label.position.set(0, 5.9, -9.5);
  g.add(label);

  scene.add(g);
  zoneMap.set(path.toUpperCase(), label);
  zoneCenters.set(path.toUpperCase(), new THREE.Vector3(x, 0, z));
  zoneLabels.push(label);
}

ZONES.forEach((z, i) => addZone(z, layout[i][0], layout[i][1]));

const cMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
[[170, -28, 16], [170, 10, 16], [16, 8, 122], [88, 48, 16]].forEach(([w, z, d], i) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(i === 2 ? w : w, 0.12, i === 2 ? d : d), cMat);
  mesh.position.set(i === 2 ? 2 : (i === 3 ? 24 : 2), 0.06, z);
  scene.add(mesh);
});

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

const swarm = createSwarm(140);
const agentMeshes = [];

function idSprite(id, status) {
  const tex = new THREE.CanvasTexture(textCanvas(`${id} [${status}]`, 330, 64, 'rgba(0,0,0,.72)', '#f4f4f4', 'bold 28px monospace'));
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sp.scale.set(6.6, 1.3, 1);
  return sp;
}

const statusColor = { idle: 0x9ca3af, executing: 0x10b981, syncing: 0x3b82f6, error: 0xef4444 };

swarm.forEach((m) => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 0.9, 4, 8), new THREE.MeshLambertMaterial({ color: 0x2f2f2f }));
  body.position.y = 0.95;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 10), new THREE.MeshBasicMaterial({ color: statusColor.idle }));
  core.position.set(0, 1.38, 0.28);
  const tag = idSprite(m.ctx.id, 'idle');
  tag.position.set(0, 2.4, 0);
  g.add(body, core, tag);
  g.position.set(m.ctx.position.x, 0, m.ctx.position.z);
  g.userData.agentId = m.ctx.id;
  g.userData.tag = tag;
  g.userData.core = core;
  scene.add(g);
  agentMeshes.push(g);
});

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
  if (U.startsWith('/TASK ')) {
    const parts = line.split(/\s+/);
    if (parts.length < 3) return (out.textContent = 'Usage: /TASK CLAW-014 optimize-path');
    const id = parts[1].toUpperCase();
    const task = parts.slice(2).join(' ');
    const a = swarm.find(s => s.ctx.id === id);
    if (!a) return (out.textContent = `Unknown agent: ${id}`);
    a.ctx.task = { id: `manual-${Date.now()}`, type: 'OPTIMIZE', targetZone: '/TASK/ASSIGN', ttlMs: 12000, payload: { text: task } };
    out.textContent = `${id} assigned: ${task}`;
    return;
  }
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
  if (e.key === '/' && document.activeElement !== cmd) {
    e.preventDefault();
    cmd.focus();
    cmd.setSelectionRange(cmd.value.length, cmd.value.length);
  }
  if (e.key === 'Escape') {
    cmd.blur();
    out.textContent = 'Free camera mode';
  }
});

const ray = new THREE.Raycaster();
const mouse = new THREE.Vector2();
renderer.domElement.addEventListener('click', (e) => {
  if (e.target !== renderer.domElement) return;
  const r = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  ray.setFromCamera(mouse, camera);

  const zHit = ray.intersectObjects(zoneLabels, true)[0];
  if (zHit?.object?.userData?.path) {
    focusZone(zHit.object.userData.path, 30);
    return;
  }

  const aHit = ray.intersectObjects(agentMeshes, true)[0];
  if (aHit) {
    const root = aHit.object.parent?.userData?.agentId ? aHit.object.parent : aHit.object;
    const id = root.userData.agentId;
    const a = swarm.find(s => s.ctx.id === id);
    if (a) {
      controls.focusTo(new THREE.Vector3(a.ctx.position.x, 0, a.ctx.position.z), { distance: 22 });
      out.textContent = `${id} • ${statusFromState(a.state)} • task:${a.ctx.task?.payload?.text || a.ctx.task?.type || 'none'}`;
    }
  }
});

let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  const ticked = tickAgents(swarm, Date.now(), dt, zoneCenters);
  for (let i = 0; i < ticked.length; i++) {
    swarm[i] = ticked[i];
    const m = agentMeshes[i];
    const s = swarm[i];
    m.position.set(s.ctx.position.x, 0, s.ctx.position.z);

    const st = statusFromState(s.state);
    m.userData.core.material.color.setHex(statusColor[st]);

    if (Math.random() < 0.01) {
      m.remove(m.userData.tag);
      m.userData.tag = idSprite(s.ctx.id, st);
      m.userData.tag.position.set(0, 2.4, 0);
      m.add(m.userData.tag);
    }
  }

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

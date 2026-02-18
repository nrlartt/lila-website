import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { createInputManager } from "./inputManager";

type AgentMeta = { name?: string; state?: string; taskId?: string; lastSeen?: string; path?: Array<{ x: number; z: number }> };

type AgentRecord = {
  id: string;
  mesh: THREE.Mesh;
  label: HTMLDivElement;
  pathLine?: THREE.Line;
  meta: Required<Pick<AgentMeta, "name" | "state" | "lastSeen">> & Pick<AgentMeta, "taskId" | "path">;
};

export function startWorld(container: HTMLElement, options?: { pointerLockEnabled?: () => boolean }) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x8db5e9, 80, 520);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1500);
  camera.position.set(0, 3, 8);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.zIndex = "1";
  container.appendChild(renderer.domElement);

  const controls = new PointerLockControls(camera, renderer.domElement);
  scene.add(controls.getObject());

  const labelLayer = document.createElement("div");
  labelLayer.style.position = "fixed";
  labelLayer.style.inset = "0";
  labelLayer.style.pointerEvents = "none";
  labelLayer.style.zIndex = "30";
  container.appendChild(labelLayer);

  const hemi = new THREE.HemisphereLight(0xdbeafe, 0x1e293b, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(180, 210, 70);
  sun.castShadow = true;
  scene.add(sun);

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(1200, 32, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x74a8ff) },
        bottomColor: { value: new THREE.Color(0xecf5ff) }
      },
      vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,
      fragmentShader: `uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vPos; void main(){ float h = normalize(vPos).y*0.5+0.5; gl_FragColor=vec4(mix(bottomColor, topColor, smoothstep(0.0,1.0,h)),1.0);}`
    })
  );
  scene.add(sky);

  // Terrain with subtle hills
  const terrain = new THREE.PlaneGeometry(900, 900, 120, 120);
  const p = terrain.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const z = p.getY(i);
    const y = terrainHeight(x, z);
    p.setZ(i, y);
  }
  p.needsUpdate = true;
  terrain.computeVertexNormals();

  const groundTex = new THREE.CanvasTexture(createGroundCanvas());
  groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping;
  groundTex.repeat.set(36, 36);

  const ground = new THREE.Mesh(terrain, new THREE.MeshStandardMaterial({ map: groundTex, roughness: 0.97, metalness: 0.02 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Roads / paths
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.93 });
  addRoad(0, -40, 16, 220, roadMat);
  addRoad(80, -20, 16, 180, roadMat, Math.PI / 2);
  addRoad(-90, -15, 14, 210, roadMat, Math.PI / 2);

  const navmeshOverlay = new THREE.GridHelper(180, 45, 0x22c55e, 0x14532d);
  navmeshOverlay.position.set(0, terrainHeight(0, 0) + 0.08, 0);
  navmeshOverlay.visible = showNavmeshDebug;
  scene.add(navmeshOverlay);

  // Zones
  const zones = [
    { name: "Town Center", x: 0, z: -30, color: 0x334155 },
    { name: "Residential", x: 95, z: -15, color: 0x3f3f46 },
    { name: "Forest Edge", x: -110, z: 20, color: 0x14532d },
    { name: "Research District", x: 0, z: 110, color: 0x1f2937 }
  ];

  type Collider = { minX: number; maxX: number; minZ: number; maxZ: number };
  const staticColliders: Collider[] = [];
  const debugColliders: THREE.LineSegments[] = [];
  let showColliderDebug = false;
  let showPathDebug = false;
  let showNavmeshDebug = false;

  const addCollider = (x: number, z: number, w: number, d: number) => {
    staticColliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });

    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, 4, d));
    const wire = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0xff0000 }));
    wire.position.set(x, terrainHeight(x, z) + 2, z);
    wire.visible = showColliderDebug;
    scene.add(wire);
    debugColliders.push(wire);
  };

  const landmarks: THREE.Object3D[] = [];
  const addLandmarkLabel = (obj: THREE.Object3D, text: string) => {
    const label = document.createElement("div");
    label.textContent = text;
    label.style.position = "absolute";
    label.style.padding = "2px 6px";
    label.style.border = "1px solid #1e293b";
    label.style.borderRadius = "6px";
    label.style.background = "rgba(15,23,42,.85)";
    label.style.color = "#f8fafc";
    label.style.font = "10px Inter, sans-serif";
    labelLayer.appendChild(label);
    (obj as any).__landmarkLabel = label;
  };

  // Landmarks and structures
  const plaza = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 0.8, 48), new THREE.MeshStandardMaterial({ color: 0x475569 }));
  plaza.position.set(0, terrainHeight(0, -30) + 0.4, -30);
  scene.add(plaza); landmarks.push(plaza); addLandmarkLabel(plaza, "Town Center Plaza");
  addCollider(0, -30, 10, 10);

  const statue = new THREE.Mesh(new THREE.CapsuleGeometry(1.5, 6, 8, 12), new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
  statue.position.set(0, terrainHeight(0, -30) + 4.5, -30);
  scene.add(statue); landmarks.push(statue); addLandmarkLabel(statue, "Founder Statue");

  const portal = new THREE.Mesh(new THREE.TorusGeometry(6, 0.8, 18, 72), new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x581c87 }));
  portal.position.set(-2, terrainHeight(-2, -55) + 8, -55);
  scene.add(portal); landmarks.push(portal); addLandmarkLabel(portal, "Portal Gate");

  const billboardCanvas = createBillboardCanvas("AGENTVERSE LIVE");
  const billboardTex = new THREE.CanvasTexture(billboardCanvas);
  const billboard = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), new THREE.MeshStandardMaterial({ map: billboardTex, emissive: 0x111827, emissiveIntensity: 0.25 }));
  billboard.position.set(14, terrainHeight(14, -34) + 8, -34);
  scene.add(billboard); landmarks.push(billboard); addLandmarkLabel(billboard, "Live Board");

  const kiosk = makeBox(6, 4, 6, 0x1d4ed8, -16, -20);
  landmarks.push(kiosk); addLandmarkLabel(kiosk, "Task Kiosk");

  const fountain = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1, 24), new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 }));
  fountain.position.set(-12, terrainHeight(-12, -18) + 0.5, -18);
  scene.add(fountain); landmarks.push(fountain); addLandmarkLabel(fountain, "Fountain");

  const bridge = makeBox(22, 1.2, 6, 0x64748b, -100, 42);
  landmarks.push(bridge); addLandmarkLabel(bridge, "Forest Bridge");

  const arch = new THREE.Mesh(new THREE.TorusGeometry(7, 0.6, 12, 40, Math.PI), new THREE.MeshStandardMaterial({ color: 0x64748b }));
  arch.position.set(0, terrainHeight(0, 95) + 7, 95);
  arch.rotation.z = Math.PI;
  scene.add(arch); landmarks.push(arch); addLandmarkLabel(arch, "Research Arch");

  // Spawn marker
  const spawn = new THREE.Mesh(new THREE.CircleGeometry(2, 40), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
  spawn.rotation.x = -Math.PI / 2;
  spawn.position.set(0, terrainHeight(0, 0) + 0.05, 0);
  scene.add(spawn);

  // Buildings / structures (20+)
  for (let i = 0; i < 24; i++) {
    const zone = i < 12 ? "res" : "research";
    const x = zone === "res" ? 60 + (i % 6) * 14 : -20 + (i % 6) * 14;
    const z = zone === "res" ? -50 + Math.floor(i / 6) * 20 : 80 + Math.floor((i - 12) / 6) * 18;
    const h = 5 + (i % 3);
    makeBox(8, h, 8, zone === "res" ? 0xe5e7eb : 0xcbd5e1, x, z);
  }

  // Props: benches, lamps, signs, rocks (>10)
  for (let i = 0; i < 6; i++) {
    makeBox(3, 0.5, 1, 0x92400e, -8 + i * 3, -12);
  }
  for (let i = 0; i < 10; i++) {
    const lamp = makeBox(0.4, 4.8, 0.4, 0x475569, -20 + i * 8, -2 + (i % 2) * 12);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
    bulb.position.set(lamp.position.x, lamp.position.y + 2.6, lamp.position.z);
    scene.add(bulb);
  }
  for (let i = 0; i < 6; i++) {
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 1), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    sign.position.set(-30 + i * 14, terrainHeight(-30 + i * 14, 25) + 2.5, 25);
    scene.add(sign);
  }

  // Instanced trees and rocks
  addInstancedTrees(60);
  addInstancedRocks(40);

  // simple water body (forest pond)
  const pond = new THREE.Mesh(new THREE.CircleGeometry(26, 40), new THREE.MeshStandardMaterial({ color: 0x2563eb, transparent: true, opacity: 0.65 }));
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(-120, terrainHeight(-120, 38) + 0.03, 38);
  scene.add(pond);

  // Ambient audio
  let audioCtx: AudioContext | null = null;
  let osc: OscillatorNode | null = null;
  let gain: GainNode | null = null;

  const agents = new Map<string, AgentRecord>();
  const input = createInputManager(window);
  const moveVelocity = new THREE.Vector3();
  const moveDirection = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let selectedAgentId: string | null = null;
  let hoveredAgentId: string | null = null;
  let selectionChangedCb: ((payload: { id: string; name: string; status: string; lastSeen: string }) => void) | null = null;
  let headingChangedCb: ((heading: string) => void) | null = null;

  function makeBox(w: number, h: number, d: number, color: number, x: number, z: number) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
    mesh.position.set(x, terrainHeight(x, z) + h / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    addCollider(x, z, w, d);
    return mesh;
  }

  function addRoad(x: number, z: number, w: number, d: number, mat: THREE.Material, rot = 0) {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
    road.rotation.x = -Math.PI / 2;
    road.rotation.z = rot;
    road.position.set(x, terrainHeight(x, z) + 0.04, z);
    scene.add(road);
  }

  function addInstancedTrees(count: number) {
    const trunkGeo = new THREE.CylinderGeometry(0.25, 0.35, 2.8, 8);
    const crownGeo = new THREE.SphereGeometry(1.6, 8, 8);
    const trunk = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x7c4a2a }), count);
    const crown = new THREE.InstancedMesh(crownGeo, new THREE.MeshStandardMaterial({ color: 0x15803d }), count);
    const m = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const x = -180 + Math.random() * 360;
      const z = -180 + Math.random() * 360;
      if (Math.abs(x) < 50 && Math.abs(z + 20) < 70) continue;
      const y = terrainHeight(x, z);
      m.makeTranslation(x, y + 1.4, z);
      trunk.setMatrixAt(i, m);
      m.makeTranslation(x, y + 3.3, z);
      crown.setMatrixAt(i, m);
    }
    scene.add(trunk, crown);
  }

  function addInstancedRocks(count: number) {
    const geo = new THREE.DodecahedronGeometry(1.2, 0);
    const rocks = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x6b7280 }), count);
    const m = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const x = -200 + Math.random() * 400;
      const z = -200 + Math.random() * 400;
      const s = 0.4 + Math.random() * 1.4;
      m.compose(
        new THREE.Vector3(x, terrainHeight(x, z) + s * 0.6, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random(), Math.random(), Math.random())),
        new THREE.Vector3(s, s, s)
      );
      rocks.setMatrixAt(i, m);
    }
    scene.add(rocks);
  }

  function ensureAgent(id: string) {
    let rec = agents.get(id);
    if (!rec) {
      const material = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x000000 });
      const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.0, 4, 10), material);
      mesh.castShadow = true;
      mesh.userData.agentId = id;
      scene.add(mesh);

      const label = document.createElement("div");
      label.style.position = "absolute";
      label.style.padding = "2px 6px";
      label.style.border = "1px solid #334155";
      label.style.borderRadius = "6px";
      label.style.background = "rgba(2,6,23,.75)";
      label.style.color = "#e2e8f0";
      label.style.font = "11px Inter, sans-serif";
      labelLayer.appendChild(label);

      rec = { id, mesh, label, meta: { name: id, state: "idle", lastSeen: new Date().toISOString(), path: [] } };
      agents.set(id, rec);
    }
    return rec;
  }

  function upsertAgent(id: string, x: number, y: number, z: number, meta?: AgentMeta) {
    const rec = ensureAgent(id);
    const h = terrainHeight(x, z) + 1.1;
    rec.mesh.position.lerp(new THREE.Vector3(x, Math.max(h, y), z), 0.35);
    rec.meta.name = meta?.name ?? rec.meta.name;
    rec.meta.state = meta?.state ?? rec.meta.state;
    rec.meta.lastSeen = meta?.lastSeen ?? new Date().toISOString();
    rec.meta.taskId = meta?.taskId;
    rec.meta.path = meta?.path ?? rec.meta.path;
    rec.label.textContent = `${rec.meta.name} • ${rec.meta.state}`;

    if (showPathDebug) {
      const points = [new THREE.Vector3(rec.mesh.position.x, rec.mesh.position.y, rec.mesh.position.z), ...(rec.meta.path || []).map((p) => new THREE.Vector3(p.x, terrainHeight(p.x, p.z) + 1.1, p.z))];
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      if (!rec.pathLine) {
        rec.pathLine = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0xf59e0b }));
        scene.add(rec.pathLine);
      } else {
        rec.pathLine.geometry.dispose();
        rec.pathLine.geometry = geom;
      }
      rec.pathLine.visible = true;
    } else if (rec.pathLine) {
      rec.pathLine.visible = false;
    }
  }

  function setPointerLookEnabled(enabled: boolean) {
    if (!enabled && controls.isLocked) controls.unlock();
  }

  function tryLockPointer() {
    if (options?.pointerLockEnabled && !options.pointerLockEnabled()) return false;
    controls.lock();
    return true;
  }

  function setAmbientAudioEnabled(enabled: boolean) {
    if (!enabled) {
      osc?.stop();
      osc = null;
      gain = null;
      return;
    }
    if (!audioCtx) audioCtx = new AudioContext();
    if (osc) return;
    osc = audioCtx.createOscillator();
    gain = audioCtx.createGain();
    osc.frequency.value = 110;
    gain.gain.value = 0.008;
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
  }

  renderer.domElement.addEventListener("click", (ev) => {
    if (!controls.isLocked) return;
    pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects([...agents.values()].map((a) => a.mesh), false)[0];
    if (hit?.object?.userData?.agentId) {
      const id = hit.object.userData.agentId as string;
      selectedAgentId = id;
      const rec = agents.get(id)!;
      selectionChangedCb?.({ id, name: rec.meta.name, status: rec.meta.state, lastSeen: rec.meta.lastSeen });
    }
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);

    const t = performance.now() * 0.00004;
    const cycle = (Math.sin(t) + 1) * 0.5;
    sun.intensity = 0.3 + cycle * 0.95;
    hemi.intensity = 0.3 + cycle * 0.5;
    portal.rotation.y += dt * 0.7;
    if ((performance.now() | 0) % 30 === 0) {
      const ctx = billboardCanvas.getContext("2d")!;
      ctx.clearRect(0, 0, billboardCanvas.width, billboardCanvas.height);
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, billboardCanvas.width, billboardCanvas.height);
      ctx.fillStyle = "#22d3ee";
      ctx.font = "bold 44px Inter";
      ctx.fillText(`AGENTS ONLINE: ${agents.size}`, 24, 130);
      billboardTex.needsUpdate = true;
    }

    if (controls.isLocked) {
      moveDirection.set(0, 0, 0);
      if (input.state.forward) moveDirection.z -= 1;
      if (input.state.backward) moveDirection.z += 1;
      if (input.state.left) moveDirection.x -= 1;
      if (input.state.right) moveDirection.x += 1;
      moveDirection.normalize();

      const targetSpeed = input.state.sprint ? 8.2 : 4.6;
      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);
      cameraForward.y = 0;
      cameraForward.normalize();
      const cameraRight = new THREE.Vector3().crossVectors(cameraForward, new THREE.Vector3(0, 1, 0)).normalize();

      const desired = new THREE.Vector3()
        .addScaledVector(cameraForward, moveDirection.z * targetSpeed)
        .addScaledVector(cameraRight, -moveDirection.x * targetSpeed);

      moveVelocity.lerp(desired, Math.min(1, dt * 12));
      const current = controls.getObject().position.clone();
      const proposed = current.clone().addScaledVector(moveVelocity, dt);
      const radius = 0.6;
      const hit = staticColliders.some((c) => proposed.x > c.minX - radius && proposed.x < c.maxX + radius && proposed.z > c.minZ - radius && proposed.z < c.maxZ + radius);
      if (!hit) {
        controls.getObject().position.copy(proposed);
      }
    }

    if (input.consumeInteract()) (window as any).__agentverseLastInteraction__ = "context_interaction";

    const pos = controls.getObject().position;
    pos.x = Math.max(-420, Math.min(420, pos.x));
    pos.z = Math.max(-420, Math.min(420, pos.z));
    pos.y = terrainHeight(pos.x, pos.z) + 1.7;

    for (const rec of agents.values()) {
      const screen = rec.mesh.position.clone().add(new THREE.Vector3(0, 1.4, 0));
      screen.project(camera);
      rec.label.style.transform = `translate(-50%,-50%) translate(${(screen.x * 0.5 + 0.5) * window.innerWidth}px,${(-screen.y * 0.5 + 0.5) * window.innerHeight}px)`;
      rec.label.style.display = screen.z < 1 ? "block" : "none";
    }

    for (const lm of landmarks) {
      const label = (lm as any).__landmarkLabel as HTMLDivElement | undefined;
      if (!label) continue;
      const point = lm.position.clone().add(new THREE.Vector3(0, 3, 0));
      point.project(camera);
      label.style.transform = `translate(-50%,-50%) translate(${(point.x * 0.5 + 0.5) * window.innerWidth}px,${(-point.y * 0.5 + 0.5) * window.innerHeight}px)`;
      label.style.display = point.z < 1 ? "block" : "none";
    }

    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hover = raycaster.intersectObjects([...agents.values()].map((a) => a.mesh), false)[0];
    hoveredAgentId = hover?.object?.userData?.agentId || null;
    for (const a of agents.values()) {
      const mat = a.mesh.material as THREE.MeshStandardMaterial;
      if (a.id === selectedAgentId) mat.emissive.setHex(0x3b82f6);
      else if (a.id === hoveredAgentId) mat.emissive.setHex(0x1d4ed8);
      else mat.emissive.setHex(0x000000);
    }

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    const heading = Math.atan2(forward.x, forward.z) * (180 / Math.PI);
    const norm = (heading + 360) % 360;
    const compass = norm >= 315 || norm < 45 ? "N" : norm < 135 ? "E" : norm < 225 ? "S" : "W";
    headingChangedCb?.(`${compass} (${Math.round(norm)}°)`);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return {
    zones,
    canvas: renderer.domElement,
    onSelectionChanged(cb: (payload: { id: string; name: string; status: string; lastSeen: string }) => void) { selectionChangedCb = cb; },
    onPointerLockChange(cb: (locked: boolean) => void) { document.addEventListener("pointerlockchange", () => cb(controls.isLocked)); },
    onHeadingChange(cb: (heading: string) => void) { headingChangedCb = cb; },
    upsertAgent,
    tryLockPointer,
    setPointerLookEnabled,
    setAmbientAudioEnabled,
    setDebugFlags: (flags: { colliders?: boolean; navmesh?: boolean; paths?: boolean }) => {
      if (typeof flags.colliders === "boolean") {
        showColliderDebug = flags.colliders;
        debugColliders.forEach((w) => (w.visible = showColliderDebug));
      }
      if (typeof flags.navmesh === "boolean") {
        showNavmeshDebug = flags.navmesh;
        navmeshOverlay.visible = showNavmeshDebug;
      }
      if (typeof flags.paths === "boolean") {
        showPathDebug = flags.paths;
        for (const a of agents.values()) if (a.pathLine) a.pathLine.visible = showPathDebug;
      }
    },
    isPointerLocked: () => controls.isLocked,
    getCameraPosition: () => {
      const p2 = controls.getObject().position;
      return { x: p2.x, y: p2.y, z: p2.z };
    },
    getLastInteraction: () => (window as any).__agentverseLastInteraction__ || null,
    clearLastInteraction: () => ((window as any).__agentverseLastInteraction__ = null)
  };
}

function terrainHeight(x: number, z: number) {
  return Math.sin(x * 0.015) * 1.5 + Math.cos(z * 0.018) * 1.2 + Math.sin((x + z) * 0.008) * 0.7;
}

function createGroundCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#5b6470";
  ctx.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const j = (Math.random() * 18) | 0;
      ctx.fillStyle = `rgb(${82 + j},${92 + j},${102 + j})`;
      ctx.fillRect(x * 16, y * 16, 15, 15);
    }
  }
  return canvas;
}

function createBillboardCanvas(text: string) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#22d3ee";
  ctx.font = "bold 44px Inter";
  ctx.fillText(text, 24, 130);
  return c;
}

import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { createInputManager } from "./inputManager";

type AgentMeta = { name?: string; state?: string; taskId?: string; lastSeen?: string };

type AgentRecord = {
  id: string;
  mesh: THREE.Mesh;
  label: HTMLDivElement;
  meta: Required<Pick<AgentMeta, "name" | "state" | "lastSeen">> & Pick<AgentMeta, "taskId">;
};

export function startWorld(container: HTMLElement, options?: { pointerLockEnabled?: () => boolean }) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x89b7ff, 70, 420);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);
  camera.position.set(0, 1.7, 8);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
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
  labelLayer.style.zIndex = "2";
  container.appendChild(labelLayer);

  // Lighting + sky baseline
  const hemi = new THREE.HemisphereLight(0xdbeafe, 0x233143, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(120, 180, 40);
  sun.castShadow = true;
  scene.add(sun);

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(900, 32, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x7fb3ff) },
        bottomColor: { value: new THREE.Color(0xe5f0ff) }
      },
      vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vPos; void main(){ float h = normalize(vPos).y * 0.5 + 0.5; gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.0,1.0,h)),1.0); }`
    })
  );
  scene.add(sky);

  // Procedural tiled ground
  const groundTex = new THREE.CanvasTexture(createGroundCanvas());
  groundTex.wrapS = THREE.RepeatWrapping;
  groundTex.wrapT = THREE.RepeatWrapping;
  groundTex.repeat.set(32, 32);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.MeshStandardMaterial({ map: groundTex, roughness: 0.98, metalness: 0.02 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Spawn marker
  const spawn = new THREE.Mesh(new THREE.CircleGeometry(1.4, 40), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
  spawn.rotation.x = -Math.PI / 2;
  spawn.position.set(0, 0.03, 0);
  scene.add(spawn);

  // Landmarks: plaza, portal, two buildings, billboard
  const landmarks: THREE.Object3D[] = [];
  const addLandmarkLabel = (obj: THREE.Object3D, text: string) => {
    const label = document.createElement("div");
    label.textContent = text;
    label.style.position = "absolute";
    label.style.padding = "2px 6px";
    label.style.border = "1px solid #1e293b";
    label.style.borderRadius = "6px";
    label.style.background = "rgba(15,23,42,.8)";
    label.style.color = "#f8fafc";
    label.style.font = "10px Inter, sans-serif";
    labelLayer.appendChild(label);
    (obj as any).__landmarkLabel = label;
  };

  const plaza = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 0.5, 32), new THREE.MeshStandardMaterial({ color: 0x334155 }));
  plaza.position.set(0, 0.25, -20);
  scene.add(plaza); landmarks.push(plaza); addLandmarkLabel(plaza, "Plaza");

  const portal = new THREE.Mesh(new THREE.TorusGeometry(4, 0.5, 16, 64), new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x3b0764 }));
  portal.position.set(0, 5, -40);
  scene.add(portal); landmarks.push(portal); addLandmarkLabel(portal, "Portal Gate");

  const buildingA = new THREE.Mesh(new THREE.BoxGeometry(16, 10, 14), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
  buildingA.position.set(24, 5, -28);
  scene.add(buildingA); landmarks.push(buildingA); addLandmarkLabel(buildingA, "Research Hub");

  const buildingB = new THREE.Mesh(new THREE.BoxGeometry(12, 8, 12), new THREE.MeshStandardMaterial({ color: 0xcbd5e1 }));
  buildingB.position.set(-24, 4, -25);
  scene.add(buildingB); landmarks.push(buildingB); addLandmarkLabel(buildingB, "Ops Center");

  const kiosk = new THREE.Mesh(new THREE.BoxGeometry(4, 3, 4), new THREE.MeshStandardMaterial({ color: 0x1d4ed8 }));
  kiosk.position.set(12, 1.5, -8);
  scene.add(kiosk); landmarks.push(kiosk); addLandmarkLabel(kiosk, "Task Kiosk");

  const billboard = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x111827 }));
  billboard.position.set(0, 5, -8);
  scene.add(billboard); landmarks.push(billboard); addLandmarkLabel(billboard, "Live Board");

  const fountain = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 1, 24), new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 }));
  fountain.position.set(-12, 0.5, -12);
  scene.add(fountain); landmarks.push(fountain); addLandmarkLabel(fountain, "Fountain");

  const arch = new THREE.Mesh(new THREE.TorusGeometry(5, 0.6, 10, 32, Math.PI), new THREE.MeshStandardMaterial({ color: 0x475569 }));
  arch.position.set(-36, 6, -38);
  arch.rotation.z = Math.PI;
  scene.add(arch); landmarks.push(arch); addLandmarkLabel(arch, "North Arch");

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

      rec = {
        id,
        mesh,
        label,
        meta: { name: id, state: "idle", lastSeen: new Date().toISOString() }
      };
      agents.set(id, rec);
    }
    return rec;
  }

  function upsertAgent(id: string, x: number, y: number, z: number, meta?: AgentMeta) {
    const rec = ensureAgent(id);
    rec.mesh.position.set(x, Math.max(1.0, y), z);
    rec.meta.name = meta?.name ?? rec.meta.name;
    rec.meta.state = meta?.state ?? rec.meta.state;
    rec.meta.lastSeen = meta?.lastSeen ?? new Date().toISOString();
    rec.meta.taskId = meta?.taskId;
    rec.label.textContent = `${rec.meta.name} • ${rec.meta.state}`;
  }

  function setPointerLookEnabled(enabled: boolean) {
    if (!enabled && controls.isLocked) controls.unlock();
  }

  function tryLockPointer() {
    if (options?.pointerLockEnabled && !options.pointerLockEnabled()) return false;
    controls.lock();
    return true;
  }

  renderer.domElement.addEventListener("click", (ev) => {
    if (controls.isLocked) {
      pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
      const meshes = [...agents.values()].map((a) => a.mesh);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(meshes, false)[0];
      if (hit?.object?.userData?.agentId) {
        const id = hit.object.userData.agentId as string;
        selectedAgentId = id;
        for (const a of agents.values()) {
          const m = a.mesh.material as THREE.MeshStandardMaterial;
          m.emissive.setHex(a.id === selectedAgentId ? 0x3b82f6 : 0x000000);
        }
        const rec = agents.get(id)!;
        selectionChangedCb?.({ id, name: rec.meta.name, status: rec.meta.state, lastSeen: rec.meta.lastSeen });
      }
    }
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);

    // day/night cycle
    const t = performance.now() * 0.00005;
    const cycle = (Math.sin(t) + 1) * 0.5;
    sun.intensity = 0.35 + cycle * 0.9;
    hemi.intensity = 0.25 + cycle * 0.55;

    if (controls.isLocked) {
      moveDirection.set(0, 0, 0);
      if (input.state.forward) moveDirection.z -= 1;
      if (input.state.backward) moveDirection.z += 1;
      if (input.state.left) moveDirection.x -= 1;
      if (input.state.right) moveDirection.x += 1;
      moveDirection.normalize();

      const targetSpeed = input.state.sprint ? 8.0 : 4.2;
      const accel = 18.0;
      const damping = 10.0;

      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);
      cameraForward.y = 0;
      cameraForward.normalize();
      const cameraRight = new THREE.Vector3().crossVectors(cameraForward, new THREE.Vector3(0, 1, 0)).normalize();

      const desired = new THREE.Vector3()
        .addScaledVector(cameraForward, moveDirection.z * targetSpeed)
        .addScaledVector(cameraRight, -moveDirection.x * targetSpeed);

      moveVelocity.lerp(desired, Math.min(1, accel * dt));
      moveVelocity.multiplyScalar(1 - Math.min(0.9, damping * dt * 0.02));
      controls.getObject().position.addScaledVector(moveVelocity, dt);
      controls.getObject().position.y = 1.7; // ground clamp
    }

    if (input.consumeInteract()) {
      (window as any).__agentverseLastInteraction__ = "context_interaction";
    }

    // Keep in bounds
    const p = controls.getObject().position;
    p.x = Math.max(-280, Math.min(280, p.x));
    p.z = Math.max(-280, Math.min(280, p.z));

    for (const rec of agents.values()) {
      const screen = rec.mesh.position.clone();
      screen.y += 1.4;
      screen.project(camera);
      rec.label.style.transform = `translate(-50%,-50%) translate(${(screen.x * 0.5 + 0.5) * window.innerWidth}px,${(-screen.y * 0.5 + 0.5) * window.innerHeight}px)`;
      rec.label.style.display = screen.z < 1 ? "block" : "none";
    }

    for (const lm of landmarks) {
      const label = (lm as any).__landmarkLabel as HTMLDivElement | undefined;
      if (!label) continue;
      const point = lm.position.clone();
      point.y += 3;
      point.project(camera);
      label.style.transform = `translate(-50%,-50%) translate(${(point.x * 0.5 + 0.5) * window.innerWidth}px,${(-point.y * 0.5 + 0.5) * window.innerHeight}px)`;
      label.style.display = point.z < 1 ? "block" : "none";
    }

    // Hover highlight in pointer-lock center
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hoverHit = raycaster.intersectObjects([...agents.values()].map((a) => a.mesh), false)[0];
    hoveredAgentId = hoverHit?.object?.userData?.agentId || null;
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
    onSelectionChanged(cb: (payload: { id: string; name: string; status: string; lastSeen: string }) => void) {
      selectionChangedCb = cb;
    },
    onPointerLockChange(cb: (locked: boolean) => void) {
      document.addEventListener("pointerlockchange", () => cb(controls.isLocked));
    },
    onHeadingChange(cb: (heading: string) => void) {
      headingChangedCb = cb;
    },
    upsertAgent,
    tryLockPointer,
    setPointerLookEnabled,
    isPointerLocked: () => controls.isLocked,
    getCameraPosition: () => {
      const pos = controls.getObject().position;
      return { x: pos.x, y: pos.y, z: pos.z };
    },
    getLastInteraction: () => (window as any).__agentverseLastInteraction__ || null,
    clearLastInteraction: () => ((window as any).__agentverseLastInteraction__ = null)
  };
}

function createGroundCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#4b5563";
  ctx.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const jitter = (Math.random() * 14) | 0;
      ctx.fillStyle = `rgb(${72 + jitter},${82 + jitter},${92 + jitter})`;
      ctx.fillRect(x * 16, y * 16, 15, 15);
    }
  }
  return canvas;
}

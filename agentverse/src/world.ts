import * as THREE from "three";

type AgentMeshRecord = {
  body: THREE.Mesh;
  label: HTMLDivElement;
  name: string;
  state: string;
  taskId?: string;
};

export function startWorld(container: HTMLElement) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x7ea9e1);

  const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 1200);
  camera.position.set(0, 1.8, 12);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.pointerEvents = "none";
  container.appendChild(overlay);

  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(30, 60, 10);
  sun.castShadow = true;
  scene.add(sun);

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), new THREE.MeshStandardMaterial({ color: 0x334155 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.userData.zone = "plaza";
  scene.add(floor);

  // Modular zones
  const zones = [
    { name: "town", color: 0x3f6212, x: 0, z: 0, w: 70, h: 70 },
    { name: "forest", color: 0x14532d, x: -95, z: -40, w: 80, h: 100 },
    { name: "plaza", color: 0x334155, x: 95, z: 0, w: 80, h: 80 },
    { name: "interior", color: 0x1f2937, x: 0, z: 95, w: 60, h: 50 }
  ];

  zones.forEach((z) => {
    const area = new THREE.Mesh(
      new THREE.PlaneGeometry(z.w, z.h),
      new THREE.MeshStandardMaterial({ color: z.color, roughness: 0.95, metalness: 0.02 })
    );
    area.rotation.x = -Math.PI / 2;
    area.position.set(z.x, 0.02, z.z);
    area.userData.zone = z.name;
    scene.add(area);
  });

  // Interactive objects
  const interactables: THREE.Object3D[] = [];
  const makeTerminal = (x: number, z: number, name: string) => {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1, 1.2), new THREE.MeshStandardMaterial({ color: 0x111827 }));
    base.position.y = 0.5;
    const screen = new THREE.Mesh(new THREE.BoxGeometry(1, 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.2 }));
    screen.position.set(0, 1.1, 0.55);
    g.add(base, screen);
    g.position.set(x, 0, z);
    g.userData.interaction = name;
    scene.add(g);
    interactables.push(g);
  };
  makeTerminal(90, 0, "Task Terminal");
  makeTerminal(0, 95, "Building Control");

  const makeDoor = (x: number, z: number) => {
    const door = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0x92400e }));
    door.position.set(x, 1.5, z);
    door.userData.interaction = "Door";
    scene.add(door);
    interactables.push(door);
  };
  makeDoor(6, 95);

  // Low-poly decor
  for (let i = 0; i < 50; i++) {
    const t = new THREE.Mesh(new THREE.ConeGeometry(1.2, 3, 8), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    t.position.set(-130 + Math.random() * 70, 1.5, -90 + Math.random() * 100);
    scene.add(t);
  }

  const entities = new Map<string, AgentMeshRecord>();
  const keys: Record<string, boolean> = {};
  addEventListener("keydown", (e) => (keys[e.code] = true));
  addEventListener("keyup", (e) => (keys[e.code] = false));

  let dayT = 0;
  const raycaster = new THREE.Raycaster();
  const center = new THREE.Vector2(0, 0);

  function upsertAgent(id: string, x: number, y: number, z: number, meta?: { name?: string; state?: string; taskId?: string }) {
    let rec = entities.get(id);
    if (!rec) {
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.9, 4, 8), new THREE.MeshStandardMaterial({ color: 0xa855f7 }));
      body.castShadow = true;
      scene.add(body);

      const label = document.createElement("div");
      label.style.position = "absolute";
      label.style.padding = "4px 6px";
      label.style.borderRadius = "6px";
      label.style.background = "rgba(2,6,23,.76)";
      label.style.border = "1px solid #334155";
      label.style.color = "#e2e8f0";
      label.style.font = "11px Inter,system-ui,sans-serif";
      overlay.appendChild(label);

      rec = { body, label, name: meta?.name || id, state: meta?.state || "idle", taskId: meta?.taskId };
      entities.set(id, rec);
    }
    rec.body.position.set(x, y, z);
    if (meta?.name) rec.name = meta.name;
    if (meta?.state) rec.state = meta.state;
    if (meta?.taskId !== undefined) rec.taskId = meta.taskId;
    rec.label.textContent = `${rec.name} • ${rec.state}${rec.taskId ? ` • ${rec.taskId}` : ""}`;
  }

  function getCameraPosition() {
    return { x: camera.position.x, y: camera.position.y, z: camera.position.z };
  }

  function getInteractableInFront() {
    raycaster.setFromCamera(center, camera);
    const hits = raycaster.intersectObjects(interactables, true);
    return hits[0]?.object;
  }

  function animate() {
    requestAnimationFrame(animate);

    // movement
    const speed = 0.18;
    if (keys.KeyW) camera.position.z -= speed;
    if (keys.KeyS) camera.position.z += speed;
    if (keys.KeyA) camera.position.x -= speed;
    if (keys.KeyD) camera.position.x += speed;

    // interaction key
    if (keys.KeyE) {
      const hit = getInteractableInFront();
      if (hit?.userData?.interaction) {
        (window as any).__agentverseLastInteraction__ = hit.userData.interaction;
      }
      keys.KeyE = false;
    }

    // day/night cycle
    dayT += 0.0015;
    const cycle = (Math.sin(dayT) + 1) / 2; // 0..1
    sun.intensity = 0.2 + cycle * 1.0;
    ambient.intensity = 0.2 + cycle * 0.5;
    scene.background = new THREE.Color().setHSL(0.60, 0.45, 0.12 + cycle * 0.55);
    sun.position.set(Math.cos(dayT) * 80, 25 + cycle * 65, Math.sin(dayT) * 80);

    // billboards
    for (const rec of entities.values()) {
      const p = rec.body.position.clone();
      p.y += 1.35;
      p.project(camera);
      const x = (p.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
      rec.label.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
      rec.label.style.display = p.z < 1 ? "block" : "none";
    }

    renderer.render(scene, camera);
  }
  animate();

  addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return {
    upsertAgent,
    getCameraPosition,
    getLastInteraction: () => (window as any).__agentverseLastInteraction__ || null,
    clearLastInteraction: () => ((window as any).__agentverseLastInteraction__ = null)
  };
}

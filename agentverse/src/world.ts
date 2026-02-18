import * as THREE from "three";

export function startWorld(container: HTMLElement) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030306);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.7, 5);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x222244, 1));
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0x111122 }));
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const entities = new Map<string, THREE.Mesh>();

  const keys: Record<string, boolean> = {};
  addEventListener("keydown", (e) => (keys[e.code] = true));
  addEventListener("keyup", (e) => (keys[e.code] = false));

  function upsertAgent(id: string, x: number, y: number, z: number) {
    let mesh = entities.get(id);
    if (!mesh) {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.6), new THREE.MeshStandardMaterial({ color: 0xa855f7 }));
      entities.set(id, mesh);
      scene.add(mesh);
    }
    mesh.position.set(x, y, z);
  }

  function animate() {
    requestAnimationFrame(animate);
    const speed = 0.08;
    if (keys.KeyW) camera.position.z -= speed;
    if (keys.KeyS) camera.position.z += speed;
    if (keys.KeyA) camera.position.x -= speed;
    if (keys.KeyD) camera.position.x += speed;
    renderer.render(scene, camera);
  }
  animate();

  return { upsertAgent };
}

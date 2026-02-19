import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * DataFlowVizSystem: Visualizes peer-to-peer data packets using object pooling.
 */
export class DataFlowVizSystem {
  constructor(scene, config = {}) {
    this.scene = scene;
    this.maxLinks = config.maxLinks || 60;
    this.pool = [];
    this.active = [];
    
    this.styles = {
      sync: 0x3b82f6,
      task: 0x10b981,
      help: 0xef4444,
      metrics: 0xfacc15
    };

    for (let i = 0; i < this.maxLinks; i++) this.pool.push(this._createLink());
  }

  _createLink() {
    const geo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const mat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.4, gapSize: 0.2, transparent: true, opacity: 0 });
    const line = new THREE.Line(geo, mat);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    line.add(dot);
    line.visible = false;
    this.scene.add(line);
    return { line, dot, startTime: 0, duration: 1000, fromId: '', toId: '', topic: 'sync' };
  }

  pushMessage(msg, meshes) {
    const from = meshes.get(msg.fromId);
    const to = meshes.get(msg.toId);
    if (!from || !to) return;

    let link = this.active.find(l => !l.line.visible);
    if (!link && this.active.length < this.maxLinks) {
      link = this.pool.pop();
      this.active.push(link);
    }
    if (!link) link = this.active.shift(), this.active.push(link); // Recycle oldest

    link.fromId = msg.fromId;
    link.toId = msg.toId;
    link.topic = msg.topic;
    link.startTime = performance.now();
    link.duration = 400 + (msg.size || 0.5) * 1100;
    link.line.visible = true;
    const color = this.styles[msg.topic] || 0xffffff;
    link.line.material.color.setHex(color);
    link.dot.material.color.setHex(color);
  }

  update(dt, meshes) {
    const now = performance.now();
    this.active.forEach(l => {
      if (!l.line.visible) return;
      const progress = (now - l.startTime) / l.duration;
      if (progress >= 1) { l.line.visible = false; return; }

      const m1 = meshes.get(l.fromId);
      const m2 = meshes.get(l.toId);
      if (!m1 || !m2) { l.line.visible = false; return; }

      const pos = l.line.geometry.attributes.position.array;
      pos[0] = m1.position.x; pos[1] = 1.2; pos[2] = m1.position.z;
      pos[3] = m2.position.x; pos[4] = 1.2; pos[5] = m2.position.z;
      l.line.geometry.attributes.position.needsUpdate = true;
      l.line.computeLineDistances();

      l.dot.position.set(
        THREE.MathUtils.lerp(0, m2.position.x - m1.position.x, progress),
        0,
        THREE.MathUtils.lerp(0, m2.position.z - m1.position.z, progress)
      );

      const fade = progress < 0.2 ? progress / 0.2 : (progress > 0.8 ? (1 - progress) / 0.2 : 1);
      l.line.material.opacity = fade * 0.6;
    });
  }
}

import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * DataFlowVizSystem: Visualizes peer-to-peer data packets between agents.
 * Optimized with object pooling and single-buffer line rendering.
 */
export class DataFlowVizSystem {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.maxLinks = options.maxLinks || 60;
    this.activeLinks = [];
    this.pool = [];
    
    this.topicStyles = {
      sync: { color: 0x3b82f6, opacity: 0.6 },
      task: { color: 0x10b981, opacity: 0.7 },
      help: { color: 0xef4444, opacity: 0.8 },
      metrics: { color: 0xfacc15, opacity: 0.5 }
    };

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Prepare the pool
    for (let i = 0; i < this.maxLinks; i++) {
      this.pool.push(this.createLinkObject());
    }
  }

  createLinkObject() {
    // We use a simple Line with 2 points for maximum performance.
    // Curved lines can be achieved by adding more segments, 
    // but for "system traffic" feel, dashed straight lines are more symbolic.
    const geometry = new THREE.BufferAttribute(new Float32Array(6), 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', geometry);

    const material = new THREE.LineDashedMaterial({
      color: 0xffffff,
      dashSize: 0.5,
      gapSize: 0.3,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });

    const line = new THREE.Line(lineGeo, material);
    line.computeLineDistances();
    line.visible = false;

    // Moving "packet" dot
    const dotGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    line.add(dot);

    return { line, dot, startTime: 0, duration: 0, fromId: null, toId: null, topic: 'sync' };
  }

  setMaxLinks(n) {
    this.maxLinks = n;
    // Simple pool resize logic could be added here
  }

  /**
   * pushMessage(event, agentMeshesMap)
   * event: { from: 'CLAW-014', to: 'CLAW-088', topic: 'sync', size: 0.5 }
   * agentMeshesMap: Map<id, THREE.Object3D>
   */
  pushMessage(event, agentMeshesMap) {
    const fromMesh = agentMeshesMap.get(event.from);
    const toMesh = agentMeshesMap.get(event.to);

    if (!fromMesh || !toMesh) return;

    // Get an object from the pool
    let link = this.activeLinks.find(l => !l.line.visible);
    if (!link && this.activeLinks.length < this.maxLinks) {
      link = this.pool.pop();
      if (link) {
        this.group.add(link.line);
        this.activeLinks.push(link);
      }
    }

    // If pool exhausted, recycle the oldest link
    if (!link) {
      link = this.activeLinks.shift();
      this.activeLinks.push(link);
    }

    const style = this.topicStyles[event.topic] || this.topicStyles.sync;
    
    link.fromId = event.from;
    link.toId = event.to;
    link.topic = event.topic;
    link.startTime = performance.now();
    link.duration = 400 + (event.size * 1100); // 0.4s to 1.5s
    
    link.line.material.color.setHex(style.color);
    link.dot.material.color.setHex(style.color);
    link.line.visible = true;
  }

  update(dt, agentMeshesMap) {
    const now = performance.now();

    this.activeLinks.forEach(link => {
      if (!link.line.visible) return;

      const elapsed = now - link.startTime;
      const progress = elapsed / link.duration;

      if (progress >= 1) {
        link.line.visible = false;
        link.line.material.opacity = 0;
        link.dot.material.opacity = 0;
        return;
      }

      const fromMesh = agentMeshesMap.get(link.fromId);
      const toMesh = agentMeshesMap.get(link.toId);

      if (!fromMesh || !toMesh) {
        link.line.visible = false;
        return;
      }

      // Update line endpoints (dynamic as agents move)
      const p1 = fromMesh.position;
      const p2 = toMesh.position;
      const positions = link.line.geometry.attributes.position.array;
      
      // Start slightly above ground
      const offset = 1.2;
      positions[0] = p1.x; positions[1] = offset; positions[2] = p1.z;
      positions[3] = p2.x; positions[4] = offset; positions[5] = p2.z;
      link.line.geometry.attributes.position.needsUpdate = true;
      link.line.computeLineDistances();

      // Update dot position (packet flow)
      link.dot.position.set(
        THREE.MathUtils.lerp(0, p2.x - p1.x, progress),
        0, // relative to line start which is already at offset
        THREE.MathUtils.lerp(0, p2.z - p1.z, progress)
      );

      // Fade in/out logic
      let opacity = 1;
      if (progress < 0.2) opacity = progress / 0.2;
      if (progress > 0.8) opacity = (1 - progress) / 0.2;
      
      const baseOpacity = this.topicStyles[link.topic].opacity;
      link.line.material.opacity = opacity * baseOpacity;
      link.dot.material.opacity = opacity * 1.0;
    });
  }
}

import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * LoadVizSystem: Visualizes system-wide agent activity and load.
 * Uses custom shaders for high-performance floor pulses and zone effects.
 */
export class LoadVizSystem {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.config = {
      baseColor: options.baseColor || new THREE.Color(0x8f8f8f),
      pulseColor: options.pulseColor || new THREE.Color(0x3b82f6),
      errorColor: options.errorColor || new THREE.Color(0xef4444),
      gridSize: options.gridSize || 640,
      gridDivisions: options.gridDivisions || 128,
    };

    this.zones = new Map(); // zoneId -> { mesh, activity: 0..1 }
    this.uniforms = {
      uTime: { value: 0 },
      uAvgStress: { value: 0 },
      uExecRatio: { value: 0 },
      uErrorRatio: { value: 0 },
      uBaseColor: { value: this.config.baseColor },
      uPulseColor: { value: this.config.pulseColor },
      uErrorColor: { value: this.config.errorColor }
    };

    this.initFloor();
  }

  initFloor() {
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform float uAvgStress;
      uniform float uExecRatio;
      uniform float uErrorRatio;
      uniform vec3 uBaseColor;
      uniform vec3 uPulseColor;
      uniform vec3 uErrorColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      void main() {
        // Subtle grid lines
        float gridSize = 5.0;
        vec2 grid = abs(fract(vWorldPos.xz / gridSize - 0.5) - 0.5) / fwidth(vWorldPos.xz / gridSize);
        float line = min(grid.x, grid.y);
        float gridAlpha = 1.0 - smoothstep(0.0, 1.2, line);

        // Traveling pulse wave based on stress
        float dist = length(vWorldPos.xz);
        float waveSpeed = 8.0 + (uExecRatio * 15.0);
        float waveFreq = 0.05;
        float pulse = sin(dist * waveFreq - uTime * waveSpeed) * 0.5 + 0.5;
        
        // Sharpen the wave based on stress
        pulse = pow(pulse, 8.0 - (uAvgStress * 4.0));
        float pulseIntensity = pulse * (0.05 + uAvgStress * 0.15 + uExecRatio * 0.1);

        // Error "noise" near center/affected areas
        float noise = fract(sin(dot(vWorldPos.xz ,vec2(12.9898,78.233))) * 43758.5453);
        float errorNoise = step(0.98, noise) * uErrorRatio * 0.2;
        
        vec3 finalColor = mix(uBaseColor, uPulseColor, pulseIntensity);
        finalColor = mix(finalColor, uErrorColor, errorNoise);
        
        // Overlay grid
        finalColor = mix(finalColor, vec3(0.55), gridAlpha * 0.3);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide
    });

    const geometry = new THREE.PlaneGeometry(this.config.gridSize * 3, this.config.gridSize * 3);
    this.floor = new THREE.Mesh(geometry, material);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = -0.1; // Slightly below actual grid helper
    this.scene.add(this.floor);
  }

  registerZone(id, mesh) {
    this.zones.set(id, { mesh, activity: 0 });
  }

  /**
   * update(dt, metrics, zoneActivity)
   * metrics: { avgStress: 0..1, execRatio: 0..1, errorRatio: 0..1 }
   * zoneActivity: Map<zoneId, agentCountInZone>
   */
  update(dt, metrics, zoneActivity) {
    this.uniforms.uTime.value += dt;
    this.uniforms.uAvgStress.value = THREE.MathUtils.lerp(this.uniforms.uAvgStress.value, metrics.avgStress, 0.1);
    this.uniforms.uExecRatio.value = THREE.MathUtils.lerp(this.uniforms.uExecRatio.value, metrics.execRatio, 0.1);
    this.uniforms.uErrorRatio.value = THREE.MathUtils.lerp(this.uniforms.uErrorRatio.value, metrics.errorRatio, 0.1);

    // Update zone glows
    this.zones.forEach((data, id) => {
      const count = zoneActivity.get(id) || 0;
      const targetActivity = Math.min(count / 10, 1.0); // Normalize: 10 agents = 100% glow
      data.activity = THREE.MathUtils.lerp(data.activity, targetActivity, 0.05);

      if (data.mesh) {
        // Update floor child of the zone group for activity highlight
        const floor = data.mesh.children.find(c => c.geometry instanceof THREE.BoxGeometry && c.position.y < 1);
        if (floor) {
          const glowColor = new THREE.Color(0xd8d8d8).lerp(this.config.pulseColor, data.activity * 0.4);
          floor.material.color.copy(glowColor);
        }
      }
    });
  }
}

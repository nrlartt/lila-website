import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * LoadVizSystem: Shader-based ground pulse and zone activity visualization.
 */
export class LoadVizSystem {
  constructor(scene, config = {}) {
    this.scene = scene;
    this.config = {
      baseColor: config.baseColor || new THREE.Color(0x8f8f8f),
      pulseColor: config.pulseColor || new THREE.Color(0x3b82f6),
      errorColor: config.errorColor || new THREE.Color(0xef4444),
      gridSize: config.gridSize || 640,
      ...config
    };

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
      varying vec3 vWorldPos;
      void main() {
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
      varying vec3 vWorldPos;

      void main() {
        float dist = length(vWorldPos.xz);
        float waveSpeed = 6.0 + (uExecRatio * 20.0);
        float pulse = sin(dist * 0.04 - uTime * waveSpeed) * 0.5 + 0.5;
        pulse = pow(pulse, 6.0);
        
        float intensity = pulse * (0.1 + uAvgStress * 0.3);
        
        // Red noise near center for errors
        float noise = fract(sin(dot(vWorldPos.xz, vec2(12.9898,78.233))) * 43758.5453);
        float errorNoise = step(0.97, noise) * uErrorRatio * 0.35;

        vec3 color = mix(uBaseColor, uPulseColor, intensity);
        color = mix(color, uErrorColor, errorNoise);

        // Subtle Grid
        vec2 grid = abs(fract(vWorldPos.xz / 5.0 - 0.5) - 0.5) / fwidth(vWorldPos.xz / 5.0);
        float line = min(grid.x, grid.y);
        color = mix(color, vec3(0.55), (1.0 - smoothstep(0.0, 1.1, line)) * 0.2);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const mat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader, fragmentShader });
    const geo = new THREE.PlaneGeometry(this.config.gridSize * 2, this.config.gridSize * 2);
    this.floor = new THREE.Mesh(geo, mat);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = -0.05;
    this.scene.add(this.floor);
  }

  update(dt, metrics) {
    this.uniforms.uTime.value += dt;
    this.uniforms.uAvgStress.value = THREE.MathUtils.lerp(this.uniforms.uAvgStress.value, metrics.avgStress, 0.05);
    const execRatio = metrics.activeAgentsCount > 0 ? metrics.executingCount / metrics.activeAgentsCount : 0;
    const errorRatio = metrics.activeAgentsCount > 0 ? metrics.errorCount / metrics.activeAgentsCount : 0;
    this.uniforms.uExecRatio.value = THREE.MathUtils.lerp(this.uniforms.uExecRatio.value, execRatio, 0.05);
    this.uniforms.uErrorRatio.value = THREE.MathUtils.lerp(this.uniforms.uErrorRatio.value, errorRatio, 0.05);
  }
}

import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class HubControls {
  constructor(opts) {
    this.dom = opts.domElement;
    this.camera = opts.camera;
    this.target = (opts.target || new THREE.Vector3()).clone();
    this.desiredTarget = this.target.clone();
    this.groundY = opts.groundY ?? 0;
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.groundY);

    this.isOrtho = this.camera.isOrthographicCamera === true;
    this.minZoom = opts.minZoom ?? (this.isOrtho ? 0.8 : 8);
    this.maxZoom = opts.maxZoom ?? (this.isOrtho ? 3.0 : 60);
    this.panSpeed = opts.panSpeed ?? 1.0;
    this.zoomSpeed = opts.zoomSpeed ?? 0.0025;
    this.rotateSpeed = opts.rotateSpeed ?? 0.004;

    this.yaw = 0;
    this.desiredYaw = 0;
    this.distance = 20;
    this.desiredDistance = 20;

    this.dragging = false;
    this.dragButton = null;
    this.lastPointer = new THREE.Vector2();

    this.raycaster = new THREE.Raycaster();
    this.ndc = new THREE.Vector2();

    if (!this.isOrtho) {
      const off = this.camera.position.clone().sub(this.target);
      this.distance = off.length();
      this.desiredDistance = this.distance;
      this.yaw = Math.atan2(off.x, off.z);
      this.desiredYaw = this.yaw;
    } else {
      const fwd = new THREE.Vector3();
      this.camera.getWorldDirection(fwd);
      this.yaw = Math.atan2(fwd.x, fwd.z) + Math.PI;
      this.desiredYaw = this.yaw;
      this.camera.zoom = clamp(this.camera.zoom, this.minZoom, this.maxZoom);
      this.camera.updateProjectionMatrix();
    }

    this.bind();
    this.applyCameraImmediate();
  }

  dispose() { this.unbind(); }

  focusTo(point, opts = {}) {
    this.desiredTarget.copy(point);
    if (!this.isOrtho && typeof opts.distance === 'number') {
      this.desiredDistance = clamp(opts.distance, this.minZoom, this.maxZoom);
    }
    if (this.isOrtho && typeof opts.zoom === 'number') {
      this.camera.zoom = clamp(opts.zoom, this.minZoom, this.maxZoom);
      this.camera.updateProjectionMatrix();
    }
    if (typeof opts.yaw === 'number') this.desiredYaw = opts.yaw;
  }

  update(dt) {
    const alpha = 1 - Math.exp(-14 * dt);
    this.target.lerp(this.desiredTarget, alpha);

    let dy = this.desiredYaw - this.yaw;
    dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    this.yaw += dy * alpha;

    if (!this.isOrtho) this.distance += (this.desiredDistance - this.distance) * alpha;
    this.applyCameraFromRig();
  }

  screenToGround(clientX, clientY) {
    const r = this.dom.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 2 - 1;
    const y = -(((clientY - r.top) / r.height) * 2 - 1);
    this.ndc.set(x, y);
    this.raycaster.setFromCamera(this.ndc, this.camera);
    const hit = new THREE.Vector3();
    const ok = this.raycaster.ray.intersectPlane(this.groundPlane, hit);
    return ok ? hit : null;
  }

  bind() {
    this._ctx = (e) => e.preventDefault();
    this._down = (e) => {
      if (e.button !== 0 && e.button !== 2) return;
      this.dragging = true;
      this.dragButton = e.button;
      this.lastPointer.set(e.clientX, e.clientY);
      e.preventDefault();
    };
    this._move = (e) => {
      if (!this.dragging || this.dragButton == null) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      this.lastPointer.set(e.clientX, e.clientY);

      if (this.dragButton === 0) {
        const p0 = this.screenToGround(e.clientX - dx, e.clientY - dy);
        const p1 = this.screenToGround(e.clientX, e.clientY);
        if (p0 && p1) this.desiredTarget.add(p0.sub(p1).multiplyScalar(this.panSpeed));
      } else if (this.dragButton === 2) {
        this.desiredYaw += dx * this.rotateSpeed;
      }
      e.preventDefault();
    };
    this._up = () => { this.dragging = false; this.dragButton = null; };
    this._wheel = (e) => {
      const delta = e.deltaY;
      if (this.isOrtho) {
        const f = Math.exp(-delta * this.zoomSpeed);
        this.camera.zoom = clamp(this.camera.zoom * f, this.minZoom, this.maxZoom);
        this.camera.updateProjectionMatrix();
      } else {
        const f = Math.exp(delta * this.zoomSpeed);
        this.desiredDistance = clamp(this.desiredDistance * f, this.minZoom, this.maxZoom);
      }
      e.preventDefault();
    };

    this.dom.addEventListener('contextmenu', this._ctx);
    this.dom.addEventListener('pointerdown', this._down, { passive: false });
    window.addEventListener('pointermove', this._move, { passive: false });
    window.addEventListener('pointerup', this._up);
    this.dom.addEventListener('wheel', this._wheel, { passive: false });
  }

  unbind() {
    this.dom.removeEventListener('contextmenu', this._ctx);
    this.dom.removeEventListener('pointerdown', this._down);
    window.removeEventListener('pointermove', this._move);
    window.removeEventListener('pointerup', this._up);
    this.dom.removeEventListener('wheel', this._wheel);
  }

  applyCameraImmediate() {
    this.target.copy(this.desiredTarget);
    this.yaw = this.desiredYaw;
    this.distance = this.desiredDistance;
    this.applyCameraFromRig();
  }

  applyCameraFromRig() {
    const pitch = THREE.MathUtils.degToRad(55);
    const dir = new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(this.yaw) * Math.cos(pitch)
    );

    if (!this.isOrtho) {
      this.camera.position.copy(this.target).addScaledVector(dir, this.distance);
    } else {
      this.camera.position.copy(this.target).addScaledVector(dir, 90);
    }
    this.camera.lookAt(this.target);
  }
}

import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * Throttled Interaction System for Hover and Click detection.
 */
export class HoverInteractionSystem {
  constructor(domElement, camera, controls) {
    this.dom = domElement;
    this.camera = camera;
    this.controls = controls;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    
    this.hoveredObject = null;
    this.onHoverChange = null; // Callback(id, type, isHovering)
    
    this.lastRaycastTime = 0;
    this.raycastInterval = 50; // 20Hz raycasting for performance

    this.bind();
  }

  bind() {
    this.dom.addEventListener('pointermove', (e) => {
      const rect = this.dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    this.dom.addEventListener('click', (e) => {
      this.checkInteraction(true);
    });
  }

  /**
   * Called in animation loop. Throttles heavy raycast logic.
   */
  update(now, interactableMeshes) {
    if (now - this.lastRaycastTime < this.raycastInterval) return;
    this.lastRaycastTime = now;
    
    this.checkInteraction(false, interactableMeshes);
  }

  checkInteraction(isClick, meshes = []) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(meshes, true);

    const hit = intersects[0];
    let hitId = null;
    let hitType = null;
    let hitPoint = null;

    if (hit) {
      // Traverse up to find metadata
      let curr = hit.object;
      while (curr && !curr.userData.id) curr = curr.parent;
      
      if (curr) {
        hitId = curr.userData.id;
        hitType = curr.userData.type; // 'agent' or 'zone'
        hitPoint = curr.position;
      }
    }

    if (isClick && hitId) {
      if (hitType === 'agent') {
        this.controls.focusTo(hitPoint, { distance: 22 });
      } else if (hitType === 'zone') {
        this.controls.focusTo(hitPoint, { distance: 34 });
      }
      return;
    }

    // Hover logic
    if (hitId !== this.hoveredObject) {
      // Reset old hover
      if (this.hoveredObject && this.onHoverChange) {
        this.onHoverChange(this.hoveredObject, null, false);
      }

      this.hoveredObject = hitId;
      this.dom.style.cursor = hitId ? 'pointer' : 'default';

      // Set new hover
      if (hitId && this.onHoverChange) {
        this.onHoverChange(hitId, hitType, true);
      }
    }
  }
}

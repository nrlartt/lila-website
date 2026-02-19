import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

/**
 * High-performance Label System using Canvas Textures.
 * Optimized for 200+ agents by reusing geometries and minimizing updates.
 */
export class AgentLabelSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.labels = new Map(); // agentId -> Sprite
    
    // Shared geometry for all labels to save memory
    this.sharedGeometry = new THREE.PlaneGeometry(1, 1);
    
    this.statusColors = {
      idle: '#9ca3af',
      executing: '#10b981',
      syncing: '#3b82f6',
      error: '#ef4444'
    };
  }

  /**
   * Creates or updates a label for an agent.
   * Uses Canvas + Sprite for perfect camera facing and minimal jitter.
   */
  updateLabel(agentId, parentMesh, name, status, isHovered = false) {
    let labelData = this.labels.get(agentId);

    if (!labelData) {
      const sprite = this.createLabelSprite(name, status, isHovered);
      parentMesh.add(sprite);
      sprite.position.set(0, 2.5, 0); // Position above agent
      
      labelData = { sprite, name, status, isHovered };
      this.labels.set(agentId, labelData);
    } else if (labelData.status !== status || labelData.isHovered !== isHovered) {
      // Only redraw canvas if state actually changed
      const newSprite = this.createLabelSprite(name, status, isHovered);
      parentMesh.remove(labelData.sprite);
      parentMesh.add(newSprite);
      newSprite.position.set(0, 2.5, 0);
      
      labelData.sprite = newSprite;
      labelData.status = status;
      labelData.isHovered = isHovered;
    }
  }

  createLabelSprite(name, status, isHovered) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;

    const bgColor = isHovered ? 'rgba(30, 30, 30, 0.95)' : 'rgba(15, 15, 15, 0.8)';
    const textColor = isHovered ? '#ffffff' : '#e5e7eb';
    const statusColor = this.statusColors[status] || '#9ca3af';

    // Background
    ctx.fillStyle = bgColor;
    this.roundRect(ctx, 0, 0, 512, 128, 16);
    ctx.fill();

    // Border if hovered
    if (isHovered) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    // Text - ID
    ctx.font = 'bold 54px ui-monospace, monospace';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, 40, 64);

    // Status Badge
    ctx.font = '40px ui-monospace, monospace';
    ctx.fillStyle = statusColor;
    ctx.textAlign = 'right';
    ctx.fillText(`[${status.toUpperCase()}]`, 472, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    
    const material = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      depthTest: false // Ensure labels are always visible over agent bodies
    });

    const sprite = new THREE.Sprite(material);
    sprite.scale.set(6, 1.5, 1);
    return sprite;
  }

  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  removeLabel(agentId) {
    const data = this.labels.get(agentId);
    if (data && data.sprite.parent) {
      data.sprite.parent.remove(data.sprite);
    }
    this.labels.delete(agentId);
  }
}

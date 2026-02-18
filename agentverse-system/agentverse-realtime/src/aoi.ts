export interface Position { x: number; y: number; z: number; worldId: string }

export function inRadius(a: Position, b: Position, radius: number): boolean {
  if (a.worldId !== b.worldId) return false;
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz <= radius * radius;
}

export function quantizePosition(x: number, y: number, z: number) {
  return {
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
    z: Number(z.toFixed(2))
  };
}

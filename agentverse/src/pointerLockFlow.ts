export function shouldShowPlayOverlay(pointerLocked: boolean, pointerLockEnabled: boolean) {
  return pointerLockEnabled && !pointerLocked;
}

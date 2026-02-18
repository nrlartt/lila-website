export type InputState = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  sprint: boolean;
  interact: boolean;
};

export function mapKeyToAction(code: string): keyof InputState | null {
  if (code === "KeyW") return "forward";
  if (code === "KeyS") return "backward";
  if (code === "KeyA") return "left";
  if (code === "KeyD") return "right";
  if (code === "ShiftLeft" || code === "ShiftRight") return "sprint";
  if (code === "KeyE") return "interact";
  return null;
}

export function createInputManager(target: Window | Document = window) {
  const state: InputState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    sprint: false,
    interact: false
  };

  const onDown = (e: KeyboardEvent) => {
    const action = mapKeyToAction(e.code);
    if (!action) return;
    state[action] = true;
  };
  const onUp = (e: KeyboardEvent) => {
    const action = mapKeyToAction(e.code);
    if (!action) return;
    state[action] = false;
  };

  target.addEventListener("keydown", onDown as EventListener);
  target.addEventListener("keyup", onUp as EventListener);

  return {
    state,
    consumeInteract() {
      const v = state.interact;
      state.interact = false;
      return v;
    },
    destroy() {
      target.removeEventListener("keydown", onDown as EventListener);
      target.removeEventListener("keyup", onUp as EventListener);
    }
  };
}

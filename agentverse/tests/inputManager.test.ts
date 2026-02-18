import { describe, expect, it } from "vitest";
import { mapKeyToAction } from "../src/inputManager";

describe("input manager key mapping", () => {
  it("maps movement keys", () => {
    expect(mapKeyToAction("KeyW")).toBe("forward");
    expect(mapKeyToAction("KeyA")).toBe("left");
    expect(mapKeyToAction("KeyS")).toBe("backward");
    expect(mapKeyToAction("KeyD")).toBe("right");
  });

  it("maps sprint and interact keys", () => {
    expect(mapKeyToAction("ShiftLeft")).toBe("sprint");
    expect(mapKeyToAction("KeyE")).toBe("interact");
  });

  it("returns null for unrelated keys", () => {
    expect(mapKeyToAction("Space")).toBeNull();
  });
});

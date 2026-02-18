import { describe, expect, it } from "vitest";
import { shouldShowPlayOverlay } from "../src/pointerLockFlow";

describe("pointer lock flow", () => {
  it("shows overlay when pointer lock is enabled but not locked", () => {
    expect(shouldShowPlayOverlay(false, true)).toBe(true);
  });

  it("hides overlay when locked", () => {
    expect(shouldShowPlayOverlay(true, true)).toBe(false);
  });

  it("hides overlay when pointer lock setting is disabled", () => {
    expect(shouldShowPlayOverlay(false, false)).toBe(false);
  });
});

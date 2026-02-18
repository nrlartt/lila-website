import { describe, expect, it } from "vitest";
import { validateWsTokenClaims } from "../src/wsTokenClaims";

describe("wsToken validation", () => {
  it("accepts valid claims", () => {
    expect(
      validateWsTokenClaims({ typ: "ws", sub: "guest_1", guestId: "guest_1", worldId: "lobby", exp: Math.floor(Date.now() / 1000) + 60 })
    ).toBe(true);
  });

  it("rejects missing worldId", () => {
    expect(validateWsTokenClaims({ typ: "ws", sub: "u1" })).toBe(false);
  });
});

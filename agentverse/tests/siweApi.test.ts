import { describe, expect, it, vi, beforeEach } from "vitest";

describe("SIWE API methods", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    (globalThis as any).window = {};
  });

  it("uses POST for nonce", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch" as any).mockResolvedValue({ ok: true, json: async () => ({ nonce: "abc" }) } as any);
    const { getNonce } = await import("../src/api");
    await getNonce("0x1234567890123456789012345678901234567890", 8453);
    const [, init] = fetchMock.mock.calls[0] as any;
    expect(init.method).toBe("POST");
    expect(init.headers["Content-Type"]).toBe("application/json");
  });

  it("uses POST for verify", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch" as any).mockResolvedValue({ ok: true, json: async () => ({ ok: true }) } as any);
    const { verifySiwe } = await import("../src/api");
    await verifySiwe("msg", "sig");
    const [, init] = fetchMock.mock.calls[0] as any;
    expect(init.method).toBe("POST");
  });
});

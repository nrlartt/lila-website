import { z } from "zod";

export const helloSchema = z.object({ type: z.literal("hello"), wsToken: z.string() });
export const heartbeatSchema = z.object({ type: z.literal("heartbeat"), ts: z.number() });
export const presenceSchema = z.object({ type: z.literal("presence"), worldId: z.string(), x: z.number(), y: z.number(), z: z.number() });
export const chatSchema = z.object({ type: z.literal("chat"), worldId: z.string(), message: z.string().max(300) });
export const eventSchema = z.object({ type: z.literal("event"), worldId: z.string(), name: z.string(), payload: z.record(z.any()).default({}) });

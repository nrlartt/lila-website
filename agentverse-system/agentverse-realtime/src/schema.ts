import { z } from "zod";

export const helloSchema = z.object({ type: z.literal("hello"), wsToken: z.string() });
export const heartbeatSchema = z.object({ type: z.literal("heartbeat"), ts: z.number() });
export const presenceSchema = z.object({ type: z.literal("presence"), worldId: z.string(), x: z.number(), y: z.number(), z: z.number() });
export const chatSchema = z.object({ type: z.literal("chat"), worldId: z.string(), message: z.string().max(300) });
export const eventSchema = z.object({ type: z.literal("event"), worldId: z.string(), name: z.string(), payload: z.record(z.any()).default({}) });
export const interactionSchema = z.object({ type: z.literal("interaction"), worldId: z.string(), targetAgentId: z.string(), action: z.string(), payload: z.record(z.any()).default({}) });
export const taskAssignSchema = z.object({ type: z.literal("task_assign"), worldId: z.string(), agentId: z.string(), taskId: z.string() });
export const moveToSchema = z.object({ type: z.literal("move_to"), worldId: z.string(), agentId: z.string(), target: z.object({ x: z.number(), y: z.number().optional(), z: z.number() }) });

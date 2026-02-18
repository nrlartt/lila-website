import rateLimit from "express-rate-limit";
import { config } from "./config.js";

export const apiRateLimit = rateLimit({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests" }
});

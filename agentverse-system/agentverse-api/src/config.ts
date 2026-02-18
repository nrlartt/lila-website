import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: Number(process.env.AGENTVERSE_API_PORT || 8080),
  jwtSecret: process.env.JWT_SECRET || "change_me",
  jwtTtlSeconds: Number(process.env.JWT_TTL_SECONDS || 900),
  wsTokenTtlSeconds: Number(process.env.WSTOKEN_TTL_SECONDS || 300),
  domain: process.env.AGENTVERSE_DOMAIN || "lilagent.xyz",
  chainId: Number(process.env.AGENTVERSE_CHAIN_ID || 8453),
  postgresUrl: process.env.POSTGRES_URL || "",
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60000),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 120)
};

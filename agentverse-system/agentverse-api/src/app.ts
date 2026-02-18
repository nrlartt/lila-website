import express from "express";
import { config } from "./config.js";
import { securityMiddleware } from "./security.js";
import { apiRateLimit } from "./rateLimit.js";
import walletRoutes from "./routes/wallet.js";
import agentRoutes from "./routes/agents.js";
import worldRoutes from "./routes/world.js";

const app = express();
app.use(express.json({ limit: "64kb" }));
app.use(...securityMiddleware);
app.use(apiRateLimit);

app.get("/health", (_req, res) => res.json({ ok: true, service: "agentverse-api" }));
app.use("/wallet", walletRoutes);
app.use("/agents", agentRoutes);
app.use("/world", worldRoutes);

app.listen(config.port, () => {
  console.log(JSON.stringify({ level: "info", msg: "agentverse-api started", port: config.port }));
});

import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error("Missing TELEGRAM_BOT_TOKEN");
const apiBase = process.env.AGENTVERSE_API_BASE || "http://agentverse-api:8080";

const bot = new TelegramBot(token, { polling: true });
const limiter = new Map<number, number>();

function clean(value: string) {
  return value.replace(/[^a-zA-Z0-9_\-]/g, "").slice(0, 64);
}
function allow(chatId: number) {
  const now = Date.now();
  const last = limiter.get(chatId) || 0;
  if (now - last < 1000) return false;
  limiter.set(chatId, now);
  return true;
}

bot.onText(/^\/start$/, async (msg) => {
  if (!allow(msg.chat.id)) return;
  await bot.sendMessage(msg.chat.id, "Welcome to AGENTVERSE. Use /send_agent <agent_id> [world_id] or /link_wallet.");
});

bot.onText(/^\/link_wallet$/, async (msg) => {
  if (!allow(msg.chat.id)) return;
  await bot.sendMessage(msg.chat.id, "Open https://lilagent.xyz/agentverse and connect your wallet using SIWE.");
});

bot.onText(/^\/send_agent\s+(.+)$/, async (msg, match) => {
  if (!allow(msg.chat.id)) return;
  const parts = (match?.[1] || "").trim().split(/\s+/);
  const agentId = clean(parts[0] || "");
  const worldId = clean(parts[1] || "lobby");
  if (!agentId) return bot.sendMessage(msg.chat.id, "Invalid command. Usage: /send_agent <agent_id> [world_id]");

  await bot.sendMessage(msg.chat.id, `Dispatch request submitted for agent ${agentId} to world ${worldId}.`);
  // Real dispatch should use signed service token; placeholder keeps secure token handling external.
});

bot.on("message", async (msg) => {
  if (!allow(msg.chat.id)) return;
  const text = (msg.text || "").trim();
  if (text.startsWith("/") || text.length < 6) return;
  const agentId = clean(text);
  if (!agentId) return;
  await bot.sendMessage(msg.chat.id, `Agent lookup: ${agentId}. Use /send_agent ${agentId} lobby`);
});

console.log(JSON.stringify({ level: "info", msg: "agentverse-telegram-bot started", apiBase }));

#!/usr/bin/env bash
set -euo pipefail

: "${POSTGRES_URL:?POSTGRES_URL is required}"

psql "$POSTGRES_URL" -f "$(dirname "$0")/../db/seeds/001_lobby_seed.sql"
echo "[SEED] Lobby and default agents ensured."
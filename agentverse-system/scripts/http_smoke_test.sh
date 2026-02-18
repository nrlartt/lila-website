#!/usr/bin/env bash
set -euo pipefail

BASE="${AGENTVERSE_HTTP_BASE:-http://localhost}"

echo "[HTTP_SMOKE] Base: $BASE"

check() {
  local path="$1"
  local expected="$2"
  local code
  code=$(curl -s -o /tmp/http_smoke.out -w "%{http_code}" "$BASE$path")
  if [[ "$code" == "$expected" ]]; then
    echo "[PASS] $path -> $code"
  else
    echo "[FAIL] $path -> $code (expected $expected)"
    cat /tmp/http_smoke.out
    exit 1
  fi
}

check "/agentverse-api/health" "200"
check "/agentverse-api/realtime/guest-token" "200"
check "/agentverse-api/world/state" "401"

echo "[HTTP_SMOKE] PASS"

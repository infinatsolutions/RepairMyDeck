#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8080}"

cat <<MSG
==================================================
  Repair My Deck Local Static Preview
==================================================
Serving project root:
  $ROOT_DIR
URL:
  http://localhost:$PORT
MSG

cd "$ROOT_DIR"

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
else
  echo "ERROR: python3 is required to run local preview." >&2
  exit 1
fi

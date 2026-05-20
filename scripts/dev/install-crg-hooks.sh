#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: scripts/dev/install-crg-hooks.sh [--check]

Install or verify local Git hooks that keep code-review-graph fresh.

Hooks installed:
  post-commit   -> code-review-graph update
  post-checkout -> code-review-graph build
  post-merge    -> code-review-graph build
  post-rewrite  -> code-review-graph build

The hooks log to .code-review-graph/hooks.log and never block Git when CRG fails.
USAGE
}

mode="install"
if [[ "${1:-}" == "--check" ]]; then
  mode="check"
elif [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
elif [[ $# -gt 0 ]]; then
  usage >&2
  exit 2
fi

repo_root="$(git rev-parse --show-toplevel)"
hooks_dir="$repo_root/.git/hooks"
lib_path="$hooks_dir/crg-hook-lib.sh"
template_dir="$repo_root/scripts/dev/crg-hooks"
managed_hooks=(post-commit post-checkout post-merge post-rewrite)

check_hooks() {
  local missing=0

  if [[ ! -x "$lib_path" ]]; then
    echo "missing executable hook library: $lib_path" >&2
    missing=1
  fi

  for hook in "${managed_hooks[@]}"; do
    local hook_path="$hooks_dir/$hook"
    if [[ ! -x "$hook_path" ]]; then
      echo "missing executable hook: $hook_path" >&2
      missing=1
      continue
    fi
    if ! grep -q 'crg-hook-lib.sh' "$hook_path"; then
      echo "hook is not managed by install-crg-hooks.sh: $hook_path" >&2
      missing=1
    fi
  done

  return "$missing"
}

if [[ "$mode" == "check" ]]; then
  check_hooks
  echo "CRG hooks are installed for $repo_root"
  exit 0
fi

mkdir -p "$hooks_dir"

install -m 0755 "$template_dir/crg-hook-lib.sh" "$lib_path"
for hook in "${managed_hooks[@]}"; do
  install -m 0755 "$template_dir/$hook" "$hooks_dir/$hook"
done

check_hooks
echo "Installed CRG hooks for $repo_root"

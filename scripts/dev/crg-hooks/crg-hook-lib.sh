#!/usr/bin/env bash

crg_repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
crg_log_dir="$crg_repo_root/.code-review-graph"
crg_log_file="$crg_log_dir/hooks.log"
crg_lock_dir="$crg_log_dir/hook.lock"

crg_log() {
  mkdir -p "$crg_log_dir"
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >>"$crg_log_file"
}

run_crg_nonblocking() {
  local action="$1"
  shift

  if ! command -v code-review-graph >/dev/null 2>&1; then
    crg_log "skip $action: code-review-graph not found"
    return 0
  fi

  mkdir -p "$crg_log_dir"
  if ! mkdir "$crg_lock_dir" 2>/dev/null; then
    crg_log "skip $action: another CRG hook is running"
    return 0
  fi

  (
    trap 'rmdir "$crg_lock_dir" 2>/dev/null || true' EXIT
    crg_log "start $action"
    if code-review-graph "$@" --repo "$crg_repo_root" >>"$crg_log_file" 2>&1; then
      crg_log "ok $action"
    else
      crg_log "failed $action"
    fi
  ) &
}

# ChatGPT Project Context Entry

状态: active
最后更新: 2026-05-19
摘要: 面向网页版 ChatGPT GitHub 连接器的项目上下文入口，说明递归读取顺序、记忆契约和主干文件树。
上游:
- [00-index.md](00-index.md)
下游:
- [02-recent-summary.md](02-recent-summary.md)
- [01-reading-map.md](01-reading-map.md)
相关:
- [README.md](README.md)

This is the project context entry for ChatGPT conversations that use the GitHub connector. Give ChatGPT this file path first, then let it recursively read the linked memory files as needed.

## Read Order

1. Start here: `docs/memory/CHATGPT_CONTEXT.md`
2. Project memory root: `docs/memory/00-index.md`
3. Recent high-value context: `docs/memory/02-recent-summary.md`
4. Task routing map: `docs/memory/01-reading-map.md`
5. Follow the most relevant topic index under `docs/memory/`

## Memory Contract

- `docs/memory` is the only formal project memory root.
- Memory links use repository-relative or Markdown-relative paths so local agents and ChatGPT can resolve the same files from Git.
- Do not read every memory file by default. Use `01-reading-map.md` to choose the smallest relevant path.
- Stable facts belong in leaf files. Root files are navigation surfaces.

## Main Project Tree

The following tree is generated from tracked and unignored repository files, with archives, build output, temporary files, and bulky binary assets excluded.

```text
docs/
  memory/
    00-index.md
    01-reading-map.md
    02-recent-summary.md
    CHATGPT_CONTEXT.md
    README.md
scripts/
  dev/
    crg-hooks/
      ...
    install-crg-hooks.sh
  validate-content.ts
src/
  app/
    abilities/
      ...
    agent/
      ...
    api/
      ...
    contributors/
      ...
    diagnostics/
      ...
    jobs/
      ...
    majors/
      ...
    tasks/
      ...
    globals.css
    layout.tsx
    page.tsx
  lib/
    agent/
      ...
    content/
      ...
AGENTS.md
package.json
```

## Update Command

Run this after notable structure changes:

```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/memory-maintenance/scripts/update_chatgpt_context.py"
```

Check whether the entry is current:

```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/memory-maintenance/scripts/update_chatgpt_context.py" --check
```

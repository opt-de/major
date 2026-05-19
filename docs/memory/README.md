# MajorSkill Agent Lab Memory

状态: active
最后更新: 2026-05-19
摘要: 仓库级长期记忆入口，说明本项目记忆文件的用途、读取顺序和维护边界。
上游:
- []
下游:
- [00-index.md](00-index.md)
- [02-recent-summary.md](02-recent-summary.md)
- [01-reading-map.md](01-reading-map.md)
相关:
- [CHATGPT_CONTEXT.md](CHATGPT_CONTEXT.md)

## 结论

`docs/memory/` 是本仓库唯一正式的长期记忆根目录。它记录跨会话稳定事实，不替代 `AGENTS.md` 的行为约束，也不替代 `docs/ProjectProposal.md` 的项目提案。

## 读取顺序

1. 先读 [00-index.md](00-index.md) 确认当前记忆结构。
2. 再读 [02-recent-summary.md](02-recent-summary.md) 获取最近稳定上下文。
3. 按 [01-reading-map.md](01-reading-map.md) 选择后续文件。

## 维护边界

- 稳定项目事实、长期设计决策和高频工作流进入 memory。
- 临时调试日志、会话流水、未验证猜测不进入 memory。
- 面向 ChatGPT/GitHub 连接器的入口是 [CHATGPT_CONTEXT.md](CHATGPT_CONTEXT.md)。

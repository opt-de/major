## Context

PR #58 已将机械电子工程专业内容包合入 integration（`content/majors/mechatronics/`），包含 major、job、4 个 ability、1 个 task、1 套 diagnostic、1 条 learning path 和 4 个 resource。本 PR 为该内容包补充 OpenSpec 变更制品，并附带一项 loader 健壮性改进。

## Goals / Non-Goals

**Goals:**
- 创建与已合并内容一致的 OpenSpec 制品（proposal、design、specs、tasks）
- 修复 `readJsonDir()` 对不存在目录的容错（`existsSync` 守卫）

**Non-Goals:**
- 不新增或修改 content JSON 文件（已由 PR #58 完成）
- 不修改 Zod schema
- 不修改前端页面或 API

## Decisions

**OpenSpec 制品追溯已合并内容**：所有 spec 文件中的 ID、名称、字段均与 `content/majors/mechatronics/` 下的真实文件一致，确保后续归档时可一一对应。

**真实内容映射**：

| 类型 | 文件 | ID |
|------|------|----|
| 专业 | major.json | mechatronics |
| 岗位 | jobs/mechatronics-system-engineer.json | mechatronics-system-engineer |
| 能力 | abilities/mechanical-design-basics.json | mechanical-design-basics |
| 能力 | abilities/sensor-and-measurement.json | sensor-and-measurement |
| 能力 | abilities/mechatronic-control.json | mechatronic-control |
| 能力 | abilities/plc-programming.json | plc-programming |
| 任务 | tasks/automated-conveyor-task.json | automated-conveyor-task |
| 诊断 | diagnostics/mechatronics-basic.json | mechatronics-basic |
| 学习路径 | learning-paths/mechatronics-beginner.json | mechatronics-beginner |

**Loader 改进**：`readJsonDir()` 增加 `existsSync(dirPath)` 检查。背景：当 `discoverMajorDirs()` 发现 major 目录但该目录缺少某个子目录（如 `resources/`）时，不应让整个 `loadContent()` 崩溃。该改动不改变正常加载行为，只增加缺目录容错。

## Risks / Trade-offs

- [制品一致性] → 所有 spec 文件已与 integration 真实内容校对，ID 和字段均匹配
- [loader 改动] → 仅增加目录存在性守卫，不影响现有加载逻辑；若需更完整的测试覆盖，可在后续 PR 中补充

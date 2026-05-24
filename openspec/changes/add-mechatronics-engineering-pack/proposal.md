## Why

Issue #19 要求的机械电子工程专业内容包已由 PR #58 实现并合并到 integration。本 PR 补充对应的 OpenSpec 变更制品（proposal、design、specs、tasks），记录该内容包的设计决策与实施过程，供后续归档和复盘使用。

同时包含 `src/lib/content/load-content.ts` 中 `readJsonDir()` 的目录存在性保护：当某个 content 子目录不存在时返回空数组而非抛出异常，提升多专业扫描的健壮性。

## What Changes

- 新增 `openspec/changes/add-mechatronics-engineering-pack/` 下完整 OpenSpec 制品：
  - `proposal.md`、`design.md`、`tasks.md`
  - `specs/` 下 9 个能力规格文件
- 修改 `src/lib/content/load-content.ts`：`readJsonDir()` 增加 `existsSync` 检查，允许 content 子目录缺失时不崩溃

## Capabilities

### Documented Capabilities（对应已合入 content/majors/mechatronics/ 的内容）

- `mechatronics-major`: 机械电子工程专业（id: `mechatronics`），工学门类
- `mechatronics-system-engineer-job`: 机电系统工程师岗位，关联 4 个能力节点
- `mechanical-design-basics`: 机械设计基础能力（basic）
- `sensor-and-measurement`: 传感器与测量技术能力（basic）
- `mechatronic-control`: 机电传动控制能力（intermediate）
- `plc-programming`: PLC 编程与应用能力（intermediate）
- `automated-conveyor-task`: 自动化传送带机电控制系统设计学习任务
- `mechatronics-diagnostic`: 机电系统工程师基础诊断（5 题）
- `mechatronics-learning-path`: 机电系统工程师入门路径（3 节点）

## Impact

- OpenSpec 制品：新增 13 个文件
- 代码变更：`src/lib/content/load-content.ts` — `readJsonDir()` 增加目录存在性检查，不改变加载逻辑
- 内容文件：无变更（已由 PR #58 合入）
- 无 schema 变更，无页面变更

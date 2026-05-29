## Why

Issue #22 要求为控制算法工程师岗位新增一张学习任务卡"温控系统闭环设计"。该岗位已有 1 张通用温控任务卡（temperature-control-task），需要补充一个面向工业场景、包含 FOPDT 建模和多参数对比分析的进阶任务卡，使任务覆盖更完整。

## What Changes

- 新增 `content/majors/automation/tasks/industrial-furnace-temperature-control-task.json`
  - 场景：工厂电加热炉热处理，设定值 ±2°C
  - 覆盖全部 4 个能力节点：system-modeling、controller-design、simulation-validation、engineering-communication
  - 7 个步骤，4 维评分，6 项交付物，3 条安全说明，3 条来源引用

## Capabilities

### New Capabilities

- `automation-task-content`: 自动化专业学习任务卡集合，本次新增工业电加热炉温控任务

## Impact

- 内容文件：新增 1 个 JSON 文件
- 无 schema 变更，无页面变更，无 loader 变更
- 验证：`npm run validate-content` 通过（6 task），`npm run check` 全部通过

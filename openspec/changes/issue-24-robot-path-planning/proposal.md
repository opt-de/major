## Why

为机器人方向的学习者提供一个 **学习任务卡**，使其能够在已有的 `robot-path-planning` 能力框架下，练习路径规划的概念、输入/输出约束与评价标准。此变更仅涉及内容层面的新增，不包括实际的路径规划算法实现或 API 开发。

## What Changes

- 新增学习任务卡 `small-robot-path-planning.json`，包含任务目标、输入输出约束、步骤说明、评价 rubrics 与拓展挑战。
- 在 `content/majors/automation/tasks/` 目录下添加上述 JSON 文件。
- 更新任务索引，使前端能够在任务列表中展示该任务卡。

## Capabilities

### New Capabilities
- `robot-path-planning-experiment`：定义实验的需求说明（输入网格、起点/终点、输出路径及质量指标），供学习者参考。

### Modified Capabilities
- *(无需修改已存在的能力规格)*

## Impact

- 前端任务卡页面将新增该任务的展示，使用现有 `TaskCard` 组件渲染。
- 内容加载与校验脚本 (`npm run validate-content`) 将校验新任务 JSON 的结构符合 Zod schema。
- **不涉及任何后端代码或算法实现**，仅为内容层面的新增。

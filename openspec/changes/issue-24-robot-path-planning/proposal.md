## Why

为机器人方向的学习者提供实战练习，帮助他们掌握路径规划算法（A*、RRT）及其在小型机器人上的应用，提升算法实现与仿真能力。

## What Changes

- 新增学习任务卡 `small-robot-path-planning`，包含任务目标、输入输出约束、步骤说明、评价 rubrics 与拓展挑战。
- 引入对应的能力引用 `robot-path-planning`（已在 content/majors/automation/abilities/robot-path-planning.json 中定义）。
- 更新 `content/majors/automation/tasks/` 目录，添加任务 JSON 文件。
- 更新任务索引以在前端展示该任务卡。

## Capabilities

### New Capabilities
- `robot-path-planning-experiment`: 为小型机器人路径规划实验提供需求说明，定义实验输入（网格地图、起点/终点）、输出（无碰撞路径、优化指标）以及评价标准。

### Modified Capabilities
- *(无需修改已存在的能力规格)*

## Impact

- 前端任务卡页面将新增该任务的展示，使用现有 `TaskCard` 组件渲染。
- 内容加载与校验脚本 (`npm run validate-content`) 将校验新任务 JSON 的结构符合 Zod schema。
- 不涉及代码逻辑改变，仅为内容层面的新增。
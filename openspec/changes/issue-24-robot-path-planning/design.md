## Context

本实验面向机器人方向的学习者，旨在提供一个实战环境，让用户在二维网格或仿真平台上实现路径规划算法（A*、RRT），并通过实验评估路径质量与算法效率。现有内容已包含 `robot-path-planning` 能力定义及示例任务 `pick-and-place-robot-task`，但缺乏专门的实验任务卡用于教学与评估。

## Goals / Non-Goals

**Goals:**
- 为小型机器人路径规划实验提供完整的学习任务卡，包括目标、输入/输出约束、步骤说明、评价标准与拓展挑战。
- 通过新增内容文件与索引，使前端能够展示该任务卡并在内容验证 (`npm run validate-content`) 中通过校验。
- 不涉及后端业务逻辑或新依赖，仅在内容层面完成。

**Non-Goals:**
- 不实现实际路径规划算法代码（已有能力 `robot-path-planning` 实现），仅提供教学任务描述。
- 不修改现有 API 或后端服务，只添加内容文件。

## Decisions

- **任务卡存放位置**：在 `content/majors/automation/tasks/` 目录下新增 `small-robot-path-planning.json`，保持与其他任务卡一致的结构。
- **能力引用**：任务卡的 `abilityIds` 仅引用 `robot-path-planning`，确保与已有能力保持一致。
- **评价 Rubrics**：采用统一的任务评价结构，包含算法正确性、路径最短性、代码可读性、实验报告完整性等维度。
- **文档格式**：遵循项目已有的 `proposal.md` 与 `design.md` 模板，保持统一风格。

## Risks / Trade-offs

- **风险**：若任务描述不够清晰，学习者可能在实现路径规划时出现误解。 mitigated by 在任务卡中提供明确的输入/输出示例与参考实现链接。
- **权衡**：保持内容层面的改动最小，以免触发复杂的 CI 检查；因此不在代码层面添加新依赖或修改业务逻辑。

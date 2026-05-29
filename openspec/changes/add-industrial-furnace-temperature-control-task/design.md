## Context

control-algorithm-engineer 岗位已有 4 个能力节点和 1 张通用温控 PID 任务卡。Issue #22 要求新增一张侧重工业场景的温控系统闭环设计任务卡，与已有任务互补。

已有 `temperature-control-task` 覆盖通用实验装置的 PID 方案设计（5 步、2 维评分），新任务侧重工业电加热炉场景下的 FOPDT 建模 + 多参数对比分析。

## Goals / Non-Goals

**Goals:**
- 新增 1 张任务卡，关联全部 4 个能力节点
- 场景为工业电加热炉，体现真实工程约束
- 步骤数 5–8（实际 7 步）
- 评分维度 ≥3（实际 4 维）
- 包含安全/伦理说明和 ≥2 条来源引用

**Non-Goals:**
- 不修改已有任务卡
- 不修改 Zod schema
- 不修改前端页面或 API
- 不修改 job.json 中的 abilityIds 列表

## Decisions

**场景选择**：工业电加热炉（而非重复通用实验装置），引入 FOPDT 模型（一阶惯性+滞后），比已有任务的一阶惯性模型更贴近工业实际。

**步骤设计**：

| 步骤 | 内容 | 关联能力 |
|------|------|----------|
| 1 | 整理建模假设 | system-modeling |
| 2 | 建立 FOPDT 传递函数模型 | system-modeling |
| 3 | 设计 PID 控制器并整定参数 | controller-design |
| 4 | 搭建仿真模型 | simulation-validation |
| 5 | 运行阶跃响应和抗扰动测试 | simulation-validation |
| 6 | 多组参数对比分析 | simulation-validation, engineering-communication |
| 7 | 撰写设计报告 | engineering-communication |

**评分设计**：4 个维度对应 4 个能力节点，每个维度 3 个等级（基础/合格/优秀）。

## Risks / Trade-offs

- 内容为模拟数据（第一期），后续需替换为真实脱敏材料
- 与已有 temperature-control-task 在 PID 设计部分有少量重叠，属合理交叉

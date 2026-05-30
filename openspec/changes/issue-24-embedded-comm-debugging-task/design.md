## Context

embedded-software-engineer 岗位已有 4 个能力节点（embedded-c-programming、embedded-interface-comm、embedded-debugging、embedded-system-design），但尚无任务卡。Issue #24 要求新增首张任务卡"嵌入式设备通信调试"。

此外，任务 Zod Schema（`learningTaskSchema`）目前仅包含 12 个字段，不包含 `commonErrors`。Issue 验收标准明确要求"包含常见错误"，需要在 Schema 层面支持。

## Goals / Non-Goals

**Goals:**
- 在 `learningTaskSchema` 中新增 `commonErrors` 可选字段，类型为对象数组，包含 error、symptoms、diagnosis、fix 四个字符串属性
- 新增 1 张任务卡，关联 3 个能力节点（embedded-c-programming、embedded-interface-comm、embedded-debugging）
- 场景为智能家居传感器节点通信异常调试（UART 丢包 + SPI CRC 错误）
- 步骤数 5–10（实际 8 步）
- 评分维度 ≥3（实际 4 维）
- 包含 5 个常见错误（含现象、诊断、修复）
- 更新任务模板

**Non-Goals:**
- 不修改已有 6 张任务卡（commonErrors 为可选字段，向后兼容）
- 不修改前端页面或 API
- 不修改 job.json 中的 abilityIds 列表
- 不新增能力节点或岗位定义

## Decisions

**Schema 设计**：`commonErrors` 作为可选字段数组，每个元素包含：
- `error`: 错误名称（简短描述）
- `symptoms`: 现象（如何识别该错误）
- `diagnosis`: 诊断方法（如何定位）
- `fix`: 修复方法（如何解决）

选择可选字段而非必填字段，确保已有任务卡不受影响。

**任务卡设计**：

| 步骤 | 内容 | 关联能力 |
|------|------|----------|
| 1 | 阅读需求与硬件说明 | embedded-system-design |
| 2 | 复现通信故障 | embedded-debugging |
| 3 | 分析 UART 丢包问题 | embedded-interface-comm、embedded-debugging |
| 4 | 分析 SPI CRC 错误 | embedded-interface-comm、embedded-debugging |
| 5 | 定位根因并提出修复方案 | embedded-debugging |
| 6 | 实施修复并验证 | embedded-c-programming、embedded-debugging |
| 7 | 处理常见异常场景 | embedded-interface-comm、embedded-debugging |
| 8 | 撰写调试报告 | embedded-debugging |

**评分设计**：4 个维度（故障复现与现象描述、根因分析、修复方案与实施、调试报告），每个维度 3 个等级。

**能力关联**：选择 3 个能力节点而非全部 4 个。embedded-system-design 侧重系统架构设计，与本任务的通信调试主题关联较弱。

## Risks / Trade-offs

- Schema 新增字段为可选，不影响已有数据和 CI
- 内容为模拟数据（第一期），后续需替换为真实脱敏材料
- 本任务是 embedded-software-engineer 的首张任务卡，后续任务卡可复用 commonErrors 结构

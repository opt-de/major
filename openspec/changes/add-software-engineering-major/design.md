## Context

新增「软件工程」专业内容包，遵循与现有 `automation` 专业一致的内容结构规范。所有数据采用 Mock 格式，不接入真实数据库或课程数据。

## Goals / Non-Goals

**Goals:**
- 按照 `content/templates/` 下的模板格式创建完整的专业内容包
- 所有 JSON 文件通过 Zod schema（`src/schemas/index.ts`）校验
- 数据项均标注 `type: "mock"`

**Non-Goals:**
- 不修改前端展示代码
- 不修改 API 路由
- 不修改 Zod schema 定义
- 不涉及真实学生数据或真实课程习题

## Decisions

1. **岗位选择：后端开发工程师** — 软件工程核心方向，与现有「嵌入式软件工程师」互补，覆盖不同工程领域。
2. **能力节点设计：** 采用与 automation 一致的 basic/intermediate/advanced 分层，覆盖编程语言、数据库、系统设计和工程协作四个维度。
3. **学习任务：API 设计任务** — 后端开发的典型工作场景，可串联多个能力节点进行综合评估。

## Risks / Trade-offs

- 能力节点与岗位的对应关系（`abilityIds`）需手动维护一致性，无自动校验跨文件引用
- 诊断题评分规则（`scoringRules`）中的 `weakBelow` 阈值基于经验设定，后续可根据实际使用调整
## Context

新增「软件工程」专业内容包，遵循与「自动化」专业一致的内容结构规范。所有数据采用 Mock 格式，标注 `type: "mock"`。

## Goals / Non-Goals

**Goals:**
- 按照 `content/templates/` 下的模板格式创建完整专业内容包
- 所有 JSON 文件通过 Zod schema 校验
- loadContent() 支持多专业遍历

**Non-Goals:**
- 不修改前端展示、API 路由或 Zod schema

## Decisions

1. **岗位选择：后端开发工程师** — 与现有嵌入式软件工程师互补
2. **能力节点设计：** basic/intermediate 分层，覆盖编程、数据库、系统设计、工程协作四维度

## Risks / Trade-offs

- abilityIds 手写维护，无自动校验跨文件引用
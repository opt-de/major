## Context

新增「人工智能」专业内容包，遵循与「自动化」专业一致的内容结构规范。所有数据采用 Mock 格式，标注 `type: "mock"`。

## Goals / Non-Goals

**Goals:**
- 按照 `content/templates/` 下的模板格式创建完整专业内容包
- 所有 JSON 文件通过 Zod schema 校验
- 学习路径 sourceRefs 保持必填，AI 学习路径已补充 sourceRefs

**Non-Goals:**
- 不修改前端展示、API 路由
- 不新增诊断题和学习任务（留待后续迭代）

## Decisions

1. **岗位选择：机器学习工程师** — 与平台定位（AI/ML 方向）高度匹配
2. **能力节点设计：** basic/intermediate 分层，覆盖数据处理、建模、评估、部署四维度
3. **sourceRefs 必填：** 学习路径的 sourceRefs 保持必填，AI 学习路径已补充相应来源引用

## Risks / Trade-offs

- abilityIds 手写维护，无自动校验跨文件引用
- 诊断题和学习任务目录仅用 .gitkeep 占位，后续需补充

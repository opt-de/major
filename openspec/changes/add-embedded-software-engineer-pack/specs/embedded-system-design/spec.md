## ADDED Requirements

### Requirement: 嵌入式系统设计能力节点
系统 SHALL 提供嵌入式系统设计能力节点，覆盖 RTOS 基础、任务调度、低功耗设计等系统设计知识。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** embedded-system-design.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 embedded-system-design.json
- **THEN** 文件包含 ≥1 个 knowledgePoints、≥1 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

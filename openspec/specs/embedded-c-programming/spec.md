# embedded-c-programming Specification

## Purpose
TBD - created by archiving change add-embedded-software-engineer-pack. Update Purpose after archive.
## Requirements
### Requirement: 嵌入式 C 编程能力节点
系统 SHALL 提供嵌入式 C 编程能力节点，覆盖指针、内存管理、寄存器操作等核心知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** embedded-c-programming.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 embedded-c-programming.json
- **THEN** 文件包含 ≥1 个 knowledgePoints、≥1 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

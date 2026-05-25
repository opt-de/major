# mechanical-design-basics Specification

## Purpose
TBD - created by archiving change add-mechatronics-major. Update Purpose after archive.
## Requirements
### Requirement: 机械设计基础能力节点
系统 SHALL 提供机械设计基础能力节点，覆盖传动方案、零件选型和强度校核等核心知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechanical-design-basics.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 `mechanical-design-basics.json`
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

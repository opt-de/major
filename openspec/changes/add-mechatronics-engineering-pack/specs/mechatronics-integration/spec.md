## ADDED Requirements

### Requirement: 机电系统集成能力节点
系统 SHALL 提供机电系统集成能力节点，覆盖机电接口设计、系统联调、故障诊断等知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics-integration.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 mechatronics-integration.json
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥2 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

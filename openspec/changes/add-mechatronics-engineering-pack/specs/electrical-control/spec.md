## ADDED Requirements

### Requirement: 电气控制技术能力节点
系统 SHALL 提供电气控制技术能力节点，覆盖电路分析、PLC 编程、电气安全等知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** electrical-control.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 electrical-control.json
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥2 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

## ADDED Requirements

### Requirement: 机械设计基础能力节点
系统 SHALL 提供机械设计基础能力节点（id: `mechanical-design-basics`），level 为 basic，覆盖常用机械传动机构选型与设计方法。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechanical-design-basics.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 mechanical-design-basics.json
- **THEN** 文件包含 ≥4 个 knowledgePoints、≥4 个 skillPoints、≥2 个 relatedCourses、≥2 个 prerequisites、≥2 个 evidenceExamples、≥1 个 sourceRefs

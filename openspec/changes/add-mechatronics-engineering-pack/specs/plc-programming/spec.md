## ADDED Requirements

### Requirement: PLC编程与应用能力节点
系统 SHALL 提供 PLC 编程与应用能力节点（id: `plc-programming`），level 为 intermediate，覆盖 PLC 梯形图编程、I/O 分配和常用功能指令。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** plc-programming.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 plc-programming.json
- **THEN** 文件包含 ≥4 个 knowledgePoints、≥4 个 skillPoints、≥2 个 relatedCourses、≥2 个 prerequisites、≥2 个 evidenceExamples、≥1 个 sourceRefs

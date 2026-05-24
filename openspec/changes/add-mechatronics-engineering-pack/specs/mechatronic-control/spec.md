## ADDED Requirements

### Requirement: 机电传动控制能力节点
系统 SHALL 提供机电传动控制能力节点（id: `mechatronic-control`），level 为 intermediate，覆盖伺服电机、步进电机等执行元件的驱动与控制方法。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronic-control.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 mechatronic-control.json
- **THEN** 文件包含 ≥4 个 knowledgePoints、≥4 个 skillPoints、≥2 个 relatedCourses、≥2 个 prerequisites、≥2 个 evidenceExamples、≥1 个 sourceRefs

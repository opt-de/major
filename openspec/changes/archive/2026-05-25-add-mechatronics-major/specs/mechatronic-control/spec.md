## ADDED Requirements

### Requirement: 机电传动控制能力节点
系统 SHALL 提供机电传动控制能力节点，覆盖伺服电机/步进电机驱动、速度/位置闭环控制和参数整定。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechatronic-control.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 `mechatronic-control.json`
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

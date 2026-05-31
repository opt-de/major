## ADDED Requirements

### Requirement: PLC编程与应用能力节点
系统 SHALL 提供 PLC 编程与应用能力节点，覆盖梯形图编程、I/O 分配、定时器/计数器和顺序控制。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `plc-programming.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 `plc-programming.json`
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

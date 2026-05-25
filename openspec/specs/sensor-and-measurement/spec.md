# sensor-and-measurement Specification

## Purpose
TBD - created by archiving change add-mechatronics-major. Update Purpose after archive.
## Requirements
### Requirement: 传感器与测量技术能力节点
系统 SHALL 提供传感器与测量技术能力节点，覆盖工业传感器选型、信号调理和测量误差分析。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `sensor-and-measurement.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 `sensor-and-measurement.json`
- **THEN** 文件包含 ≥3 个 knowledgePoints、≥3 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

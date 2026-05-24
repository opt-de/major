## ADDED Requirements

### Requirement: 传感器与测量技术能力节点
系统 SHALL 提供传感器与测量技术能力节点（id: `sensor-and-measurement`），level 为 basic，覆盖常用工业传感器原理、选型方法和信号处理技术。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** sensor-and-measurement.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 sensor-and-measurement.json
- **THEN** 文件包含 ≥4 个 knowledgePoints、≥4 个 skillPoints、≥2 个 relatedCourses、≥2 个 prerequisites、≥2 个 evidenceExamples、≥1 个 sourceRefs

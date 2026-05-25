# embedded-interface-comm Specification

## Purpose
TBD - created by archiving change add-embedded-software-engineer-pack. Update Purpose after archive.
## Requirements
### Requirement: 接口与通信协议能力节点
系统 SHALL 提供接口与通信协议能力节点，覆盖 UART/SPI/I2C、CAN 总线等常见嵌入式通信方式。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** embedded-interface-comm.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整字段
- **WHEN** 读取 embedded-interface-comm.json
- **THEN** 文件包含 ≥1 个 knowledgePoints、≥1 个 skillPoints、≥1 个 relatedCourses、≥1 个 evidenceExamples、≥1 个 sourceRefs

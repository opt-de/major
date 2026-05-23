## ADDED Requirements

### Requirement: 机电系统工程师入门学习路径
系统 SHALL 提供机电系统工程师入门学习路径，包含至少 3 个学习节点，覆盖机械设计、传感器测量和传动控制 PLC 三个领域。

#### Scenario: 学习路径文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechatronics-beginner.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`，每节点的 `abilityIds` 和 `resourceIds` 指向存在实体

#### Scenario: 学习路径包含完整节点
- **WHEN** 读取 `mechatronics-beginner.json`
- **THEN** 文件包含 ≥3 个 nodes，每节点有 id、title、abilityIds（≥1）、resourceIds（≥1）、expectedOutcome

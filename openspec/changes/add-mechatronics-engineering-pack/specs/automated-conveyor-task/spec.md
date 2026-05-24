## ADDED Requirements

### Requirement: 自动化传送带机电控制系统设计学习任务
系统 SHALL 提供自动化传送带机电控制系统设计学习任务（id: `automated-conveyor-task`），覆盖机械设计基础、传感器与测量、机电传动控制和 PLC 编程 4 个能力节点。

#### Scenario: 学习任务通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** automated-conveyor-task.json 通过 Zod schema 校验，abilityIds 指向存在的能力节点

#### Scenario: 学习任务包含完整字段
- **WHEN** 读取 automated-conveyor-task.json
- **THEN** 文件包含 ≥4 个 objectives、≥6 个 steps、≥5 个 deliverables、≥3 个 rubric、≥3 个 safetyOrEthicsNotes、≥1 个 sourceRefs

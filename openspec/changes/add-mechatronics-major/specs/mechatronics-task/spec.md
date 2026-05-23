## ADDED Requirements

### Requirement: 自动化传送带机电系统设计任务
系统 SHALL 提供自动化传送带机电控制系统设计学习任务，覆盖机械传动方案、传感器选型、电机控制和 PLC 编程。

#### Scenario: 任务文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `automated-conveyor-task.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`，`abilityIds` 均指向存在的能力节点

#### Scenario: 任务包含完整字段
- **WHEN** 读取 `automated-conveyor-task.json`
- **THEN** 文件包含 ≥4 个 objectives、≥4 个 steps、≥3 个 deliverables、≥2 个 rubric 评价维度、≥1 个 sourceRefs

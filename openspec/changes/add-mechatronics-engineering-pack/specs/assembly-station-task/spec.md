## ADDED Requirements

### Requirement: 自动化装配工作站机电系统设计学习任务
系统 SHALL 提供自动化装配工作站机电系统设计学习任务，覆盖机械设计、电气控制、传感器检测和系统集成能力。

#### Scenario: 学习任务通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** assembly-station-design.json 通过 Zod schema 校验，abilityIds 指向存在的能力节点

#### Scenario: 学习任务包含完整字段
- **WHEN** 读取 assembly-station-design.json
- **THEN** 文件包含 ≥3 个 objectives、≥4 个 steps、≥2 个 deliverables、≥2 个 rubric、≥1 个 sourceRefs

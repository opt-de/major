## ADDED Requirements

### Requirement: 机电工程师入门学习路径
系统 SHALL 提供机电工程师入门学习路径，按照机械基础→电气控制→传感检测→系统集成的渐进路线组织。

#### Scenario: 学习路径通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics-beginner.json 通过 Zod schema 校验

#### Scenario: 学习路径包含完整节点
- **WHEN** 读取 mechatronics-beginner.json
- **THEN** 文件包含 ≥3 个 nodes，每个节点包含 title、abilityIds、resourceIds、expectedOutcome

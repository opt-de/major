## ADDED Requirements

### Requirement: 机电工程师基础诊断题
系统 SHALL 提供机电工程师基础诊断题，覆盖机械设计基础、电气控制技术、传感器与检测技术、机电系统集成 4 个能力节点。

#### Scenario: 诊断题通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics-basic.json 通过 Zod schema 校验，每道题的 abilityId 指向存在的能力节点

#### Scenario: 诊断题覆盖所有能力
- **WHEN** 读取 mechatronics-basic.json
- **THEN** questions 数组包含 ≥5 道题，每道题绑定一个 abilityId，scoringRules 覆盖所有 4 个能力节点

## ADDED Requirements

### Requirement: 嵌入式软件工程师基础诊断题
系统 SHALL 提供嵌入式软件工程师基础诊断题（id: `embedded-basic`），覆盖 embedded-c-programming、embedded-interface-comm、embedded-debugging、embedded-system-design 4 个能力节点。

#### Scenario: 诊断题通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** embedded-basic.json 通过 Zod schema 校验，每道题的 abilityId 指向存在的嵌入式能力节点

#### Scenario: 诊断题覆盖所有嵌入式能力
- **WHEN** 读取 embedded-basic.json
- **THEN** questions 数组包含 ≥10 道题，每个 abilityId 至少 2 题，题型包含 single-choice 和 true-false

#### Scenario: 安全内容覆盖
- **WHEN** 读取 embedded-basic.json
- **THEN** 至少 2 道题涉及嵌入式安全相关内容（缓冲区安全、看门狗、固件完整性等）

#### Scenario: 诊断题绑定答案与解释
- **WHEN** 读取 embedded-basic.json
- **THEN** 每道题包含 answer 和 explanation 字段，scoringRules 覆盖全部 4 个能力节点并包含 weakBelow 阈值和 feedback

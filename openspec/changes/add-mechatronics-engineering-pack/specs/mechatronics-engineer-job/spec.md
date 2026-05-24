## ADDED Requirements

### Requirement: 机电工程师岗位内容包
系统 SHALL 提供机电工程师岗位内容包，包含岗位描述、工作场景、典型任务和关联能力节点。

#### Scenario: 岗位文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics-engineer.json 通过 Zod schema 校验，abilityIds 指向存在的能力节点

#### Scenario: 岗位文件包含完整字段
- **WHEN** 读取 mechatronics-engineer.json
- **THEN** 文件包含 ≥3 个 workScenarios、≥3 个 typicalTasks、≥4 个 abilityIds、≥1 个 sourceRefs

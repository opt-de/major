## ADDED Requirements

### Requirement: 机电系统工程师岗位内容包
系统 SHALL 提供机电系统工程师岗位（id: `mechatronics-system-engineer`），关联 majorId `mechatronics`，包含岗位描述、工作场景、典型任务和 4 个关联能力节点。

#### Scenario: 岗位文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics-system-engineer.json 通过 Zod schema 校验，abilityIds 指向存在的能力节点

#### Scenario: 岗位文件包含完整字段
- **WHEN** 读取 mechatronics-system-engineer.json
- **THEN** 文件包含 ≥5 个 workScenarios、≥5 个 typicalTasks、4 个 abilityIds（mechanical-design-basics, sensor-and-measurement, mechatronic-control, plc-programming）、≥1 个 sourceRefs

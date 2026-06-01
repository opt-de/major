## ADDED Requirements

### Requirement: 机电系统工程师岗位内容包
系统 SHALL 提供机电系统工程师岗位 JSON 内容文件，包含岗位描述、工作场景、典型任务和关联能力节点。

#### Scenario: 岗位文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechatronics-system-engineer.json` 通过 Zod schema 校验，且 `majorId` 指向 `mechatronics`，`abilityIds` 指向存在的能力节点

#### Scenario: 岗位包含完整字段
- **WHEN** 读取 `mechatronics-system-engineer.json`
- **THEN** 文件包含 ≥4 个 workScenarios、≥5 个 typicalTasks、≥4 个 abilityIds、≥1 个 sourceRefs

### Requirement: 岗位关联到机械电子工程专业
系统 SHALL 在 mechatronics major.json 的 relatedJobs 中包含 mechatronics-system-engineer。

#### Scenario: major 引用新岗位
- **WHEN** 读取 `content/majors/mechatronics/major.json`
- **THEN** `relatedJobs` 数组包含 `"mechatronics-system-engineer"`

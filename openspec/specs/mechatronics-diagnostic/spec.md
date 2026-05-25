# mechatronics-diagnostic Specification

## Purpose
TBD - created by archiving change add-mechatronics-major. Update Purpose after archive.
## Requirements
### Requirement: 机电系统工程师基础诊断测验
系统 SHALL 提供机电系统工程师基础诊断测验，覆盖 4 个能力节点，包含至少 5 道题目。

#### Scenario: 诊断文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechatronics-basic.json` 通过 Zod schema 校验，`majorId` 指向 `mechatronics`，`jobId` 指向 `mechatronics-system-engineer`，每道题的 `abilityId` 指向存在的能力节点

#### Scenario: 诊断包含完整题目
- **WHEN** 读取 `mechatronics-basic.json`
- **THEN** 文件包含 ≥5 个 questions，每道题有完整的 options（≥2 个选项）、answer 和 explanation；scoringRules 覆盖所有引用的 abilityId

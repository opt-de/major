# automation-major Specification

## Purpose
记录自动化专业内容包的结构化约束，确保专业定义、岗位引用和内容校验规则保持一致，避免新增岗位后出现页面可见内容与数据引用关系不一致。
## Requirements
### Requirement: 自动化专业关联岗位
自动化专业 major.json 的 relatedJobs 数组 SHALL 包含所有已定义的岗位 ID。

#### Scenario: 包含嵌入式软件工程师
- **WHEN** 读取 content/majors/automation/major.json
- **THEN** relatedJobs 数组同时包含 "control-algorithm-engineer" 和 "embedded-software-engineer"

#### Scenario: 引用完整性校验通过
- **WHEN** 运行 `npm run validate-content`
- **THEN** major.json 中所有 relatedJobs 引用的 job ID 均存在对应的 job 文件

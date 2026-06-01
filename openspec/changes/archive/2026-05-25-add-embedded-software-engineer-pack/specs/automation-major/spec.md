## MODIFIED Requirements

### Requirement: 自动化专业关联岗位
自动化专业 major.json 的 relatedJobs 数组 SHALL 包含所有已定义的岗位 ID。

#### Scenario: 包含嵌入式软件工程师
- **WHEN** 读取 content/majors/automation/major.json
- **THEN** relatedJobs 数组同时包含 "control-algorithm-engineer" 和 "embedded-software-engineer"

#### Scenario: 引用完整性校验通过
- **WHEN** 运行 `npm run validate-content`
- **THEN** major.json 中所有 relatedJobs 引用的 job ID 均存在对应的 job 文件

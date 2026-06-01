# mechatronics-major Specification

## Purpose
TBD - created by archiving change add-mechatronics-major. Update Purpose after archive.
## Requirements
### Requirement: 机械电子工程专业定义
系统 SHALL 提供机械电子工程专业 JSON 内容文件，包含专业简介、核心课程和关联岗位引用。

#### Scenario: 专业文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** `mechatronics` major.json 通过 Zod schema 校验，且 `relatedJobs` 指向存在的岗位 ID

#### Scenario: 专业包含完整字段
- **WHEN** 读取 `content/majors/mechatronics/major.json`
- **THEN** 文件包含 name、category、description、coreCourses（≥4 门）、relatedJobs（≥1 个）、sourceRefs

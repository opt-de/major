## ADDED Requirements

### Requirement: 机械电子工程专业内容包
系统 SHALL 提供机械电子工程专业（id: `mechatronics`）内容包，包含专业简介、核心课程、培养目标等字段，归属工学门类。

#### Scenario: 专业文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** major.json 通过 Zod schema 校验，relatedJobs 指向存在的岗位

#### Scenario: 专业文件包含完整字段
- **WHEN** 读取 major.json
- **THEN** 文件包含 ≥2 个 targetStudents、≥1 个 relatedJobs、≥4 个 coreCourses、≥1 个 sourceRefs

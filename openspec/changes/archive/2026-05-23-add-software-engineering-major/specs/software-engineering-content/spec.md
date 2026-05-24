## ADDED Requirements

### Requirement: 软件工程专业内容包
系统 SHALL 能加载和校验 `content/majors/software-engineering/` 下的所有内容文件。

#### Scenario: 专业被加载
- **WHEN** 系统调用 loadContent()
- **THEN** `majors` 数组中 SHALL 包含 id 为 `software-engineering` 的专业

#### Scenario: 岗位、能力、任务、诊断均被加载
- **WHEN** 系统调用 loadContent()
- **THEN** `jobs`、`abilities`、`tasks`、`diagnostics`、`learningPaths` 中 SHALL 存在对应的 software-engineering 条目
## Purpose

为本科专业能力发展智能体实验平台提供「人工智能」专业内容包的数据加载与校验规范，覆盖专业元数据、岗位定义、能力节点、学习路径及相关资源。

## Requirements

### Requirement: 人工智能专业内容包
系统 SHALL 能加载和校验 `content/majors/artificial-intelligence/` 下的所有内容文件。

#### Scenario: 专业被加载
- **WHEN** 系统调用 loadContent()
- **THEN** `majors` 数组中 SHALL 包含 id 为 `artificial-intelligence` 的专业

#### Scenario: 岗位、能力、路径均被加载
- **WHEN** 系统调用 loadContent()
- **THEN** `jobs`、`abilities`、`learningPaths` 中 SHALL 存在对应的 artificial-intelligence 条目

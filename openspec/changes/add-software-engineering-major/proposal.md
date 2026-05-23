## Why

本科专业能力发展智能体实验平台当前仅包含「自动化」一个专业内容包。新增「软件工程」专业可以验证内容包扩展流程的可复用性，并为平台增加第二个完整专业数据源，覆盖更多工程类人才培养场景。

## What Changes

- 新增 `content/majors/software-engineering/major.json` — 软件工程专业元数据
- 新增 `content/majors/software-engineering/jobs/backend-developer.json` — 后端开发工程师岗位
- 新增 `content/majors/software-engineering/abilities/` — 至少 4 个能力节点（Java 编程、数据库设计、系统设计、工程协作等）
- 新增 `content/majors/software-engineering/tasks/api-design-task.json` — 学习任务：API 设计与实现
- 新增 `content/majors/software-engineering/diagnostics/backend-basics.json` — 后端基础诊断题
- 新增 `content/majors/software-engineering/resources/resources.json` — 资源条目
- 新增 `content/majors/software-engineering/learning-paths/backend-beginner.json` — 入门学习路径

## Capabilities

### New Capabilities
- `software-engineering-content`: 软件工程专业内容包，包含专业元数据、岗位定义、能力节点、学习任务、诊断题和学习路径

### Modified Capabilities

- 无

## Impact

影响范围仅限于 `content/majors/software-engineering/` 目录下的 JSON 数据文件。不涉及前端展示、API 路由、数据库或 Agent 逻辑修改。所有数据均为 Mock 数据，标注 `type: "mock"`。
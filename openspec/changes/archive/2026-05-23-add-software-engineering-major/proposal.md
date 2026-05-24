## Why

本科专业能力发展智能体实验平台当前仅包含「自动化」一个专业内容包。新增「软件工程」专业可以验证内容包扩展流程的可复用性，并为平台增加第二个完整专业数据源。

## What Changes

- 新增 `content/majors/software-engineering/major.json`
- 新增 `jobs/backend-developer.json`、4 个能力节点、1 个学习任务、1 套诊断题、1 条学习路径
- `src/lib/content/load-content.ts` 从硬编码 automation 改为遍历 `content/majors/*`

## Capabilities

### New Capabilities
- `software-engineering-content`: 软件工程专业内容包

### Modified Capabilities
- 无

## Impact

仅限于 `content/majors/software-engineering/` 和 `src/lib/content/load-content.ts`。
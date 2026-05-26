## Why

本科专业能力发展智能体实验平台当前仅包含「自动化」一个专业内容包。新增「人工智能」专业可以验证内容包扩展流程的可复用性，并为平台增加一个完整专业数据源，覆盖机器学习工程方向。

## What Changes

- 新增 `content/majors/artificial-intelligence/major.json`
- 新增 `jobs/ml-engineer.json`、4 个能力节点、1 条学习路径、3 个资源文件
- 新增 `diagnostics/.gitkeep` 和 `tasks/.gitkeep` 占位目录
- `src/lib/schemas/learning-path.ts` 中 `learningPathSchema.sourceRefs` 保持必填，AI 学习路径已补充 `sourceRefs`

## Capabilities

### New Capabilities
- `artificial-intelligence-content`: 人工智能专业内容包

### Modified Capabilities
- 无。`learningPathSchema.sourceRefs` 保持必填，AI 学习路径已补充 `sourceRefs`。

## Impact

仅限于 `content/majors/artificial-intelligence/` 和 `jobs/`、`learning-paths/`、`resources/` 下的 AI 相关条目。`learningPathSchema.sourceRefs` 最终保持必填。

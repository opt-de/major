# 内容 Schema 说明

内容数据存放在 `content/`，由 `src/schemas/` 中的 Zod schema 校验。

## 核心对象

- Major：本科专业。
- JobRole：典型就业岗位。
- Ability：能力节点。
- LearningTask：学习任务。
- Diagnostic：诊断测验。
- LearningPath：学习路径。
- Resource：学习资源。
- Contributor：贡献者记录。

## 来源字段

每个内容包必须包含 `sourceRefs`。第一期允许 `type: "mock"`，但必须说明是模拟数据。

## 校验

```bash
npm run validate-content
```

校验会检查 schema 结构和关键 ID 引用关系。

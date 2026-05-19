# 贡献指南

## 基本流程

1. 阅读 `README.md` 和 `docs/content-schema.md`。
2. 在 GitHub issue 中领取任务。
3. 从 `integration` 创建功能分支。
4. 修改内容、页面、脚本或文档。
5. 本地运行检查。
6. 提交 PR 并等待 review。

## 本地检查

```bash
npm run validate-content
npm run typecheck
npm run lint
npm run build
```

内容包贡献必须通过 `npm run validate-content`。

## 内容贡献要求

- 新增内容必须带 `sourceRefs`。
- 使用模拟数据时必须写明 `type: "mock"`。
- 不提交真实学生个人信息。
- 不提交未脱敏访谈记录。
- 不使用虚假文献或无法追溯的来源。

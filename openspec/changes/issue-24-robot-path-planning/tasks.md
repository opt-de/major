## 1. Content Creation

- [ ] 1.1 在 `content/majors/automation/tasks/` 目录下创建 `small-robot-path-planning.json`，字段包括 `id、title、abilityIds、scenario、steps、rubric、extensions`，并引用 `robot-path-planning` 能力。
- [ ] 1.2 将新任务文件加入 `content/majors/automation/tasks/index.json`（如果项目使用索引文件）或确保自动加载路径能够发现该文件。

## 2. Validation & Testing

- [ ] 2.1 运行 `npm run validate-content`，确保新任务符合 Zod schema 并通过交叉引用检查。
- [ ] 2.2 若有单元测试覆盖任务卡渲染或 API，新增对应测试并运行 `npm run test`。

## 3. Documentation & Frontend

- [ ] 3.1 更新前端任务卡页面（`src/app/tasks/[taskId]/page.tsx`）的查询逻辑，使其能够加载并展示新任务的所有字段。
- [ ] 3.2 在项目文档 `docs/ProjectProposal.md` 中添加该实验的概要说明（可选）。

## 4. Git Operations

- [ ] 4.1 创建分支 `feature/issue-25-robot-path-planning`
- [ ] 4.2 将上述更改提交至 `integration` 基础分支并推送远程。
- [ ] 4.3 在 GitHub 上打开 Pull Request，标题使用 `Issue 024：新增学习任务卡：小型机器人路径规划实验`，并在描述中关联 Issue `#25`。

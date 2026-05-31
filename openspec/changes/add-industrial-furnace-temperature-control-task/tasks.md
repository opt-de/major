## 1. 创建任务卡

- [x] 1.1 创建 `content/majors/automation/tasks/industrial-furnace-temperature-control-task.json`
- [x] 1.2 填写全部必填字段（title、scenario、objectives、steps、deliverables、rubric、estimatedTime、sourceRefs）
- [x] 1.3 关联全部 4 个能力节点（system-modeling、controller-design、simulation-validation、engineering-communication）

## 2. 验证

- [x] 2.1 运行 `npm run validate-content` 确认通过
- [x] 2.2 运行 `npm run typecheck` 确认通过
- [x] 2.3 运行 `npm run test` 确认通过
- [x] 2.4 运行 `npm run build` 确认通过

## 3. 提交与 PR

- [x] 3.1 在 feature 分支提交变更
- [x] 3.2 创建 PR 到 integration 分支，关联 Issue #22 (PR #64)
- [x] 3.3 补齐 spec delta：新增 `specs/automation-task-content/spec.md`（ADDED Requirements + 3 Scenarios）
- [ ] 3.4 运行 `openspec validate ... --strict` 确认通过（本地无 CLI，由 reviewer 验证）
- [ ] 3.5 PR 合并后归档 OpenSpec 变更

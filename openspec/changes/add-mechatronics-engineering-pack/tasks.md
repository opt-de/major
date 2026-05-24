## 1. Loader 健壮性改进

- [x] 1.1 `src/lib/content/load-content.ts`：`readJsonDir()` 增加 `existsSync(dirPath)` 守卫，子目录不存在时返回空数组而非崩溃

## 2. OpenSpec 变更制品

- [x] 2.1 创建 `proposal.md`（变更动机与范围）
- [x] 2.2 创建 `design.md`（设计决策与内容映射表）
- [x] 2.3 创建 `specs/mechatronics-major/spec.md`（mechatronics 专业）
- [x] 2.4 创建 `specs/mechatronics-system-engineer-job/spec.md`（mechatronics-system-engineer 岗位）
- [x] 2.5 创建 `specs/mechanical-design-basics/spec.md`（mechanical-design-basics 能力）
- [x] 2.6 创建 `specs/sensor-and-measurement/spec.md`（sensor-and-measurement 能力）
- [x] 2.7 创建 `specs/mechatronic-control/spec.md`（mechatronic-control 能力）
- [x] 2.8 创建 `specs/plc-programming/spec.md`（plc-programming 能力）
- [x] 2.9 创建 `specs/automated-conveyor-task/spec.md`（automated-conveyor-task 任务）
- [x] 2.10 创建 `specs/mechatronics-diagnostic/spec.md`（mechatronics-basic 诊断）
- [x] 2.11 创建 `specs/mechatronics-learning-path/spec.md`（mechatronics-beginner 学习路径）
- [x] 2.12 创建 `tasks.md`（本文件）

## 3. 验证

- [ ] 3.1 运行 `npm run validate-content` 确认通过
- [ ] 3.2 运行 `npm run typecheck` 确认通过
- [ ] 3.3 运行 `npm run lint` 确认通过
- [ ] 3.4 运行 `npm run build` 确认通过

## 4. 提交与 PR

- [x] 4.1 在 feature 分支 `feature/issue-19-mechatronics-engineering` 提交变更
- [x] 4.2 创建 PR 到 integration 分支（PR #59）
- [ ] 4.3 根据 codex review 反馈修改制品（ID 一致性、issue 关联修正）
- [ ] 4.4 确认所有检查通过后请求合并

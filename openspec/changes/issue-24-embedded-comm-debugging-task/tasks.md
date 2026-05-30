## 1. Schema 变更

- [ ] 1.1 在 `src/schemas/index.ts` 中新增 `commonErrorSchema`（error、symptoms、diagnosis、fix 四个字段）
- [ ] 1.2 在 `learningTaskSchema` 中添加 `commonErrors: z.array(commonErrorSchema).optional()`
- [ ] 1.3 运行 `npm run typecheck` 确认类型通过

## 2. 模板更新

- [ ] 2.1 更新 `content/templates/task-template.json`，新增 `commonErrors` 示例字段

## 3. 任务卡创建

- [ ] 3.1 创建 `content/majors/automation/tasks/embedded-comm-debugging-task.json`
- [ ] 3.2 填写全部必填字段（title、scenario、objectives、steps、deliverables、rubric、estimatedTime、sourceRefs）
- [ ] 3.3 填写 commonErrors（5 个常见错误，含现象、诊断、修复）
- [ ] 3.4 关联 3 个能力节点（embedded-c-programming、embedded-interface-comm、embedded-debugging）

## 4. 验证

- [ ] 4.1 运行 `npm run validate-content` 确认通过
- [ ] 4.2 运行 `npm run typecheck` 确认通过
- [ ] 4.3 运行 `npm run lint` 确认通过
- [ ] 4.4 运行 `npm run test` 确认通过
- [ ] 4.5 运行 `npm run build` 确认通过

## 5. Spec Delta

- [ ] 5.1 新增 `specs/task-schema/spec.md`（ADDED: commonErrors 字段）
- [ ] 5.2 新增 `specs/automation-task-content/spec.md`（ADDED: 嵌入式设备通信调试任务卡）

## 6. 提交与 PR

- [ ] 6.1 在 feature 分支提交变更
- [ ] 6.2 创建 PR 到 integration 分支，关联 Issue #24
- [ ] 6.3 运行 `openspec validate ... --strict` 确认通过

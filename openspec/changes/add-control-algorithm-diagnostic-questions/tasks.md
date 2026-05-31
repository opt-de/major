## 1. Schema 扩展

- [x] 1.1 在 `src/schemas/index.ts` 的 `diagnosticQuestionSchema` 中新增 `difficulty` 字段（`z.enum(['basic', 'intermediate', 'advanced']).optional()`）

## 2. 内容包实现

- [x] 2.1 编写 system-modeling 能力 3 道题（覆盖一阶系统、传递函数、阶跃响应）
- [x] 2.2 编写 controller-design 能力 3 道题（覆盖 PID 参数、稳态误差、超调/调节时间）
- [x] 2.3 编写 simulation-validation 能力 2 道题（覆盖仿真指标、多方案比较）
- [x] 2.4 编写 engineering-communication 能力 2 道题（覆盖报告结构、工程证据）
- [x] 2.5 编写 scoringRules，覆盖全部 4 个能力节点

## 3. 验证

- [x] 3.1 运行 `npm run validate-content` 确认通过
- [x] 3.2 运行 `npm run typecheck` 确认通过
- [x] 3.3 运行 `npm run lint` 确认通过
- [x] 3.4 运行 `npm run test` 确认通过
- [x] 3.5 运行 `npm run build` 确认通过

## 4. 提交与 PR

- [ ] 4.1 提交变更到 `feature/issue-26-control-algorithm-diagnostic` 分支
- [ ] 4.2 推送并创建 PR 到 `integration` 分支，关联 Issue #26
- [ ] 4.3 根据 review 反馈修改（如有）

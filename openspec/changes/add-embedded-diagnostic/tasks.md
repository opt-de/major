## 1. 创建诊断题文件

- [x] 1.1 创建 `content/majors/automation/diagnostics/embedded-basic.json`
- [x] 1.2 编写 embedded-c-programming 相关题目（≥3 题，含 C 语言安全编程）
- [x] 1.3 编写 embedded-interface-comm 相关题目（≥3 题）
- [x] 1.4 编写 embedded-debugging 相关题目（≥3 题，含看门狗/异常排查）
- [x] 1.5 编写 embedded-system-design 相关题目（≥3 题，含固件安全）
- [x] 1.6 配置 scoringRules（4 个能力节点）和 sourceRefs

## 2. 验证

- [x] 2.1 运行 `npm run validate-content` 确认通过
- [x] 2.2 运行 `npm run typecheck` 确认通过
- [x] 2.3 运行 `npm run lint` 确认通过
- [x] 2.4 运行 `npm run build` 确认通过

## 3. 提交与 PR

- [ ] 3.1 在 feature 分支 `feature/issue-27-embedded-diagnostic` 提交变更
- [ ] 3.2 创建 PR 到 integration 分支，关联 Issue #27
- [ ] 3.3 根据 codex review 反馈修改（如有）
- [ ] 3.4 PR 合并后归档 OpenSpec 变更

## 1. 完善能力节点内容

- [x] 1.1 扩充 description，说明仿真验证在岗位中的作用
- [x] 1.2 扩充 knowledgePoints 至 ≥5 条（新增参数扫描与敏感性分析、频域特性分析、仿真工具建模方法、扰动与噪声建模等）
- [x] 1.3 扩充 skillPoints 至 ≥5 条（新增性能指标计算、多方案比较、鲁棒性验证等）
- [x] 1.4 扩充 relatedCourses 至 ≥2 条（新增现代控制理论）
- [x] 1.5 扩充 evidenceExamples 至 ≥3 条（新增参数扫描结果、多工况验证结果、仿真报告等）

## 2. 验证

- [x] 2.1 运行 `npm run validate-content` 确认通过
- [x] 2.2 运行 `npm run typecheck` 确认通过
- [x] 2.3 运行 `npm run lint` 确认通过
- [x] 2.4 运行 `npm run test` 确认通过
- [x] 2.5 运行 `npm run build` 确认通过
- [x] 2.6 运行 `openspec validate issue-21-simulation-validation --strict` 确认通过

## 3. 提交与 PR

- [x] 3.1 在 feature 分支 `feature/issue-21-refresh-simulation-validation` 提交变更
- [x] 3.2 创建 PR 到 integration 分支，关联 Issue #21
- [ ] 3.3 根据 review 反馈修改（如有）
- [ ] 3.4 PR 合并后归档 OpenSpec 变更
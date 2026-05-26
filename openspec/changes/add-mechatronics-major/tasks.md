## 1. 重构内容加载器为多专业支持

- [x] 1.1 修改 `loadContent()` 函数，扫描 `content/majors/` 下所有子目录，为每个含 `major.json` 的目录独立加载内容并聚合
- [x] 1.2 更新 `loadContent()` 返回的 `ContentIndex`，确保所有专业的内容正确聚合
- [x] 1.3 更新单元测试 `load-content.test.ts`，验证多专业加载（automation + mechatronics），新增 mechatronics 实体查找断言

## 2. 创建机械电子工程专业定义

- [x] 2.1 创建 `content/majors/mechatronics/major.json`，包含专业 ID、名称、类别、描述、核心课程和关联岗位引用

## 3. 创建机电系统工程师岗位

- [x] 3.1 创建 `content/majors/mechatronics/jobs/mechatronics-system-engineer.json`，包含 ≥4 工作场景、≥5 典型任务、≥4 能力节点引用

## 4. 创建能力节点

- [x] 4.1 创建 `mechanical-design-basics.json` — 机械设计基础能力（basic）
- [x] 4.2 创建 `sensor-and-measurement.json` — 传感器与测量技术（basic）
- [x] 4.3 创建 `mechatronic-control.json` — 机电传动控制能力（intermediate）
- [x] 4.4 创建 `plc-programming.json` — PLC编程与应用能力（intermediate）

## 5. 创建学习任务

- [x] 5.1 创建 `automated-conveyor-task.json` — 为自动化传送带设计机电控制系统

## 6. 创建诊断题

- [x] 6.1 创建 `mechatronics-basic.json` — 机电系统工程师基础诊断（≥5 题，覆盖 4 个能力节点）

## 7. 创建学习路径

- [x] 7.1 创建 `mechatronics-beginner.json` — 机电系统工程师入门学习路径

## 8. 创建学习资源

- [x] 8.1 创建 `resources.json` 及 4 个资源条目占位文件（mechanical-design-course, cad-tool, sensor-lab-guide, servo-control-guide, plc-tutorial）

## 9. 验证

- [x] 9.1 运行 `npm run validate-content` 确认通过
- [x] 9.2 运行 `npm run typecheck` 确认通过
- [x] 9.3 运行 `npm run lint` 确认通过
- [x] 9.4 运行 `npm run test` 确认通过
- [x] 9.5 运行 `npm run build` 确认通过
- [x] 9.6 运行 `npm run check` 确认全链路通过

## 10. 提交与 PR

- [ ] 10.1 确认在 `feature/issue-19-mechatronics` 分支上
- [ ] 10.2 提交所有变更，commit message 遵循 `[Issue #19] Add mechatronics major content pack`
- [ ] 10.3 推送到远程并创建 PR 到 `integration` 分支，关联 Issue #19

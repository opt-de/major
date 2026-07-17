## Why

Issue #14 要求为自动化专业新增"嵌入式软件工程师"岗位内容包，以扩展平台的专业覆盖范围，为学生提供嵌入式方向的岗位能力图谱和学习路径参考。

## What Changes

- 新增 `content/majors/automation/jobs/embedded-software-engineer.json` 岗位文件
- 新增 4 个嵌入式软件工程师能力节点 JSON 文件：
  - `embedded-c-programming.json` — 嵌入式 C 编程
  - `embedded-interface-comm.json` — 接口与通信协议
  - `embedded-debugging.json` — 嵌入式调试与测试
  - `embedded-system-design.json` — 嵌入式系统设计
- 修改 `content/majors/automation/major.json`，在 `relatedJobs` 中添加 `embedded-software-engineer`
- 所有内容使用 `sourceRefs: [{ type: "mock" }]` 标注为模拟数据

## Capabilities

### New Capabilities

- `embedded-software-engineer-job`: 嵌入式软件工程师岗位内容包，包含岗位描述、工作场景、典型任务和关联能力节点
- `embedded-c-programming`: 嵌入式 C 编程能力节点，覆盖指针、内存管理、寄存器操作等知识点和技能点
- `embedded-interface-comm`: 接口与通信协议能力节点，覆盖 UART/SPI/I2C、CAN 总线等
- `embedded-debugging`: 嵌入式调试与测试能力节点，覆盖在线调试、日志分析、边界测试等
- `embedded-system-design`: 嵌入式系统设计能力节点，覆盖 RTOS 基础、任务调度、低功耗设计等

### Modified Capabilities

- `automation-major`: 自动化专业 major.json 的 relatedJobs 数组新增对 embedded-software-engineer 的引用

## Impact

- 内容文件：新增 5 个 JSON 文件，修改 1 个 JSON 文件
- 校验脚本：validate-content.ts 会自动校验引用完整性（job.abilityIds → ability.id, major.relatedJobs → job.id）
- 前端页面：/jobs/[jobId] 和 /abilities/[abilityId] 页面会自动展示新内容
- 无 API 变更，无 schema 变更

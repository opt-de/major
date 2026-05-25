## Why

Issue #19 要求新增"机械电子工程"本科专业内容包。与已有的 `add-embedded-software-engineer-pack` 变更（在自动化专业内扩展岗位）不同，本次需要创建一个全新独立专业。当前 `load-content.ts` 硬编码只从 `content/majors/automation/` 加载数据，新专业目录 `content/majors/mechatronics/` 将不会被加载。

## What Changes

- 重构 `src/lib/content/load-content.ts`：从单专业硬编码改为自动扫描 `content/majors/*/` 下所有专业目录
- 更新 `src/lib/content/load-content.test.ts`：适配多专业加载逻辑，新增 mechatronics 相关断言
- 新增 `content/majors/mechatronics/major.json` — 机械电子工程专业定义
- 新增 `content/majors/mechatronics/jobs/mechatronics-system-engineer.json` — 机电系统工程师岗位
- 新增 4 个能力节点 JSON 文件：
  - `mechanical-design-basics.json` — 机械设计基础能力
  - `sensor-and-measurement.json` — 传感器与测量技术
  - `mechatronic-control.json` — 机电传动控制能力
  - `plc-programming.json` — PLC编程与应用能力
- 新增 `content/majors/mechatronics/tasks/automated-conveyor-task.json` — 自动化传送带实践任务
- 新增 `content/majors/mechatronics/diagnostics/mechatronics-basic.json` — 基础诊断测验
- 新增 `content/majors/mechatronics/learning-paths/mechatronics-beginner.json` — 入门学习路径
- 新增 `content/majors/mechatronics/resources/` — 学习资源占位文件
- 所有内容使用 `sourceRefs: [{ type: "mock" }]` 标注为模拟数据

## Capabilities

### Modified Capabilities

- `content-loader`: 内容加载器从单专业硬编码改为多专业自动扫描，支持 `content/majors/` 下任意数量专业目录

### New Capabilities

- `mechatronics-major`: 机械电子工程专业内容包，包含专业简介、核心课程、典型岗位
- `mechatronics-system-engineer-job`: 机电系统工程师岗位，包含 ≥4 工作场景、≥5 典型任务、≥4 能力节点
- `mechanical-design-basics`: 机械设计基础能力节点
- `sensor-and-measurement`: 传感器与测量技术能力节点
- `mechatronic-control`: 机电传动控制能力节点
- `plc-programming`: PLC编程与应用能力节点
- `mechatronics-task`: 自动化传送带机电控制系统设计任务
- `mechatronics-diagnostic`: 机电系统工程师基础诊断测验（≥5 题）
- `mechatronics-learning-path`: 机电系统工程师入门学习路径
- `mechatronics-resources`: 学习资源占位文件（5 个资源条目）

## Impact

- 代码文件：修改 `load-content.ts`（重构加载逻辑）+ `load-content.test.ts`（适配测试）
- 内容文件：新增 15 个 JSON 文件（1 major + 1 job + 4 abilities + 1 task + 1 diagnostic + 1 learning-path + 5 resources + 1 resources.json）
- 校验脚本：`validate-content.ts` 无需修改，自动校验多专业引用完整性
- 前端页面：`/majors/mechatronics` 及子页面会自动展示新专业内容
- 无 schema 变更，无 API 变更

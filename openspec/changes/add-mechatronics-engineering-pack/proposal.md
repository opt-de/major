## Why

Issue #19 要求新增"机械电子工程"本科专业内容包，以扩展平台的专业覆盖范围。当前平台只有自动化一个专业，新增机械电子工程专业可以为学生提供机电一体化方向的岗位能力图谱和学习路径参考。

## What Changes

- 新增 `content/majors/mechatronics-engineering/major.json` 专业文件
- 新增 `content/majors/mechatronics-engineering/jobs/mechatronics-engineer.json` 岗位文件
- 新增 4 个机电工程师能力节点 JSON 文件：
  - `mechanical-design.json` — 机械设计基础
  - `electrical-control.json` — 电气控制技术
  - `sensor-detection.json` — 传感器与检测技术
  - `mechatronics-integration.json` — 机电系统集成
- 新增 1 个学习任务：`assembly-station-design.json` — 自动化装配工作站机电系统设计
- 新增 1 套诊断题：`mechatronics-basic.json` — 机电工程师基础诊断
- 新增 1 条学习路径：`mechatronics-beginner.json` — 机电工程师入门路径
- 所有内容使用 `sourceRefs: [{ type: "mock" }]` 标注为模拟数据

## Capabilities

### New Capabilities

- `mechatronics-major`: 机械电子工程专业内容包，包含专业简介、核心课程、培养目标
- `mechatronics-engineer-job`: 机电工程师岗位内容包，包含岗位描述、工作场景、典型任务和关联能力节点
- `mechanical-design`: 机械设计基础能力节点，覆盖工程制图、公差配合、材料力学等
- `electrical-control`: 电气控制技术能力节点，覆盖电路分析、PLC编程、电气安全等
- `sensor-detection`: 传感器与检测技术能力节点，覆盖传感器选型、信号调理、数据采集等
- `mechatronics-integration`: 机电系统集成能力节点，覆盖机电接口设计、系统联调、故障诊断等
- `assembly-station-task`: 自动化装配工作站机电系统设计学习任务
- `mechatronics-diagnostic`: 机电工程师基础诊断题
- `mechatronics-learning-path`: 机电工程师入门学习路径

## Impact

- 内容文件：新增 8 个 JSON 文件（专业、岗位、4个能力、1个任务、1套诊断、1条学习路径）
- 校验脚本：`npm run validate-content` 会自动校验所有新文件的 schema 合规性及引用完整性
- 前端页面：新增内容会被内容加载器自动读取，前端页面自动展示
- 无 API 变更，无 schema 变更，无代码变更

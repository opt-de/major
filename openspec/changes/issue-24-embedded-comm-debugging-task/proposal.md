## Why

Issue #24 要求为嵌入式软件工程师岗位新增学习任务卡"嵌入式设备通信调试"。该岗位目前有 4 个能力节点和 0 张任务卡，需要补充首张任务卡。同时，任务 Schema 缺少 `commonErrors` 字段来承载"常见错误"内容，Issue 的验收标准明确要求包含常见错误，因此需要同步扩展 Schema。

## What Changes

### Schema 变更
- 在 `learningTaskSchema`（`src/schemas/index.ts`）中新增 `commonErrors` 可选字段
  - 类型：`z.array(z.object({ error, symptoms, diagnosis, fix }))`

### 内容变更
- 新增 `content/majors/automation/tasks/embedded-comm-debugging-task.json`
  - 场景：智能家居传感器节点量产通信异常（UART 丢包 + SPI CRC 错误）
  - 关联 3 个能力节点：embedded-c-programming、embedded-interface-comm、embedded-debugging
  - 8 个调试步骤、5 个常见错误、6 项交付物、4 维评分、4 条安全说明

### 模板变更
- 更新 `content/templates/task-template.json`，新增 `commonErrors` 示例

## Capabilities

### New Capabilities
- `task-schema`: 学习任务卡 Zod Schema，本次新增 commonErrors 字段

### Modified Capabilities
- `automation-task-content`: 自动化专业学习任务卡集合，本次新增嵌入式设备通信调试任务

## Impact

- Schema 文件：修改 1 个（向后兼容，新增可选字段）
- 内容文件：新增 1 个 JSON 任务卡
- 模板文件：修改 1 个
- 无页面变更，无 loader 变更，无 API 变更
- 已有 6 张任务卡不受影响（commonErrors 为可选字段）

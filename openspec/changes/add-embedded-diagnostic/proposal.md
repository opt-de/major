## Why

Issue #27 要求为自动化专业的嵌入式软件工程师岗位（embedded-software-engineer）新增一套基础诊断题。该岗位共有 4 个能力节点（embedded-c-programming、embedded-interface-comm、embedded-debugging、embedded-system-design），目前 `automation/diagnostics/` 下仅有控制算法工程师诊断题，缺少嵌入式方向诊断题覆盖。

## What Changes

- 新增 `content/majors/automation/diagnostics/embedded-basic.json`：
  - id: `embedded-basic`
  - ≥10 道题，覆盖 C 语言编程、接口通信、调试测试、系统设计（含安全）4 个能力方向
  - 每题包含 abilityId、答案和解释
  - 包含 scoringRules（4 个能力节点）和 sourceRefs

## Capabilities

### Documented Capabilities

- `embedded-diagnostic`: 嵌入式软件工程师基础诊断题（id: `embedded-basic`），位于 automation 专业下的 embedded-software-engineer 岗位

## Impact

- 内容文件：新增 1 个 JSON 文件
- 无 schema 变更，无页面变更，无 loader 变更
- 验证：`npm run validate-content` 应继续通过（从 5 个 diagnostic 增至 6 个）

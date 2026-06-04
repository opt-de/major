## Why

Issue #26 要求为控制算法工程师岗位新增一套基础诊断题。现有 `control-algorithm-basic.json` 仅有 5 道题且无难度标签，不满足 10 道题的最低要求。

控制算法工程师是自动化专业第一个示例岗位，其诊断题是平台"诊断测验 → 学习路径推荐"闭环的关键输入，需要完整覆盖 4 个核心能力节点。

## What Changes

- 修改 `src/schemas/index.ts`：`diagnosticQuestionSchema` 增加 `difficulty` 字段（`basic | intermediate | advanced`）
- 重写 `content/majors/automation/diagnostics/control-algorithm-basic.json`：从 5 道题扩展至 10 道题
- 题型覆盖单选和判断
- 每题绑定 `abilityId`，含答案、解释、难度标签
- 更新 `scoringRules`，确保 4 个能力节点均有对应评分规则

## Capabilities

### Documented Capabilities

- `control-algorithm-diagnostic`: 控制算法工程师基础诊断题集（id: `control-algorithm-basic`），覆盖 system-modeling、controller-design、simulation-validation、engineering-communication 四个能力节点

## Impact

- Schema 文件：1 个修改（增加 `difficulty` 可选字段，向后兼容）
- 内容文件：1 个 JSON 文件重写
- 验证：`npm run validate-content` 应通过
- 无页面变更，无 loader 变更

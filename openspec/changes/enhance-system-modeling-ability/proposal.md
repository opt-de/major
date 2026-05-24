## Why

Issue #20 要求完善 `content/majors/automation/abilities/system-modeling.json`。该能力节点是控制算法工程师岗位（control-algorithm-engineer）的入门基础能力，目前仅为占位 stub（3 知识点 / 3 技能点 / 2 支撑课程 / 2 证据样例 / 1 来源说明），需要按验收标准扩充至完整状态。

该能力是 controller-design 和 simulation-validation 两个能力的前置节点，完善后可使整个控制算法工程师能力链完整可用。

## What Changes

- 修改 `content/majors/automation/abilities/system-modeling.json`：
  - knowledgePoints: 3 → ≥5
  - skillPoints: 3 → ≥5
  - relatedCourses: 2 → ≥3
  - evidenceExamples: 2 → ≥3
  - sourceRefs: 1 → ≥2

## Capabilities

### Documented Capabilities

- `system-modeling-ability`: 控制系统建模能力节点（id: `system-modeling`），level 为 basic，位于 automation 专业下的 control-algorithm-engineer 岗位

## Impact

- 内容文件：1 个 JSON 文件修改
- 无 schema 变更，无页面变更，无 loader 变更
- 验证：`npm run validate-content` 应继续通过

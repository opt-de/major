# Spec: control-algorithm-diagnostic

## Purpose

为控制算法工程师岗位提供一套 10 道基础诊断题，覆盖全部 4 个核心能力节点，支持平台"诊断测验 → 薄弱能力 → 学习路径推荐"闭环。

## ADDED Requirements

### Requirement: 诊断题集结构完整性

系统 SHALL 能加载并校验 `content/majors/automation/diagnostics/control-algorithm-basic.json`，该题库 SHALL 符合 diagnosticSchema 定义的完整结构。

#### Scenario: 题库元数据校验

- **WHEN** 加载 `control-algorithm-basic.json`
- **THEN** `id` SHALL 为 `control-algorithm-basic`
- **AND** `majorId` SHALL 为 `automation`
- **AND** `jobId` SHALL 为 `control-algorithm-engineer`
- **AND** `title` 不可为空

#### Scenario: Schema 验证通过

- **WHEN** 运行 `npm run validate-content`
- **THEN** 该题库 SHALL 通过 diagnosticSchema 校验，无报错

### Requirement: 题型与难度标签

题库中的每道题 SHALL 包含 `id`、`abilityId`、`prompt`、`type`、`options`、`answer`、`explanation`、`difficulty` 字段，题型 SHALL 为 `single-choice` 或 `true-false`，难度标签 SHALL 为 `basic`、`intermediate` 或 `advanced`。

#### Scenario: 题目字段完整性

- **WHEN** 检查题库中任意一道题的 JSON 结构
- **THEN** 该题 SHALL 包含 `id`（非空字符串）、`abilityId`（非空字符串）、`prompt`（非空字符串）、`type`（`single-choice` 或 `true-false`）、`options`（至少 2 个选项，每个选项含 `id` 和 `text`）、`answer`（非空字符串）、`explanation`（非空字符串）、`difficulty`（`basic` / `intermediate` / `advanced` 之一）

#### Scenario: 难度标签分布

- **WHEN** 统计题库中所有题目的 `difficulty` 字段
- **THEN** SHALL 同时包含 `basic` 和 `intermediate` 标签的题目

### Requirement: 能力节点覆盖

题库 SHALL 包含至少 10 道题，覆盖全部 4 个控制算法工程师核心能力节点：`system-modeling` ≥3 题、`controller-design` ≥3 题、`simulation-validation` ≥2 题、`engineering-communication` ≥2 题。

#### Scenario: 各能力节点题目数量达标

- **WHEN** 按 `abilityId` 分组统计题目数量
- **THEN** 题目总数 SHALL ≥10
- **AND** `system-modeling` 题目数 SHALL ≥3
- **AND** `controller-design` 题目数 SHALL ≥3
- **AND** `simulation-validation` 题目数 SHALL ≥2
- **AND** `engineering-communication` 题目数 SHALL ≥2

#### Scenario: 无遗漏能力节点

- **WHEN** 检查 `scoringRules` 数组的 `abilityId` 列表
- **THEN** SHALL 包含全部 4 个能力节点 ID，无遗漏

### Requirement: 评分规则

`scoringRules` 数组 SHALL 为每个能力节点提供评分规则，每个规则 SHALL 包含 `abilityId`、`weakBelow` 阈值和 `feedback` 文案。

#### Scenario: 评分规则覆盖

- **WHEN** 检查 `scoringRules` 数组
- **THEN** 数组长度 SHALL 为 4
- **AND** 每个规则 SHALL 包含 `abilityId`（非空字符串）、`weakBelow`（≥0 整数）、`feedback`（非空字符串）

#### Scenario: 阈值与题目数量匹配

- **WHEN** 对比 `scoringRules` 中的 `weakBelow` 值与对应能力节点的题目数量
- **THEN** 每个 `weakBelow` 值 SHALL 不超过对应能力节点的题目总数

### Requirement: 内容校验通过

题库文件及关联 schema SHALL 通过项目全部质量检查。

#### Scenario: 全量检查

- **WHEN** 运行 `npm run check`
- **THEN** typecheck、validate-content、lint、Vitest、Next build 均 SHALL 通过

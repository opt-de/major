# Spec: control-algorithm-diagnostic

## 能力概述

为控制算法工程师岗位提供一套 10 道基础诊断题，覆盖全部 4 个核心能力节点，支持平台"诊断测验 → 薄弱能力 → 学习路径推荐"闭环。

## 功能需求

### Diagnostic Question Schema

- 题库 ID：`control-algorithm-basic`
- 所属专业：`automation`
- 所属岗位：`control-algorithm-engineer`
- 题目数量：≥10
- 题型：`single-choice` 和 `true-false`
- 每题必含字段：id、abilityId、prompt、type、options、answer、explanation、difficulty

### 能力覆盖

- `system-modeling`：≥3 题，考察一阶惯性系统、传递函数、阶跃响应
- `controller-design`：≥3 题，考察 PID 结构、稳态误差、性能指标
- `simulation-validation`：≥2 题，考察仿真指标提取、多方案比较
- `engineering-communication`：≥2 题，考察报告结构、工程证据组织

### 评分规则

- `scoringRules` 覆盖全部 4 个 abilityId
- 每个规则的 `weakBelow` 阈值与对应题目数量匹配
- 每个规则包含明确的反馈文案

### 难度标签

- `basic`：概念识记、术语判断
- `intermediate`：原理理解、应用分析

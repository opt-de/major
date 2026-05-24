# Simulation Validation Ability Spec

## Overview

This spec defines the enhanced **仿真验证能力** (simulation validation ability) for the *Control Algorithm Engineer* role.

## Updated Fields

- **description**: 使用仿真工具验证控制方案是否满足性能目标，包含更细致的指标说明。
- **knowledgePoints**: 添加 `误差分析`, `参数灵敏度`，保留原有 `阶跃响应`, `参数扫描`, `性能指标`。
- **skillPoints**: 添加 `分析仿真误差`, `调参优化`，保留原有 `搭建仿真模型`, `记录仿真结果`, `解释异常响应`。
- **evidenceExamples**: 新增提交仿真误差分析报告和参数优化记录的示例。

## Acceptance Criteria
- The JSON file `content/majors/automation/abilities/simulation-validation.json` must contain the above fields.
- UI components displaying this ability show the expanded description.
- Documentation (e.g., `docs/ProjectProposal.md`) references the new knowledge and skill points.
- All content‑validation tests pass.

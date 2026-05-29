# Proposal: add-sensor-filtering-task

## Goal

新增一个面向工业数据分析或自动化方向的学习任务卡——传感器数据滤波与异常检测。

## Motivation

自动化专业已有 `industrial-sensor-anomaly-task` 覆盖异常检测，但侧重统计分析+机器学习分类。新任务聚焦**信号滤波**技术，填补信号处理方向的任务空白。

## Scope

- 在 `content/majors/automation/tasks/` 下新增任务卡 JSON 文件
- 关联已有能力节点：`industrial-data-wrangling`、`statistical-analysis`、`simulation-validation`
- 遵循现有任务卡格式和 schema

## Out of Scope

- 不新增能力节点
- 不修改已有任务卡
- 不涉及其他专业的内容

## Success Criteria

- 任务情境明确
- 至少关联 2 个能力节点
- 包含任务步骤、评价标准、推荐资源
- 通过 `npm run validate-content` 和 `npm run typecheck` 验证

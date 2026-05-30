# task-schema Specification

## Purpose
定义学习任务卡 Zod Schema，本次新增 commonErrors 字段以支持在任务卡中嵌入常见错误的排查指导。

## ADDED Requirements

### Requirement: commonErrors 可选字段
`learningTaskSchema` SHALL 包含 `commonErrors` 可选字段，类型为对象数组，每个对象 SHALL 包含 error、symptoms、diagnosis、fix 四个必填字符串属性。

#### Scenario: 任务卡包含 commonErrors
- **WHEN** 系统校验包含 `commonErrors` 字段的任务卡
- **THEN** 该校验 SHALL 通过
- **AND** 每个 commonError 对象 SHALL 包含 error、symptoms、diagnosis、fix 四个非空字符串

#### Scenario: 任务卡不包含 commonErrors
- **WHEN** 系统校验不包含 `commonErrors` 字段的已有任务卡
- **THEN** 该校验 SHALL 通过（字段为可选，向后兼容）

#### Scenario: commonErrors 字段类型错误
- **WHEN** 系统校验 `commonErrors` 为字符串（而非对象数组）的任务卡
- **THEN** 该校验 SHALL 失败并报告类型错误

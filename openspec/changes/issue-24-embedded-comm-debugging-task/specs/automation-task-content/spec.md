# automation-task-content Specification

## Purpose
新增自动化专业学习任务卡内容包，为嵌入式软件工程师岗位提供面向通信调试场景的任务卡。

## ADDED Requirements

### Requirement: 嵌入式设备通信调试任务卡
系统 SHALL 能加载并校验 `content/majors/automation/tasks/embedded-comm-debugging-task.json`，该任务卡 SHALL 符合 learningTaskSchema 定义的完整结构。

#### Scenario: 任务卡被加载
- **WHEN** 系统调用 loadContent()
- **THEN** `tasks` 数组中 SHALL 包含 id 为 `embedded-comm-debugging-task` 的任务卡

#### Scenario: 任务卡字段完整性
- **WHEN** 系统校验任务卡
- **THEN** 该任务卡 SHALL 包含 title、scenario、objectives（≥1）、steps（5-10）、deliverables（≥1）、rubric（≥1）、estimatedTime、sourceRefs（≥1）
- **AND** `jobId` SHALL 为 `embedded-software-engineer`
- **AND** `abilityIds` SHALL 包含 embedded-c-programming、embedded-interface-comm、embedded-debugging
- **AND** `commonErrors` SHALL 包含 ≥1 个常见错误条目

#### Scenario: 任务卡内容校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** 该校验 SHALL 通过，任务数量 SHALL 为 7

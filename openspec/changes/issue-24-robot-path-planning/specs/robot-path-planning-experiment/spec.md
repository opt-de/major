## ADDED Requirements

### Requirement: robot-path-planning-experiment
系统 SHALL 在学习平台中展示小型机器人路径规划实验的任务卡内容，提供任务描述、输入/输出约束与评估标准等信息，供学习者阅读与完成实验设计。

#### Scenario: Task card loading
- **WHEN** the content loader reads `content/majors/automation/tasks/small-robot-path-planning.json`
- **THEN** the system displays the task title, scenario, objectives, steps, rubric and safety notes on the task page, ensuring all required fields are present and correctly rendered.

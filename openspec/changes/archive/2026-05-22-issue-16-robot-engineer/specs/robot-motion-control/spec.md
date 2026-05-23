## ADDED Requirements

### Requirement: Robot motion control ability
Content SHALL define a "机器人运动控制" ability with trajectory planning and servo control.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `robot-motion-control.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `level` SHALL be `"intermediate"`
- **THEN** its `prerequisites` SHALL include robot-kinematics

#### Scenario: Knowledge points
- **WHEN** the ability file is inspected
- **THEN** `knowledgePoints` SHALL include 梯形速度规划, S 曲线轨迹, PID 伺服控制, 前馈补偿

#### Scenario: Skill points
- **WHEN** the ability file is inspected
- **THEN** `skillPoints` SHALL include 设计关节轨迹, 调优伺服参数, 评估轨迹跟踪精度
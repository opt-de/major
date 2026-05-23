## ADDED Requirements

### Requirement: Robot kinematics ability
Content SHALL define a "机器人运动学建模" ability with D-H parameter method and forward/inverse kinematics.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `robot-kinematics.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `level` SHALL be `"intermediate"`

#### Scenario: Knowledge points
- **WHEN** the ability file is inspected
- **THEN** `knowledgePoints` SHALL include D-H 参数法, 正运动学, 逆运动学, 雅可比矩阵

#### Scenario: Skill points
- **WHEN** the ability file is inspected
- **THEN** `skillPoints` SHALL include 建立 D-H 参数表, 计算末端位姿, 求解逆运动学
## ADDED Requirements

### Requirement: Robot path planning ability
Content SHALL define a "机器人路径规划" ability with A* algorithm, RRT algorithm, collision detection, and trajectory optimization.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `robot-path-planning.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `level` SHALL be `"advanced"`
- **THEN** its `prerequisites` SHALL include robot-kinematics and robot-motion-control

#### Scenario: Knowledge points
- **WHEN** the ability file is inspected
- **THEN** `knowledgePoints` SHALL include A* 算法, RRT 算法, 碰撞检测, 轨迹优化

#### Scenario: Skill points
- **WHEN** the ability file is inspected
- **THEN** `skillPoints` SHALL include 实现路径搜索算法, 建立碰撞模型, 优化路径平滑度
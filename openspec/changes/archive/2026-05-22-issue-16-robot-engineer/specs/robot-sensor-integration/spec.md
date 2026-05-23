## ADDED Requirements

### Requirement: Robot sensor integration ability
Content SHALL define a "机器人传感器集成" ability with force sensor, vision calibration, and IMU data fusion.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `robot-sensor-integration.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `level` SHALL be `"basic"`

#### Scenario: Knowledge points
- **WHEN** the ability file is inspected
- **THEN** `knowledgePoints` SHALL include 力/力矩传感器, 视觉标定, IMU 数据融合

#### Scenario: Skill points
- **WHEN** the ability file is inspected
- **THEN** `skillPoints` SHALL include 配置传感器驱动, 标定视觉系统, 处理传感器噪声
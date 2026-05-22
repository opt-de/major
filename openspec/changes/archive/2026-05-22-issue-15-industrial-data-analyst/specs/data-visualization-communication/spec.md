## ADDED Requirements

### Requirement: Ability definition
The system SHALL define "工业数据可视化与工程沟通" as an ability node for the industrial-data-analyst job.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `data-visualization-communication.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `jobId` SHALL be `"industrial-data-analyst"`

#### Scenario: Knowledge points
- **WHEN** the ability file is validated
- **THEN** `knowledgePoints` SHALL contain at least 3 entries covering chart types, dashboard design principles, engineering report structure, and data storytelling

#### Scenario: Skill points
- **WHEN** the ability file is validated
- **THEN** `skillPoints` SHALL contain at least 3 entries covering Matplotlib/Seaborn charting, dashboard creation, and analysis report writing

#### Scenario: Level and courses
- **WHEN** the ability file is validated
- **THEN** `level` SHALL be `"basic"`
- **THEN** `relatedCourses` SHALL reference at least 2 relevant courses

### Requirement: Evidence examples
The ability SHALL provide at least 2 evidence examples.

#### Scenario: Evidence present
- **WHEN** the ability file is inspected
- **THEN** `evidenceExamples` SHALL contain at least 2 entries
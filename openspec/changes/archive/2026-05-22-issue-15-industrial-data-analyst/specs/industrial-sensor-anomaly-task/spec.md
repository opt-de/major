## ADDED Requirements

### Requirement: Learning task definition
The system SHALL provide a learning task "工业传感器数据异常检测与分析" for the industrial-data-analyst job.

#### Scenario: Task file exists
- **WHEN** content is loaded
- **THEN** a task JSON file SHALL exist in `content/majors/automation/tasks/` for this job
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `jobId` SHALL be `"industrial-data-analyst"`
- **THEN** its `abilityIds` SHALL reference at least 2 existing ability IDs

#### Scenario: Task structure
- **WHEN** the task file is validated
- **THEN** it SHALL contain `title`, `scenario`, `objectives`, `steps`, `deliverables`, `rubric`, `safetyOrEthicsNotes`, `estimatedTime`, and `sourceRefs`

#### Scenario: Objectives
- **WHEN** the task file is inspected
- **THEN** `objectives` SHALL contain at least 3 learning objectives

#### Scenario: Steps
- **WHEN** the task file is inspected
- **THEN** `steps` SHALL contain at least 4 actionable steps

#### Scenario: Rubric
- **WHEN** the task file is inspected
- **THEN** `rubric` SHALL contain at least 2 evaluation criteria
- **THEN** each criterion SHALL have a `criterion`, `description`, and `levels` with 3 tiers

#### Scenario: Safety and ethics
- **WHEN** the task file is inspected
- **THEN** `safetyOrEthicsNotes` SHALL contain at least 2 notes about data usage and mock data labeling
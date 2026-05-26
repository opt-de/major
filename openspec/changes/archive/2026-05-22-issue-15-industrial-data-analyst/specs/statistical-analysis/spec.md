## ADDED Requirements

### Requirement: Ability definition
The system SHALL define "统计分析与实验设计" as an ability node for the industrial-data-analyst job.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `statistical-analysis.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `jobId` SHALL be `"industrial-data-analyst"`

#### Scenario: Knowledge points
- **WHEN** the ability file is validated
- **THEN** `knowledgePoints` SHALL contain at least 3 entries covering descriptive statistics, hypothesis testing, correlation analysis, and ANOVA

#### Scenario: Skill points
- **WHEN** the ability file is validated
- **THEN** `skillPoints` SHALL contain at least 3 entries covering statistic computation, t-test/chi-square execution, and statistical charting

#### Scenario: Level and courses
- **WHEN** the ability file is validated
- **THEN** `level` SHALL be `"basic"`
- **THEN** `relatedCourses` SHALL reference at least 2 relevant courses

### Requirement: Evidence examples
The ability SHALL provide at least 2 evidence examples.

#### Scenario: Evidence present
- **WHEN** the ability file is inspected
- **THEN** `evidenceExamples` SHALL contain at least 2 entries
## ADDED Requirements

### Requirement: Ability definition
The system SHALL define "工业数据采集与预处理" as an ability node for the industrial-data-analyst job.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `industrial-data-wrangling.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `jobId` SHALL be `"industrial-data-analyst"`

#### Scenario: Knowledge points
- **WHEN** the ability file is validated
- **THEN** `knowledgePoints` SHALL contain at least 3 entries covering sensor data types, data cleaning methods, missing value handling, and time series alignment

#### Scenario: Skill points
- **WHEN** the ability file is validated
- **THEN** `skillPoints` SHALL contain at least 3 entries covering data loading/cleaning, anomaly identification, and multi-source data merging

#### Scenario: Level and prerequisites
- **WHEN** the ability file is validated
- **THEN** `level` SHALL be `"basic"`
- **THEN** `prerequisites` SHALL reference fundamental data analysis concepts

### Requirement: Evidence examples
The ability SHALL provide at least 2 evidence examples.

#### Scenario: Evidence present
- **WHEN** the ability file is inspected
- **THEN** `evidenceExamples` SHALL contain at least 2 entries
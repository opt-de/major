## ADDED Requirements

### Requirement: Ability definition
The system SHALL define "机器学习建模" as an ability node for the industrial-data-analyst job.

#### Scenario: Ability file exists
- **WHEN** content is loaded
- **THEN** `machine-learning-modeling.json` SHALL exist in `content/majors/automation/abilities/`
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `jobId` SHALL be `"industrial-data-analyst"`

#### Scenario: Knowledge points
- **WHEN** the ability file is validated
- **THEN** `knowledgePoints` SHALL contain at least 3 entries covering linear regression, decision trees, K-means clustering, and model evaluation metrics

#### Scenario: Skill points
- **WHEN** the ability file is validated
- **THEN** `skillPoints` SHALL contain at least 3 entries covering scikit-learn modeling, train/test splitting, and model performance evaluation

#### Scenario: Level and prerequisites
- **WHEN** the ability file is validated
- **THEN** `level` SHALL be `"basic"`
- **THEN** `prerequisites` SHALL reference statistical analysis as a prerequisite

### Requirement: Evidence examples
The ability SHALL provide at least 2 evidence examples.

#### Scenario: Evidence present
- **WHEN** the ability file is inspected
- **THEN** `evidenceExamples` SHALL contain at least 2 entries
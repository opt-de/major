## ADDED Requirements

### Requirement: Industrial data analyst job definition
Content SHALL define the "工业数据分析工程师" job role under the "automation" major, including job description, work scenarios, typical tasks, and ability references.

#### Scenario: Job file exists
- **WHEN** content is loaded
- **THEN** `industrial-data-analyst.json` SHALL exist in `content/majors/automation/jobs/`
- **THEN** its `majorId` SHALL be `"automation"`
- **THEN** its `abilityIds` SHALL reference exactly 4 existing ability IDs

#### Scenario: Job is linked from major
- **WHEN** major.json is loaded
- **THEN** `major.json`'s `relatedJobs` SHALL include `"industrial-data-analyst"`

#### Scenario: Source refs are documented
- **WHEN** the job file is validated
- **THEN** `sourceRefs` SHALL contain at least one entry with `type: "mock"` and a clear note

### Requirement: Work scenarios
The job SHALL define at least 4 typical work scenarios for industrial data analysts.

#### Scenario: Work scenarios present
- **WHEN** the job file is inspected
- **THEN** `workScenarios` SHALL contain at least 4 entries describing real industrial data analysis contexts

### Requirement: Typical tasks
The job SHALL define at least 4 typical tasks.

#### Scenario: Typical tasks present
- **WHEN** the job file is inspected
- **THEN** `typicalTasks` SHALL contain at least 4 entries

### Requirement: At least 4 abilities
The job SHALL reference at least 4 ability nodes.

#### Scenario: Ability count
- **WHEN** job's `abilityIds` is inspected
- **THEN** the array SHALL have at least 4 entries
- **THEN** each entry SHALL correspond to an existing ability JSON file
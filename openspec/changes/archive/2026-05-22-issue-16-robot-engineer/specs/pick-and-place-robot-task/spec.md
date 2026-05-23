## ADDED Requirements

### Requirement: Pick-and-place learning task
Content SHALL define a "机器人 Pick-and-Place 作业设计" learning task covering kinematics, trajectory, and sensor integration.

#### Scenario: Task file exists
- **WHEN** content is loaded
- **THEN** `pick-and-place-robot-task.json` SHALL exist in `content/majors/automation/tasks/`
- **THEN** its `jobId` SHALL be `"robot-engineer"`
- **THEN** its `abilityIds` SHALL reference robot-kinematics, robot-motion-control, robot-sensor-integration, robot-path-planning

#### Scenario: Task has learning objectives
- **WHEN** the task file is inspected
- **THEN** `objectives` SHALL include at least 4 learning objectives

#### Scenario: Task has rubric
- **WHEN** the task file is inspected
- **THEN** `rubric` SHALL contain at least 2 evaluation criteria

#### Scenario: Task has safety notes
- **WHEN** the task file is inspected
- **THEN** `safetyOrEthicsNotes` SHALL include simulation-only and mock-data labeling

### Requirement: At least 5 resource suggestions
The robot engineer content SHALL include at least 5 resource items.

#### Scenario: Resource count
- **WHEN** the resources directory is inspected
- **THEN** at least 5 robot-related resource JSON files SHALL exist under `content/majors/automation/resources/`

#### Scenario: Resource types
- **WHEN** the resource files are inspected
- **THEN** the resources SHALL cover at least types: book, tool, course, project
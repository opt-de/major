## 1. Create job file

- [x] 1.1 Create `content/majors/automation/jobs/industrial-data-analyst.json` with id, majorId, name, description, workScenarios, typicalTasks, abilityIds, sourceRefs
- [x] 1.2 Update `content/majors/automation/major.json` to add `"industrial-data-analyst"` to `relatedJobs`

## 2. Create ability nodes

- [x] 2.1 Create `content/majors/automation/abilities/industrial-data-wrangling.json` (工业数据采集与预处理, level: basic)
- [x] 2.2 Create `content/majors/automation/abilities/statistical-analysis.json` (统计分析与实验设计, level: basic)
- [x] 2.3 Create `content/majors/automation/abilities/machine-learning-modeling.json` (机器学习建模, level: basic)
- [x] 2.4 Create `content/majors/automation/abilities/data-visualization-communication.json` (工业数据可视化与工程沟通, level: basic)

## 3. Create learning task

- [x] 3.1 Create `content/majors/automation/tasks/industrial-sensor-anomaly-task.json` with title, scenario, objectives, steps, deliverables, rubric, safetyOrEthicsNotes, estimatedTime, sourceRefs

## 4. Validate

- [x] 4.1 Run `npm run validate-content` and confirm no errors
- [x] 4.2 Run `npm run typecheck` and confirm no errors
- [x] 4.3 Run `npm run lint` and confirm no errors
- [x] 4.4 Run `npm run build` and confirm no errors
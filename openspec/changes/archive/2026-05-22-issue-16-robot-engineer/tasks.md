## 1. Create job file

- [x] 1.1 Create `content/majors/automation/jobs/robot-engineer.json` with id, majorId, name, description, workScenarios, typicalTasks, abilityIds, sourceRefs
- [x] 1.2 Update `content/majors/automation/major.json` to add `"robot-engineer"` to `relatedJobs`

## 2. Create ability nodes

- [x] 2.1 Create `content/majors/automation/abilities/robot-kinematics.json` (机器人运动学建模, level: intermediate)
- [x] 2.2 Create `content/majors/automation/abilities/robot-motion-control.json` (机器人运动控制, level: intermediate)
- [x] 2.3 Create `content/majors/automation/abilities/robot-sensor-integration.json` (机器人传感器集成, level: basic)
- [x] 2.4 Create `content/majors/automation/abilities/robot-path-planning.json` (机器人路径规划, level: advanced)

## 3. Create learning task

- [x] 3.1 Create `content/majors/automation/tasks/pick-and-place-robot-task.json` with title, scenario, objectives, steps, deliverables, rubric, safetyOrEthicsNotes, estimatedTime, sourceRefs

## 4. Create resource suggestions

- [x] 4.1 Create `content/majors/automation/resources/robot-kinematics-textbook.json` (机器人学基础教材, type: book)
- [x] 4.2 Create `content/majors/automation/resources/ros-tutorial.json` (ROS 入门与实践, type: tool)
- [x] 4.3 Create `content/majors/automation/resources/robot-simulation-tool.json` (机器人仿真工具, type: tool)
- [x] 4.4 Create `content/majors/automation/resources/robot-control-course.json` (机器人控制课程, type: course)
- [x] 4.5 Create `content/majors/automation/resources/robot-project-template.json` (机器人项目报告模板, type: project)

## 5. Validate

- [x] 5.1 Run `npm run validate-content` and confirm no errors
- [x] 5.2 Run `npm run typecheck` and confirm no errors
- [x] 5.3 Run `npm run lint` and confirm no errors
- [x] 5.4 Run `npm run test` and confirm no errors
- [x] 5.5 Run `npm run build` and confirm no errors
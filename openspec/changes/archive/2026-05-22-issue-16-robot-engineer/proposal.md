## Why

自动化专业目前已有"控制算法工程师"和"嵌入式软件工程师"岗位内容包，缺少机器人工程方向的岗位覆盖。机器人工程师是自动化专业的核心就业方向之一，新增该岗位可以覆盖从运动学、控制到传感器集成和路径规划的完整能力链。

关联 GitHub Issue [#16](https://github.com/opt-de/major/issues/16)。

## What Changes

- 在 `content/majors/automation/` 下新增岗位 `robot-engineer`
- 新增 4 个能力节点，覆盖运动学建模、运动控制、传感器集成和路径规划
- 新增 1 个学习任务，基于 Pick-and-Place 场景的机器人作业设计
- 新增 5 条资源建议，覆盖教材、工具、课程和项目模板
- 所有内容使用 Mock 数据并标注 `sourceRefs`

## Capabilities

### New Capabilities
- `robot-engineer-job`: 机器人工程师岗位定义，包括岗位描述、工作场景、典型任务、能力引用和数据来源
- `robot-kinematics`: 机器人运动学建模能力，涵盖 D-H 参数法、正逆运动学和雅可比矩阵
- `robot-motion-control`: 机器人运动控制能力，涵盖轨迹规划、伺服控制和动态补偿
- `robot-sensor-integration`: 机器人传感器集成能力，涵盖力传感器、视觉标定和 IMU 数据融合
- `robot-path-planning`: 机器人路径规划能力，涵盖 A* 和 RRT 算法、碰撞检测和轨迹优化
- `pick-and-place-robot-task`: 机器人 Pick-and-Place 学习任务，基于真实工作情境的实践任务

### Modified Capabilities

无。仅新增内容，不修改现有规格。

## Impact

- `content/majors/automation/` 目录新增 job、ability、task、resource JSON 文件
- `content/majors/automation/major.json` 的 `relatedJobs` 字段需要增加 `robot-engineer`
- 内容校验脚本 `npm run validate-content` 需要能通过
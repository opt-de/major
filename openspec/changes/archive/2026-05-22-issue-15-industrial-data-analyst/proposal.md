## Why

自动化专业目前只有一个"控制算法工程师"岗位内容包，缺少面向工业数据方向的岗位覆盖。工业数据分析工程师是制造业数字化转型中的典型岗位，新增该岗位可以丰富自动化专业学生的就业认知面，覆盖从控制到数据的完整工程能力链。

关联 GitHub Issue [#15](https://github.com/opt-de/major/issues/15)。

## What Changes

- 在 `content/majors/automation/` 下新增岗位 `industrial-data-analyst`
- 新增 4 个能力节点，覆盖数据采集、统计分析、机器学习建模和可视化沟通
- 新增 1 个学习任务，基于工业传感器数据进行异常检测分析
- 所有内容使用 Mock 数据并标注 `sourceRefs`

## Capabilities

### New Capabilities
- `industrial-data-analyst-job`: 工业数据分析工程师岗位定义，包括岗位描述、工作场景、典型任务、能力引用和数据来源
- `industrial-data-wrangling`: 工业数据采集与预处理能力，涵盖传感器数据类型、数据清洗、缺失值处理和时序数据对齐
- `statistical-analysis`: 统计分析与实验设计能力，涵盖描述性统计、假设检验、相关性分析和方差分析
- `machine-learning-modeling`: 机器学习建模能力，涵盖线性回归、决策树、聚类和模型评估
- `data-visualization-communication`: 工业数据可视化与工程沟通能力，涵盖图表类型、仪表盘设计、报告结构和数据故事叙述
- `industrial-sensor-anomaly-task`: 工业传感器数据异常检测与分析学习任务，基于真实工作情境的实践任务

### Modified Capabilities

无。仅新增内容，不修改现有规格。

## Impact

- `content/majors/automation/` 目录新增 job、ability、task JSON 文件
- `content/majors/automation/major.json` 的 `relatedJobs` 字段需要增加 `industrial-data-analyst`
- 内容校验脚本 `npm run validate-content` 需要能通过
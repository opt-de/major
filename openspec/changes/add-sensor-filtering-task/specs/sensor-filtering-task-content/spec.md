# Spec: sensor-filtering-task-content

## ADDED Requirements

### Requirement: 传感器数据滤波与异常检测任务卡

为工业数据分析岗位提供一个学习任务卡，聚焦传感器信号滤波（移动平均、指数平滑、低通滤波）和异常检测（Z-score、IQR、阈值检测），使学习者能够处理含噪声的工业传感器数据并识别异常数据点。

#### Scenario:
某化工厂的反应釜温度传感器采集数据包含高频噪声，且偶发异常尖峰信号。工艺团队需要对原始数据进行滤波处理以获得可靠的温度趋势，并检测异常数据点以排查传感器故障或工艺异常。

#### Fields:
任务卡必须包含以下字段：
- `id`: 唯一标识符，kebab-case
- `majorId`: 所属专业 ID
- `jobId`: 关联岗位 ID（可选）
- `abilityIds`: 关联能力 ID 列表，至少 2 个
- `title`: 任务标题
- `scenario`: 任务情境描述
- `objectives`: 任务目标列表
- `steps`: 任务步骤列表
- `deliverables`: 交付物列表
- `rubric`: 评价标准，至少 3 个维度
- `safetyOrEthicsNotes`: 安全与伦理说明
- `estimatedTime`: 预计耗时
- `sourceRefs`: 数据来源引用

#### Constraints:
- 必须通过 schema 验证
- 关联的能力节点必须已存在
- 数据来源必须标注为 mock 或真实来源

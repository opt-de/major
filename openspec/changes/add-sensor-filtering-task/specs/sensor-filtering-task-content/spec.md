# Spec: sensor-filtering-task-content

## ADDED Requirements

### Requirement: 传感器数据滤波与异常检测任务卡

为工业数据分析岗位提供一个学习任务卡，聚焦传感器信号滤波（移动平均、指数平滑、低通滤波）和异常检测（Z-score、IQR、阈值检测），使学习者能够处理含噪声的工业传感器数据并识别异常数据点。

#### Scenario: 任务卡结构完整性

- **WHEN** 加载任务卡 JSON 文件
- **THEN** 必须包含以下字段：
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

#### Scenario: Schema 验证

- **WHEN** 运行 `npm run validate-content`
- **THEN** 任务卡必须通过 schema 验证，无报错

#### Scenario: 能力节点关联

- **WHEN** 检查任务卡的 `abilityIds`
- **THEN** 关联的能力节点必须已存在于 `content/majors/automation/abilities/` 目录中

#### Scenario: 数据来源标注

- **WHEN** 检查任务卡的 `sourceRefs`
- **THEN** 数据来源必须标注为 `mock` 或真实来源，不得为空

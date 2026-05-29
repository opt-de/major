# Spec: sensor-filtering-task-content

## Requirements

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

## Constraints

- 必须通过 schema 验证
- 关联的能力节点必须已存在
- 数据来源必须标注为 mock 或真实来源

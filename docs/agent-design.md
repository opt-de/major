# Mock Agent 设计

第一期只实现 Mock Agent，不接真实大模型。

## Agent

- TaskGeneratorAgent：根据专业、岗位、能力项和学习目标生成任务卡。
- DiagnosticAgent：根据诊断题答案输出分数、薄弱能力和反馈。
- LearningPathRecommenderAgent：根据薄弱能力和目标水平推荐学习路径。

## 输出要求

所有 Agent 输出必须显示：

- AI 生成内容或 Mock 生成内容标识。
- 依据来源。
- 仅供学习参考。

## 边界

- 不接真实学生数据。
- 不生成不可追溯来源。
- 不把 Mock 结果伪装为真实智能体推理。

## Context

`system-modeling.json` 是 control-algorithm-engineer 岗位 4 个能力节点中的第一个（basic 级别），下游依赖包括 controller-design（intermediate）和 simulation-validation（intermediate）。该节点目前仅有 3 个知识点和 3 个技能点，未达到项目内容标准。

## Goals / Non-Goals

**Goals:**
- 将 knowledgePoints 扩充至 ≥5 条
- 将 skillPoints 扩充至 ≥5 条
- 将 relatedCourses 扩充至 ≥3 条
- 将 evidenceExamples 扩充至 ≥3 条
- 将 sourceRefs 扩充至 ≥2 条
- 保持已有字段（id、name、level、description、prerequisites）不变

**Non-Goals:**
- 不新增 content JSON 文件
- 不修改 Zod schema
- 不修改前端页面或 API
- 不修改 job.json 中的 abilityIds 列表

## Decisions

**保留已有内容**：3 个已有 knowledgePoints（一阶惯性环节、传递函数、单位阶跃响应）和 3 个已有 skillPoints（识别输入输出变量、估计模型参数、说明模型适用边界）保持不变，在此基础上追加新条目。

**新增内容方向**：

| 字段 | 现有 | 新增 | 新增内容 |
|------|------|------|----------|
| knowledgePoints | 一阶惯性环节、传递函数、单位阶跃响应 | 状态空间模型、系统辨识基础 | 补充现代控制理论基础概念 |
| skillPoints | 识别输入输出变量、估计模型参数、说明模型适用边界 | 建立传递函数模型、选择合适的模型结构 | 增强工程建模实操能力 |
| relatedCourses | 自动控制原理、过程控制 | 现代控制理论 | 对偶核心课程之一 |
| evidenceExamples | 温控对象传递函数、参数对响应影响 | 建立电机转速系统的数学模型 | 增加机电类场景覆盖面 |
| sourceRefs | 1 条 mock | 1 条教材/课程参考 | 增加教学资源可追溯性 |

## Risks / Trade-offs

- 内容为模拟数据（第一期），后续需替换为真实脱敏材料
- 新增知识点需与 controller-design 的 prerequisites 保持一致（已确认引用 "控制系统建模"）

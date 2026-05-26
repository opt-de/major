## Context

`simulation-validation.json` 是 control-algorithm-engineer 岗位的能力节点之一（intermediate 级别），依赖 system-modeling 和 controller-design 能力节点。该节点目前仅有 3 个知识点和 3 个技能点，未达到项目内容标准。

## Goals / Non-Goals

**Goals:**
- 扩展 description 说明仿真验证在岗位中的作用
- 将 knowledgePoints 扩充至 ≥5 条
- 将 skillPoints 扩充至 ≥5 条
- 将 relatedCourses 扩充至 ≥2 条
- 将 evidenceExamples 扩充至 ≥3 条
- 保持已有字段（id、name、level、prerequisites）不变

**Non-Goals:**
- 不新增 content JSON 文件
- 不修改 Zod schema
- 不修改前端页面或 API
- 不修改 job.json 中的 abilityIds 列表

## Decisions

**保留已有内容**：3 个已有 knowledgePoints（阶跃响应、参数扫描、性能指标）和 3 个已有 skillPoints（搭建仿真模型、记录仿真结果、解释异常响应）保持不变，在此基础上追加新条目。

**新增内容方向**：

| 字段 | 现有 | 新增 | 新增内容 |
|------|------|------|----------|
| knowledgePoints | 阶跃响应、参数扫描、性能指标 | 参数扫描与敏感性分析、频域特性分析、仿真工具建模方法、扰动与噪声建模 | 补充频域分析和鲁棒性验证概念 |
| skillPoints | 搭建仿真模型、记录仿真结果、解释异常响应 | 配置控制器参数、记录和分析仿真响应曲线、计算超调量等性能指标、比较不同控制方案、验证鲁棒性 | 增强仿真验证全流程实操能力 |
| relatedCourses | 自动控制原理、MATLAB/Python 仿真 | 现代控制理论 | 补充频域分析理论基础 |
| evidenceExamples | 提交仿真曲线和参数表、比较开环与闭环响应 | 提交参数扫描结果、给出不同工况下的仿真结果、编写仿真报告 | 增加多工况验证和文档化交付物 |

## Risks / Trade-offs

- 内容为模拟数据（第一期），后续需替换为真实脱敏材料
- 新增知识点需与上游 ability 的 prerequisites 保持一致（已确认依赖 "控制系统建模" 和 "控制器设计能力"）
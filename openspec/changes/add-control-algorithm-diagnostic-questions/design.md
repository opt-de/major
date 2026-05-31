# Design: add-control-algorithm-diagnostic-questions

## Schema 变更

`diagnosticQuestionSchema` 新增 `difficulty` 字段：

```
difficulty: z.enum(['basic', 'intermediate', 'advanced']).optional()
```

设为 `optional()` 以保持向后兼容，不影响已有诊断文件。

## 题目分配方案

| 能力节点 | 难度 | 题型 | 题数 |
|----------|------|------|------|
| system-modeling | basic/intermediate | 单选+判断 | 3 |
| controller-design | basic/intermediate | 单选+判断 | 3 |
| simulation-validation | intermediate | 单选+判断 | 2 |
| engineering-communication | basic | 单选+判断 | 2 |

## 题目设计原则

1. 每题考察一个明确的知识点或技能点，与对应 ability 的 `knowledgePoints` / `skillPoints` 对齐
2. 单选题提供 3 个选项，判断题提供"正确/错误"两个选项
3. 解释说明正确选项的理由和对应该能力的哪个知识点
4. 难度标签：basic = 概念识记，intermediate = 理解分析

## 评分规则

每个能力节点设置 `weakBelow` 阈值：
- system-modeling（3 题）：weakBelow 2（错 ≥2 题为薄弱）
- controller-design（3 题）：weakBelow 2
- simulation-validation（2 题）：weakBelow 1
- engineering-communication（2 题）：weakBelow 1

## 验证要求

- `npm run validate-content` 通过（schema + 引用完整性）
- `npm run typecheck` 通过
- `npm run lint` 通过
- `npm run test` 通过
- `npm run build` 通过

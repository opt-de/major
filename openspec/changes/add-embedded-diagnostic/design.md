## Context

embedded-software-engineer 是 automation 专业下的 4 个岗位之一，拥有 4 个能力节点按进阶关系排列：embedded-c-programming (basic) → embedded-interface-comm (basic) → embedded-debugging (intermediate) → embedded-system-design (advanced)。该岗位目前没有诊断题，`automation/diagnostics/` 下仅有 control-algorithm-basic.json。

## Goals / Non-Goals

**Goals:**
- 创建 `embedded-basic.json`，包含 ≥10 道诊断题
- 题目覆盖全部 4 个能力节点，并体现嵌入式安全关注点
- 题型使用 single-choice 和 true-false
- 每题绑定一个 abilityId，包含答案和解释
- scoringRules 覆盖全部 4 个 abilityId
- 通过 `npm run validate-content`

**Non-Goals:**
- 不修改 Zod schema
- 不修改已有 content JSON 文件
- 不修改前端页面或 API
- 不新增 ability、job、major

## Decisions

**题型分配**：4 个能力节点各分配 3 题（共 12 题），每题包含详细的解释。

**安全内容融入**：Issue 要求覆盖"安全"能力，但 4 个能力节点中无独立的"安全"节点。将安全相关考题融入现有能力：
- embedded-c-programming: 缓冲区溢出、栈保护（C 语言安全编程）
- embedded-debugging: 看门狗、HardFault 排查（系统安全诊断）
- embedded-system-design: 低功耗安全唤醒、固件升级完整性（系统级安全）

**内容映射**：

| 能力 ID | 名称 | 题数 | 安全覆盖 |
|----------|------|------|----------|
| embedded-c-programming | 嵌入式 C 编程 | 3 | 缓冲区/栈安全 |
| embedded-interface-comm | 接口与通信协议 | 3 | — |
| embedded-debugging | 嵌入式调试与测试 | 3 | 看门狗/异常 |
| embedded-system-design | 嵌入式系统设计 | 3 | 固件升级安全 |

## Risks / Trade-offs

- 内容为模拟数据（第一期），后续需替换为真实脱敏题目
- 安全内容分散在现有能力中，如后续增加独立安全能力节点需同步更新诊断题

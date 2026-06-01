## Context

当前平台已有自动化专业的"控制算法工程师"岗位内容包作为示例。Issue #14 要求新增"嵌入式软件工程师"岗位内容包，遵循相同的 JSON 内容文件 + Zod schema 校验模式。

现有内容加载器 (`src/lib/content/load-content.ts`) 会自动读取 `content/majors/automation/` 下所有 JSON 文件，validate-content.ts 会校验引用完整性。无需修改代码，只需新增内容文件。

## Goals / Non-Goals

**Goals:**
- 新增嵌入式软件工程师岗位 JSON 文件，包含 ≥4 工作场景、≥5 典型任务、≥4 能力节点
- 新增 4 个能力节点 JSON 文件，每个包含知识点、技能点、支撑课程
- 修改 major.json 引用新岗位
- 通过 `npm run validate-content` 校验

**Non-Goals:**
- 不新增学习任务、诊断题或学习路径（Issue #14 未要求）
- 不修改任何代码文件（schema、loader、页面组件等）
- 不新增 UI 变更

## Decisions

**岗位关联专业**：嵌入式软件工程师关联到自动化专业（`majorId: "automation"`），因为 Issue 描述明确提到"为自动化或电子信息类专业新增"，而当前平台只有自动化专业。

**能力节点设计**：选择 4 个核心能力节点覆盖嵌入式软件工程师的关键技能域：
1. 嵌入式 C 编程（basic）— 最基础的核心能力
2. 接口与通信协议（basic）— 硬件通信必备
3. 嵌入式调试与测试（intermediate）— 工程实践能力
4. 嵌入式系统设计（advanced）— 综合设计能力

**数据来源**：全部使用 `sourceRefs: [{ type: "mock" }]` 标注为模拟数据，符合第一期规范。

## Risks / Trade-offs

- [引用完整性] → validate-content.ts 会校验 job.abilityIds 和 ability.jobId 的双向引用，创建文件时必须确保 ID 一致
- [major.json 漏改] → 如果不在 major.json 的 relatedJobs 中添加新岗位 ID，validate-content 不会报错（因为校验是单向的），但前端页面不会显示新岗位 → 必须在 major.json 中添加引用

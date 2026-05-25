## Context

Issue #19 要求新增"机械电子工程"专业内容包。当前平台仅有自动化专业。与已有的 `add-embedded-software-engineer-pack`（在同一专业内新增岗位）不同，本次需要创建全新独立专业。

关键约束：`src/lib/content/load-content.ts` 当前硬编码只从 `content/majors/automation/` 加载。新增 `content/majors/mechatronics/` 后不会被加载。

## Goals / Non-Goals

**Goals:**
- 重构 `loadContent()` 函数，支持扫描 `content/majors/*/` 下所有专业目录并聚合加载
- 更新单元测试覆盖多专业场景
- 新增机械电子工程专业 JSON（major.json）
- 新增机电系统工程师岗位 JSON（≥4 工作场景、≥5 典型任务）
- 新增 4 个能力节点，每个包含 ≥3 知识点、≥3 技能点、≥1 支撑课程
- 新增 1 个实践任务、1 套诊断题（≥5 题）、1 条学习路径
- 通过 `npm run validate-content` 校验

**Non-Goals:**
- 不修改 Zod schema 定义
- 不修改前端页面组件（自动渲染新专业）
- 不修改 `validate-content.ts` 校验逻辑
- 不新增 UI 变更

## Decisions

**多专业加载策略**：扫描 `content/majors/` 下所有子目录，每个包含 `major.json` 的目录视为一个专业，独立加载其 jobs/abilities/tasks/diagnostics/learning-paths/resources 子目录内容。不维护静态注册表，自动发现。

**专业 ID**：使用 `mechatronics` 作为专业唯一标识。

**岗位设计**：选择"机电系统工程师"作为该专业的核心岗位，覆盖机械、电子、控制、PLC 四个技能域。

**能力节点层级**：
1. 机械设计基础（basic）— 传动方案设计与零件选型
2. 传感器与测量技术（basic）— 工业传感器选型与信号处理
3. 机电传动控制（intermediate）— 伺服/步进电机驱动与控制
4. PLC编程与应用（intermediate）— 梯形图编程与顺序控制

**数据来源**：全部使用 `sourceRefs: [{ type: "mock" }]` 标注为模拟数据。

## Risks / Trade-offs

- [加载顺序] → 多专业同时加载时，专业间无引用关系，聚合即可。但如果未来出现跨专业引用（如岗位跨专业），需要调整校验逻辑。
- [性能] → 第一期专业数量少（≤5），全量聚合加载不构成性能问题，无需引入缓存。
- [向后兼容] → 修改 `loadContent()` 后，所有依赖 `ContentIndex` 类型的代码需保持兼容。接口不变，仅数据量增加。
- [测试覆盖] → 修改测试以适应多专业场景，确保 automation 和 mechatronics 两个专业的内容均被正确加载。

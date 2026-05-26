## Context

为自动化专业新增"工业数据分析工程师"岗位内容包，遵循现有 `content/majors/automation/` 下的数据结构和 schema 约束。所有数据以 JSON 文件存储，通过 `npm run validate-content` 校验。

## Goals / Non-Goals

**Goals:**
- 在 `content/majors/automation/jobs/` 下新增 `industrial-data-analyst.json` 岗位定义
- 在 `content/majors/automation/abilities/` 下新增 4 个能力节点 JSON
- 在 `content/majors/automation/tasks/` 下新增 1 个学习任务 JSON
- 更新 `content/majors/automation/major.json` 的 `relatedJobs` 字段

**Non-Goals:**
- 不新建专业目录
- 不修改已有岗位、能力或任务的 JSON 文件
- 不涉及前端展示或 API 修改
- 不涉及真实数据采集

## Decisions

| 决策 | 选择 | 理由 |
|------|------|------|
| 岗位归属 | 自动化专业 (automation) | 工业数据分析是自动化领域的自然延伸，避免新建专业增加 scope |
| 数据结构 | 遵循现有 template JSON | 保持与第一期示例一致，通过 schema 校验 |
| 数据来源 | type: "mock" | 第一期全部使用模拟数据，后续可替换为真实来源 |
| 能力级别 | 全部设为 level: "basic" | 面向本科生入门，与岗位定位一致 |
| 文件命名 | 英文 kebab-case | 与现有 control-algorithm-engineer 保持一致 |

## Risks / Trade-offs

- [数据模拟] 当前全部为 Mock 数据，不反映真实岗位要求。后续需要替换为教材、课程大纲或企业招聘数据。
- [引用完整性] 新增文件的 `abilityIds`、`jobId`、`majorId` 必须精确匹配已有 ID，否则校验会失败。
- [major.json 修改] 需要额外修改 `automation/major.json` 的 `relatedJobs` 数组，否则岗位不会被该专业引用。
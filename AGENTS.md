# AGENTS.md

## 项目目标

本仓库是 MajorSkill Agent Lab，本科专业能力发展智能体实验平台。

第一期目标是跑通一个轻量 MVP：结构化内容数据、前端展示、Mock 智能体、GitHub 协作流程。不要在第一期接入真实数据库、真实大模型、登录系统、招聘网站爬取或复杂权限体系。

最小闭环以“自动化专业 / 控制算法工程师”为示例：

1. 选择本科专业。
2. 选择典型就业岗位。
3. 查看岗位能力图谱。
4. 打开能力项，查看知识点、支撑课程、任务与证据。
5. 通过 Mock Agent 生成学习任务卡。
6. 完成诊断测验。
7. 获取学习路径与资源建议。
8. 提交试用反馈或贡献记录。

## 当前真源

- `docs/ProjectProposal.md` 是项目目标、范围、目录结构、数据模型、页面、Mock Agent 和协作流程的第一真源。
- 新会话开始时先阅读 `docs/ProjectProposal.md` 的项目定位、最小闭环、技术框架、核心数据模型、Mock Agent 设计和 GitHub 协作流程，再做实现判断。
- 如果未来建立 `docs/memory/`，进入仓库后先读 `docs/memory/00-index.md` 与 `docs/memory/02-recent-summary.md`，再按 `docs/memory/01-reading-map.md` 读取相关主题。

## 技术路线

- 前端框架：Next.js App Router。
- 语言与类型：TypeScript。
- 样式：Tailwind CSS。
- 内容校验：Zod。
- 内容存储：第一期使用 `content/` 下的 JSON、YAML 或 Markdown 文件，不使用数据库。
- 智能体：第一期只实现 Mock Agent，保持结构化输入输出，后续再接真实 LLM、RAG 或第三方 Agent 平台。

## 不做事项

- 不接真实学生个人数据。
- 不写登录系统。
- 不接数据库。
- 不接真实大模型。
- 不爬取招聘网站。
- 不引入复杂权限系统。
- 不把当前自动控制课程的具体习题写入内容库。
- 不把 Mock 数据伪装成真实依据。

## 内容数据要求

- 所有内容包必须带 `sourceRefs`。
- 第一阶段允许 `sourceRefs[].type = "mock"`，但必须明确说明是模拟数据。
- 内容模型至少覆盖 Major、JobRole、Ability、LearningTask、Diagnostic、LearningPath、SourceRef。
- 学生或代理新增内容时，优先补充结构化字段，不用自由散文替代模型字段。
- 新增内容包必须能被 `npm run validate-content` 校验。

## Mock Agent 约束

第一期需要三个 Mock Agent：

- `TaskGeneratorAgent`：根据专业、岗位、能力项和学习目标生成结构化任务卡。
- `DiagnosticAgent`：根据诊断题答案输出分数、薄弱能力项和反馈。
- `LearningPathRecommenderAgent`：根据薄弱能力项和目标水平推荐学习路径。

所有 Mock Agent 输出都必须显示：

- AI 生成内容或 Mock 生成内容标识。
- 依据来源。
- 仅供学习参考。

## 页面与交互原则

- 首屏应是可用的平台入口，而不是营销型落地页。
- 首页提供专业浏览、岗位能力图谱、学习任务生成、诊断与学习路径四个入口。
- 能力图谱第一期使用分层卡片，不引入复杂图谱库。
- 页面应服务专业建设、课程支撑、能力证据和学生学习路径，不写空泛介绍。
- 学习任务、诊断结果和推荐路径必须能追溯到结构化内容包。

## 开发顺序

建议按以下顺序推进，避免过早扩展：

1. 初始化 Next.js、TypeScript、Tailwind、ESLint。
2. 建立 `content/`、`src/schemas/`、`src/lib/content/`、`scripts/`、`.github/` 等目录。
3. 实现自动化专业示例数据。
4. 实现 Zod schema 与内容校验脚本。
5. 实现内容加载器。
6. 实现首页、专业页、岗位页、能力页、任务页、诊断页、Agent 页、贡献者页。
7. 实现三个 Mock Agent。
8. 配置 GitHub issue templates、PR template 和 CI。
9. 完成 README、贡献指南、分支规范、内容 schema、安全伦理说明。

## 验证命令

代码或内容实现完成后，优先运行：

```bash
rtk npm run validate-content
rtk npm run typecheck
rtk npm run lint
rtk npm run build
```

如果项目尚未脚手架化，说明对应命令尚不可用，不要声称已通过。

## Git 与协作

- 默认稳定分支：`main`。
- 学生 PR 合并目标：`integration`。
- 学生功能分支：`feature/issue-编号-简短名称`。
- Codex 或教师代理分支：`codex/简短任务名`。
- 修复分支：`hotfix/简短任务名`。
- 提交前先查看 `rtk git status -sb` 和相关 diff，只提交本次任务相关文件。
- PR 标题建议格式：`[Issue #12] Add ability pack for control algorithm engineer`。

## 代码与文档风格

- 默认使用中文沟通和撰写项目文档。
- 代码修改保持局部、明确、可验证；不要顺手重构无关代码。
- 文档面向真实贡献者和维护者，不写流程腔、自我免责或空泛口号。
- 对不合理需求直接指出，并给出更合理的替代方案。
- Shell 命令默认加 `rtk` 前缀。

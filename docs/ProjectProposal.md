一、项目定位

项目名称：MajorSkill Agent Lab

中文名称：本科专业能力发展智能体实验平台

核心目标：

构建一个面向本科高校专业建设的轻量级智能体平台，用于把典型就业岗位、专业能力要求、课程支撑关系、学习型任务和个性化学习路径连接起来。

它既是一个长期 GitHub 协作训练场，也是未来可以转化为正式学院项目的原型系统。

第一期不要做复杂 AI。
第一期目标是把“结构化数据 + 前端展示 + Mock 智能体 + GitHub 协作流程”跑通。后续再接真实大模型、RAG、讯飞星辰 Agent 或学院已有数据平台。

二、项目本科化改写

原赛题中的“高水平专业群、职业岗位、岗位能力、学习型任务、个性化学习”非常适合迁移到本科高校，只是话语体系需要调整。原题要求作品围绕具体专业群和核心岗位服务教学、实训或就业支持，并且必须有可交互 MVP，不接受只有方案文档或视频的作品。

本科版本建议这样改写：

原题表述	本科化表述
高水平专业群	本科专业、专业类、交叉专业方向
职业岗位	典型就业岗位、升学/科研方向、产业岗位群
岗位能力	毕业要求、就业胜任力、工程实践能力、科研能力
能力单元、技能点、知识点	能力项、课程知识点、实践技能、项目经验
实训任务	项目式学习任务、课程综合任务、实践训练任务
岗课赛	岗—课—项—赛—证
职教教师/学生	专业负责人、课程教师、本科生、导师、辅导员

因此，本项目的完整闭环是：

选择专业方向 → 选择典型岗位 → 查看岗位能力图谱 → 生成学习型任务 → 完成诊断测验 → 推荐学习路径 → 收集反馈证据。

三、最小可用闭环

第一版 Codex 框架只需要跑通一个例子：

专业：自动化
岗位：控制算法工程师
能力项：控制系统建模、控制器设计、仿真验证、工程表达
学习任务：为一个温控对象设计闭环控制方案
诊断测验：5 道基础判断/选择题
学习路径：数学基础 → 自动控制原理 → MATLAB/Python 仿真 → PID 设计 → 项目报告

用户体验闭环：

用户进入首页。
选择“自动化专业”。
选择“控制算法工程师”。
系统展示该岗位的能力图谱。
用户点击“控制器设计能力”。
系统展示相关知识点、课程支撑和学习任务。
用户点击“生成学习任务卡”。
Mock 智能体生成一张任务卡。
用户完成一个简短诊断测验。
系统生成学习路径和资源建议。
用户提交试用反馈。

这个闭环不涉及当前正在上课的具体习题，所以不会提前泄露课程项目内容。

四、技术框架建议

建议使用：

Next.js + TypeScript + Tailwind CSS + Zod + Markdown/JSON 数据包

Next.js App Router 适合作为这个项目的前端框架，因为它采用文件系统路由，并支持 React Server Components、Suspense 和 Server Functions 等能力，后续扩展页面和数据加载比较自然。

第一期不需要数据库。所有内容先放在 content/ 目录下，用 JSON / YAML / Markdown 维护。这样学生新增内容就是新增文件，不会过早陷入数据库、权限、后端部署问题。

后续如果要正式化，可以再升级为：

PostgreSQL / Supabase / SQLite
Vector Database
RAG Knowledge Base
Agent Workflow
User Login
Learning Analytics

但这些不应该进入第一期。

五、仓库目录结构

建议 Codex 创建如下结构：

major-skill-agent-lab/
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── .env.example
├── .gitignore
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── content-pack.yml
│   │   ├── feature.yml
│   │   ├── bug.yml
│   │   └── workflow-practice.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       └── ci.yml
│
├── docs/
│   ├── project-brief.md
│   ├── contribution-guide.md
│   ├── branch-workflow.md
│   ├── content-schema.md
│   ├── agent-design.md
│   ├── review-rubric.md
│   └── safety-and-ethics.md
│
├── content/
│   ├── majors/
│   │   └── automation/
│   │       ├── major.json
│   │       ├── jobs/
│   │       │   └── control-algorithm-engineer.json
│   │       ├── abilities/
│   │       │   ├── system-modeling.json
│   │       │   ├── controller-design.json
│   │       │   ├── simulation-validation.json
│   │       │   └── engineering-communication.json
│   │       ├── tasks/
│   │       │   └── temperature-control-task.json
│   │       ├── diagnostics/
│   │       │   └── control-algorithm-basic.json
│   │       ├── learning-paths/
│   │       │   └── control-algorithm-beginner.json
│   │       └── resources/
│   │           └── resources.json
│   │
│   ├── templates/
│   │   ├── ability-template.json
│   │   ├── job-template.json
│   │   ├── task-template.json
│   │   ├── diagnostic-template.json
│   │   └── learning-path-template.json
│   │
│   └── contributors/
│       └── contributors.json
│
├── scripts/
│   ├── validate-content.ts
│   ├── build-content-index.ts
│   └── check-contributor.ts
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── majors/
│   │   │   ├── page.tsx
│   │   │   └── [majorId]/
│   │   │       └── page.tsx
│   │   ├── jobs/
│   │   │   └── [jobId]/
│   │   │       └── page.tsx
│   │   ├── abilities/
│   │   │   └── [abilityId]/
│   │   │       └── page.tsx
│   │   ├── tasks/
│   │   │   ├── page.tsx
│   │   │   └── [taskId]/
│   │   │       └── page.tsx
│   │   ├── diagnostics/
│   │   │   └── page.tsx
│   │   ├── learning-path/
│   │   │   └── page.tsx
│   │   ├── agent/
│   │   │   └── page.tsx
│   │   ├── contributors/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── agent/
│   │       │   ├── generate-task/
│   │       │   │   └── route.ts
│   │       │   ├── diagnose/
│   │       │   │   └── route.ts
│   │       │   └── recommend-path/
│   │       │       └── route.ts
│   │       └── feedback/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.tsx
│   │   │   ├── AppSidebar.tsx
│   │   │   └── PageShell.tsx
│   │   ├── major/
│   │   │   ├── MajorCard.tsx
│   │   │   └── MajorOverview.tsx
│   │   ├── job/
│   │   │   ├── JobCard.tsx
│   │   │   └── JobProfile.tsx
│   │   ├── ability/
│   │   │   ├── AbilityGraph.tsx
│   │   │   ├── AbilityNodeCard.tsx
│   │   │   └── AbilityDetailPanel.tsx
│   │   ├── task/
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskStepList.tsx
│   │   │   └── TaskRubric.tsx
│   │   ├── diagnostic/
│   │   │   ├── DiagnosticQuiz.tsx
│   │   │   └── DiagnosticResult.tsx
│   │   ├── learning-path/
│   │   │   ├── LearningPathTimeline.tsx
│   │   │   └── ResourceList.tsx
│   │   ├── agent/
│   │   │   ├── AgentChatPanel.tsx
│   │   │   ├── AgentGeneratedBadge.tsx
│   │   │   └── AgentTraceBox.tsx
│   │   └── common/
│   │       ├── EmptyState.tsx
│   │       ├── SourceBadge.tsx
│   │       └── StatusBadge.tsx
│   │
│   ├── lib/
│   │   ├── content/
│   │   │   ├── load-content.ts
│   │   │   ├── content-index.ts
│   │   │   └── source-utils.ts
│   │   ├── agent/
│   │   │   ├── types.ts
│   │   │   ├── mock-agent.ts
│   │   │   ├── prompt-builder.ts
│   │   │   └── provider.ts
│   │   ├── diagnosis/
│   │   │   ├── scoring.ts
│   │   │   └── recommendation.ts
│   │   └── utils.ts
│   │
│   ├── schemas/
│   │   ├── major.schema.ts
│   │   ├── job.schema.ts
│   │   ├── ability.schema.ts
│   │   ├── task.schema.ts
│   │   ├── diagnostic.schema.ts
│   │   ├── learning-path.schema.ts
│   │   ├── resource.schema.ts
│   │   └── contributor.schema.ts
│   │
│   └── types/
│       └── index.ts
│
└── public/
    └── screenshots/
六、核心数据模型

Codex 需要先实现下面几类 schema。不要让学生自由发挥字段，否则后期会很乱。

1. Major 专业模型
type Major = {
  id: string;
  name: string;
  category: string;
  description: string;
  targetStudents: string[];
  relatedJobs: string[];
  coreCourses: string[];
  sourceRefs: SourceRef[];
};

示例：

{
  "id": "automation",
  "name": "自动化",
  "category": "工学",
  "description": "围绕自动控制、智能系统、工业过程与装备自动化培养工程技术人才。",
  "targetStudents": ["自动化专业本科生", "控制类方向学生"],
  "relatedJobs": ["control-algorithm-engineer"],
  "coreCourses": ["自动控制原理", "现代控制理论", "过程控制", "传感器与检测技术"],
  "sourceRefs": [
    {
      "type": "course-outline",
      "title": "自动化专业培养方案示例",
      "note": "第一期使用模拟数据，后续替换为真实脱敏材料。"
    }
  ]
}
2. JobRole 岗位模型
type JobRole = {
  id: string;
  majorId: string;
  name: string;
  description: string;
  workScenarios: string[];
  typicalTasks: string[];
  abilityIds: string[];
  sourceRefs: SourceRef[];
};
3. Ability 能力节点模型
type Ability = {
  id: string;
  majorId: string;
  jobId: string;
  name: string;
  level: "basic" | "intermediate" | "advanced";
  description: string;
  knowledgePoints: string[];
  skillPoints: string[];
  relatedCourses: string[];
  prerequisites: string[];
  evidenceExamples: string[];
  sourceRefs: SourceRef[];
};
4. LearningTask 学习任务模型
type LearningTask = {
  id: string;
  majorId: string;
  jobId: string;
  abilityIds: string[];
  title: string;
  scenario: string;
  objectives: string[];
  steps: string[];
  deliverables: string[];
  rubric: RubricItem[];
  safetyOrEthicsNotes: string[];
  estimatedTime: string;
  sourceRefs: SourceRef[];
};
5. Diagnostic 诊断测验模型
type Diagnostic = {
  id: string;
  majorId: string;
  jobId: string;
  title: string;
  questions: DiagnosticQuestion[];
  scoringRules: ScoringRule[];
};
6. LearningPath 学习路径模型
type LearningPath = {
  id: string;
  majorId: string;
  jobId: string;
  title: string;
  targetLevel: "starter" | "project-ready" | "job-ready";
  nodes: LearningPathNode[];
};
7. SourceRef 来源模型

这个很重要。原题强调内容要有依据，知识库或规则库需要说明来源。 所以每个内容包必须带来源字段。

type SourceRef = {
  type: "course-outline" | "textbook" | "standard" | "job-posting" | "teacher-interview" | "public-resource" | "mock";
  title: string;
  authorOrOrg?: string;
  year?: string;
  url?: string;
  page?: string;
  note?: string;
};

第一期可以允许 type: "mock"，但必须明确标注“模拟数据”。

七、核心页面设计
1. 首页 /

展示项目定位、当前专业数量、岗位数量、能力节点数量、学习任务数量、贡献者数量。

首页要有四个入口：

专业浏览
岗位能力图谱
学习任务生成
诊断与学习路径
2. 专业列表页 /majors

展示所有专业卡片。

卡片字段：

专业名称
所属类别
核心课程数量
关联岗位数量
能力节点数量
贡献者
3. 专业详情页 /majors/[majorId]

展示：

专业简介
核心课程
典型岗位
能力结构概览
可用学习任务
数据来源
4. 岗位详情页 /jobs/[jobId]

展示：

岗位描述
典型工作场景
典型工作任务
能力节点
关联课程
推荐学习任务
5. 能力详情页 /abilities/[abilityId]

展示：

能力说明
知识点
技能点
前置能力
支撑课程
证据样例
关联学习任务
来源说明
6. 能力图谱组件 AbilityGraph

第一期不要上复杂图谱库。先用简单的分层卡片图：

岗位
  ├── 能力项 A
  │     ├── 知识点
  │     └── 技能点
  ├── 能力项 B
  └── 能力项 C

后续再升级为 React Flow、知识图谱或思维导图。

7. 学习任务页 /tasks

展示所有任务卡。

支持筛选：

专业
岗位
能力项
难度
预计耗时
8. Agent 页面 /agent

第一期是 Mock Agent，不接真实模型。

交互模式：

用户选择专业
用户选择岗位
用户选择能力项
用户输入学习目标
系统生成任务卡
系统标记“AI 生成内容 / Mock 生成内容”
系统展示依据来源

原题要求智能体能完成“接收输入—调用知识库/规则库—逻辑处理—生成结果—清晰反馈”的微任务闭环。 所以这个页面必须优先完成。

9. 诊断页 /diagnostics

第一期只做选择题。

功能：

加载诊断题
学生作答
本地评分
输出薄弱能力项
推荐学习路径
10. 贡献者页 /contributors

用于训练 GitHub 协作仪式感。

展示：

学生姓名或 GitHub ID
贡献类型
关联 issue
关联 PR
贡献内容
合并日期
八、Mock Agent 设计

第一期不要做真正大模型调用，而是实现三个 Mock Agent：

1. TaskGeneratorAgent

输入：

{
  majorId: string;
  jobId: string;
  abilityIds: string[];
  learnerGoal: string;
}

输出：

{
  title: string;
  scenario: string;
  objectives: string[];
  steps: string[];
  deliverables: string[];
  rubric: RubricItem[];
  sourceRefs: SourceRef[];
  aiGenerated: true;
}

生成逻辑：

读取岗位信息
读取能力信息
读取任务模板
根据 learnerGoal 填充任务标题和任务步骤
返回结构化任务卡
2. DiagnosticAgent

输入：

{
  diagnosticId: string;
  answers: Record<string, string>;
}

输出：

{
  score: number;
  weakAbilityIds: string[];
  feedback: string[];
}
3. LearningPathRecommenderAgent

输入：

{
  majorId: string;
  jobId: string;
  weakAbilityIds: string[];
  targetLevel: string;
}

输出：

{
  recommendedPathId: string;
  reason: string;
  nextSteps: string[];
  resources: Resource[];
}

所有 Agent 输出都必须显示：

AI 生成内容
依据来源
仅供学习参考

原题提交材料还要求伦理与安全合规声明，包括不使用未经脱敏的个人敏感数据、不伪造学术数据或虚假文献、设置明显 AI 生成内容标识。 这个项目从第一期就应内置这些约束。

九、GitHub 协作流程设计

仓库分支建议：

main          稳定展示分支，只放阶段性发布版本
integration   学生 PR 合并目标分支
feature/*     学生个人开发分支
codex/*       Codex 或教师代理开发分支
hotfix/*      修复分支

学生流程：

1. 阅读 docs/contribution-guide.md
2. 在 GitHub Issues 中领取一个 issue
3. 从 integration 拉取最新代码
4. 创建 feature/issue-编号-简短名称 分支
5. 完成开发或内容贡献
6. 本地运行 npm run validate、npm run lint、npm run build
7. 提交 PR 到 integration
8. 根据 review 修改
9. 合并后在 contributors.json 中登记贡献

GitHub 官方支持 issue template 和 pull request template，用来规范贡献者提交信息。 也可以对 integration 和 main 配置分支保护，要求 PR 审查或状态检查通过后才能合并。

PR 标题格式：

[Issue #12] Add ability pack for control algorithm engineer

分支命名：

feature/issue-12-control-algorithm-ability
feature/issue-21-add-major-software-engineering
feature/issue-33-task-card-ui
十、Codex 初始开发任务

下面这部分可以直接复制给 Codex。

Codex 总任务

请创建一个名为 major-skill-agent-lab 的 Next.js + TypeScript 项目，实现一个面向本科高校专业建设的岗位能力与学习任务智能体平台基础框架。第一期不接真实数据库、不接真实大模型，使用本地 JSON 内容包和 Mock Agent 完成最小闭环。

Codex 必须完成
创建 Next.js App Router 项目。
配置 TypeScript、ESLint、Tailwind CSS。
创建上述目录结构。
实现 content/ 中的自动化专业示例数据。
实现 Zod schema 校验。
实现内容加载器。
实现首页、专业页、岗位页、能力页、任务页、诊断页、Agent 页、贡献者页。
实现 Mock Agent 三个功能：任务生成、诊断评分、学习路径推荐。
实现 scripts/validate-content.ts。
配置 GitHub Actions CI：安装依赖、类型检查、lint、内容校验、build。
创建 GitHub issue templates 和 PR template。
创建文档：README、贡献指南、分支规范、内容 schema 说明、安全伦理说明。
确保 npm run lint、npm run build、npm run validate-content 可以通过。
Codex 不要做
不要接真实学生数据
不要写登录系统
不要接数据库
不要接真实大模型
不要爬取招聘网站
不要引入复杂权限系统
不要把当前自动控制课程具体习题写入内容库
不要把 Mock 数据伪装成真实依据
十一、基础 package scripts

建议 package.json 包含：

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "validate-content": "tsx scripts/validate-content.ts",
    "check": "npm run typecheck && npm run validate-content && npm run lint && npm run build"
  }
}

如果 Next.js 版本中 next lint 不再适用，就让 Codex 按当前 Next.js 推荐方式配置 ESLint。

十二、GitHub Actions CI

.github/workflows/ci.yml 建议：

name: CI

on:
  pull_request:
    branches:
      - integration
      - main
  push:
    branches:
      - integration
      - main

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run typecheck

      - name: Validate content
        run: npm run validate-content

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

GitHub Actions workflow 是保存在仓库 .github/workflows 目录下的 YAML 文件，可以在 push、pull request 等事件触发时运行。

十三、Issue 标签体系

建议先创建这些 labels：

type: content-pack
type: feature
type: ui
type: agent
type: schema
type: docs
type: test
type: workflow
type: bug

level: beginner
level: intermediate
level: advanced

area: major
area: job
area: ability
area: task
area: diagnostic
area: learning-path
area: contributor
area: ci
area: safety

status: ready
status: claimed
status: needs-review
status: blocked
十四、初始 Milestone 设计
Milestone 0：基础框架搭建

负责人：Codex / 教师子代理
目标：项目可以运行，具备示例数据、页面、Mock Agent、CI 和贡献模板。

Milestone 1：第一次学生协作训练

负责人：学生
目标：每名学生至少完成一个独立 issue，提交 PR 到 integration，通过检查并完成 review。

Milestone 2：本科专业扩展

负责人：学生小组
目标：新增 2–3 个本科专业方向，每个专业至少有 1 个岗位、4 个能力节点、2 个学习任务、1 套诊断题。

Milestone 3：智能体增强

负责人：高阶学生
目标：把 Mock Agent 替换为真实 LLM 或讯飞星辰 Agent 接口，但保留 Mock 模式用于测试。

十五、初始 Issue 集合

下面给出一批可直接创建的 issue。前 12 个建议交给 Codex，后面的适合学生领取。

A. Codex 基础框架 Issue
Issue 001：初始化 Next.js + TypeScript 项目

Label： type: feature, area: ci, level: advanced

任务描述：
创建 major-skill-agent-lab 项目，完成 Next.js、TypeScript、Tailwind CSS、ESLint 基础配置。

验收标准：

npm install 成功
npm run dev 成功启动
npm run build 成功
首页可以访问
README 中说明启动方式
Issue 002：建立标准目录结构

Label： type: feature, area: schema, level: intermediate

任务描述：
按照项目框架创建 src/、content/、docs/、scripts/、.github/ 等目录。

验收标准：

目录结构与项目说明一致
每个主要目录有 README 或说明文件
无空壳无说明目录
Issue 003：实现内容数据 schema

Label： type: schema, area: ability, level: advanced

任务描述：
使用 Zod 定义 Major、JobRole、Ability、LearningTask、Diagnostic、LearningPath、Resource、Contributor 等 schema。

验收标准：

src/schemas 下存在完整 schema 文件
schema 能校验 content 中的示例数据
错误信息清晰可读
npm run validate-content 可调用 schema
Issue 004：创建自动化专业示例内容包

Label： type: content-pack, area: major, level: intermediate

任务描述：
在 content/majors/automation 下创建第一套示例数据。

验收标准：

包含 1 个 major.json
包含 1 个岗位 control-algorithm-engineer
包含至少 4 个能力节点
包含至少 1 个学习任务
包含至少 1 套诊断题
包含至少 1 条学习路径
所有内容明确标注 sourceRefs
Mock 数据必须注明 mock
Issue 005：实现内容加载器

Label： type: feature, area: schema, level: advanced

任务描述：
实现 src/lib/content/load-content.ts，用于读取本地内容数据并返回结构化对象。

验收标准：

可以加载所有专业
可以按 majorId 查找专业
可以按 jobId 查找岗位
可以按 abilityId 查找能力
可以按 taskId 查找任务
找不到数据时返回明确错误或空状态
Issue 006：实现内容校验脚本

Label： type: test, area: ci, level: advanced

任务描述：
实现 scripts/validate-content.ts，扫描 content/ 下所有 JSON 文件并校验 schema。

验收标准：

npm run validate-content 可以运行
合法内容通过
非法内容输出文件路径和字段错误
CI 中调用该脚本
Issue 007：首页与全局布局

Label： type: ui, area: major, level: intermediate

任务描述：
实现首页、顶部导航、侧边栏或主导航布局。

验收标准：

首页展示项目名称和定位
首页展示专业数、岗位数、能力数、任务数
首页提供专业浏览、岗位能力图谱、学习任务、诊断路径入口
页面响应式布局基本可用
Issue 008：专业列表与专业详情页

Label： type: ui, area: major, level: intermediate

任务描述：
实现 /majors 和 /majors/[majorId] 页面。

验收标准：

专业列表正确读取 content 数据
专业详情页展示简介、核心课程、典型岗位、来源说明
不存在的 majorId 显示友好提示
Issue 009：岗位详情与能力图谱页面

Label： type: ui, area: job, level: advanced

任务描述：
实现岗位详情页和简化能力图谱组件。

验收标准：

/jobs/[jobId] 可访问
展示岗位描述、典型任务、能力节点
AbilityGraph 能展示岗位到能力节点的层级关系
点击能力节点可进入能力详情
Issue 010：学习任务卡页面

Label： type: ui, area: task, level: intermediate

任务描述：
实现任务列表页和任务详情页。

验收标准：

/tasks 可展示任务列表
/tasks/[taskId] 可展示任务详情
任务详情包含情境、目标、步骤、交付物、评价标准、来源
Issue 011：实现 Mock Agent API

Label： type: agent, area: agent, level: advanced

任务描述：
实现任务生成、诊断评分、学习路径推荐三个 Mock API。

验收标准：

/api/agent/generate-task 可返回结构化任务卡
/api/agent/diagnose 可返回评分和薄弱能力
/api/agent/recommend-path 可返回学习路径建议
所有返回结果包含 aiGenerated 标记和 sourceRefs
Issue 012：配置 GitHub 模板与 CI

Label： type: workflow, area: ci, level: advanced

任务描述：
创建 issue templates、PR template 和 GitHub Actions CI。

验收标准：

.github/ISSUE_TEMPLATE 下至少 4 个模板
.github/PULL_REQUEST_TEMPLATE.md 存在
.github/workflows/ci.yml 存在
PR 到 integration 时触发 CI
CI 至少包含 typecheck、validate-content、lint、build
B. 学生内容包 Issue
Issue 013：新增岗位能力包：嵌入式软件工程师

Label： type: content-pack, area: job, level: beginner

任务描述：
为自动化或电子信息类专业新增“嵌入式软件工程师”岗位内容包。

验收标准：

新增 job json 文件
至少包含 4 个典型工作场景
至少包含 5 个典型工作任务
至少关联 4 个能力节点
每个能力节点包含知识点、技能点、支撑课程
所有内容包含 sourceRefs
通过 npm run validate-content
Issue 014：新增岗位能力包：工业数据分析工程师

Label： type: content-pack, area: job, level: beginner

任务描述：
新增“工业数据分析工程师”岗位内容包。

验收标准：

岗位描述清晰
至少 4 个能力节点
至少 8 个知识点
至少 8 个技能点
至少 1 个学习任务
通过内容校验
Issue 015：新增岗位能力包：机器人工程师

Label： type: content-pack, area: job, level: beginner

任务描述：
新增“机器人工程师”岗位内容包。

验收标准：

包含岗位描述、工作场景、典型任务
至少 4 个能力节点
至少 1 张学习任务卡
至少 5 条资源建议
Issue 016：新增本科专业包：软件工程

Label： type: content-pack, area: major, level: intermediate

任务描述：
新增“软件工程”专业内容包。

验收标准：

新增 content/majors/software-engineering
包含 major.json
至少包含 1 个岗位，例如后端开发工程师或测试开发工程师
至少 4 个能力节点
至少 1 个学习任务
至少 1 套诊断题
Issue 017：新增本科专业包：人工智能

Label： type: content-pack, area: major, level: intermediate

任务描述：
新增“人工智能”专业内容包。

验收标准：

包含专业简介、核心课程、典型岗位
岗位建议选择机器学习工程师或数据标注质检工程师
至少 4 个能力节点
至少 1 条学习路径
Issue 018：新增本科专业包：机械电子工程

Label： type: content-pack, area: major, level: intermediate

任务描述：
新增“机械电子工程”专业内容包。

验收标准：

包含 1 个岗位
至少 4 个能力节点
至少 1 个实践学习任务
至少 1 套诊断题
Issue 019：补充控制算法工程师能力节点：控制系统建模

Label： type: content-pack, area: ability, level: beginner

任务描述：
完善 system-modeling.json 能力节点。

验收标准：

至少 5 个知识点
至少 5 个技能点
至少 3 门支撑课程
至少 3 个证据样例
至少 2 条来源说明
Issue 020：补充控制算法工程师能力节点：仿真验证

Label： type: content-pack, area: ability, level: beginner

任务描述：
完善“仿真验证”能力节点。

验收标准：

说明仿真验证在岗位中的作用
补充知识点和技能点
补充任务交付物样例
通过内容校验
C. 学生任务卡 Issue
Issue 021：新增学习任务卡：温控系统闭环设计

Label： type: content-pack, area: task, level: beginner

任务描述：
新增一个面向控制算法工程师的学习任务卡。

验收标准：

包含任务名称
包含真实或模拟工作情境
包含学习目标
包含 5–8 个任务步骤
包含交付物
包含评价 rubrics
包含安全或伦理说明
包含来源说明
Issue 022：新增学习任务卡：传感器数据滤波与异常检测

Label： type: content-pack, area: task, level: intermediate

任务描述：
新增一个面向工业数据分析或自动化方向的任务卡。

验收标准：

任务情境明确
至少关联 2 个能力节点
包含任务步骤
包含评价标准
包含推荐资源
Issue 023：新增学习任务卡：嵌入式设备通信调试

Label： type: content-pack, area: task, level: intermediate

任务描述：
新增一个面向嵌入式软件工程师的任务卡。

验收标准：

包含工作背景
包含调试步骤
包含常见错误
包含交付物
包含评价标准
Issue 024：新增学习任务卡：小型机器人路径规划实验

Label： type: content-pack, area: task, level: intermediate

任务描述：
新增机器人方向学习任务卡。

验收标准：

包含任务目标
包含输入输出约束
包含步骤说明
包含评价 rubrics
包含拓展挑战
D. 学生诊断题 Issue
Issue 025：为控制算法工程师新增 10 道诊断题

Label： type: content-pack, area: diagnostic, level: beginner

任务描述：
为控制算法工程师岗位新增一套基础诊断题。

验收标准：

至少 10 道题
题型包含单选或判断
每道题绑定 abilityId
每道题有答案和解释
每道题有难度标签
通过内容校验
Issue 026：为嵌入式软件工程师新增 10 道诊断题

Label： type: content-pack, area: diagnostic, level: beginner

任务描述：
新增嵌入式方向诊断题。

验收标准：

至少 10 道题
覆盖 C 语言、接口通信、调试、安全等能力
每题有解释
Issue 027：为软件工程专业新增项目开发诊断题

Label： type: content-pack, area: diagnostic, level: beginner

任务描述：
新增软件工程专业项目开发基础诊断题。

验收标准：

至少 10 道题
覆盖 Git、需求理解、接口、测试、代码规范
每题绑定能力节点
E. UI 与交互 Issue
Issue 028：优化 AbilityGraph 能力图谱组件

Label： type: ui, area: ability, level: advanced

任务描述：
优化能力图谱展示，使岗位、能力项、知识点、技能点层次更清楚。

验收标准：

能力节点视觉分层清晰
点击节点可显示详情
空数据状态友好
移动端基本可用
Issue 029：实现任务卡筛选功能

Label： type: ui, area: task, level: intermediate

任务描述：
在 /tasks 页面增加筛选功能。

验收标准：

可以按专业筛选
可以按岗位筛选
可以按能力项筛选
可以按难度筛选
筛选状态可重置
Issue 030：实现诊断测验结果可视化

Label： type: ui, area: diagnostic, level: advanced

任务描述：
优化诊断结果页面，展示得分、薄弱能力项、推荐路径。

验收标准：

显示总分
显示每个能力项掌握情况
显示推荐学习路径
显示下一步建议
Issue 031：实现学习路径时间线组件

Label： type: ui, area: learning-path, level: intermediate

任务描述：
实现学习路径的时间线展示。

验收标准：

每个路径节点显示标题、目标、资源、任务
当前推荐节点突出显示
支持空状态
Issue 032：实现贡献者展示页

Label： type: ui, area: contributor, level: beginner

任务描述：
实现 /contributors 页面。

验收标准：

读取 contributors.json
展示贡献者姓名或 GitHub ID
展示贡献类型、issue 编号、PR 编号
支持按贡献类型筛选
F. Agent 与规则 Issue
Issue 033：优化任务生成 Mock Agent

Label： type: agent, area: agent, level: advanced

任务描述：
改进 TaskGeneratorAgent，让它根据能力节点和学习目标生成更具体的任务卡。

验收标准：

输入不同 abilityIds 时生成结果不同
任务步骤来自模板和能力节点组合
输出包含依据来源
输出包含 AI 生成内容标识
Issue 034：新增模糊输入澄清逻辑

Label： type: agent, area: agent, level: advanced

任务描述：
当用户输入过短或含糊时，Agent 不直接生成任务，而是返回澄清问题。

验收标准：

输入“帮我生成一个任务”时返回澄清问题
澄清问题包含专业、岗位、能力项、目标水平
支持至少 2 类模糊输入

原题明确提到交互应能识别模糊提问并进行追问。 这个 issue 可以作为高阶学生任务。

Issue 035：新增学习路径推荐规则

Label： type: agent, area: learning-path, level: intermediate

任务描述：
完善推荐规则，使诊断结果能映射到学习路径节点。

验收标准：

薄弱 abilityId 能匹配路径节点
低分学生推荐基础路径
中等学生推荐项目路径
高分学生推荐拓展任务
G. 文档与协作训练 Issue
Issue 036：完善贡献指南

Label： type: docs, area: contributor, level: beginner

任务描述：
完善 docs/contribution-guide.md。

验收标准：

说明如何领取 issue
说明如何创建分支
说明如何提交 PR
说明如何运行检查命令
说明常见错误
Issue 037：编写内容包开发指南

Label： type: docs, area: schema, level: beginner

任务描述：
编写学生如何新增专业、岗位、能力、任务、诊断题的指南。

验收标准：

包含每类内容的字段说明
包含示例 JSON
包含常见校验错误
包含提交前检查清单
Issue 038：编写 PR Review 评分表

Label： type: docs, area: contributor, level: intermediate

任务描述：
编写教师和学生互评用的 PR review rubric。

验收标准：

包含代码质量
包含内容质量
包含来源标注
包含可运行性
包含协作规范
Issue 039：编写安全与伦理说明

Label： type: docs, area: safety, level: intermediate

任务描述：
编写 docs/safety-and-ethics.md。

验收标准：

说明不得提交真实未脱敏学生数据
说明不得伪造文献和来源
说明 AI 生成内容必须标识
说明 Mock 数据必须标注
说明内容仅用于学习支持
Issue 040：新增学生 GitHub 训练任务说明页

Label： type: docs, area: contributor, level: beginner

任务描述：
新增一个面向学生的训练说明文档。

验收标准：

说明本项目训练目标
说明 issue、branch、commit、PR、review、merge 的完整流程
给出一个从领取 issue 到合并的示例
H. 测试与质量 Issue
Issue 041：为空数据页面增加测试数据

Label： type: test, area: ui, level: intermediate

任务描述：
检查主要页面在无数据或错误 ID 下的显示效果。

验收标准：

不存在的 majorId 有友好提示
不存在的 jobId 有友好提示
不存在的 taskId 有友好提示
不出现白屏
Issue 042：增加内容引用完整性检查

Label： type: test, area: schema, level: advanced

任务描述：
增强 validate-content.ts，检查引用 ID 是否存在。

验收标准：

job.abilityIds 必须指向存在的 ability
task.abilityIds 必须指向存在的 ability
learningPath.nodes.resourceIds 必须指向存在的 resource
错误时输出具体文件路径和字段
Issue 043：增加贡献者登记检查

Label： type: workflow, area: contributor, level: intermediate

任务描述：
实现 scripts/check-contributor.ts，检查学生是否在 contributors.json 中登记贡献。

验收标准：

可以根据 issue 编号检查贡献者记录
缺失时给出提示
不强制阻塞 CI，初期只输出 warning
十六、PR 模板建议

.github/PULL_REQUEST_TEMPLATE.md：

## 关联 Issue

Closes #

## 本次修改类型

- [ ] 内容包
- [ ] UI 组件
- [ ] Agent / 规则
- [ ] 文档
- [ ] 测试 / CI
- [ ] Bug 修复

## 修改说明

请简要说明你做了什么。

## 自测结果

- [ ] npm run validate-content
- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

## 来源与依据

如果新增内容包，请说明数据来源：

- 来源类型：
- 来源名称：
- 是否为 Mock 数据：

## AI 生成内容标识

- [ ] 本次内容没有使用 AI 生成
- [ ] 本次内容使用了 AI 辅助，已人工核查
- [ ] 涉及 AI 生成内容的地方已明确标识

## 截图或效果说明

请附页面截图或文字说明。

## 其他说明
十七、Issue Template：内容包

.github/ISSUE_TEMPLATE/content-pack.yml：

name: Content Pack
description: 新增或完善专业、岗位、能力、任务、诊断题等内容包
title: "[Content] "
labels: ["type: content-pack", "status: ready"]
body:
  - type: dropdown
    id: content_type
    attributes:
      label: 内容类型
      options:
        - 专业 major
        - 岗位 job
        - 能力 ability
        - 学习任务 task
        - 诊断题 diagnostic
        - 学习路径 learning-path
    validations:
      required: true

  - type: input
    id: target
    attributes:
      label: 目标对象
      description: 例如：自动化 / 控制算法工程师 / 控制器设计能力
    validations:
      required: true

  - type: textarea
    id: work
    attributes:
      label: 任务说明
    validations:
      required: true

  - type: textarea
    id: acceptance
    attributes:
      label: 验收标准
    validations:
      required: true

  - type: textarea
    id: sources
    attributes:
      label: 内容来源
      description: 请说明教材、课程大纲、公开资料、教师访谈或 Mock 数据。
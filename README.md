# MajorSkill Agent Lab

本科专业能力发展智能体实验平台。第一期目标是跑通“结构化内容数据 + 前端展示 + Mock 智能体 + GitHub 协作流程”，不接真实数据库、不接真实大模型、不处理真实学生个人数据。

## 快速开始

```bash
npm install
npm run dev
```

常用检查：

```bash
npm run validate-content
npm run typecheck
npm run lint
npm run test
npm run build
npm run check
```

`npm run check` 与 CI 的主检查链路一致，会依次运行 typecheck、内容校验、lint、test 和 build。

## 协作者工具链

### 必需工具

- Node.js 22 或更新版本：运行 Next.js、TypeScript 和内容校验脚本。
- npm：安装依赖并运行项目脚本。
- Git：分支、提交、PR 协作基础。
- GitHub CLI `gh`：创建 PR、查看 CI、批量维护 issue 和 labels。

验证：

```bash
node --version
npm --version
git --version
gh --version
gh auth status
```

### 推荐工具

- `rtk`：本机常用 shell 命令代理。项目维护者默认用 `rtk <command>` 执行命令，以减少终端输出噪声。
- `code-review-graph` / CRG：代码结构图谱工具。仓库提供 `scripts/dev/install-crg-hooks.sh`，用于安装本机 Git hooks，让提交、切换分支、merge 后自动刷新图谱。
- `claude-mem`：本机长期记忆注入工具。若 `AGENTS.md` 末尾出现 `<claude-mem-context>`，这是本地注入上下文，不是业务文档内容。
- Superpowers skills：代理工作流技能集合，常用于计划、执行、验证和代码审查。
- OpenSpec：规格驱动开发辅助工具。本仓库包含 OpenSpec 初始化产物，协作者可用它管理后续变更提案。

推荐验证：

```bash
rtk --version
code-review-graph --version
code-review-graph status --repo .
openspec --version
scripts/dev/install-crg-hooks.sh --check
```

这些工具不是学生内容贡献的硬性门槛。只提交内容包的协作者至少需要 Node.js、npm、Git 和 GitHub 账号；负责框架、CI、Agent 或审查流程的协作者建议补齐全部工具链。

## 项目结构

- `content/`：专业、岗位、能力、任务、诊断、学习路径和贡献者数据。
- `src/schemas/`：Zod schema。
- `src/lib/content/`：本地内容加载器。
- `src/lib/agent/`：Mock Agent。
- `src/app/`：Next.js App Router 页面和 API。
- `docs/`：项目文档与长期记忆。
- `.github/`：issue、PR 和 CI 配置。

## 协作流程

1. 从 `integration` 拉取最新代码。
2. 创建 `feature/issue-编号-简短名称` 分支。
3. 修改内容包、页面、脚本或文档。
4. 本地运行检查。
5. 提交 PR 到 `integration`。
6. 根据 review 修改。
7. 合并后在 `content/contributors/contributors.json` 中登记贡献。

### 提交前检查

所有 PR 提交前应运行：

```bash
npm run check
```

该命令覆盖 CI 的完整门禁：`typecheck`、`validate-content`、`lint`、`test`、`build`。如果本机使用 `rtk`，对应命令是：

```bash
rtk npm run check
```

调试阶段可以按贡献类型先跑更小范围的命令：

- 内容包 PR：先运行 `npm run validate-content`，再运行 `npm run test`。
- UI、Agent 或代码 PR：运行 `npm run typecheck`、`npm run lint`、`npm run test` 和 `npm run build`。
- 文档 PR：至少运行 `npm run lint`；如果改动影响脚本、配置或示例数据，仍需运行 `npm run check`。

不要只运行 PR 模板中的部分命令后就提交。CI 会执行完整检查，尤其包括 `npm run test`。

## 数据原则

- 所有内容包必须包含 `sourceRefs`。
- Mock 数据必须明确标注 `type: "mock"`。
- 不写真实学生个人数据。
- 不把当前课程的具体习题写入内容库。
- 不把模拟数据伪装成真实来源。

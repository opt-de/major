## 1. 专业元数据

- [x] 1.1 创建 `content/majors/software-engineering/` 目录结构
- [x] 1.2 编写 `major.json`（id、name、category、description、targetStudents、relatedJobs、coreCourses、sourceRefs）

## 2. 岗位定义

- [x] 2.1 创建 `jobs/backend-developer.json`（后端开发工程师，含 workScenarios、typicalTasks、abilityIds）

## 3. 能力节点

- [x] 3.1 创建 `abilities/java-programming.json`（Java 编程，basic 层级）
- [x] 3.2 创建 `abilities/database-design.json`（数据库设计，basic 层级）
- [x] 3.3 创建 `abilities/system-design.json`（系统设计，intermediate 层级）
- [x] 3.4 创建 `abilities/engineering-collaboration.json`（工程协作，intermediate 层级）

## 4. 学习任务

- [x] 4.1 创建 `tasks/api-design-task.json`（API 设计任务，含 rubric 评价标准）

## 5. 诊断题

- [x] 5.1 创建 `diagnostics/backend-basics.json`（后端基础诊断，含至少 4 题，覆盖 single-choice 和 true-false 类型）

## 6. 学习路径与资源

- [x] 6.1 创建 `resources/resources.json`（资源条目）
- [x] 6.2 创建 `learning-paths/backend-beginner.json`（后端入门学习路径）

## 7. 验证

- [x] 7.1 运行 `npm run validate-content` 校验所有 JSON 文件
- [x] 7.2 运行 `npm run test` 确保测试通过
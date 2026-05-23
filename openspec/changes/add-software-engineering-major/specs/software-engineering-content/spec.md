## ADDED Requirements

### Requirement: 软件工程专业元数据
软件工程专业内容包 SHALL 包含符合 majorSchema 的专业元数据文件。

#### Scenario: 专业元数据完整
- **WHEN** 系统加载 `major.json`
- **THEN** 它 SHALL 包含 id、name、category、description、targetStudents、relatedJobs、coreCourses 和 sourceRefs 字段

#### Scenario: 所有数据为 Mock 数据
- **WHEN** 验证 sourceRefs
- **THEN** 每个 sourceRef 的 type SHALL 为 "mock"，并附有 title 和 note 说明

### Requirement: 后端开发工程师岗位
软件工程专业 SHALL 包含至少一个岗位定义，符合 jobRoleSchema。

#### Scenario: 岗位定义完整
- **WHEN** 系统加载岗位 JSON 文件
- **THEN** 它 SHALL 包含 id、majorId、name、description、workScenarios、typicalTasks、abilityIds 和 sourceRefs

#### Scenario: 岗位关联专业
- **WHEN** 验证岗位的 majorId
- **THEN** 它 SHALL 等于 "software-engineering"

### Requirement: 能力节点
软件工程专业 SHALL 包含至少 4 个能力节点，每个符合 abilitySchema。

#### Scenario: 能力节点完整
- **WHEN** 系统加载能力 JSON 文件
- **THEN** 它们 SHALL 包含 id、majorId、jobId、name、level、description、knowledgePoints、skillPoints、relatedCourses 和 evidenceExamples

#### Scenario: 能力层级覆盖
- **WHEN** 验证能力节点的 level 字段
- **THEN** level SHALL 为 "basic"、"intermediate" 或 "advanced" 之一，且至少覆盖两个不同层级

### Requirement: 学习任务
软件工程专业 SHALL 包含至少一个学习任务，符合 learningTaskSchema。

#### Scenario: 学习任务完整
- **WHEN** 系统加载任务 JSON 文件
- **THEN** 它 SHALL 包含 id、majorId、jobId、abilityIds、title、scenario、objectives、steps、deliverables、rubric、estimatedTime 和 sourceRefs

#### Scenario: 任务关联能力节点
- **WHEN** 验证任务的 abilityIds
- **THEN** 每个 abilityId SHALL 对应已定义的能力节点 ID

### Requirement: 诊断题
软件工程专业 SHALL 包含至少一套诊断题，符合 diagnosticSchema。

#### Scenario: 诊断题完整
- **WHEN** 系统加载诊断 JSON 文件
- **THEN** 它 SHALL 包含 id、majorId、jobId、title、questions 和 scoringRules

#### Scenario: 问题类型支持
- **WHEN** 验证每道题的 type 字段
- **THEN** type SHALL 为 "single-choice" 或 "true-false"，且每道题至少包含 2 个选项

### Requirement: 学习路径
软件工程专业 SHALL 包含至少一条学习路径，符合 learningPathSchema。

#### Scenario: 学习路径完整
- **WHEN** 系统加载学习路径 JSON 文件
- **THEN** 它 SHALL 包含 id、majorId、jobId、title、targetLevel 和至少一个 nodes 节点
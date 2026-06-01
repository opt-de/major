## MODIFIED Requirements

### Requirement: 控制系统建模能力节点
系统 SHALL 提供控制系统建模能力节点（id: `system-modeling`），level 为 basic，作为 control-algorithm-engineer 岗位的入门基础能力，覆盖将工程对象抽象为可分析、可仿真的数学模型的核心知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** system-modeling.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整知识点
- **WHEN** 读取 system-modeling.json
- **THEN** 文件包含 ≥5 个 knowledgePoints，覆盖经典控制理论（传递函数、阶跃响应、惯性环节）和现代控制基础（状态空间、系统辨识）

#### Scenario: 能力节点包含完整技能点
- **WHEN** 读取 system-modeling.json
- **THEN** 文件包含 ≥5 个 skillPoints，覆盖建模全流程（识别变量、选择模型结构、建立传递函数、估计参数、说明适用边界）

#### Scenario: 能力节点包含完整支撑信息
- **WHEN** 读取 system-modeling.json
- **THEN** 文件包含 ≥3 个 relatedCourses、≥2 个 prerequisites、≥3 个 evidenceExamples、≥2 个 sourceRefs

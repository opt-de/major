## MODIFIED Requirements

### Requirement: 仿真验证能力节点
系统 SHALL 提供仿真验证能力节点（id: `simulation-validation`），level 为 intermediate，作为 control-algorithm-engineer 岗位的核心能力，覆盖通过仿真工具验证控制方案性能、鲁棒性和稳定性的知识点和技能点。

#### Scenario: 能力节点通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** simulation-validation.json 通过 Zod schema 校验，majorId 和 jobId 指向存在的实体

#### Scenario: 能力节点包含完整知识点
- **WHEN** 读取 simulation-validation.json
- **THEN** 文件包含 ≥5 个 knowledgePoints，覆盖时域分析（阶跃响应、性能指标）、频域分析（频域特性）、参数分析（参数扫描、敏感性分析）和建模方法

#### Scenario: 能力节点包含完整技能点
- **WHEN** 读取 simulation-validation.json
- **THEN** 文件包含 ≥5 个 skillPoints，覆盖仿真验证全流程（搭建模型、配置参数、运行仿真、记录结果、分析指标、解释异常、比较方案、验证鲁棒性）

#### Scenario: 能力节点包含完整支撑信息
- **WHEN** 读取 simulation-validation.json
- **THEN** 文件包含 description 说明仿真验证在岗位中的作用、≥3 个 relatedCourses、≥2 个 prerequisites、≥3 个 evidenceExamples、≥1 个 sourceRefs
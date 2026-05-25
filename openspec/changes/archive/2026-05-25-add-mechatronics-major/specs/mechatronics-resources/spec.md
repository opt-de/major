## ADDED Requirements

### Requirement: 机械电子工程专业学习资源
系统 SHALL 提供机械电子工程专业的学习资源占位文件，覆盖课程、工具和实验资源类型。

#### Scenario: 资源文件通过校验
- **WHEN** 运行 `npm run validate-content`
- **THEN** mechatronics 专业 resources 目录下所有 JSON 文件通过 Zod schema 校验

#### Scenario: 资源类型覆盖
- **WHEN** 读取 mechatronics 专业 resources 目录
- **THEN** 至少包含 course 和 tool 类型的资源条目，每个条目有 id、title、type、description 和 sourceRefs

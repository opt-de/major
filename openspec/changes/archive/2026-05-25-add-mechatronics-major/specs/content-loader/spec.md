## MODIFIED Requirements

### Requirement: 多专业内容加载
`loadContent()` SHALL 扫描 `content/majors/` 下所有包含 `major.json` 的子目录，并为每个专业加载其 jobs、abilities、tasks、diagnostics、learning-paths 和 resources 子目录内容。

#### Scenario: 加载自动化专业
- **WHEN** 运行 `loadContent()`
- **THEN** 返回的 `ContentIndex.majors` 包含 `automation` 专业及其所有子内容

#### Scenario: 加载机械电子工程专业
- **WHEN** 运行 `loadContent()`
- **THEN** 返回的 `ContentIndex.majors` 同时包含 `automation` 和 `mechatronics` 两个专业

#### Scenario: 新专业自动发现
- **WHEN** 在 `content/majors/` 下新增一个包含 `major.json` 的子目录
- **THEN** `loadContent()` 无需代码修改即可加载该专业内容

#### Scenario: 多专业内容聚合
- **WHEN** 运行 `npm run validate-content`
- **THEN** 所有专业的内容均被加载，ID 引用校验覆盖所有专业范围

### Requirement: 单元测试覆盖多专业场景
测试文件 `load-content.test.ts` SHALL 验证至少两个专业（automation + mechatronics）的内容均被正确加载。

#### Scenario: 测试验证多专业存在
- **WHEN** 运行 `npm run test`
- **THEN** 测试断言 `majors` 数组长度 ≥2，且同时包含 `automation` 和 `mechatronics`

#### Scenario: 测试验证新专业实体查找
- **WHEN** 运行 `npm run test`
- **THEN** 测试可通过 `findMajor('mechatronics')`、`findJob('mechatronics-system-engineer')` 查找到新专业内容

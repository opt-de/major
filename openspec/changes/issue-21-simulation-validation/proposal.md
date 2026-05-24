## Why

Enhance the **仿真验证能力** (simulation validation ability) for the *Control Algorithm Engineer* role to provide clearer guidance, richer knowledge points, and concrete deliverable examples. This improves learner outcomes and ensures the content passes the project's validation checks.

## What Changes

- Update `content/majors/automation/abilities/simulation-validation.json` with expanded description, additional knowledge points, skill points, and example evidence.
- Adjust UI references in `src/app/agent/page.tsx` and related job definitions to reflect the enhanced ability.
- Add documentation snippets in `docs/ProjectProposal.md` and any relevant markdown files to describe the new capability details.
- Include content‑validation checks in the CI pipeline (if applicable) to verify the new fields.

## Capabilities

### New Capabilities
- *none*

### Modified Capabilities
- `simulation-validation`: Extend the ability definition with more detailed knowledge points, skill points, and sample deliverables.

## Impact

- **Code files**: `content/majors/automation/abilities/simulation-validation.json`, `src/app/agent/page.tsx`, `content/majors/automation/jobs/control-algorithm-engineer.json`, `docs/ProjectProposal.md`.
- **Documentation**: Updated markdown files reflecting the enhanced ability.
- **Risk**: Low – changes are limited to JSON content and UI display strings; no functional logic is altered.
- **Tests**: Existing content validation tests should still pass; if new fields are added, they must be accounted for in the validation schema.

## Context

The project currently defines a "仿真验证能力" (simulation validation ability) for the Control Algorithm Engineer role, but the definition lacks sufficient detail, knowledge points, skill points, and concrete deliverable examples required by issue #21.

## Goals / Non-Goals

**Goals:**
- Expand the ability definition with richer description, additional knowledge and skill points, and example deliverables.
- Ensure UI and job specifications reflect the enhanced ability.
- Update documentation to describe the new capability details.

**Non-Goals:**
- Introduce new functional code paths or runtime logic; the change is limited to data and documentation.

## Decisions

- Update `content/majors/automation/abilities/simulation-validation.json` directly to include the new fields.
- No structural code changes are required; UI components will render the updated JSON automatically.
- Documentation updates will be limited to existing markdown files.

## Risks / Trade-offs

- **Risk:** Missing updates in other parts of the codebase that reference the ability may lead to stale UI displays. *Mitigation:* Search for any additional references to `simulation-validation` and update them.
- **Risk:** Content validation tests may need to be adjusted for the new fields. *Mitigation:* Verify test suite passes after changes.

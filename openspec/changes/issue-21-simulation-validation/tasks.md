## 1. Update ability definition

- [x] 1.1 Modify `content/majors/automation/abilities/simulation-validation.json` to add new description, knowledgePoints, skillPoints, and evidenceExamples as defined in the spec.
- [x] 1.2 Ensure JSON syntax is valid.

## 2. Update UI and job references

- [x] 2.1 Verify `src/app/agent/page.tsx` reflects the updated ability (no code change needed unless display strings are hard‑coded).
- [x] 2.2 Update `content/majors/automation/jobs/control-algorithm-engineer.json` if it lists the ability IDs.

## 3. Update documentation

- [x] 3.1 Add the expanded ability description to `docs/ProjectProposal.md` or other relevant markdown files.
- [x] 3.2 Ensure any generated docs (e.g., ability overview pages) reflect the new fields.

## 4. Validation

- [x] 4.1 Run the project's content validation script (e.g., `npm run validate-content`).
- [x] 4.2 Fix any validation failures caused by the new fields.

## 5. Commit & PR

- [ ] 5.1 Stage the modified files.
- [ ] 5.2 Commit with a clear message referencing Issue #21.
- [ ] 5.3 Push a branch `feature/issue-21-simulation-validation`.
- [ ] 5.4 Open a PR targeting `integration` and link Issue #21.

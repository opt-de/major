import { loadContent } from '@/lib/content/load-content';
import type { DiagnosticResult, GeneratedTaskCard, LearningPathRecommendation } from './types';

export function generateTaskCard(input: {
  majorId: string;
  jobId: string;
  abilityIds: string[];
  learnerGoal: string;
}): GeneratedTaskCard {
  const content = loadContent();
  const job = content.jobs.find((item) => item.id === input.jobId);
  const abilities = content.abilities.filter((item) => input.abilityIds.includes(item.id));
  const template = content.tasks[0];

  if (!job || abilities.length === 0 || !template) {
    throw new Error('insufficient content for task generation');
  }

  const abilityNames = abilities.map((ability) => ability.name).join('、');

  return {
    title: `${input.learnerGoal || job.name}：${abilityNames}任务卡`,
    scenario: template.scenario,
    objectives: [
      `围绕 ${job.name} 的真实工作方式组织任务`,
      ...abilities.map((ability) => `训练${ability.name}`),
    ],
    steps: template.steps,
    deliverables: template.deliverables,
    rubric: template.rubric,
    aiGenerated: true,
    sourceRefs: [
      ...job.sourceRefs,
      ...abilities.flatMap((ability) => ability.sourceRefs),
      ...template.sourceRefs,
    ],
  };
}

export function diagnose(input: {
  diagnosticId: string;
  answers: Record<string, string>;
}): DiagnosticResult {
  const diagnostic = loadContent().diagnostics.find((item) => item.id === input.diagnosticId);
  if (!diagnostic) {
    throw new Error(`diagnostic not found: ${input.diagnosticId}`);
  }

  const abilityScores = new Map<string, number>();
  let score = 0;

  for (const question of diagnostic.questions) {
    const isCorrect = input.answers[question.id] === question.answer;
    if (isCorrect) {
      score += 1;
      abilityScores.set(question.abilityId, (abilityScores.get(question.abilityId) ?? 0) + 1);
    }
  }

  const weakAbilityIds = diagnostic.scoringRules
    .filter((rule) => (abilityScores.get(rule.abilityId) ?? 0) < rule.weakBelow)
    .map((rule) => rule.abilityId);

  const feedback = diagnostic.scoringRules
    .filter((rule) => weakAbilityIds.includes(rule.abilityId))
    .map((rule) => rule.feedback);

  return {
    score,
    weakAbilityIds,
    feedback,
  };
}

export function recommendPath(input: {
  majorId: string;
  jobId: string;
  weakAbilityIds: string[];
  targetLevel: string;
}): LearningPathRecommendation {
  const content = loadContent();
  const path = content.learningPaths.find(
    (item) => item.majorId === input.majorId && item.jobId === input.jobId,
  );

  if (!path) {
    throw new Error('learning path not found');
  }

  const matchedNodes = path.nodes.filter((node) =>
    node.abilityIds.some((abilityId) => input.weakAbilityIds.includes(abilityId)),
  );
  const nextNodes = matchedNodes.length > 0 ? matchedNodes : path.nodes.slice(0, 2);
  const resourceIds = new Set(nextNodes.flatMap((node) => node.resourceIds));

  return {
    recommendedPathId: path.id,
    reason: input.weakAbilityIds.length > 0
      ? '根据诊断中的薄弱能力项优先推荐对应学习节点。'
      : '未发现明确薄弱项，推荐从入门路径开始形成完整闭环。',
    nextSteps: nextNodes.map((node) => node.title),
    resources: content.resources.filter((resource) => resourceIds.has(resource.id)),
  };
}

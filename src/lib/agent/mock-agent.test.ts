import { describe, expect, it } from 'vitest';
import { diagnose, generateTaskCard, recommendPath } from './mock-agent';
import { loadContent } from '@/lib/content/load-content';

describe('content loading', () => {
  it('loads both automation and software-engineering majors', () => {
    const content = loadContent();
    const majorIds = content.majors.map((m) => m.id);
    expect(majorIds).toContain('automation');
    expect(majorIds).toContain('software-engineering');
  });

  it('loads software-engineering jobs, abilities, tasks, diagnostics', () => {
    const content = loadContent();
    expect(content.jobs.find((j) => j.majorId === 'software-engineering')).toBeDefined();
    expect(content.abilities.filter((a) => a.majorId === 'software-engineering').length).toBeGreaterThanOrEqual(4);
    expect(content.tasks.find((t) => t.majorId === 'software-engineering')).toBeDefined();
    expect(content.diagnostics.find((d) => d.majorId === 'software-engineering')).toBeDefined();
    expect(content.learningPaths.find((p) => p.majorId === 'software-engineering')).toBeDefined();
  });
});

describe('mock agent', () => {
  it('generates a sourced task card from local content', () => {
    const result = generateTaskCard({
      majorId: 'automation',
      jobId: 'control-algorithm-engineer',
      abilityIds: ['controller-design'],
      learnerGoal: '温控闭环控制入门',
    });

    expect(result.aiGenerated).toBe(true);
    expect(result.title).toContain('温控闭环控制入门');
    expect(result.sourceRefs.length).toBeGreaterThan(0);
  });

  it('scores diagnostic answers and reports weak abilities', () => {
    const result = diagnose({
      diagnosticId: 'control-algorithm-basic',
      answers: {
        q1: 'c',
        q2: 'false',
        q3: 'c',
        q4: 'a',
        q5: 'true',
        q6: 'a',
        q7: 'false',
        q8: 'b',
        q9: 'a',
        q10: 'false',
      },
    });

    expect(result.score).toBe(3);
    expect(result.weakAbilityIds).toContain('system-modeling');
  });

  it('recommends a path and resources from weak abilities', () => {
    const result = recommendPath({
      majorId: 'automation',
      jobId: 'control-algorithm-engineer',
      weakAbilityIds: ['controller-design'],
      targetLevel: 'starter',
    });

    expect(result.recommendedPathId).toBe('control-algorithm-beginner');
    expect(result.nextSteps).toContain('PID 设计与仿真');
    expect(result.resources.length).toBeGreaterThan(0);
  });

  it('generates task card for software-engineering backend-developer', () => {
    const result = generateTaskCard({
      majorId: 'software-engineering',
      jobId: 'backend-developer',
      abilityIds: ['java-programming', 'system-design'],
      learnerGoal: 'RESTful API 设计入门',
    });

    expect(result.aiGenerated).toBe(true);
    expect(result.title).toContain('RESTful API 设计入门');
    expect(result.sourceRefs.length).toBeGreaterThan(0);
  });

  it('scores diagnostic answers for software-engineering backend-basics', () => {
    const result = diagnose({
      diagnosticId: 'backend-basics',
      answers: { q1: 'b', q2: 'b', q3: 'c', q4: 'c', q5: 'true' },
    });

    expect(result.score).toBe(5);
    expect(result.weakAbilityIds).toHaveLength(0);
  });

  it('recommends a learning path for software-engineering', () => {
    const result = recommendPath({
      majorId: 'software-engineering',
      jobId: 'backend-developer',
      weakAbilityIds: ['java-programming'],
      targetLevel: 'starter',
    });

    expect(result.recommendedPathId).toBe('backend-beginner');
    expect(result.nextSteps.length).toBeGreaterThan(0);
    expect(result.resources.length).toBeGreaterThan(0);
  });
});

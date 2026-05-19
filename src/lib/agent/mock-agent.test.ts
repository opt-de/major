import { describe, expect, it } from 'vitest';
import { diagnose, generateTaskCard, recommendPath } from './mock-agent';

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
        q1: 'b',
        q2: 'true',
        q3: 'false',
        q4: 'a',
        q5: 'false',
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
});

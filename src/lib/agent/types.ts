import type { LearningTask, Resource, SourceRef } from '@/schemas';

export type GeneratedTaskCard = Pick<
  LearningTask,
  'title' | 'scenario' | 'objectives' | 'steps' | 'deliverables' | 'rubric'
> & {
  aiGenerated: true;
  sourceRefs: SourceRef[];
};

export type DiagnosticResult = {
  score: number;
  weakAbilityIds: string[];
  feedback: string[];
};

export type LearningPathRecommendation = {
  recommendedPathId: string;
  reason: string;
  nextSteps: string[];
  resources: Resource[];
};

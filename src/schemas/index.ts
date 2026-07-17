import { z } from 'zod';

export const sourceRefSchema = z.object({
  type: z.enum([
    'course-outline',
    'textbook',
    'standard',
    'job-posting',
    'teacher-interview',
    'public-resource',
    'mock',
  ]),
  title: z.string().min(1),
  authorOrOrg: z.string().min(1).optional(),
  year: z.string().min(1).optional(),
  url: z.string().url().optional(),
  page: z.string().min(1).optional(),
  note: z.string().min(1).optional(),
});

export const rubricItemSchema = z.object({
  criterion: z.string().min(1),
  description: z.string().min(1),
  levels: z.array(z.string().min(1)).min(1),
});

export const majorSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  targetStudents: z.array(z.string().min(1)).min(1),
  relatedJobs: z.array(z.string().min(1)).min(1),
  coreCourses: z.array(z.string().min(1)).min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export const jobRoleSchema = z.object({
  id: z.string().min(1),
  majorId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  workScenarios: z.array(z.string().min(1)).min(1),
  typicalTasks: z.array(z.string().min(1)).min(1),
  abilityIds: z.array(z.string().min(1)).min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export const abilitySchema = z.object({
  id: z.string().min(1),
  majorId: z.string().min(1),
  jobId: z.string().min(1),
  name: z.string().min(1),
  level: z.enum(['basic', 'intermediate', 'advanced']),
  description: z.string().min(1),
  knowledgePoints: z.array(z.string().min(1)).min(1),
  skillPoints: z.array(z.string().min(1)).min(1),
  relatedCourses: z.array(z.string().min(1)).min(1),
  prerequisites: z.array(z.string().min(1)),
  evidenceExamples: z.array(z.string().min(1)).min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export const learningTaskSchema = z.object({
  id: z.string().min(1),
  majorId: z.string().min(1),
  jobId: z.string().min(1),
  abilityIds: z.array(z.string().min(1)).min(1),
  title: z.string().min(1),
  scenario: z.string().min(1),
  objectives: z.array(z.string().min(1)).min(1),
  steps: z.array(z.string().min(1)).min(1),
  deliverables: z.array(z.string().min(1)).min(1),
  rubric: z.array(rubricItemSchema).min(1),
  safetyOrEthicsNotes: z.array(z.string().min(1)),
  estimatedTime: z.string().min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export const diagnosticQuestionSchema = z.object({
  id: z.string().min(1),
  abilityId: z.string().min(1),
  prompt: z.string().min(1),
  type: z.enum(['single-choice', 'true-false']),
  options: z.array(z.object({
    id: z.string().min(1),
    text: z.string().min(1),
  })).min(2),
  answer: z.string().min(1),
  explanation: z.string().min(1),
});

export const scoringRuleSchema = z.object({
  abilityId: z.string().min(1),
  weakBelow: z.number().min(0),
  feedback: z.string().min(1),
});

export const diagnosticSchema = z.object({
  id: z.string().min(1),
  majorId: z.string().min(1),
  jobId: z.string().min(1),
  title: z.string().min(1),
  questions: z.array(diagnosticQuestionSchema).min(1),
  scoringRules: z.array(scoringRuleSchema).min(1),
});

export const resourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: z.enum(['course', 'book', 'tool', 'article', 'video', 'project']),
  url: z.string().url().optional(),
  description: z.string().min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export const learningPathNodeSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  abilityIds: z.array(z.string().min(1)),
  resourceIds: z.array(z.string().min(1)),
  expectedOutcome: z.string().min(1),
});

export const learningPathSchema = z.object({
  id: z.string().min(1),
  majorId: z.string().min(1),
  jobId: z.string().min(1),
  title: z.string().min(1),
  targetLevel: z.enum(['starter', 'project-ready', 'job-ready']),
  nodes: z.array(learningPathNodeSchema).min(1),
});

export const contributorSchema = z.object({
  id: z.string().min(1),
  displayName: z.string().min(1),
  githubId: z.string().min(1).optional(),
  contributionTypes: z.array(z.string().min(1)).min(1),
  relatedIssues: z.array(z.string().min(1)),
  relatedPullRequests: z.array(z.string().min(1)),
  summary: z.string().min(1),
  mergedAt: z.string().min(1).optional(),
});

export const contributorsFileSchema = z.object({
  contributors: z.array(contributorSchema),
});

export type SourceRef = z.infer<typeof sourceRefSchema>;
export type Major = z.infer<typeof majorSchema>;
export type JobRole = z.infer<typeof jobRoleSchema>;
export type Ability = z.infer<typeof abilitySchema>;
export type LearningTask = z.infer<typeof learningTaskSchema>;
export type Diagnostic = z.infer<typeof diagnosticSchema>;
export type LearningPath = z.infer<typeof learningPathSchema>;
export type Resource = z.infer<typeof resourceSchema>;
export type Contributor = z.infer<typeof contributorSchema>;

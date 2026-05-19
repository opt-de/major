import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import {
  abilitySchema,
  contributorsFileSchema,
  diagnosticSchema,
  jobRoleSchema,
  learningPathSchema,
  learningTaskSchema,
  majorSchema,
  resourceSchema,
  type Ability,
  type Contributor,
  type Diagnostic,
  type JobRole,
  type LearningPath,
  type LearningTask,
  type Major,
  type Resource,
} from '@/schemas';

const contentRoot = path.join(process.cwd(), 'content');

function readJson<T>(filePath: string, schema: { parse: (value: unknown) => T }): T {
  const raw = JSON.parse(readFileSync(filePath, 'utf8')) as unknown;
  return schema.parse(raw);
}

function readJsonDir<T>(dirPath: string, schema: { parse: (value: unknown) => T }): T[] {
  return readdirSync(dirPath)
    .filter((filename) => filename.endsWith('.json'))
    .sort()
    .map((filename) => readJson(path.join(dirPath, filename), schema));
}

export type ContentIndex = {
  majors: Major[];
  jobs: JobRole[];
  abilities: Ability[];
  tasks: LearningTask[];
  diagnostics: Diagnostic[];
  learningPaths: LearningPath[];
  resources: Resource[];
  contributors: Contributor[];
};

export function loadContent(): ContentIndex {
  const automationRoot = path.join(contentRoot, 'majors', 'automation');
  const contributors = readJson(
    path.join(contentRoot, 'contributors', 'contributors.json'),
    contributorsFileSchema,
  ).contributors;

  return {
    majors: [readJson(path.join(automationRoot, 'major.json'), majorSchema)],
    jobs: readJsonDir(path.join(automationRoot, 'jobs'), jobRoleSchema),
    abilities: readJsonDir(path.join(automationRoot, 'abilities'), abilitySchema),
    tasks: readJsonDir(path.join(automationRoot, 'tasks'), learningTaskSchema),
    diagnostics: readJsonDir(path.join(automationRoot, 'diagnostics'), diagnosticSchema),
    learningPaths: readJsonDir(path.join(automationRoot, 'learning-paths'), learningPathSchema),
    resources: readJsonDir(path.join(automationRoot, 'resources'), resourceSchema),
    contributors,
  };
}

export function findMajor(majorId: string): Major | undefined {
  return loadContent().majors.find((major) => major.id === majorId);
}

export function findJob(jobId: string): JobRole | undefined {
  return loadContent().jobs.find((job) => job.id === jobId);
}

export function findAbility(abilityId: string): Ability | undefined {
  return loadContent().abilities.find((ability) => ability.id === abilityId);
}

export function findTask(taskId: string): LearningTask | undefined {
  return loadContent().tasks.find((task) => task.id === taskId);
}

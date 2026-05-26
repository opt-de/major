import { existsSync, readFileSync, readdirSync } from 'node:fs';
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

function discoverMajorDirs(): string[] {
  const majorsRoot = path.join(contentRoot, 'majors');
  return readdirSync(majorsRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => existsSync(path.join(majorsRoot, name, 'major.json')))
    .sort();
}

function loadMajorContent(majorId: string): {
  major: Major;
  jobs: JobRole[];
  abilities: Ability[];
  tasks: LearningTask[];
  diagnostics: Diagnostic[];
  learningPaths: LearningPath[];
  resources: Resource[];
} {
  const majorRoot = path.join(contentRoot, 'majors', majorId);
  return {
    major: readJson(path.join(majorRoot, 'major.json'), majorSchema),
    jobs: readJsonDir(path.join(majorRoot, 'jobs'), jobRoleSchema),
    abilities: readJsonDir(path.join(majorRoot, 'abilities'), abilitySchema),
    tasks: readJsonDir(path.join(majorRoot, 'tasks'), learningTaskSchema),
    diagnostics: readJsonDir(path.join(majorRoot, 'diagnostics'), diagnosticSchema),
    learningPaths: readJsonDir(path.join(majorRoot, 'learning-paths'), learningPathSchema),
    resources: readJsonDir(path.join(majorRoot, 'resources'), resourceSchema),
  };
}

export function loadContent(): ContentIndex {
  const majorIds = discoverMajorDirs();
  const allMajors: Major[] = [];
  const allJobs: JobRole[] = [];
  const allAbilities: Ability[] = [];
  const allTasks: LearningTask[] = [];
  const allDiagnostics: Diagnostic[] = [];
  const allLearningPaths: LearningPath[] = [];
  const allResources: Resource[] = [];

  for (const majorId of majorIds) {
    const content = loadMajorContent(majorId);
    allMajors.push(content.major);
    allJobs.push(...content.jobs);
    allAbilities.push(...content.abilities);
    allTasks.push(...content.tasks);
    allDiagnostics.push(...content.diagnostics);
    allLearningPaths.push(...content.learningPaths);
    allResources.push(...content.resources);
  }

  const contributors = readJson(
    path.join(contentRoot, 'contributors', 'contributors.json'),
    contributorsFileSchema,
  ).contributors;

  return {
    majors: allMajors,
    jobs: allJobs,
    abilities: allAbilities,
    tasks: allTasks,
    diagnostics: allDiagnostics,
    learningPaths: allLearningPaths,
    resources: allResources,
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

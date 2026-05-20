import { existsSync } from 'node:fs';
import path from 'node:path';
import { ZodError } from 'zod';
import { loadContent } from '../src/lib/content/load-content';

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function assertIncludes(values: string[], expected: string, context: string): void {
  if (!values.includes(expected)) {
    fail(`${context}: missing referenced id "${expected}"`);
  }
}

try {
  const contentRoot = path.join(process.cwd(), 'content');
  if (!existsSync(contentRoot)) {
    fail('content directory does not exist');
  }

  const content = loadContent();
  const majorIds = content.majors.map((major) => major.id);
  const jobIds = content.jobs.map((job) => job.id);
  const abilityIds = content.abilities.map((ability) => ability.id);
  const resourceIds = content.resources.map((resource) => resource.id);

  for (const major of content.majors) {
    for (const jobId of major.relatedJobs) {
      assertIncludes(jobIds, jobId, `major ${major.id}`);
    }
  }

  for (const job of content.jobs) {
    assertIncludes(majorIds, job.majorId, `job ${job.id}`);
    for (const abilityId of job.abilityIds) {
      assertIncludes(abilityIds, abilityId, `job ${job.id}`);
    }
  }

  for (const ability of content.abilities) {
    assertIncludes(majorIds, ability.majorId, `ability ${ability.id}`);
    assertIncludes(jobIds, ability.jobId, `ability ${ability.id}`);
  }

  for (const task of content.tasks) {
    assertIncludes(majorIds, task.majorId, `task ${task.id}`);
    assertIncludes(jobIds, task.jobId, `task ${task.id}`);
    for (const abilityId of task.abilityIds) {
      assertIncludes(abilityIds, abilityId, `task ${task.id}`);
    }
  }

  for (const diagnostic of content.diagnostics) {
    assertIncludes(majorIds, diagnostic.majorId, `diagnostic ${diagnostic.id}`);
    assertIncludes(jobIds, diagnostic.jobId, `diagnostic ${diagnostic.id}`);
    for (const question of diagnostic.questions) {
      assertIncludes(abilityIds, question.abilityId, `diagnostic question ${question.id}`);
    }
  }

  for (const learningPath of content.learningPaths) {
    assertIncludes(majorIds, learningPath.majorId, `learning path ${learningPath.id}`);
    assertIncludes(jobIds, learningPath.jobId, `learning path ${learningPath.id}`);
    for (const node of learningPath.nodes) {
      for (const abilityId of node.abilityIds) {
        assertIncludes(abilityIds, abilityId, `learning path node ${node.id}`);
      }
      for (const resourceId of node.resourceIds) {
        assertIncludes(resourceIds, resourceId, `learning path node ${node.id}`);
      }
    }
  }

  console.log(
    `content validation passed: ${content.majors.length} major, ${content.jobs.length} job, ${content.abilities.length} abilities, ${content.tasks.length} task`,
  );
} catch (error) {
  if (error instanceof ZodError) {
    fail(`content schema validation failed:\n${JSON.stringify(error.issues, null, 2)}`);
  }
  throw error;
}

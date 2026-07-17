import { describe, expect, it } from 'vitest';
import { findAbility, findJob, findMajor, findTask, loadContent } from './load-content';

describe('loadContent', () => {
  it('loads the automation content package', () => {
    const content = loadContent();
    const majorIds = content.majors.map((major) => major.id);
    const jobIds = content.jobs.map((job) => job.id);
    const taskIds = content.tasks.map((task) => task.id);

    expect(content.majors.length).toBeGreaterThanOrEqual(1);
    expect(content.jobs.length).toBeGreaterThanOrEqual(1);
    expect(content.abilities.length).toBeGreaterThanOrEqual(4);
    expect(content.tasks.length).toBeGreaterThanOrEqual(1);

    expect(majorIds).toContain('automation');
    expect(jobIds).toContain('control-algorithm-engineer');
    expect(taskIds).toContain('temperature-control-task');
  });

  it('finds core entities by id', () => {
    expect(findMajor('automation')?.name).toBe('自动化');
    expect(findJob('control-algorithm-engineer')?.name).toBe('控制算法工程师');
    expect(findAbility('controller-design')?.name).toBe('控制器设计能力');
    expect(findTask('temperature-control-task')?.title).toBe('为温控对象设计闭环控制方案');
  });
});

import { describe, expect, it } from 'vitest';
import { findAbility, findJob, findMajor, findTask, loadContent } from './load-content';

describe('loadContent', () => {
  it('loads content from all majors', () => {
    const content = loadContent();
    const majorIds = content.majors.map((major) => major.id);
    const jobIds = content.jobs.map((job) => job.id);
    const taskIds = content.tasks.map((task) => task.id);

    expect(content.majors.length).toBeGreaterThanOrEqual(2);
    expect(content.jobs.length).toBeGreaterThanOrEqual(2);
    expect(content.abilities.length).toBeGreaterThanOrEqual(8);
    expect(content.tasks.length).toBeGreaterThanOrEqual(2);

    expect(majorIds).toContain('automation');
    expect(majorIds).toContain('mechatronics');
    expect(jobIds).toContain('control-algorithm-engineer');
    expect(jobIds).toContain('mechatronics-system-engineer');
    expect(taskIds).toContain('temperature-control-task');
    expect(taskIds).toContain('automated-conveyor-task');
  });

  it('finds core entities by id', () => {
    expect(findMajor('automation')?.name).toBe('自动化');
    expect(findMajor('mechatronics')?.name).toBe('机械电子工程');
    expect(findJob('control-algorithm-engineer')?.name).toBe('控制算法工程师');
    expect(findJob('mechatronics-system-engineer')?.name).toBe('机电系统工程师');
    expect(findAbility('controller-design')?.name).toBe('控制器设计能力');
    expect(findAbility('plc-programming')?.name).toBe('PLC编程与应用能力');
    expect(findTask('temperature-control-task')?.title).toBe('为温控对象设计闭环控制方案');
    expect(findTask('automated-conveyor-task')?.title).toBe('为自动化传送带设计机电控制系统');
  });
});

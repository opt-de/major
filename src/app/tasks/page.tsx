import Link from 'next/link';
import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default function TasksPage() {
  const { tasks } = loadContent();

  return (
    <PageShell title="学习任务" description="当前内容包中的项目式学习任务。">
      <div className="grid gap-5 md:grid-cols-2">
        {tasks.map((task) => (
          <InfoCard key={task.id} title={task.title}>
            <p className="text-sm leading-6 text-stone-700">{task.scenario}</p>
            <p className="mt-3 text-xs text-stone-500">预计耗时：{task.estimatedTime}</p>
            <Link href={`/tasks/${task.id}`} className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
              查看任务详情
            </Link>
          </InfoCard>
        ))}
      </div>
    </PageShell>
  );
}

import { notFound } from 'next/navigation';
import { InfoCard } from '@/components/common/InfoCard';
import { SourceBadge } from '@/components/common/SourceBadge';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const task = loadContent().tasks.find((item) => item.id === taskId);

  if (!task) {
    notFound();
  }

  return (
    <PageShell title={task.title} description={task.scenario}>
      <div className="grid gap-5 md:grid-cols-2">
        <InfoCard title="目标">
          <ul className="space-y-2 text-sm text-stone-700">{task.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
        </InfoCard>
        <InfoCard title="步骤">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-stone-700">{task.steps.map((item) => <li key={item}>{item}</li>)}</ol>
        </InfoCard>
        <InfoCard title="交付物">
          <p className="text-sm text-stone-700">{task.deliverables.join('、')}</p>
        </InfoCard>
        <InfoCard title="来源">
          <div className="flex flex-wrap gap-2">{task.sourceRefs.map((source) => <SourceBadge key={source.title} source={source} />)}</div>
        </InfoCard>
      </div>
    </PageShell>
  );
}

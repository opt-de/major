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
        {task.rubric && task.rubric.length > 0 && (
          <InfoCard title="Rubric">
            {task.rubric.map((r, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-medium text-sm mb-1">{r.criterion}</h4>
                <p className="text-xs text-stone-600 mb-1">{r.description}</p>
                <ul className="list-disc list-inside text-xs text-stone-500">
                  {r.levels.map((lvl, i) => (
                    <li key={i}>{lvl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </InfoCard>
        )}
        {task.safetyOrEthicsNotes && task.safetyOrEthicsNotes.length > 0 && (
          <InfoCard title="Safety / Ethics Notes">
            <ul className="space-y-2 text-sm text-stone-700">
              {task.safetyOrEthicsNotes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </InfoCard>
        )}
      </div>
    </PageShell>
  );
}

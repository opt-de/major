import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const content = loadContent();
  const job = content.jobs.find((item) => item.id === jobId);

  if (!job) {
    notFound();
  }

  const abilities = content.abilities.filter((ability) => job.abilityIds.includes(ability.id));

  return (
    <PageShell title={job.name} description={job.description}>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <InfoCard title="工作场景">
          <ul className="space-y-2 text-sm text-stone-700">
            {job.workScenarios.map((scenario) => <li key={scenario}>{scenario}</li>)}
          </ul>
        </InfoCard>
        <InfoCard title="能力图谱">
          <div className="space-y-3">
            <div className="border border-[var(--line)] bg-white p-3 text-sm font-semibold">{job.name}</div>
            <div className="grid gap-3 md:grid-cols-2">
              {abilities.map((ability) => (
                <Link key={ability.id} href={`/abilities/${ability.id}`} className="border border-[var(--line)] bg-white p-3 hover:border-[var(--accent)]">
                  <div className="text-sm font-semibold text-[var(--accent-strong)]">{ability.name}</div>
                  <div className="mt-2 text-xs text-stone-600">{ability.knowledgePoints.join(' / ')}</div>
                </Link>
              ))}
            </div>
          </div>
        </InfoCard>
      </div>
    </PageShell>
  );
}

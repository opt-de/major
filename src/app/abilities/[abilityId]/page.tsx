import { notFound } from 'next/navigation';
import { InfoCard } from '@/components/common/InfoCard';
import { SourceBadge } from '@/components/common/SourceBadge';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default async function AbilityDetailPage({
  params,
}: {
  params: Promise<{ abilityId: string }>;
}) {
  const { abilityId } = await params;
  const ability = loadContent().abilities.find((item) => item.id === abilityId);

  if (!ability) {
    notFound();
  }

  return (
    <PageShell title={ability.name} description={ability.description}>
      <div className="grid gap-5 md:grid-cols-2">
        <InfoCard title="知识点">
          <p className="text-sm text-stone-700">{ability.knowledgePoints.join('、')}</p>
        </InfoCard>
        <InfoCard title="技能点">
          <p className="text-sm text-stone-700">{ability.skillPoints.join('、')}</p>
        </InfoCard>
        <InfoCard title="支撑课程">
          <InfoCard title="先决条件">
            <p className="text-sm text-stone-700">{ability.prerequisites?.join('、')}</p>
          </InfoCard>
          <InfoCard title="等级">
            <p className="text-sm text-stone-700">{ability.level}</p>
          </InfoCard>
          <p className="text-sm text-stone-700">{ability.relatedCourses.join('、')}</p>
        </InfoCard>
        <InfoCard title="证据样例">
          <p className="text-sm text-stone-700">{ability.evidenceExamples.join('；')}</p>
        </InfoCard>
        <InfoCard title="来源">
          <div className="flex flex-wrap gap-2">
            {ability.sourceRefs.map((source) => <SourceBadge key={source.title} source={source} />)}
          </div>
        </InfoCard>
      </div>
    </PageShell>
  );
}

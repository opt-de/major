import Link from 'next/link';
import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default function MajorsPage() {
  const { majors, abilities } = loadContent();

  return (
    <PageShell title="专业列表" description="当前内容库中的本科专业方向。">
      <div className="grid gap-5 md:grid-cols-2">
        {majors.map((major) => (
          <InfoCard key={major.id} title={major.name}>
            <p className="text-sm leading-6 text-stone-700">{major.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-stone-500">核心课程</dt>
                <dd className="font-semibold">{major.coreCourses.length}</dd>
              </div>
              <div>
                <dt className="text-stone-500">能力节点</dt>
                <dd className="font-semibold">{abilities.filter((ability) => ability.majorId === major.id).length}</dd>
              </div>
            </dl>
            <Link href={`/majors/${major.id}`} className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
              查看专业详情
            </Link>
          </InfoCard>
        ))}
      </div>
    </PageShell>
  );
}

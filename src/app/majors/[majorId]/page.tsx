import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InfoCard } from '@/components/common/InfoCard';
import { SourceBadge } from '@/components/common/SourceBadge';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default async function MajorDetailPage({
  params,
}: {
  params: Promise<{ majorId: string }>;
}) {
  const { majorId } = await params;
  const content = loadContent();
  const major = content.majors.find((item) => item.id === majorId);

  if (!major) {
    notFound();
  }

  const jobs = content.jobs.filter((job) => job.majorId === major.id);

  return (
    <PageShell title={major.name} description={major.description}>
      <div className="grid gap-5 lg:grid-cols-2">
        <InfoCard title="核心课程">
          <ul className="space-y-2 text-sm text-stone-700">
            {major.coreCourses.map((course) => <li key={course}>{course}</li>)}
          </ul>
        </InfoCard>
        <InfoCard title="典型岗位">
          <div className="space-y-3">
            {jobs.map((job) => (
              <Link key={job.id} className="block text-sm font-semibold text-[var(--accent)]" href={`/jobs/${job.id}`}>
                {job.name}
              </Link>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="数据来源">
          <div className="flex flex-wrap gap-2">
            {major.sourceRefs.map((source) => <SourceBadge key={source.title} source={source} />)}
          </div>
        </InfoCard>
      </div>
    </PageShell>
  );
}

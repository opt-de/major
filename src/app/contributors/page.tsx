import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default function ContributorsPage() {
  const { contributors } = loadContent();

  return (
    <PageShell title="贡献者" description="用于记录学生或协作者在 issue 与 PR 中形成的贡献证据。">
      {contributors.length === 0 ? (
        <InfoCard title="暂无登记贡献">
          <p className="text-sm text-stone-700">合并首个学生 PR 后，在 content/contributors/contributors.json 中登记贡献。</p>
        </InfoCard>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {contributors.map((contributor) => (
            <InfoCard key={contributor.id} title={contributor.displayName}>
              <p className="text-sm text-stone-700">{contributor.summary}</p>
            </InfoCard>
          ))}
        </div>
      )}
    </PageShell>
  );
}

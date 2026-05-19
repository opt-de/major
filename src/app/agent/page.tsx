import { InfoCard } from '@/components/common/InfoCard';
import { SourceBadge } from '@/components/common/SourceBadge';
import { PageShell } from '@/components/layout/PageShell';
import { generateTaskCard } from '@/lib/agent/mock-agent';
import { loadContent } from '@/lib/content/load-content';

export default function AgentPage() {
  const content = loadContent();
  const generated = generateTaskCard({
    majorId: 'automation',
    jobId: 'control-algorithm-engineer',
    abilityIds: ['controller-design', 'simulation-validation'],
    learnerGoal: '温控闭环控制入门',
  });

  return (
    <PageShell title="Mock Agent" description="第一期不接真实模型，使用本地内容包和规则生成结构化任务卡。">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <InfoCard title="输入">
          <dl className="space-y-3 text-sm text-stone-700">
            <div><dt className="font-semibold">专业</dt><dd>{content.majors[0].name}</dd></div>
            <div><dt className="font-semibold">岗位</dt><dd>{content.jobs[0].name}</dd></div>
            <div><dt className="font-semibold">能力项</dt><dd>控制器设计能力、仿真验证能力</dd></div>
          </dl>
        </InfoCard>
        <InfoCard title={generated.title}>
          <p className="text-sm leading-6 text-stone-700">{generated.scenario}</p>
          <p className="mt-3 text-xs font-semibold text-[var(--warning)]">AI 生成内容 / Mock 生成内容，仅供学习参考。</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {generated.sourceRefs.map((source) => <SourceBadge key={`${source.type}-${source.title}`} source={source} />)}
          </div>
        </InfoCard>
      </div>
    </PageShell>
  );
}

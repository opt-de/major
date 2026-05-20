import Link from 'next/link';
import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';

export default function HomePage() {
  const content = loadContent();
  const stats = [
    ['专业', content.majors.length],
    ['岗位', content.jobs.length],
    ['能力节点', content.abilities.length],
    ['学习任务', content.tasks.length],
    ['贡献者', content.contributors.length],
  ];

  return (
    <PageShell
      title="本科专业能力发展智能体实验平台"
      description="把典型就业岗位、专业能力要求、课程支撑关系、学习型任务和个性化学习路径连接起来。第一期使用本地内容包与 Mock Agent。"
    >
      <div className="grid gap-4 sm:grid-cols-5">
        {stats.map(([label, value]) => (
          <div key={label} className="border border-[var(--line)] bg-white p-4">
            <div className="text-2xl font-semibold text-[var(--accent-strong)]">{value}</div>
            <div className="text-sm text-stone-600">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <InfoCard title="专业浏览">
          <p className="text-sm text-stone-700">查看当前本科专业内容包、核心课程和岗位入口。</p>
          <Link className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]" href="/majors">
            进入专业列表
          </Link>
        </InfoCard>
        <InfoCard title="岗位能力图谱">
          <p className="text-sm text-stone-700">从控制算法工程师岗位进入能力节点、知识点和证据样例。</p>
          <Link className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]" href="/jobs/control-algorithm-engineer">
            查看岗位能力
          </Link>
        </InfoCard>
        <InfoCard title="学习任务生成">
          <p className="text-sm text-stone-700">使用 Mock Agent 生成结构化任务卡，并标注来源。</p>
          <Link className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]" href="/agent">
            打开 Agent
          </Link>
        </InfoCard>
        <InfoCard title="诊断与路径">
          <p className="text-sm text-stone-700">完成基础诊断，获得薄弱能力项和学习路径建议。</p>
          <Link className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]" href="/diagnostics">
            进入诊断
          </Link>
        </InfoCard>
      </div>
    </PageShell>
  );
}

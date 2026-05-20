import { InfoCard } from '@/components/common/InfoCard';
import { PageShell } from '@/components/layout/PageShell';
import { loadContent } from '@/lib/content/load-content';
import { diagnose, recommendPath } from '@/lib/agent/mock-agent';

export default function DiagnosticsPage() {
  const content = loadContent();
  const diagnostic = content.diagnostics[0];
  const result = diagnose({
    diagnosticId: diagnostic.id,
    answers: Object.fromEntries(diagnostic.questions.map((question) => [question.id, question.options[0].id])),
  });
  const recommendation = recommendPath({
    majorId: diagnostic.majorId,
    jobId: diagnostic.jobId,
    weakAbilityIds: result.weakAbilityIds,
    targetLevel: 'starter',
  });

  return (
    <PageShell title={diagnostic.title} description="第一期使用本地评分规则演示诊断与推荐闭环。">
      <div className="grid gap-5 lg:grid-cols-2">
        <InfoCard title="诊断题">
          <ol className="list-decimal space-y-3 pl-5 text-sm text-stone-700">
            {diagnostic.questions.map((question) => <li key={question.id}>{question.prompt}</li>)}
          </ol>
        </InfoCard>
        <InfoCard title="Mock 诊断结果">
          <p className="text-sm text-stone-700">示例得分：{result.score} / {diagnostic.questions.length}</p>
          <p className="mt-3 text-sm text-stone-700">推荐路径：{recommendation.recommendedPathId}</p>
          <p className="mt-3 text-sm text-stone-700">{recommendation.reason}</p>
        </InfoCard>
      </div>
    </PageShell>
  );
}

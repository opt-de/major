import type { SourceRef } from '@/schemas';

export function SourceBadge({ source }: { source: SourceRef }) {
  return (
    <span className="inline-flex items-center border border-[var(--line)] bg-white px-2 py-1 text-xs text-[var(--accent-strong)]">
      {source.type}: {source.title}
    </span>
  );
}

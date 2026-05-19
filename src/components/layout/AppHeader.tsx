import Link from 'next/link';

const navItems = [
  ['专业', '/majors'],
  ['岗位', '/jobs/control-algorithm-engineer'],
  ['能力', '/abilities/controller-design'],
  ['任务', '/tasks'],
  ['诊断', '/diagnostics'],
  ['Agent', '/agent'],
  ['贡献者', '/contributors'],
];

export function AppHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-semibold tracking-wide text-[var(--accent-strong)]">
          MajorSkill Agent Lab
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[var(--accent)]">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

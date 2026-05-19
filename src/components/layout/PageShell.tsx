import { AppHeader } from './AppHeader';

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <AppHeader />
      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-8 border-l-4 border-[var(--accent)] pl-4">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">{description}</p>
        </div>
        {children}
      </main>
    </div>
  );
}

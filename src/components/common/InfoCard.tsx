export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-[var(--line)] bg-[var(--panel)] p-5">
      <h2 className="mb-3 text-lg font-semibold text-[var(--accent-strong)]">{title}</h2>
      {children}
    </section>
  );
}

type Props = { id: string; label: string; children: React.ReactNode };

/** Content section with a sticky, frosted heading on small screens (the sidebar nav covers desktop). */
export function Section({ id, label, children }: Props) {
  return (
    <section id={id} aria-label={label} className="scroll-mt-20 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/80 px-6 py-4 backdrop-blur lg:sr-only">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em]">{label}</h2>
      </div>
      {children}
    </section>
  );
}

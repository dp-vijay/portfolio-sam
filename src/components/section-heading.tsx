import { Reveal } from "./reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeading({ index, eyebrow, title, description, action }: Props) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="text-muted">{index}</span> — {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-muted text-pretty">{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}

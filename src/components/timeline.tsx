import { experience } from "@/data/site";
import { Reveal } from "./reveal";

export function Timeline() {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-12">
      {experience.map((job, i) => (
        <li key={`${job.company}-${job.period}`} className="relative pb-14 last:pb-0">
          {/* Marker */}
          <span
            aria-hidden="true"
            className="absolute -left-[calc(2rem+5px)] top-1.5 size-[9px] rounded-full bg-accent shadow-[0_0_0_4px_var(--bg),0_0_18px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:-left-[calc(3rem+5px)]"
          />
          <Reveal delay={i * 0.08}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold tracking-tight">
                {job.role}
                <span className="text-muted"> · </span>
                {job.companyUrl ? (
                  <a href={job.companyUrl} className="text-accent hover:underline">
                    {job.company}
                  </a>
                ) : (
                  <span className="text-muted">{job.company}</span>
                )}
              </h3>
              <p className="font-mono text-xs text-muted">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-accent/70" />
                  <span className="text-pretty">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

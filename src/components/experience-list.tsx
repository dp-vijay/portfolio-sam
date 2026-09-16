import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/site";
import { Tag } from "./tag";

export function ExperienceList() {
  return (
    <ol className="group/list space-y-2">
      {experience.map((job) => {
        const Title = job.companyUrl ? "a" : "span";
        return (
          <li
            key={`${job.company}-${job.period}`}
            className="group relative -mx-4 grid gap-2 rounded-xl p-4 transition-all sm:grid-cols-[7.5rem_1fr] sm:gap-6 lg:hover:bg-surface lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
          >
            <p className="pt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{job.period}</p>
            <div>
              <h3 className="font-medium leading-snug">
                <Title
                  {...(job.companyUrl ? { href: job.companyUrl, target: "_blank", rel: "noopener" } : {})}
                  className="inline-flex items-baseline gap-1 transition-colors group-hover:text-accent"
                >
                  {/* Stretch the link over the whole row when there is one. */}
                  {job.companyUrl && <span aria-hidden="true" className="absolute inset-0 rounded-xl" />}
                  {job.role}
                  <span className="text-muted"> · </span>
                  {job.company}
                  {job.companyUrl && (
                    <ArrowUpRight className="size-3.5 self-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                  )}
                </Title>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted text-pretty">
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

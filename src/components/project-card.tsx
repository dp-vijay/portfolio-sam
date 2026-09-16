import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./spotlight-card";

type Props = {
  project: Project;
  index: number;
  /** Wide tile in the bento grid. */
  wide?: boolean;
};

export function ProjectCard({ project, index, wide = false }: Props) {
  const [from, to] = project.accent;
  const number = String(index + 1).padStart(2, "0");

  return (
    <SpotlightCard color={from} className={cn("h-full", wide && "md:col-span-2")}>
      <Link href={`/work/${project.slug}`} className="flex h-full flex-col">
        {/* Generated cover art — no images to manage. */}
        <div
          className={cn(
            "relative overflow-hidden border-b border-border bg-[#0b0b10]",
            wide ? "h-56 sm:h-72" : "h-44 sm:h-52",
          )}
        >
          <div
            className="absolute inset-0 opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              background: `radial-gradient(120% 100% at 0% 0%, ${from} 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, ${to} 0%, transparent 60%), linear-gradient(135deg, ${from}22, ${to}22)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse at center, #000 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, #000 20%, transparent 75%)",
            }}
          />
          <span className="absolute left-5 top-4 font-mono text-xs tracking-widest text-white/70">{number}</span>
          <span className="absolute right-5 top-4 font-mono text-xs tracking-widest text-white/70">{project.year}</span>
          <span
            className="absolute bottom-3 left-5 select-none text-[5.5rem] font-semibold leading-none tracking-tighter text-white/90 mix-blend-overlay sm:text-[7rem]"
            aria-hidden="true"
          >
            {project.title.split(" ")[0]}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <ArrowUpRight
              className="mt-0.5 size-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
              strokeWidth={1.75}
            />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </SpotlightCard>
  );
}

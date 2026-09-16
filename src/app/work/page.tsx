import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — the problem, what I built, and what changed as a result.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-36 sm:pt-44">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">All work</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Projects, and what they changed.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
          Each write-up covers the problem, the decisions that were actually contested, and the outcome — with numbers where I have them.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

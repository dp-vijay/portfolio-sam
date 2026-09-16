import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [from, to] = project.accent;

  return (
    <article className="mx-auto max-w-5xl px-6 pt-32 sm:pt-40">
      <Reveal>
        <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
          All work
        </Link>
      </Reveal>

      {/* Header */}
      <Reveal delay={0.05} className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-muted">{String(index + 1).padStart(2, "0")}</span> — {project.year}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">{project.summary}</p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-end text-sm lg:grid-cols-1">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Stack</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </dd>
          </div>
          {(project.links.repo || project.links.demo) && (
            <div className="col-span-2 lg:col-span-1">
              <dt className="sr-only">Links</dt>
              <dd className="flex flex-wrap gap-2">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1 rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg">
                    Live demo <ArrowUpRight className="size-3.5" strokeWidth={2} />
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener" className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent/50">
                    Source <ArrowUpRight className="size-3.5" strokeWidth={2} />
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>
      </Reveal>

      {/* Cover */}
      <Reveal delay={0.1} className="relative mt-12 h-56 overflow-hidden rounded-3xl border border-border bg-[#0b0b10] sm:h-80">
        <div
          className="absolute inset-0"
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
        <span aria-hidden="true" className="absolute bottom-4 left-8 select-none text-[6rem] font-semibold leading-none tracking-tighter text-white/90 mix-blend-overlay sm:text-[10rem]">
          {project.title.split(" ")[0]}
        </span>
      </Reveal>

      {/* Metrics */}
      <Reveal delay={0.15} className="mt-6 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{m.value}</p>
            <p className="mt-1 text-sm text-muted">{m.label}</p>
          </div>
        ))}
      </Reveal>

      {/* Body */}
      <div className="mt-20 grid gap-16 lg:grid-cols-[11rem_1fr] lg:gap-y-20">
        <Section label="The problem">
          <p className="prose-case text-pretty">{project.problem}</p>
        </Section>

        <Section label="What I built">
          <ul className="space-y-4">
            {project.built.map((item) => (
              <li key={item} className="prose-case flex gap-4 text-pretty">
                <span aria-hidden="true" className="mt-[15px] h-px w-4 shrink-0 bg-accent/70" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Decisions">
          <ol className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {project.decisions.map((d, i) => (
              <li key={d.title} className="grid gap-2 p-6 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted text-pretty">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section label="Outcome">
          <p className="prose-case text-pretty">{project.outcome}</p>
        </Section>
      </div>

      {/* Next */}
      <Reveal className="mt-24">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Next project</p>
            <p className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{next.title}</p>
          </div>
          <ArrowRight className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg" strokeWidth={1.75} />
        </Link>
      </Reveal>
    </article>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <Reveal>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent lg:sticky lg:top-28">{label}</h2>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </>
  );
}

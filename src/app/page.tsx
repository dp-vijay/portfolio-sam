import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, skills, stats } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Marquee } from "@/components/marquee";
import { Stat } from "@/components/stat";
import { Timeline } from "@/components/timeline";
import { CopyEmail } from "@/components/copy-email";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="mx-auto max-w-5xl px-6">
        <Reveal className="glass grid grid-cols-2 gap-8 rounded-2xl p-8 sm:grid-cols-4 sm:p-10">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </Reveal>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-28 sm:pt-36">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Things I've built that changed a number someone cared about."
          description="Each one covers the problem, the decisions that were actually contested, and what happened after it shipped."
          action={
            <Link href="/work" className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
              All projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : undefined}>
              <ProjectCard project={project} index={i} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-28 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="text-muted">02</span> — About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Engineer first, but I sweat the pixels.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-muted">
            {profile.bio.map((p) => (
              <p key={p} className="text-pretty">{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-16 space-y-3">
          <Marquee items={skills.rowA} />
          <Marquee items={skills.rowB} reverse />
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-28 sm:pt-36">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked."
        />
        <Timeline />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-28 sm:pt-36">
        <Reveal className="gradient-border relative overflow-hidden rounded-3xl bg-surface p-8 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--blob-1), transparent 70%)" }}
          />
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="text-muted">04</span> — Contact
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Have something worth building? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty">
            The fastest way to reach me is email. I read everything and reply to anything that isn&apos;t a recruiter template.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-fg pl-5 pr-4 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              Send an email
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
            <CopyEmail email={profile.email} />
          </div>
        </Reveal>
      </section>
    </>
  );
}

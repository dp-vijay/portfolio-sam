import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/site";
import { GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I've built that's worth a write-up.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-24 lg:px-12 lg:pt-32">
      <Link href="/" className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent">
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
        {profile.fullName}
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">All projects</h1>

      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 bg-bg/80 backdrop-blur">
          <tr className="border-b border-border font-mono text-[11px] uppercase tracking-wider text-muted">
            <th className="py-3 pr-6 font-medium">Year</th>
            <th className="py-3 pr-6 font-medium">Project</th>
            <th className="hidden py-3 pr-6 font-medium md:table-cell">Built with</th>
            <th className="hidden py-3 font-medium sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.slug} className="group border-b border-border transition-colors hover:bg-surface">
              <td className="py-4 pr-6 align-top font-mono text-sm text-muted">{p.year}</td>
              <td className="py-4 pr-6 align-top">
                <Link href={`/work/${p.slug}`} className="inline-flex items-baseline gap-1 font-medium transition-colors group-hover:text-accent">
                  {p.title}
                  <ArrowUpRight className="size-3.5 self-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-muted md:hidden">{p.summary}</p>
              </td>
              <td className="hidden py-4 pr-6 align-top md:table-cell">
                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {t}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <div className="flex flex-col gap-1 text-sm">
                  {p.links.repo && (
                    <a href={p.links.repo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                      <GitHubIcon className="size-3.5" /> Source
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                      <ArrowUpRight className="size-3.5" strokeWidth={2} /> Live
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GitHubIcon } from "./icons";
import { ProjectThumb } from "./project-thumb";
import { Tag } from "./tag";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="group/list space-y-2">
      {projects.map((project, index) => (
        <li
          key={project.slug}
          className="group relative -mx-4 grid gap-4 rounded-xl p-4 transition-all sm:grid-cols-[7.5rem_1fr] sm:gap-6 lg:hover:bg-surface lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
        >
          <ProjectThumb project={project} index={index} className="aspect-[16/10] w-32 sm:mt-1 sm:w-full" />
          <div>
            <h3 className="font-medium leading-snug">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-baseline gap-1 transition-colors group-hover:text-accent"
              >
                {/* Stretched link makes the whole row clickable; external links below sit above it. */}
                <span aria-hidden="true" className="absolute inset-0 rounded-xl" />
                {project.title}
                <ArrowUpRight className="size-3.5 self-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{project.summary}</p>

            {(project.links.repo || project.links.demo) && (
              <div className="relative z-10 mt-3 flex flex-wrap gap-4 text-sm">
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                    <GitHubIcon className="size-3.5" /> Source
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                    <ArrowUpRight className="size-3.5" strokeWidth={2} /> Live
                  </a>
                )}
              </div>
            )}

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { Sidebar } from "@/components/sidebar";
import { Section } from "@/components/section";
import { ExperienceList } from "@/components/experience-list";
import { ProjectList } from "@/components/project-list";
import { Skills } from "@/components/skills";
import { CopyEmail } from "@/components/copy-email";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-12">
      <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
        <Sidebar sections={sections} />

        <div className="pt-16 lg:py-24">
          <div className="space-y-24 lg:space-y-32">
            <Section id="about" label="About">
              <div className="space-y-4 leading-relaxed text-muted">
                {profile.bio.map((p) => (
                  <p key={p} className="text-pretty">{p}</p>
                ))}
              </div>
            </Section>

            <Section id="experience" label="Experience">
              <ExperienceList />
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener"
                  className="group mt-10 inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
                >
                  View full résumé
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
              )}
            </Section>

            <Section id="projects" label="Projects">
              <ProjectList projects={featuredProjects} />
              <Link
                href="/work"
                className="group mt-10 inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
              >
                View full project archive
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
            </Section>

            <Section id="skills" label="Skills">
              <Skills />
            </Section>

            <Section id="contact" label="Contact">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted text-pretty">
                I&apos;m open to interesting roles and projects. If you&apos;d like to work together or just say
                hello, my inbox is always open.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  Say hello
                </a>
                <CopyEmail email={profile.email} />
              </div>
            </Section>
          </div>

          <footer className="mt-24 max-w-md text-sm leading-relaxed text-muted lg:mt-32">
            Designed and built by {profile.fullName}. Made with Next.js and Tailwind CSS, deployed on GitHub
            Pages.
          </footer>
        </div>
      </div>
    </div>
  );
}

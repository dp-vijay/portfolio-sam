import Link from "next/link";
import { FileText, MapPin } from "lucide-react";
import { profile, socials } from "@/data/site";
import { SocialIcon } from "./icons";
import { SectionNav, type NavSection } from "./section-nav";

export function Sidebar({ sections }: { sections: NavSection[] }) {
  return (
    <header className="pt-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <Link href="/" className="transition-colors hover:text-accent">
            {profile.fullName}
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">{profile.role}</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted text-pretty">{profile.tagline}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" strokeWidth={1.75} />
            {profile.location}
          </span>
          {profile.status && (
            <span className="inline-flex items-center gap-2">
              <span className="animate-pulse-dot size-1.5 rounded-full bg-accent-2" />
              {profile.status}
            </span>
          )}
        </div>

        <SectionNav sections={sections} />
      </div>

      <div className="mt-10 flex items-center gap-1 lg:mt-0">
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            aria-label={s.label}
            title={s.label}
            rel={s.href.startsWith("http") ? "me noopener" : undefined}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <SocialIcon id={s.id} className="size-5" />
          </a>
        ))}
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <FileText className="size-4" strokeWidth={1.75} />
            Résumé
          </a>
        )}
      </div>
    </header>
  );
}

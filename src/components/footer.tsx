import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/site";
import { SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Built with Next.js, deployed on GitHub Pages.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              aria-label={s.label}
              rel={s.href.startsWith("http") ? "me noopener" : undefined}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <SocialIcon id={s.id} className="size-[18px]" />
            </a>
          ))}
          <Link
            href="/"
            aria-label="Back to top"
            className="ml-2 grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <ArrowUp className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

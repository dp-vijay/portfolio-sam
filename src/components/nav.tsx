"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Work", href: "/work", match: "/work" },
  { label: "About", href: "/#about", match: null },
  { label: "Experience", href: "/#experience", match: null },
];

export function Nav() {
  const pathname = usePathname();
  const isActive = (match: string | null) => match !== null && pathname.startsWith(match);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Main"
        className="glass flex h-12 w-full max-w-5xl items-center justify-between rounded-full pl-5 pr-1.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]"
      >
        <Link href="/" className="text-[15px] font-semibold tracking-tight transition-colors hover:text-accent">
          {profile.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const active = isActive(link.match);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface ring-1 ring-border"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            href="/work"
            className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:hidden"
          >
            Work
          </Link>
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="hidden h-9 items-center gap-1 rounded-full bg-fg pl-4 pr-3 text-sm font-medium text-bg transition-transform hover:-translate-y-px sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </a>
        </div>
      </nav>
    </header>
  );
}

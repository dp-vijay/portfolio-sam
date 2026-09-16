"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type NavSection = { id: string; label: string };

/** Sidebar nav whose active item tracks the section currently in view. */
export function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    // Whichever section crosses the upper-middle band of the viewport wins.
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Sections" className="mt-16 hidden lg:block">
      <ul className="space-y-1">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center gap-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px bg-muted transition-all duration-300 group-hover:w-16 group-hover:bg-fg",
                    isActive ? "w-16 bg-fg" : "w-8",
                  )}
                />
                <span className={cn("transition-colors group-hover:text-fg", isActive ? "text-fg" : "text-muted")}>
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

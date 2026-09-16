"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, socials } from "@/data/site";
import { SocialIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, ease, delay: 0.1 + i * 0.09 },
  });

  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        {profile.status && (
          <motion.p {...item(0)} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-2.5 pr-4 text-xs font-medium">
            <span className="animate-pulse-dot size-2 rounded-full bg-accent-2" />
            {profile.status}
          </motion.p>
        )}

        <motion.h1
          {...item(1)}
          className="max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[5rem]"
        >
          {profile.headline.before}{" "}
          <span className="text-gradient">{profile.headline.highlight}</span>{" "}
          {profile.headline.after}
        </motion.h1>

        <motion.p {...item(2)} className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
          {profile.intro}
        </motion.p>

        <motion.div {...item(3)} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg pl-6 pr-5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            See my work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center rounded-full border border-border bg-surface px-6 text-sm font-medium transition-colors hover:border-accent/50"
          >
            Get in touch
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="inline-flex h-12 items-center gap-2 px-3 text-sm text-muted transition-colors hover:text-fg"
            >
              <Download className="size-4" strokeWidth={1.75} />
              Résumé
            </a>
          )}
        </motion.div>

        <motion.div {...item(4)} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" strokeWidth={1.75} />
            {profile.location}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <ul className="flex items-center gap-1">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  rel={s.href.startsWith("http") ? "me noopener" : undefined}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  className="grid size-9 place-items-center rounded-full transition-colors hover:bg-surface hover:text-fg"
                >
                  <SocialIcon id={s.id} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

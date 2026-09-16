"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = { value: number; suffix?: string; label: string };

/** Counts up from zero the first time it scrolls into view. */
export function Stat({ value, suffix = "", label }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = String(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <div>
      <p className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
        <span ref={ref}>0</span>
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

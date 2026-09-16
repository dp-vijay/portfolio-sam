"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** Radial highlight colour that follows the cursor. */
  color?: string;
};

/** Card whose border and inner glow track the cursor position. */
export function SpotlightCard({ children, className, color = "var(--accent)" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-transparent",
        className,
      )}
      style={{ "--spot": color } as React.CSSProperties}
    >
      {/* Border glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--spot) 55%, transparent), transparent 45%)`,
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: 1,
        }}
      />
      {/* Inner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--spot) 12%, transparent), transparent 55%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

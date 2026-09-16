"use client";

import { useEffect, useRef } from "react";

/** Soft radial light that follows the pointer. Desktop only; sits between the backdrop and content. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, -100vw) var(--my, -100vh), color-mix(in oklab, var(--accent) 11%, transparent), transparent 80%)",
      }}
    />
  );
}

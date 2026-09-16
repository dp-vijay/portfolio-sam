import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Generated cover art — no images to manage. Always dark so the type stays legible. */
export function ProjectThumb({ project, index, className }: { project: Project; index: number; className?: string }) {
  const [from, to] = project.accent;
  return (
    <div
      aria-hidden="true"
      className={cn("relative overflow-hidden rounded-lg border border-border bg-[#0b0b10]", className)}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(120% 100% at 0% 0%, ${from} 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, ${to} 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <span className="absolute left-2.5 top-2 font-mono text-[11px] tracking-widest text-white/80">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

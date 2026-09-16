import { cn } from "@/lib/utils";

type Props = {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
};

/** Infinite horizontal scroller; content is duplicated so the loop is seamless. */
export function Marquee({ items, reverse = false, className }: Props) {
  const row = [...items, ...items];
  return (
    <div className={cn("fade-x overflow-hidden", className)}>
      <ul
        className={cn(
          "flex w-max gap-3 hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {row.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length || undefined}
            className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

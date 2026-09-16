export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] leading-5 text-accent">
      {children}
    </li>
  );
}

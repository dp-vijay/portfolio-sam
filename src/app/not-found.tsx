import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 pt-32 sm:pt-44">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">That page doesn&apos;t exist.</h1>
      <p className="mt-5 max-w-md text-lg text-muted">The link may be out of date, or the page may have moved.</p>
      <Link
        href="/"
        className="group mt-10 inline-flex h-11 items-center gap-2 rounded-full bg-fg pl-4 pr-5 text-sm font-medium text-bg"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
        Back home
      </Link>
    </section>
  );
}

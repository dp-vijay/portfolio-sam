"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 font-mono text-sm transition-colors hover:border-accent/50"
      aria-live="polite"
    >
      {copied ? <Check className="size-4 text-accent" strokeWidth={2} /> : <Copy className="size-4 text-muted" strokeWidth={1.75} />}
      {copied ? "Copied" : email}
    </button>
  );
}

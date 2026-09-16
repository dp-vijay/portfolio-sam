/**
 * Case studies. One entry per project; `slug` becomes the URL (/work/<slug>).
 * Ordered as listed. `featured` entries appear on the homepage bento grid,
 * the first of which gets the wide tile.
 */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  role: string;
  tech: string[];
  featured: boolean;
  /** Two colours for the generated cover art. */
  accent: [string, string];
  links: { repo?: string; demo?: string };
  problem: string;
  built: string[];
  decisions: { title: string; body: string }[];
  outcome: string;
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "ledger-sync",
    title: "Ledger Sync",
    summary:
      "A reconciliation service that matches payment-provider settlements against the internal ledger and surfaces only the gaps.",
    year: 2025,
    role: "Design & engineering",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
    featured: true,
    accent: ["#7c3aed", "#22d3ee"],
    links: { repo: "https://github.com/dp-vijay/portfolio-sam" },
    problem:
      "Finance was reconciling three payment providers by hand every Monday, in a spreadsheet that had grown to forty columns. It took most of a day and still missed things — including fees that had been silently absorbed for two quarters.",
    built: [
      "An ingestion layer that pulls settlement files from each provider and normalises them into a single shape.",
      "A tiered matcher: exact reference first, then amount-and-date windows, then fuzzy matches that a human confirms.",
      "A review queue that shows both candidate records side by side, so the team makes a judgement call instead of running a search.",
    ],
    decisions: [
      {
        title: "Matching rules live in the database, not the code.",
        body: "Providers change file formats without notice. A rule change should be a config update, not a deploy.",
      },
      {
        title: "Every match records why it matched.",
        body: "When a number is questioned six months later, the audit trail answers it without re-running anything.",
      },
      {
        title: "Idempotent ingestion.",
        body: "Files get re-sent constantly. Re-importing the same settlement is a no-op rather than a duplicate.",
      },
    ],
    outcome:
      "Monday reconciliation dropped from roughly six hours to about twenty minutes of reviewing the exception queue. The first run surfaced £11k of fees nobody had noticed.",
    metrics: [
      { value: "6h → 20m", label: "Weekly reconciliation" },
      { value: "£11k", label: "Recovered in first run" },
      { value: "3", label: "Providers unified" },
    ],
  },
  {
    slug: "atlas-ui",
    title: "Atlas UI",
    summary:
      "An internal component library that halved new-screen build time by making the accessible option the default one.",
    year: 2024,
    role: "Lead engineer",
    tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix"],
    featured: true,
    accent: ["#f472b6", "#a78bfa"],
    links: { repo: "https://github.com/dp-vijay/portfolio-sam" },
    problem:
      "Four product teams each maintained their own button, modal and table. They looked similar enough that nobody noticed the drift until an accessibility audit returned the same twelve findings repeated across every surface.",
    built: [
      "Thirty-odd components on unstyled primitives, with focus management, keyboard navigation and ARIA wiring handled inside the component.",
      "Design tokens in a single file the design team edits directly.",
      "A Storybook that doubles as the visual regression suite.",
    ],
    decisions: [
      {
        title: "No configuration for the common case.",
        body: "A bare <Table> is sortable, keyboard-navigable and screen-reader correct out of the box.",
      },
      {
        title: "Escape hatches everywhere.",
        body: "Every component accepts className and forwards its ref, so an unusual requirement never blocks a team on me.",
      },
      {
        title: "Storybook is the contract.",
        body: "A token change shows its blast radius before merge, not after.",
      },
    ],
    outcome:
      "New screens went from roughly two weeks to under one. The follow-up audit closed all twelve repeated findings, and a regression in a shared component is now caught once, centrally.",
    metrics: [
      { value: "2w → 5d", label: "Time to ship a screen" },
      { value: "12 → 0", label: "Repeated a11y findings" },
      { value: "4", label: "Teams adopted" },
    ],
  },
  {
    slug: "queue-lens",
    title: "Queue Lens",
    summary:
      "A small observability tool that makes background-job backlogs visible before they become a customer-facing incident.",
    year: 2024,
    role: "Engineering",
    tech: ["Python", "FastAPI", "Redis", "Preact"],
    featured: true,
    accent: ["#22d3ee", "#34d399"],
    links: { repo: "https://github.com/dp-vijay/portfolio-sam" },
    problem:
      "We found out about job-queue backups from customers. The dashboards tracked throughput, which stays healthy right up until the moment it doesn't.",
    built: [
      "A sampler recording queue depth and oldest-job age every few seconds.",
      "A single page that plots both, with a threshold alert on oldest-job age.",
    ],
    decisions: [
      {
        title: "Oldest-job age as the primary metric.",
        body: "It rises the moment work stops draining — minutes to hours before throughput reflects it.",
      },
      {
        title: "Fixed retention, no storage growth.",
        body: "Samples roll into one-minute buckets after an hour and drop after a week. The whole thing fits in Redis.",
      },
      {
        title: "One page, no login.",
        body: "It runs on the internal network. Anything more and it would never have shipped.",
      },
    ],
    outcome:
      "Three incidents caught before customers noticed in the first month. The alert is a single threshold that has held without tuning since.",
    metrics: [
      { value: "3", label: "Incidents caught, month one" },
      { value: "0", label: "Alert tuning since launch" },
      { value: "1 page", label: "Entire UI" },
    ],
  },
  {
    slug: "signal-cli",
    title: "Signal CLI",
    summary:
      "A command-line tool that turns a week of scattered deploy logs into a one-screen answer to “what changed and when?”",
    year: 2023,
    role: "Engineering",
    tech: ["Go", "SQLite", "GitHub API"],
    featured: false,
    accent: ["#fbbf24", "#f472b6"],
    links: { repo: "https://github.com/dp-vijay/portfolio-sam" },
    problem:
      "Answering “when did this start?” during an incident meant opening four dashboards and a Slack search. By the time anyone had the timeline, the useful window for a rollback had usually passed.",
    built: [
      "A collector that ingests deploy events, feature-flag flips and config changes into a local SQLite file.",
      "A single command that prints a merged timeline for any service and time range.",
    ],
    decisions: [
      {
        title: "Local-first.",
        body: "No server to run or authenticate against. The binary and a SQLite file are the whole install.",
      },
      {
        title: "Plain text output.",
        body: "Pipes into grep and Slack without any formatting work.",
      },
    ],
    outcome:
      "Adopted by the on-call rotation within a fortnight. Mean time to identify a bad deploy dropped from ~25 minutes to under five.",
    metrics: [
      { value: "25m → 5m", label: "Time to identify cause" },
      { value: "1", label: "Binary, zero infra" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

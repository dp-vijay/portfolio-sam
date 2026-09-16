/**
 * Single source of truth for everything personal on the site.
 * Edit this file first — the pages read from it.
 *
 * TODO(sam): replace every placeholder below with real details.
 */

export const profile = {
  name: "Sam",
  fullName: "Sam",
  role: "Full-stack engineer",
  location: "Chennai, India",
  /** Availability pill in the hero. Set to null to hide it. */
  status: "Available for new work" as string | null,
  /** Hero headline. `highlight` gets the gradient treatment. */
  headline: {
    before: "I build digital products that feel",
    highlight: "effortless",
    after: "to use.",
  },
  /** One paragraph under the headline. */
  intro:
    "Full-stack engineer with a bias for shipping — TypeScript end to end, static-first frontends, and the kind of boring, readable code that lets a team move fast a year from now.",
  /** Longer about copy. Each string is a paragraph. */
  bio: [
    "I have spent the last six years building web products across fintech, developer tooling and internal platforms. I care about the whole stack: the data model, the API shape, the pixels, and the deploy pipeline that gets it all in front of people.",
    "Lately my focus has been performance and developer experience — moving marketing surfaces to static rendering, trimming client bundles, and removing the accidental complexity that piles up in growing codebases.",
  ],
  email: "sam@example.com",
  /** Drop a PDF into /public and set e.g. "/portfolio-sam/resume.pdf", or null to hide. */
  resumeUrl: null as string | null,
} as const;

export const stats = [
  { value: 6, suffix: "+", label: "Years shipping" },
  { value: 24, suffix: "", label: "Projects delivered" },
  { value: 40, suffix: "k", label: "Accounts migrated" },
  { value: 99, suffix: "", label: "Lighthouse score" },
] as const;

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/dp-vijay" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  { id: "x", label: "X", href: "https://x.com/your-handle" },
  { id: "mail", label: "Email", href: `mailto:${profile.email}` },
] as const;

export type SocialId = (typeof socials)[number]["id"];

export const skills = {
  rowA: [
    "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS",
    "GraphQL", "Docker", "AWS", "Redis", "Vitest", "Playwright",
  ],
  rowB: [
    "Python", "FastAPI", "Astro", "Prisma", "tRPC", "GitHub Actions",
    "Figma", "Storybook", "Terraform", "Kafka", "Go", "Design systems",
  ],
} as const;

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    companyUrl: null as string | null,
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Lead frontend architecture for the customer-facing platform used by 200k monthly users.",
      "Cut median page load from 3.1s to 900ms by moving the marketing surface to static rendering.",
      "Introduced a shared component library adopted by four product teams.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    companyUrl: null as string | null,
    period: "2021 — 2024",
    location: "Chennai",
    points: [
      "Owned the billing service end to end — schema, API, and the zero-downtime migration of 40k accounts.",
      "Built the reconciliation pipeline that replaced a six-hour weekly manual process.",
    ],
  },
  {
    role: "Junior Developer",
    company: "First Company",
    companyUrl: null as string | null,
    period: "2019 — 2021",
    location: "Bengaluru",
    points: [
      "Shipped features across a Rails monolith and its React frontend.",
      "Set up the first end-to-end test suite, catching regressions before production.",
    ],
  },
] as const;

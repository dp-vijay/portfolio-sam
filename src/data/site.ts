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
  /** Availability line under the role. Set to null to hide it. */
  status: "Open to new opportunities" as string | null,
  /** One sentence in the sidebar, under the role. */
  tagline: "I build fast, readable web products — from the data model to the pixels.",
  /** About section. Each string is a paragraph. First person, plain voice. */
  bio: [
    "Hi, I'm Sam. I'm a full-stack engineer who likes owning the whole thing — the schema, the API, the interface, and the pipeline that ships it. I've spent the last six years doing that across fintech, developer tooling and internal platforms.",
    "These days I spend most of my time in TypeScript, React and Node, with Postgres underneath. I care a lot about performance and about code the next person can read without a walkthrough.",
    "When I'm not working I'm usually reading, running, or tinkering with small tools that make my own week easier.",
  ],
  email: "sam@example.com",
  /** Drop a PDF into /public and set e.g. "/portfolio-sam/resume.pdf", or null to hide. */
  resumeUrl: null as string | null,
} as const;

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/dp-vijay" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  { id: "x", label: "X", href: "https://x.com/your-handle" },
  { id: "mail", label: "Email", href: `mailto:${profile.email}` },
] as const;

export type SocialId = (typeof socials)[number]["id"];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Astro", "Tailwind CSS", "Storybook", "Motion"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "Prisma", "GraphQL"] },
  { group: "Tools & infra", items: ["Docker", "AWS", "GitHub Actions", "Terraform", "Vitest", "Playwright"] },
] as const;

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    companyUrl: null as string | null,
    period: "2024 — Present",
    points: [
      "Lead frontend architecture for the customer-facing platform used by 200k monthly users.",
      "Cut median page load from 3.1s to 900ms by moving the marketing surface to static rendering.",
      "Introduced a shared component library adopted by four product teams.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    companyUrl: null as string | null,
    period: "2021 — 2024",
    points: [
      "Owned the billing service end to end — schema, API, and the zero-downtime migration of 40k accounts.",
      "Built the reconciliation pipeline that replaced a six-hour weekly manual process.",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "First Company",
    companyUrl: null as string | null,
    period: "2019 — 2021",
    points: [
      "Shipped features across a Rails monolith and its React frontend.",
      "Set up the first end-to-end test suite, catching regressions before production.",
    ],
    tech: ["Ruby on Rails", "React", "MySQL"],
  },
] as const;

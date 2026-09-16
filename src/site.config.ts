/**
 * Single source of truth for everything personal on this site.
 * Edit this file first — the pages read from it, so you rarely need to touch markup.
 *
 * TODO(sam): replace every placeholder below with real details.
 */

export const profile = {
  /** Shown in the nav wordmark and the <title> suffix. */
  name: 'Sam',
  /** Full name for the hero heading and structured data. */
  fullName: 'Sam',
  /** One line under the hero heading. Keep it concrete. */
  role: 'Full-stack engineer',
  /** Where you are. Used in the hero meta row. */
  location: 'Chennai, India',
  /** Availability badge in the hero. Set to null to hide it. */
  status: 'Open to new work' as string | null,
  /** 2–3 sentences. This is the "about" section and the meta description fallback. */
  bio: [
    'I build web products end to end — from the data model up to the pixels. Most of my work lives in TypeScript, with a strong preference for boring, readable code that the next person can actually maintain.',
    'Lately I have been focused on performance and developer experience: shipping fast static frontends, tightening build pipelines, and removing the accidental complexity that piles up in growing codebases.',
  ],
  email: 'sam@example.com',
  /** Put your CV in /public and point at it, or set to null to hide the button. */
  resumeUrl: null as string | null,
} as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/dp-vijay' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  { label: 'Email', href: `mailto:${profile.email}` },
] as const;

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
  },
  {
    group: 'Tooling',
    items: ['Git', 'Docker', 'GitHub Actions', 'Vitest', 'Playwright', 'AWS'],
  },
] as const;

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Company Name',
    companyUrl: null as string | null,
    period: '2024 — Present',
    summary:
      'Lead frontend work on the customer-facing platform. Cut median page load from 3.1s to 900ms by moving the marketing surface to static rendering and trimming the client bundle.',
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    companyUrl: null as string | null,
    period: '2021 — 2024',
    summary:
      'Built and owned the billing service end to end. Designed the schema, shipped the API, and wrote the migration that moved 40k accounts over without downtime.',
  },
  {
    role: 'Junior Developer',
    company: 'First Company',
    companyUrl: null as string | null,
    period: '2019 — 2021',
    summary:
      'Shipped features across a Rails monolith and its React frontend. Introduced the first end-to-end test suite, which caught regressions before they reached production.',
  },
] as const;

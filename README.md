# portfolio-sam

Personal portfolio, built with [Astro](https://astro.build) and Tailwind CSS,
deployed to GitHub Pages at <https://dp-vijay.github.io/portfolio-sam>.

## Editing content

| What | Where |
| --- | --- |
| Name, role, bio, skills, experience, social links | `src/site.config.ts` |
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Colours, fonts | `src/styles/global.css` (`@theme` and `.dark` blocks) |
| Résumé PDF | drop into `public/` and set `profile.resumeUrl` in `site.config.ts` |

A project file looks like:

```md
---
title: Project name
summary: One line shown on the card.
order: 1          # lower numbers first
featured: true    # show on the homepage
year: 2025
tech: ["TypeScript", "PostgreSQL"]
repo: https://github.com/...   # optional
demo: https://...              # optional
---

Markdown body — problem, what you built, outcome.
```

## Local development

```sh
npm install
npm run dev       # http://localhost:4321/portfolio-sam/
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

### Moving the site

`site` and `base` in `astro.config.mjs` are tied to the repo name. If the repo
is renamed, or the site moves to `dp-vijay.github.io` or a custom domain, update
both values — internal links go through `src/lib/url.ts` so nothing else needs
to change.

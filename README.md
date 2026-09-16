# portfolio-sam

Personal portfolio built with [Next.js](https://nextjs.org) (static export),
Tailwind CSS 4 and Motion, deployed to GitHub Pages at
<https://dp-vijay.github.io/portfolio-sam>.

## Editing content

| What | Where |
| --- | --- |
| Name, headline, bio, stats, skills, experience, socials | `src/data/site.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Colours, fonts, effects | `src/app/globals.css` (`:root` and `.dark` blocks) |
| Résumé PDF | drop into `public/` and set `profile.resumeUrl` to `/portfolio-sam/<file>.pdf` |

Each project is a typed object with `problem`, `built`, `decisions`, `outcome`
and `metrics` — the case-study page lays them out. `featured: true` puts it on
the homepage; the first featured project gets the wide tile.

## Local development

```sh
npm install
npm run dev       # http://localhost:3000/portfolio-sam/
npm run build     # static output in out/
npm run lint
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `out/` to GitHub Pages (source is already set to GitHub Actions).

### Moving the site

`basePath` in `next.config.ts` and `metadataBase` in `src/app/layout.tsx` are
tied to the repo name. If the repo is renamed, or the site moves to
`dp-vijay.github.io` or a custom domain, update both. `<Link>`, fonts and
metadata icons pick up `basePath` automatically; only raw `/public` asset paths
need prefixing by hand.

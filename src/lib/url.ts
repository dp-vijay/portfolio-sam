/**
 * Prefix an internal path with the configured `base`.
 *
 * Astro does NOT rewrite hrefs for you, so every internal link and asset path
 * must go through this or it will 404 on GitHub Pages (where base is
 * '/portfolio-sam' rather than '/').
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // '/portfolio-sam/' in this project
  const cleaned = path.replace(/^\/+/, '');
  return `${base.replace(/\/+$/, '')}/${cleaned}`.replace(/\/+$/, '') || '/';
}

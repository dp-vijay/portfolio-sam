import type { NextConfig } from "next";

// GitHub Pages project site: https://dp-vijay.github.io/portfolio-sam
// Static export only — no server runtime on Pages. `basePath` is applied
// automatically to <Link>, fonts, CSS/JS chunks and metadata icons, but NOT to
// raw <img src="/..."> paths, so keep static assets out of /public or prefix
// them by hand.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-sam",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

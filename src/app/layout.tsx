import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/site";
import { Background } from "@/components/background";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dp-vijay.github.io/portfolio-sam/"),
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  openGraph: {
    type: "website",
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.intro,
    siteName: profile.fullName,
  },
  twitter: { card: "summary_large_image" },
};

// Runs before first paint so the correct theme is applied with no flash.
// Stored choice wins; otherwise follow the OS, defaulting to dark.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':!matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Background />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

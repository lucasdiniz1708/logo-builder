import { createFileRoute, HeadContent } from "@tanstack/react-router";

import logoAsset from "@/assets/primus360-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Primus 360 — Building in Progress" },
      {
        name: "description",
        content:
          "Primus 360 is building something new. Check back soon for updates.",
      },
      { property: "og:title", content: "Primus 360 — Building in Progress" },
      {
        property: "og:description",
        content:
          "Primus 360 is building something new. Check back soon for updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-center">
      <HeadContent />
      <div className="relative">
        <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <img
          src={logoAsset.url}
          alt="Primus 360"
          className="mx-auto h-40 w-auto md:h-52"
        />
      </div>

      <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
        Building in Progress
      </h1>

      <p className="mt-5 max-w-lg text-lg text-muted-foreground md:text-xl">
        We are building something special for you. Our new website will be live
        soon.
      </p>

      <div className="mt-12 flex items-center gap-4 rounded-full border border-border bg-card px-6 py-3 shadow-sm">
        <HardHatIcon className="h-6 w-6 text-primary" />
        <span className="text-sm font-medium text-card-foreground">
          Site under construction — check back soon
        </span>
      </div>

      <footer className="mt-20 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Primus 360. All rights reserved.
      </footer>
    </div>
  );
}

function HardHatIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 18h20" />
      <path d="M20 18v-5a6 6 0 0 0-12 0v5" />
      <path d="M4 18v-5a6 6 0 0 1 12 0v5" />
      <path d="M14 13h-4" />
      <path d="M10 13V9a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";
const siteUrl = deploymentHost.startsWith("http")
  ? deploymentHost
  : `https://${deploymentHost}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OG RAG — Explainable local-first retrieval",
  description:
    "A recruiter-facing technical showcase of OG RAG: collection-scoped hybrid search, explainable ranking, LanceDB vectors, SQLite metadata, and source-grounded OpenAI answers.",
  keywords: [
    "RAG",
    "retrieval augmented generation",
    "hybrid search",
    "LanceDB",
    "SQLite",
    "OpenAI",
    "Bun",
    "TypeScript",
  ],
  openGraph: {
    title: "OG RAG — Retrieval you can inspect",
    description:
      "Local-first document search with an explainable hybrid retrieval pipeline.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG RAG — Retrieval you can inspect",
    description:
      "Hybrid document search with explicit ranking, local persistence, and source-grounded answers.",
    images: [
      {
        url: "/opengraph-image",
        alt: "OG RAG — explainable local-first hybrid retrieval",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f2f0e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

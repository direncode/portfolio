import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://diren.vercel.app"),
  title: {
    default: "Diren Kumaratilleke — Horizontal Intelligence Primitives",
    template: "%s — Diren Kumaratilleke",
  },
  description:
    "Four primitives converging into one horizontal intelligence platform: BTUT (coordination), Crystara (structure discovery), NIV (macro signal), Participatory Data Estate (living ingestion). A new approach to DARPA Challenge 13; NIV beats the Fed yield curve with 41.71% orthogonal variance; Crystara beats JEPA and supervised GNNs across three real heterogeneous graphs.",
  keywords: [
    "horizontal intelligence",
    "DARPA Mathematical Challenge 13",
    "BTUT",
    "Crystara",
    "TCD-JEPA",
    "National Impact Velocity",
    "Participatory Data Estate",
    "SGUNCCH",
    "Latent Ocean",
    "Diren Kumaratilleke",
  ],
  authors: [{ name: "Diren Kumaratilleke" }],
  openGraph: {
    title: "Diren Kumaratilleke — Horizontal Intelligence Primitives",
    description:
      "Four converging primitives — BTUT, Crystara, NIV, Participatory Data Estate — one Latent Ocean. Every claim traceable to an open repository, a published tear sheet, or a walk-forward-validated number.",
    type: "website",
    siteName: "Diren Kumaratilleke",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diren Kumaratilleke — Horizontal Intelligence Primitives",
    description:
      "Four converging primitives. BTUT · Crystara · NIV · PDE. Repos, tear sheets, and full paper linked.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <SiteNav />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://direncode.com"),
  title: {
    default: "Diren Kumaratilleke — The returns are in the representation, not the scale",
    template: "%s — Diren Kumaratilleke",
  },
  description:
    "An economic claim, and five systems that are instances of it. Latent Ocean makes provenance the composing unit rather than adding retrieval. BTUT finds the O(N) formulation rather than adding machines. Crystara grows the architecture rather than adding parameters. NIV measures whether capital formation compounds or accumulates as friction — the same question as whether AI capex is investment or drag.",
  keywords: [
    "Latent Ocean",
    "provenance primitive",
    "agentic AI grounding",
    "Codd relational model successor",
    "Setun ternary",
    "BTUT",
    "DARPA Mathematical Challenge 13",
    "Crystara",
    "TCD-JEPA",
    "Regenerationism",
    "National Impact Velocity",
    "Participatory Data Estate",
    "Diren Kumaratilleke",
  ],
  authors: [{ name: "Diren Kumaratilleke" }],
  openGraph: {
    title: "The returns are in the representation, not the scale",
    description:
      "One economic claim, five systems that instantiate it. Every impact claim is printed beside the condition it has not yet met.",
    type: "website",
    siteName: "Diren Kumaratilleke",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The returns are in the representation, not the scale",
    description:
      "Latent Ocean · BTUT · Crystara · NIV · Participatory Data Estate. Live systems, repositories, and papers linked.",
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

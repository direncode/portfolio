import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://direncode.com"),
  title: {
    default: "Diren Kumaratilleke — Representation, not scale",
    template: "%s — Diren Kumaratilleke",
  },
  description:
    "The binding constraint is not the magnitude of the input. It is the representation the field committed to early and stopped questioning. Four results across four fields: Latent Ocean, BTUT, Crystara, NIV.",
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
    "audit completeness assertion",
    "non-membership proof",
    "Diren Kumaratilleke",
  ],
  authors: [{ name: "Diren Kumaratilleke" }],
  openGraph: {
    title: "Representation, not scale",
    description:
      "Four results across four fields, one move. Each recovers something a field made unavailable to itself. Every claim is printed beside the condition it has not yet met.",
    type: "website",
    siteName: "Diren Kumaratilleke",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Representation, not scale",
    description:
      "Latent Ocean · BTUT · Crystara · NIV. Live systems, repositories and papers linked.",
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

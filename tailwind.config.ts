import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f6",
          100: "#eeeeec",
          200: "#d8d8d4",
          300: "#b4b4ad",
          400: "#8a8a81",
          500: "#64645c",
          600: "#4a4a43",
          700: "#32322d",
          800: "#1d1d1a",
          900: "#121210",
          950: "#0a0a09",
        },
        accent: {
          DEFAULT: "#c8a25a",
          soft: "#e8d4a1",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Source Serif 4",
          "Source Serif Pro",
          "Iowan Old Style",
          "Apple Garamond",
          "Baskerville",
          "Georgia",
          "serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "68ch",
        measure: "72ch",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "68ch",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

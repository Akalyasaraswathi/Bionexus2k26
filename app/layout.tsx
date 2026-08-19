import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIONEXUS 2K26 | National Level Technical Symposium — PSR Engineering College",
  description:
    "BioNexus 2K26 — a national level technical symposium by the Department of Biomedical Engineering, PSR Engineering College, Sivakasi. 22 September 2026.",
  openGraph: {
    title: "BIONEXUS 2K26 | The Future of Biomedical Innovation",
    description:
      "National Level Technical Symposium · Dept. of Biomedical Engineering, PSR Engineering College · 22 September 2026",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

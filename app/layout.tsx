import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";


const trispace = Trispace({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-trispace",   // ← add this
});

export const metadata: Metadata = {
  title: {
    default: "Anant's Neural Space",
    template: "%s | Anant",
  },
  description: "Projects, blogs and a serene of the pulse of the machine.",
  keywords: ["Anant", "portfolio", "AI", "projects", "neural", "network"],
  authors: [{ name: "Anant Kumar Sinha" }],

  openGraph: {
    title: "Anant's Neural Space",
    description: "Check out my projects and blogs",
    url: "https://anant-neural-cadet.vercel.app/",
    siteName: "Anant's Neural Space",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anant's Neural Space",
    description: "AI, Dev, Neural Networks and a voyage through strange eons of thoughts",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={trispace.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
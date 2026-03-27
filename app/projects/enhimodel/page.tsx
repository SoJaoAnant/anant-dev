import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";

import GridBackground3 from "@/components/GridBackground3";
import MusicPlayer from "@/components/MusicPlayer";
import ProjectShowcaseCarousel from "@/components/ProjectShowcaseCarousel";

const CONTEXTVAULT_SHOWCASE = [
  { src: "/projects/enhimodel/enhi_result.png", alt: "english to hindi results" },
];

async function readContextVaultMarkdown() {
  const markdownPath = path.join(
    process.cwd(),
    "public",
    "projects",
    "enhimodel",
    "enhimodel.md"
  );
  return fs.readFile(markdownPath, "utf8");
}

export default async function ContextVaultPage() {
  const markdown = await readContextVaultMarkdown();

  return (
    <GridBackground3>
      <MusicPlayer />

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-0">
        <div className="flex w-full items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-3 py-2 transition hover:scale-[1.2]"
          >
            <img src="/icons/go_back.svg" alt="go_back" width={40} height={40} />
          </Link>
        </div>

        <ProjectShowcaseCarousel images={CONTEXTVAULT_SHOWCASE} />

        <section className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-sm">
          <article className="space-y-4 text-white/80">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-semibold tracking-wide text-white">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="pt-4 text-xl font-semibold tracking-wide text-white/95">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="text-sm leading-relaxed tracking-wide text-white/75">
                    {children}
                  </p>
                ),
                li: ({ children }) => (
                  <li className="ml-5 list-disc text-sm leading-relaxed tracking-wide text-white/75">
                    {children}
                  </li>
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </GridBackground3>
  );
}


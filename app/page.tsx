import Image from "next/image";
import GridBackground3 from "@/components/GridBackground3";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/hero";
import { Break } from "../components/break";
import { Footer } from "@/components/footer";
import { Connect } from "@/components/connect";
import { TechStack } from "@/components/TechStack";
import { BlogSection } from "@/components/BlogSection";
import { ProjectSection } from "@/components/ProjectSection";

export default function Home() {

  const PROJECT_1 = {
    photoPng: "/ContextVault.png",
    title: "ContextVault",
    subtitle: "A RAG based AI document assistant",
    stack: ["Python", "JavaScript", "TypeScript", "LangChain", "FastAPI", "Next.js", "Tailwind", "ChromaDB", "Gemini (Embedding-001)"],
    description:
      "The system processes PDFs, DOCX, and TXT files by chunking and embedding their content into a vector database, enabling retrieval and querying. The RAG pipeline retrieves relevant chunks for a query before generating answers. The architecture integrates scalable API endpoints, embedding pipelines, and real-time document preview to deliver an efficient AI assisted document exploration experience.",
    href: "/projects/contextvault",
  };

  return (
    <>
    <GridBackground3>
      <MusicPlayer/>
      <Hero />

      <Break />
      <div className="flex pl-25">
        <h1 className="text-[clamp(20px,3vw,58px)] font-bold text-White tracking-[0.04em] leading-[1.1] ">Projects</h1>
      </div>
      <Break />

      <ProjectSection />

      <Break />
      <div className="flex items-baseline gap-3 pl-25">
        <h1 className="text-[clamp(20px,3vw,58px)] font-bold text-white tracking-[0.04em] leading-[1.1]">
          SkillSet
        </h1>
        <p className="text text-white/60 tracking-wide">
          Tech stack that I use
        </p>
      </div>
      <Break />

      <TechStack />

      <Break />
      <div className="flex items-baseline gap-3 pl-25">
        <h1 className="text-[clamp(20px,3vw,58px)] font-bold text-white tracking-[0.04em] leading-[1.1]">
          Technical Blogs
        </h1>
        <p className="text text-white/60 tracking-wide">
          My thoughts and writing
        </p>
      </div>
      <Break />

      <BlogSection />

      <Break />

      <Connect />
      <Footer />

    </GridBackground3>
    </>
  );
}
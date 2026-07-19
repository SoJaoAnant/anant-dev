"use client"

import { useState } from "react";
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
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
    <GridBackground3>
      <MusicPlayer/>
      <Hero/>

      <Break />
      <div className="flex pl-10 sm:pl-18 md:pl-25">
        <h1 className="text-[clamp(30px,3vw,58px)] font-bold text-White tracking-[0.04em] leading-[1.1] ">Experience</h1>
      </div>
      <Break />

      <ExperienceSection />

      <Break />
      <div className="flex pl-10 sm:pl-18 md:pl-25">
        <h1 className="text-[clamp(30px,3vw,58px)] font-bold text-White tracking-[0.04em] leading-[1.1] ">Projects</h1>
      </div>
      <Break />

      <ProjectSection />

      <Break />
      <div className="flex items-baseline gap-3 pl-10 sm:pl-18 md:pl-25 flex-col sm:flex-row">
        <h1 className="text-[clamp(30px,3vw,58px)] font-bold text-white tracking-[0.04em] leading-[1.1]">
          SkillSet
        </h1>
        <p className="text text-white/60 tracking-wide">
          Tech stack that I use
        </p>
      </div>
      <Break />

      <TechStack />

      <Break />
      <div className="flex items-baseline gap-3 pl-10 sm:pl-18 md:pl-25 flex-col sm:flex-row">
        <h1 className="text-[clamp(30px,3vw,58px)] font-bold text-white tracking-[0.04em] leading-[1.1]">
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
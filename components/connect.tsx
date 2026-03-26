import React from 'react';
import Image from "next/image";

export const Connect = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center pt-0 pb-10 px-4 text-center">

      {/* ── Heading ── */}
      <div>
        <h1 className="text-5xl font-bold text-white tracking-wide">
          Get in touch!
        </h1>
        <p className="mt-3 text-white/60 tracking-wide text-l">
          If you've come this far, you might be interested in connecting with me!
        </p>
      </div>

      {/* ── Content Row ── */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-10">

        {/* ── Profile Image ── */}
        <Image
          src={"/hagde.png"}
          alt="profile"
          width={160}
          height={160}
          className="rounded-full object-cover"
        />

        {/* ── Right Side ── */}
        <div className="flex flex-col items-center sm:items-start gap-4">

          {/* ── Availability Badge ── */}
          <div className="flex items-center gap-2 mx-4 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open for work
          </div>

          {/* ── Social Icons ── */}
          <div className="flex items-center gap-4 mt-2">

            <a href="mailto:anantsinha007@email.com" className="opacity-70 hover:opacity-100 hover:scale-[1.1] transition">
              <img src="/gmail.svg" width={28} height={28} />
            </a>

            <a href="https://x.com/SoJaoAnant" target="_blank" className="opacity-70 hover:opacity-100 hover:scale-[1.1] transition">
              <img src="/twitter.svg" width={28} height={28} />
            </a>

            <a href="https://github.com/SoJaoAnant" target="_blank" className="opacity-70 hover:opacity-100 hover:scale-[1.1] transition">
              <img src="/github.svg" width={28} height={28} />
            </a>

            <a href="https://www.linkedin.com/in/anant-kumar-sinha-3742971ab/" target="_blank" className="opacity-70 hover:opacity-100 hover:scale-[1.1] transition">
              <img src="/linkedin.svg" width={28} height={28} />
            </a>

            <a href="https://sojaoanant.itch.io/" className="opacity-70 hover:opacity-100 hover:scale-[1.1] transition">
              <img src="/itch.svg" width={28} height={28} />
            </a>

          </div>
        </div>
      </div>
    </main>
  );
};
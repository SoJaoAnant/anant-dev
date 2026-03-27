import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  color1?: string;
  color2?: string;
  href: string;
  githubHref?: string;    // optional — only renders icon if provided
  deployedHref?: string;  // optional — only renders icon if provided
}

export default function ProjectCard({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  stack,
  description,
  color1 = "#7e22ce",
  color2 = "#111827",
  href,
  githubHref,
  deployedHref,
}: ProjectCardProps) {
  return (
    <article className="group relative flex w-full max-w-5xl gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-sm">

      {/* ── external link icons — top right corner ── */}
      {(githubHref || deployedHref) && (
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="flex items-center justify-center w-8 h-8 transition-all duration-150 hover:scale-120"
            >
              <GithubIcon />
            </a>
          )}
          {deployedHref && (
            <a
              href={deployedHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live deployment`}
              className="flex items-center justify-center w-8 h-8 transition-all duration-150 hover:scale-120"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      )}

      <Link
        href={href}
        aria-label={`Open project: ${title}`}
        style={{
          "--c1": color1,
          "--c2": color2,
        } as React.CSSProperties}
        className="flex justify-center items-center relative block w-[320px] shrink-0 overflow-hidden rounded-xl 
        border border-gray-900
        bg-[linear-gradient(to_bottom_right,var(--c1),var(--c2))] 
        shadow-[0_0_0_1px_rgba(168,85,247,0.15),0_10px_40px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-center aspect-[16/9] w-full p-4 hover:scale-[1.1] transition">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={320}
            height={180}
            className="object-contain max-w-full max-h-full rounded-lg"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/40 to-transparent 
       opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute bottom-3 left-3 rounded-md border border-white/15 bg-black/40 px-2 py-1 text-xs tracking-wide text-white/90">
            View details
          </div>
        </div>
      </Link>

      <div className="min-w-0 flex-1">
        <h3 className="text-2xl font-semibold tracking-wide text-white/90 pr-20">{title}</h3>
        <p className="mt-1 text-sm tracking-wide text-white/55">{subtitle}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs tracking-wide text-white/70 hover:scale-[1.1] transition"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed tracking-wide text-white/60">
          {description}
        </p>
      </div>
    </article>
  );
}

function GithubIcon() {
  return (
      <img src="/icons/github.svg" alt="mushroom" width={40} height={40} />
    );
  }
  
  function ExternalLinkIcon() {
    return (
      <img src="/icons/webicon.svg" alt="mushroom" width={40} height={40} />
  );
}
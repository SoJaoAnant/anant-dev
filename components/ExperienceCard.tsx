import Image from "next/image";

interface ExperienceCardProps {
  logoSrc: string;
  logoAlt?: string;
  company: string;
  role: string;
  duration: string;
  description?: string;
}

export default function ExperienceCard({
  logoSrc,
  logoAlt = "",
  company,
  role,
  duration,
  description,
}: ExperienceCardProps) {
  return (
    <article className="group relative flex flex-col sm:flex-row w-full max-w-5xl gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-sm">

      <div
        className="flex justify-center items-center relative w-full sm:w-[160px] shrink-0 overflow-hidden rounded-xl
        border border-gray-900 bg-white/[0.04]
        shadow-[0_0_0_1px_rgba(168,85,247,0.15),0_10px_40px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-center aspect-square w-full p-6">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={160}
            height={160}
            className="object-contain max-w-full max-h-full rounded-lg"
          />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <h3 className="text-2xl font-semibold tracking-wide text-white/90">{company}</h3>
            <p className="mt-1 text-sm tracking-wide text-white/55">{role}</p>
          </div>
          <span className="shrink-0 text-sm tracking-wide text-white/50">{duration}</span>
        </div>

        {description && (
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-white/60">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}

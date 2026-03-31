"use client";

import Image from "next/image";

const NAME  = "Anant Kumar Sinha";
const ROLES = ["AI engineer", "NLP engineer", "Developer", "Guava Kidnapper"];
const BIO   = "Just a silly little techy guy who loves talking about algorithms, system architectures and games while learning, training and building everything I find intriguing. Constantly voyaging between 4 Kaggle notebooks, multiple projects I wanna make and strange eons of thoughts :D";

const SOCIALS = [
  { label: "Email",    href: "mailto:anantsinha007@email.com",                          Icon: MailIcon     },
  { label: "X",        href: "https://x.com/SoJaoAnant",                               Icon: XIcon        },
  { label: "GitHub",   href: "https://github.com/SoJaoAnant",                          Icon: GithubIcon   },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anant-kumar-sinha-3742971ab/", Icon: LinkedinIcon },
  { label: "Itch.io",  href: "https://sojaoanant.itch.io/",                             Icon: ItchIcon     },
];

interface HeroProps {
  isLight: boolean;
  onToggleTheme: () => void;
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-start text-center mt-10 gap-0">

      {/* ── Photo ── */}
      <Image
        src="/personal_info/photo.svg"
        alt="Anant's photo"
        width={250}
        height={250}
        priority                          // loads first, no lazy loading
        className="mb-2.5 transition-transform duration-200 hover:scale-105 cursor-pointer"
      />

      {/* ── Name ── */}
      <h1 className="text-[clamp(28px,5vw,52px)] font-bold text-[#e8e8e8] tracking-[0.04em] leading-[1.1] mt-2">
        {NAME}
      </h1>

      {/* ── Roles ── */}
      <p className="text-[clamp(11px,1.4vw,14px)] font-light text-white/45 tracking-[0.06em] mb-2.5 flex flex-wrap justify-center gap-0">
        {ROLES.map((r, i) => (
          <span key={r}>
            {i !== 0 && <span className="text-white/20 mx-1">|</span>}
            {r}
          </span>
        ))}
      </p>

      {/* ── Socials ── */}
      <div className="flex items-center justify-center gap-4 mb-2.5">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md flex items-center justify-center no-underline transition-transform duration-150 hover:scale-125 pointer-events-auto"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* ── Bio ── */}
      <p className="text-[clamp(12px,1.5vw,18px)] font-light text-white/60 leading-[1.8] max-w-[790px] tracking-[0.03em] px-4">
        {BIO}
      </p>

    </section>
  );
}

function MailIcon()     { return <img src="/icons/gmail.svg"    alt="Email"    width={29} height={29} />; }
function XIcon()        { return <img src="/icons/twitter.svg"  alt="X"        width={29} height={29} />; }
function GithubIcon()   { return <img src="/icons/github.svg"   alt="GitHub"   width={29} height={29} />; }
function LinkedinIcon() { return <img src="/icons/linkedin.svg" alt="LinkedIn" width={29} height={29} />; }
function ItchIcon()     { return <img src="/icons/itch.svg"     alt="Itch.io"  width={29} height={29} />; }
"use client";

const NAME        = "Anant Kumar Sinha";
const ROLES       = ["AI engineer", "NLP engineer", "Developer", "Guava Critique"];
const BIO         = "Just a silly little techy guy who loves talking about algorithms, system architectures and games while learning, training and building everything I find intriguing. Constantly living between 4 Kaggle notebooks, 1 wiki article and multiple projects I wanna make :D";

const PHOTO_SRC   = "photo.svg";

// Social links — add href for each, or remove ones you don't need
const SOCIALS = [
  { label: "Email", href: "mailto:anantsinha007@email.com", Icon: MailIcon },
  { label: "X", href: "https://x.com/SoJaoAnant", Icon: XIcon },
  { label: "GitHub", href: "https://github.com/SoJaoAnant",Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anant-kumar-sinha-3742971ab/", Icon: LinkedinIcon },
  { label: "Itch.io",  href: "https://sojaoanant.itch.io/", Icon: ItchIcon },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 90vh;
          margin-top: 40px;
          gap: 0;
          text-align: center;
        }

        .hero-photo {
            width: 250px;
            height: 250px;
            margin-bottom: 10px;

            transition: transform 0.2s ease;
            pointer-events: auto;
            }

            .hero-photo:hover {
            transform: scale(1.05);
        }


        /* ── Name ── */
        .hero-name {
          font-family: 'Trispace', monospace;
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 700;
          color: #e8e8e8;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin-top: 8px;
        }

        /* ── Roles ── */
        .hero-roles {
          font-family: 'Trispace', monospace;
          font-size: clamp(11px, 1.4vw, 14px);
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }
        .hero-roles span + span::before {
          content: ' | ';
          color: rgba(255,255,255,0.2);
        }

        /* ── Socials ── */
        .hero-socials {
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .hero-social-btn {
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: color 0.15s, transform 0.12s;
          text-decoration: none;
          pointer-events: auto;
        }
        .hero-social-btn:hover {
          color: #e8e8e8;
          scale: 1.1;
        }
        .hero-social-btn svg {
          width: 19px;
          height: 19px;
        }

        /* ── Bio ── */
        .hero-bio {
          font-family: 'Trispace', monospace;
          font-size: clamp(12px, 1.5vw, 18px);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 790px;
          letter-spacing: 0.03em;
        }
      `}</style>

      <section className="hero-root">

        {/* ── Photo ── */}
        <img src={PHOTO_SRC} alt="photo" className="hero-photo" />

        {/* ── Name ── */}
        <h1 className="hero-name">{NAME}</h1>

        {/* ── Roles ── */}
        <p className="hero-roles">
          {ROLES.map((r) => <span key={r}>{r}</span>)}
        </p>

        {/* ── Social icons ── */}
        <div className="hero-socials">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label} className="hero-social-btn" target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          ))}
        </div>

        {/* ── Bio ── */}
        <p className="hero-bio">{BIO}</p>

      </section>
    </>
  );
}

// ─── Social icon placeholders — replace SVG paths with your preferred icon set ──

function Photo() {
  // REPLACE with your icon
  return (
    <img src="/photo.svg" alt="mushroom" width={36} height={36} />
  );
}

function MailIcon() {
  // REPLACE with your icon
  return (
    <img src="/gmail.svg" alt="mushroom" width={29} height={29} />
  );
}

function XIcon() {
  // REPLACE with your icon
  return (
    <img src="/twitter.svg" alt="mushroom" width={29} height={29} />
  );
}

function GithubIcon() {
  // REPLACE with your icon
  return (
    <img src="/github.svg" alt="mushroom" width={29} height={29} />
  );
}

function LinkedinIcon() {
  // REPLACE with your icon
  return (
    <img src="/linkedin.svg" alt="mushroom" width={29} height={29} />
  );
}

function ItchIcon() {
  // REPLACE with your icon
  return (
    <img src="/itch.svg" alt="mushroom" width={29} height={29} />
  );
}
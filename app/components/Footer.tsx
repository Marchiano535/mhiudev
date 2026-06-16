"use client";

// ── Ganti nilai di bawah ini dengan info kamu ──────────────────────────────
const CONTACTS = {
  github: "https://github.com/Marchiano535",
  linkedin: "https://www.linkedin.com/in/marchiano-faraitody5353/",
  email: "marchiano.af@gmail.com",
  discord: "https://discord.com/users/mhiu",
  instagram: "https://instagram.com/marchftdy",
  whatsapp: "https://wa.me/6285172316794",
};
// ───────────────────────────────────────────────────────────────────────────

const links = [
  {
    key: "github",
    label: "GitHub",
    href: CONTACTS.github,
    color: "#f87171",
    icon: <GithubIcon />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: CONTACTS.linkedin,
    color: "#0a66c2",
    icon: <LinkedinIcon />,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${CONTACTS.email}`,
    color: "#ef4444",
    icon: <MailIcon />,
  },
  {
    key: "discord",
    label: "Discord",
    href: CONTACTS.discord,
    color: "#5865f2",
    icon: <DiscordIcon />,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: CONTACTS.instagram,
    color: "#e1306c",
    icon: <InstagramIcon />,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: CONTACTS.whatsapp,
    color: "#25d366",
    icon: <WhatsappIcon />,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: "5rem 1.5rem 3rem",
        position: "relative",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "3rem",
          background: "linear-gradient(to bottom, transparent, #dc2626)",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Heading */}
        <div>
          <span
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#dc2626",
              fontWeight: 600,
            }}
          >
            Contact
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              marginTop: "0.5rem",
              letterSpacing: "-1px",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
              lineHeight: 1.7,
            }}
          >
            Tertarik untuk berkolaborasi atau sekadar menyapa?
            Saya terbuka untuk peluang baru dan diskusi menarik.
          </p>
        </div>

        {/* Social grid — 3 kolom di desktop, 2 di mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            width: "100%",
          }}
        >
          {links.map(({ key, ...rest }) => (
            <SocialCard key={key} {...rest} />
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            width: "100%",
          }}
        >
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Marchiano Aulia Faraitody — Built with Next.js
          </p>
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 480px) {
          #contact .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}

// ─── SocialCard ──────────────────────────────────────────────────────────────
function SocialCard({
  href,
  label,
  color,
  icon,
}: {
  href: string;
  label: string;
  color: string;
  icon: React.ReactNode;
}) {
  const isEmail = href.startsWith("mailto");
  return (
    <a
      href={href}
      target={isEmail ? "_self" : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem 0.75rem",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        color: "#64748b",
        textDecoration: "none",
        fontSize: "0.8rem",
        fontWeight: 500,
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = color + "66";
        el.style.color = color;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = `0 6px 20px ${color}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.color = "#64748b";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {icon}
      {label}
    </a>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

"use client";

import { profile } from "@/app/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, DiscordIcon, InstagramIcon, WhatsappIcon } from "./icons";

const links = [
  {
    key: "github",
    label: "GitHub",
    href: profile.socials.github,
    color: "#64748b",
    icon: <GithubIcon size={22} />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.socials.linkedin,
    color: "#0a66c2",
    icon: <LinkedinIcon size={22} />,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${profile.socials.email}`,
    color: "#06b6d4",
    icon: <MailIcon size={22} />,
  },
  {
    key: "discord",
    label: "Discord",
    href: profile.socials.discord,
    color: "#5865f2",
    icon: <DiscordIcon size={22} />,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: profile.socials.instagram,
    color: "#e1306c",
    icon: <InstagramIcon size={22} />,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: profile.socials.whatsapp,
    color: "#25d366",
    icon: <WhatsappIcon size={22} />,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 px-6 relative border-t border-[var(--border)]"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent)]" />

      <div className="max-w-[700px] mx-auto text-center flex flex-col items-center gap-10">
        <div>
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Contact
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-3 leading-relaxed">
            Interested in collaborating or just want to say hi?
            I&apos;m open to new opportunities and interesting discussions.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          {links.map(({ key, ...rest }) => (
            <SocialCard key={key} {...rest} />
          ))}
        </div>

        <div className="pt-6 border-t border-[var(--border)] w-full">
          <p className="text-[#334155] text-xs">
            © {new Date().getFullYear()} {profile.name} — Built with Next.js
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #contact .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}

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
      className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] no-underline text-xs font-medium transition-all hover:-translate-y-0.5"
      style={{
        ["--hover-color" as string]: color,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = color + "55";
        el.style.color = color;
        el.style.boxShadow = `0 6px 20px ${color}18`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--text-muted)";
        el.style.boxShadow = "none";
      }}
    >
      {icon}
      {label}
    </a>
  );
}

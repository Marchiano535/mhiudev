"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "fraud-bigdata",
    title: "Fraud Detection",
    description:
      "Proyek analisis dan deteksi penipuan menggunakan Big Data. Menggunakan Python & Jupyter Notebook untuk pemrosesan dan analisis data.",
    tech: ["Python", "Jupyter", "Big Data"],
    color: "#f59e0b",
    github: "https://github.com/Marchiano535/fraud-bigdata",
    live: null,
    iconKey: "shield",
  },
  {
    id: "medical-toolkit",
    title: "Medical Toolkit",
    description:
      "Medical Toolkit adalah website untuk keperluan medis yang dibangun menggunakan Python. Bisa untuk keperluan rumah sakit, klinik, dan lainnya.",
    tech: ["Python", "PySide6"],
    color: "#dc2626",
    github: "https://github.com/Marchiano535/medical-toolkit",
    live: null,
    iconKey: "layout",
  },
  {
    id: "money-manager",
    title: "Money Manager",
    description:
      "Aplikasi manajemen keuangan berbasis web. Fitur pencatatan pemasukan & pengeluaran yang dibangun dengan HTML & JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    color: "#22c55e",
    github: "https://github.com/Marchiano535/MoneyManager",
    live: null,
    iconKey: "wallet",
  },
];

function ProjectIcon({ iconKey, color }: { iconKey: string; color: string }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "layout":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...props}>
          <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <circle cx="16" cy="13" r="1" fill={color} stroke="none" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="8" /></svg>;
  }
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".project-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Divider line */}
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

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#dc2626",
              fontWeight: 600,
            }}
          >
            Work
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
            Selected Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card"
              style={{
                borderRadius: "16px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                opacity: 0,
                transform: "translateY(30px)",
                transition:
                  "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = project.color + "44";
                el.style.boxShadow = `0 8px 30px ${project.color}18`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: project.color + "18",
                      border: `1px solid ${project.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ProjectIcon iconKey={project.iconKey} color={project.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#f1f5f9",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.3rem",
                        borderRadius: "6px",
                        color: "#64748b",
                        transition: "color 0.2s",
                        textDecoration: "none",
                      }}
                      title="Live Demo"
                      onMouseEnter={(e) => ((e.currentTarget.style.color = project.color))}
                      onMouseLeave={(e) => ((e.currentTarget.style.color = "#64748b"))}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.3rem",
                      borderRadius: "6px",
                      color: "#64748b",
                      transition: "color 0.2s",
                      textDecoration: "none",
                    }}
                    title="GitHub"
                    onMouseEnter={(e) => ((e.currentTarget.style.color = "#f87171"))}
                    onMouseLeave={(e) => ((e.currentTarget.style.color = "#64748b"))}
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  margin: 0,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tech badges */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: "rgba(148, 163, 184, 0.08)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      color: "#94a3b8",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="https://github.com/Marchiano535?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#dc2626",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "0.5rem")}
          >
            Lihat semua project di GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

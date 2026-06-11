"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const skills = [
  { name: "React / Next.js", key: "react",      color: "#61dafb", img: "/img/react.png" },
  { name: "TypeScript",      key: "typescript", color: "#3178c6", img: null },
  { name: "JavaScript",      key: "javascript", color: "#f7df1e", img: null },
  { name: "Python",          key: "python",     color: "#3776ab", img: "/img/python.png" },
  { name: "PHP",             key: "php",        color: "#777bb4", img: "/img/php.png" },
  { name: "Laravel",         key: "laravel",    color: "#ff2d20", img: "/img/Laravel.png" },
  { name: "Data Analysis",   key: "data",       color: "#e879f9", img: "/img/Data analyst.png" },
  { name: "HTML",            key: "html",       color: "#e34f26", img: "/img/HTML.png" },
  { name: "CSS",             key: "css",        color: "#2965f1", img: "/img/css.png" },
  { name: "Jupyter",         key: "jupyter",    color: "#f37626", img: "/img/Jupyter.png" },
];

// SVG fallback untuk skill tanpa gambar
function SvgIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <rect width="24" height="24" rx="3" fill={color} />
          <path
            d="M13.5 11.5h3v1.3h-1.7V18H13.5v-5.2H11.8V11.5h1.7zM7 11.5h5.5v1.3H10v1.4c.3-.1.6-.1 1-.1 1.6 0 2.8.9 2.8 2.4 0 1.5-1.1 2.5-2.9 2.5-.9 0-1.7-.2-2.3-.5l.3-1.2c.5.3 1.1.4 1.8.4.8 0 1.4-.4 1.4-1.1 0-.7-.5-1.1-1.4-1.1-.3 0-.6 0-.9.1V11.5z"
            fill="white"
          />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <rect width="24" height="24" rx="3" fill={color} />
          <path
            d="M6 17.5c.4.7 1.1 1.2 2 1.2 1 0 1.7-.5 1.7-1.4V12h-1.5v5.2c0 .3-.2.5-.5.5-.3 0-.5-.2-.7-.5L6 17.5zM12.5 17.4c.5.8 1.3 1.3 2.4 1.3 1.4 0 2.3-.7 2.3-1.9 0-1.1-.7-1.6-1.8-2.1l-.4-.2c-.5-.2-.7-.4-.7-.7 0-.3.2-.5.6-.5.4 0 .6.2.9.5l1-.9c-.5-.7-1.2-1-2-1-1.2 0-2.1.7-2.1 1.8 0 1 .7 1.6 1.7 2l.4.2c.6.2.8.4.8.8 0 .3-.3.6-.8.6s-.9-.3-1.2-.8l-1.1.9z"
            fill="#333"
          />
        </svg>
      );
    default:
      return <span style={{ fontSize: "1.6rem", color }}>•</span>;
  }
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ padding: "6rem 1.5rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#7c3aed",
              fontWeight: 600,
            }}
          >
            Tech Stack
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
            What I Work With
          </h2>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card glass-card"
              style={{
                padding: "1.25rem 1rem",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.7rem",
                opacity: 0,
                transform: "translateY(20px)",
                transition:
                  "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = skill.color + "55";
                el.style.boxShadow = `0 4px 20px ${skill.color}22`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon: pakai gambar asli kalau ada, SVG kalau tidak */}
              <div style={{ width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {skill.img ? (
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={38}
                    height={38}
                    style={{ objectFit: "contain", width: "38px", height: "38px" }}
                  />
                ) : (
                  <SvgIcon name={skill.key} color={skill.color} />
                )}
              </div>

              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "#cbd5e1",
                  textAlign: "center",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

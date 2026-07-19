"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { skills } from "@/app/lib/data";

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
      return <span className="text-xl" style={{ color }}>•</span>;
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
              }, i * 60);
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
      className="py-24 px-6 relative"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Tech Stack
          </span>
          <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            What I Work With
          </h2>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card card rounded-xl p-5 flex flex-col items-center gap-3 opacity-0 translate-y-5 transition-all duration-500 cursor-default"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = skill.color + "44";
                el.style.boxShadow = `0 4px 20px ${skill.color}18`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <div className="w-[38px] h-[38px] flex items-center justify-center">
                {skill.img ? (
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={38}
                    height={38}
                    className="object-contain w-[38px] h-[38px]"
                  />
                ) : (
                  <SvgIcon name={skill.key} color={skill.color} />
                )}
              </div>
              <span className="text-xs font-medium text-[var(--text-soft)] text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

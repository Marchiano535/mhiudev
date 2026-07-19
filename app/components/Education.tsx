"use client";

import { useEffect, useRef } from "react";
import { education } from "@/app/lib/data";
import { GraduationIcon } from "./icons";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".edu-card").forEach((el, i) => {
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
      id="education"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent)]" />

      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Education
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            Where I Studied
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="edu-card card rounded-xl p-6 opacity-0 translate-y-5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center flex-shrink-0">
                  <GraduationIcon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-[var(--text)] text-lg">
                        {edu.degree}
                      </h3>
                      <p className="text-[var(--accent)] text-sm font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

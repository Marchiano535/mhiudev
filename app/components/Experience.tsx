"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/app/lib/data";
import { BriefcaseIcon } from "./icons";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".exp-card").forEach((el, i) => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Experience
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            Where I&apos;ve Worked
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="exp-card relative pl-12 opacity-0 translate-y-5 transition-all duration-500"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-[40px] h-[40px] rounded-xl bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center">
                  <BriefcaseIcon size={18} />
                </div>

                <div className="card rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-[var(--text)] text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--accent)] text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.15)] text-[var(--accent-light)] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

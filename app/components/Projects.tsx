"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/app/lib/data";
import { GithubIcon, ExternalIcon, ProjectIcon, ArrowIcon } from "./icons";

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
      className="py-24 px-6 relative"
    >
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent)]" />

      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Work
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card card rounded-2xl p-6 flex flex-col gap-4 opacity-0 translate-y-5 transition-all duration-500"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = project.color + "33";
                el.style.boxShadow = `0 8px 30px ${project.color}10`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: project.color + "15",
                      border: `1px solid ${project.color}25`,
                    }}
                  >
                    <ProjectIcon iconKey={project.iconKey} color={project.color} />
                  </div>
                  <h3 className="font-display font-bold text-[var(--text)] text-base m-0">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors no-underline"
                      title="Live Demo"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors no-underline"
                    title="GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                </div>
              </div>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed m-0 flex-1">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[rgba(148,163,184,0.06)] border border-[rgba(148,163,184,0.1)] text-[var(--text-soft)] text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/Marchiano535?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent)] no-underline font-medium text-sm hover:gap-3 transition-all"
          >
            View all projects on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

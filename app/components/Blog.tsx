"use client";

import { useEffect, useRef } from "react";
import { blog } from "@/app/lib/data";
import { BookIcon } from "./icons";

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
      id="blog"
      ref={sectionRef}
      className="reveal py-24 px-6 relative"
    >
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent)]" />

      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] font-semibold">
            Blog
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[var(--text)] mt-2 tracking-tight">
            Latest Thoughts
          </h2>
        </div>

        {blog.length === 0 ? (
          <div className="card rounded-xl p-12 text-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center mx-auto mb-4">
              <BookIcon size={20} />
            </div>
            <p className="text-[var(--text-muted)] text-sm">
              Posts coming soon. Stay tuned.
            </p>
          </div>
        ) : (
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {blog.map((post, i) => (
              <div
                key={i}
                className="card rounded-xl p-6 opacity-0 translate-y-5 transition-all duration-500"
              >
                <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                <h3 className="font-display font-bold text-[var(--text)] mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.15)] text-[var(--accent-light)] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

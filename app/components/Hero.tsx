"use client";

import Image from "next/image";
import { profile } from "@/app/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div
        className="max-w-[1100px] w-full mx-auto flex flex-col items-center text-center gap-6 relative z-10"
        style={{ animation: "fadeInUp 0.8s ease forwards" }}
      >
        {/* Avatar */}
        <div className="animate-float relative w-[120px] h-[120px]">
          <div
            className="absolute inset-[-4px] rounded-full"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          />
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={120}
            height={120}
            className="rounded-full border-[3px] border-[var(--bg-primary)] relative z-10 object-cover"
            priority
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(6,182,212,0.2)] text-xs text-[var(--accent)] font-medium">
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow"
          />
          {profile.status}
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-[var(--text)] leading-tight tracking-tight m-0" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profile.name}</span>
        </h1>

        {/* Role */}
        <p className="text-[var(--text-soft)] max-w-[500px] leading-relaxed m-0" style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>
          Informatics student at{" "}
          <span className="text-[var(--accent)] font-medium">
            Telkom University
          </span>{" "}
          — building web apps & exploring data
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center mt-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white no-underline font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.3)]"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-soft)] no-underline font-semibold text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

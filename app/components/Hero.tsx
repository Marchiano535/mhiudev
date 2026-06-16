"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Background gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          position: "relative",
          zIndex: 1,
          animation: "fadeInUp 0.8s ease forwards",
        }}
      >
        {/* Avatar */}
        <div
          className="animate-float"
          style={{
            position: "relative",
            width: "120px",
            height: "120px",
          }}
        >
          {/* Glow ring */}
          <div
            className="animate-glow"
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #dc2626, #ef4444)",
              zIndex: 0,
            }}
          />
          <Image
            src="https://avatars.githubusercontent.com/u/58412970?v=4"
            alt="Marchiano Avatar"
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              border: "3px solid var(--bg-primary)",
              position: "relative",
              zIndex: 1,
              objectFit: "cover",
            }}
            priority
          />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 1rem",
            borderRadius: "9999px",
            background: "rgba(220, 38, 38, 0.1)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
            fontSize: "0.8rem",
            color: "#f87171",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            color: "#f1f5f9",
            margin: 0,
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Marchiano Aulia Faraitody</span>
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#94a3b8",
            maxWidth: "500px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Informatics student at{" "}
          <span style={{ color: "#f87171", fontWeight: 500 }}>
            Telkom University
          </span>{" "}
          — building web apps & exploring data
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <a
            id="hero-github-btn"
            href="https://github.com/Marchiano535"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.5rem",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #dc2626, #b91c1c)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 20px rgba(220, 38, 38, 0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 30px rgba(220, 38, 38, 0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(220, 38, 38, 0.3)";
            }}
          >
            <GithubIcon size={18} />
            GitHub
          </a>

          <a
            id="hero-linkedin-btn"
            href="https://www.linkedin.com/in/marchiano-faraitody5353/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.5rem",
              borderRadius: "10px",
              background: "transparent",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.borderColor = "#f87171";
              el.style.color = "#f87171";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "rgba(148, 163, 184, 0.3)";
              el.style.color = "#cbd5e1";
            }}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>


      </div>
    </section>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/app/lib/data";
import { GithubIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6"
      style={{
        background: scrolled ? "rgba(10, 10, 15, 0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-display font-bold text-xl text-[var(--text)] no-underline tracking-tight"
        >
          <span className="text-[var(--accent)]">M</span>archiano
        </a>

        {/* Desktop links */}
        <div className="hidden-mobile flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--text-soft)] no-underline text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[rgba(6,182,212,0.3)] bg-[var(--accent-dim)] text-[var(--accent)] no-underline text-sm font-medium hover:bg-[rgba(6,182,212,0.15)] hover:border-[var(--accent)] transition-all"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile bg-transparent border-none cursor-pointer text-[var(--text)] p-1"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="show-mobile bg-[rgba(10,10,15,0.98)] border-t border-[var(--border)] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-soft)] no-underline text-base font-medium hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

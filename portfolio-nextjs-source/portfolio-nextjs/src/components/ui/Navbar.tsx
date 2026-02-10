"use client";
// ── components/ui/Navbar.tsx ──

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/data/site-data";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Experience", href: "#experience" },
  { label: "Insights",   href: "#blog"       },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [isDark,     setIsDark]     = useState(true);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrollPct,  setScrollPct]  = useState(0);
  const [scrolled,   setScrolled]   = useState(false);

  // Init theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  // Track scroll
  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct((window.scrollY / docH) * 100);
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const html = document.documentElement;
    if (next) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all"
        style={{
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-40 h-[68px] flex items-center justify-between px-6 md:px-8 transition-all"
        style={{
          background:   scrolled ? "rgba(9,14,26,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link href="/" className="font-serif text-[1.15rem] text-[var(--text)] no-underline tracking-tight z-content">
          Ngô Bá Quân
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none z-content">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[0.85rem] font-medium text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3 z-content">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={siteConfig.cvLink}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[0.85rem] font-semibold text-white no-underline rounded-xl px-4 py-2 transition-all hover:-translate-y-0.5"
            style={{ background: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" }}
          >
            <Download size={14} />
            Download CV
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} color="var(--text)" /> : <Menu size={22} color="var(--text)" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-[68px] left-0 right-0 z-30 flex flex-col gap-1 p-5"
          style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.95rem] font-medium no-underline py-3"
              style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.cvLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 text-[0.9rem] font-semibold text-white no-underline rounded-xl py-3 transition-all"
            style={{ background: "var(--accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      )}
    </>
  );
}

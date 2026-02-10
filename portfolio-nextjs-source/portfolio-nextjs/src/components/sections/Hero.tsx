"use client";
// ── components/sections/Hero.tsx ──

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, BarChart2 } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] pb-16 overflow-hidden"
    >
      {/* Glow blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:   "radial-gradient(circle, rgba(79,142,247,0.09) 0%, transparent 70%)",
          top:          "50%",
          left:         "50%",
          transform:    "translate(-50%, -50%)",
        }}
      />

      <div className="section-container w-full">
        <div className="max-w-[820px] relative z-content">

          {/* Status tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[0.78rem] font-medium mb-7"
            style={{ background: "var(--bg-card2)", borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-blink"
              style={{ background: "var(--green)" }}
            />
            Open to opportunities · {siteConfig.location}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[var(--text)] mb-3"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.05 }}
          >
            Ngô Bá{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Quân</em>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[1.05rem] font-medium mb-5"
            style={{ color: "var(--text-muted)" }}
          >
            Data Analyst
            <span style={{ color: "var(--text-dim)", margin: "0 8px" }}>·</span>
            SQL
            <span style={{ color: "var(--text-dim)", margin: "0 8px" }}>·</span>
            Power BI
            <span style={{ color: "var(--text-dim)", margin: "0 8px" }}>·</span>
            Python
            <span style={{ color: "var(--text-dim)", margin: "0 8px" }}>·</span>
            Excel
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-serif italic mb-10"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color:    "var(--text)",
              opacity:  0.85,
            }}
          >
            "{siteConfig.tagline}"
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-white no-underline rounded-xl px-5 py-3 transition-all hover:-translate-y-0.5"
              style={{ background: "var(--accent)", boxShadow: "0 0 24px var(--accent-glow)" }}
            >
              <BarChart2 size={15} />
              View Projects
            </a>

            <a
              href={siteConfig.cvLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[0.875rem] font-semibold no-underline rounded-xl px-5 py-3 border transition-all hover:-translate-y-0.5"
              style={{
                background:  "transparent",
                borderColor: "var(--border)",
                color:       "var(--text)",
              }}
            >
              <Download size={15} />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[0.875rem] font-semibold no-underline rounded-xl px-5 py-3 border transition-all hover:-translate-y-0.5"
              style={{
                background:  "transparent",
                borderColor: "var(--border)",
                color:       "var(--text)",
              }}
            >
              <Mail size={15} />
              Contact
            </a>
          </motion.div>

          {/* Proof metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 max-w-[600px] border rounded-[20px] overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            {siteConfig.heroMetrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-6 px-4 text-center transition-all"
                style={{ background: "var(--bg-card)" }}
              >
                <div
                  className="font-serif leading-none mb-1.5"
                  style={{ fontSize: "2.2rem", color: "var(--text)" }}
                >
                  <span style={{ color: "var(--accent)" }}>
                    {m.value.replace("+", "").replace("×", "")}
                  </span>
                  {m.value.includes("+") ? "+" : m.value.includes("×") ? "×" : ""}
                </div>
                <div
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.06em]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

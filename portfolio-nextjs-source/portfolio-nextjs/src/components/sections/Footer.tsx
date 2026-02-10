// ── components/sections/Footer.tsx ──

import { Linkedin, Github, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container py-9">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[0.82rem]" style={{ color: "var(--text-dim)" }}>
              © 2025 {siteConfig.name} · {siteConfig.location}
            </p>
            <p className="text-[0.78rem] mt-0.5" style={{ color: "var(--text-dim)" }}>
              {siteConfig.role} · SQL · Power BI · Python
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border no-underline transition-all"
              style={{
                background:  "var(--bg-card)",
                borderColor: "var(--border)",
                color:       "var(--text-muted)",
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border no-underline transition-all"
              style={{
                background:  "var(--bg-card)",
                borderColor: "var(--border)",
                color:       "var(--text-muted)",
              }}
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-8 h-8 rounded-lg flex items-center justify-center border no-underline transition-all"
              style={{
                background:  "var(--bg-card)",
                borderColor: "var(--border)",
                color:       "var(--text-muted)",
              }}
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

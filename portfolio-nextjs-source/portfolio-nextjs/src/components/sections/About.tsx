// ── components/sections/About.tsx ──

import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, SkillPill } from "@/components/ui/primitives";
import { siteConfig } from "@/data/site-data";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Text column */}
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
            <h2
              className="font-serif mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
            >
              Analyst who speaks{" "}
              <em style={{ color: "var(--accent)" }}>business first.</em>
            </h2>

            <div className="w-10 h-0.5 rounded mb-7" style={{
              background: "linear-gradient(90deg, var(--accent), var(--accent2))"
            }} />

            {siteConfig.aboutText.map((para, i) => (
              <p
                key={i}
                className="mb-4 text-[1.05rem] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </FadeIn>

          {/* Skills column */}
          <FadeIn delay={0.1}>
            <SectionLabel>Tech Stack</SectionLabel>

            <div className="mt-8">
              <p
                className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Core Tools
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {siteConfig.coreSkills.map((s) => (
                  <SkillPill key={s} primary>{s}</SkillPill>
                ))}
              </div>

              <p
                className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Analytics & Modeling
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {siteConfig.analyticsSkills.map((s) => (
                  <SkillPill key={s}>{s}</SkillPill>
                ))}
              </div>

              <p
                className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.softSkills.map((s) => (
                  <SkillPill key={s}>{s}</SkillPill>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

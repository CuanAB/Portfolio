// ── components/sections/Experience.tsx ──

import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, ResultChip } from "@/components/ui/primitives";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/data/site-data";
import type { TimelineEntry } from "@/types";

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div
      className="relative pl-7"
      style={{
        borderLeft: "1px solid",
        borderImage: "linear-gradient(180deg, var(--accent), var(--accent2), transparent) 1",
      }}
    >
      {entries.map((e, i) => (
        <div key={i} className="relative mb-10 last:mb-0">
          {/* Dot */}
          <div
            className="absolute w-2.5 h-2.5 rounded-full border-2 top-1.5"
            style={{
              left:        "-29px",
              background:  "var(--accent)",
              borderColor: "var(--bg)",
              boxShadow:   "0 0 0 1px var(--accent)",
            }}
          />

          <div
            className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] mb-1"
            style={{ color: "var(--accent)" }}
          >
            {e.date}
          </div>

          <div
            className="font-serif text-[1.15rem] mb-0.5"
            style={{ color: "var(--text)" }}
          >
            {e.title}
          </div>

          <div
            className="text-[0.85rem] font-medium mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            {e.org}
          </div>

          <p className="text-[0.9rem] mb-3" style={{ color: "var(--text-muted)" }}>
            {e.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {e.results.map((r, j) => (
              <ResultChip key={j}>{r}</ResultChip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionLabel>Background</SectionLabel>

        <h2
          className="font-serif mb-14"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
        >
          Experience &<br />
          <em style={{ color: "var(--accent)" }}>Education</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience */}
          <FadeIn>
            <h3
              className="font-serif text-[1.4rem] mb-9 flex items-center gap-3"
              style={{ color: "var(--text)" }}
            >
              <Briefcase size={20} style={{ color: "var(--accent)" }} />
              Experience
            </h3>
            <Timeline entries={experience} />
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.1}>
            <h3
              className="font-serif text-[1.4rem] mb-9 flex items-center gap-3"
              style={{ color: "var(--text)" }}
            >
              <GraduationCap size={20} style={{ color: "var(--accent2)" }} />
              Education
            </h3>
            <Timeline entries={education} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

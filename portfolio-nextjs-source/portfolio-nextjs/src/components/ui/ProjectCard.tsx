// ── components/ui/ProjectCard.tsx ──

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Chip, TagPill, ToolBadge } from "./primitives";

/* CSS gradient thumbnails by color */
const thumbStyles: Record<string, React.CSSProperties> = {
  blue: {
    background: "linear-gradient(135deg, #0F1E4A 0%, #1A3A6B 40%, #0A2B5E 100%)",
  },
  violet: {
    background: "linear-gradient(135deg, #1A0A3A 0%, #2D1B5E 40%, #160F34 100%)",
  },
  green: {
    background: "linear-gradient(135deg, #0A2A1A 0%, #0F3D28 40%, #062016 100%)",
  },
};

/** Map tag string → TagPill color */
function tagColor(tag: string): "blue" | "violet" | "green" | "amber" {
  if (tag.includes("power-bi") || tag.includes("sql"))    return "blue";
  if (tag.includes("python") || tag.includes("pandas"))   return "violet";
  if (tag.includes("eda") || tag.includes("scikit"))      return "green";
  return "amber";
}

interface ProjectCardProps {
  project:    Project;
  featured?:  boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className="card flex flex-col overflow-hidden group relative transition-all hover:-translate-y-1"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Featured badge */}
      {featured && (
        <span
          className="absolute top-4 right-4 z-10 text-[0.68rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border"
          style={{
            background:  "var(--accent-glow)",
            borderColor: "rgba(79,142,247,0.3)",
            color:       "var(--accent)",
          }}
        >
          Featured
        </span>
      )}

      {/* Thumbnail */}
      <div
        className="h-[180px] relative overflow-hidden flex-shrink-0 flex items-end p-4"
        style={thumbStyles[project.thumbColor] ?? thumbStyles.blue}
      >
        {/* Visual based on color */}
        {project.thumbColor === "blue" && (
          <div className="flex items-end gap-1.5 w-full h-20 px-3">
            {[45, 60, 80, 55, 70, 95, 75, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height:     `${h}%`,
                  background: i % 3 === 2 ? "rgba(79,142,247,0.9)" : "rgba(79,142,247,0.55)",
                }}
              />
            ))}
          </div>
        )}

        {project.thumbColor === "violet" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="font-serif text-5xl"
                style={{ color: "rgba(167,139,250,0.9)" }}
              >
                68%
              </div>
              <div
                className="text-[0.6rem] tracking-[0.1em] uppercase mt-1"
                style={{ color: "rgba(167,139,250,0.55)" }}
              >
                Retention
              </div>
            </div>
          </div>
        )}

        {project.thumbColor === "green" && (
          <div className="absolute inset-0 overflow-hidden">
            {[
              [20, 20], [40, 35], [25, 55], [60, 25], [55, 60],
              [75, 70], [30, 75], [70, 40],
            ].map(([t, l], i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width:      `${12 + (i % 3) * 6}px`,
                  height:     `${12 + (i % 3) * 6}px`,
                  top:        `${t}%`,
                  left:       `${l}%`,
                  background: `rgba(52,211,153,${0.3 + (i % 4) * 0.15})`,
                }}
              />
            ))}
          </div>
        )}

        <span
          className="font-serif italic text-[1.05rem] relative z-10"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {project.tags[0]}
        </span>
      </div>

      {/* Body */}
      <div className="p-7 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.slice(0, 3).map((t) => (
            <TagPill key={t} color={tagColor(t.toLowerCase())}>
              {t}
            </TagPill>
          ))}
        </div>

        <h3
          className="font-serif text-[1.3rem] mb-2 leading-snug"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-[0.82rem] font-medium mb-4"
          style={{ color: "var(--text-dim)" }}
        >
          {project.context}
        </p>

        {/* Problem */}
        <p
          className="text-[0.7rem] font-bold uppercase tracking-[0.12em] mb-1.5"
          style={{ color: "var(--text-dim)" }}
        >
          Problem
        </p>
        <p className="text-[0.9rem] mb-3" style={{ color: "var(--text-muted)" }}>
          {project.problem}
        </p>

        {/* Approach (top 3) */}
        <p
          className="text-[0.7rem] font-bold uppercase tracking-[0.12em] mb-1.5"
          style={{ color: "var(--text-dim)" }}
        >
          Approach
        </p>
        <ul className="mb-3">
          {project.approach.slice(0, 3).map((a, i) => (
            <li
              key={i}
              className="text-[0.87rem] py-0.5 pl-4 relative"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="absolute left-0 text-[0.8rem]"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
              {a}
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {project.metrics.map((m, i) => (
            <Chip key={i} chip={m} />
          ))}
        </div>
        {project.sampleMetricsNote && (
          <p
            className="text-[0.65rem] italic mb-4"
            style={{ color: "var(--text-dim)" }}
          >
            * Sample metrics for portfolio demonstration
          </p>
        )}

        {/* Footer */}
        <div
          className="mt-auto pt-5 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex gap-2">
            {project.tools.slice(0, 3).map((t) => (
              <ToolBadge key={t} label={t} />
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-[0.82rem] font-semibold no-underline rounded-xl px-4 py-2 border transition-all hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
            style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
          >
            Read Case Study
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

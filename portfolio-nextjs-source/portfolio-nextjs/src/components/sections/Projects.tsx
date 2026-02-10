"use client";
// ── components/sections/Projects.tsx ──

import { useState } from "react";
import { Search } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/primitives";
import { featuredProjects, projects } from "@/data/projects";
import type { Project } from "@/types";

const FILTERS = ["All", "Power BI", "SQL", "Python", "EDA", "Dashboard"];

function filterTag(f: string): string {
  return f.toLowerCase().replace(" ", "-");
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query,        setQuery]        = useState("");

  const nonFeatured = projects.filter((p) => !p.featured);

  const filtered: Project[] = nonFeatured.filter((p) => {
    const matchFilter =
      activeFilter === "All" ||
      p.tags.some((t) => t.includes(filterTag(activeFilter)));
    const matchSearch =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.includes(query.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <section id="projects" className="py-24">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Work</SectionLabel>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
            >
              Featured<br />Case Studies
            </h2>
          </div>
          <p className="max-w-xs text-[1rem] text-right" style={{ color: "var(--text-muted)" }}>
            From raw data to boardroom-ready insights — how I tackle real analytical challenges.
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} featured />
            </FadeIn>
          ))}
        </div>

        {/* All projects */}
        <div>
          <h3
            className="text-[0.95rem] font-semibold uppercase tracking-[0.06em] mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            All Projects
          </h3>

          {/* Filter + Search row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-[0.8rem] font-medium px-4 py-1.5 rounded-full border transition-all"
                  style={
                    activeFilter === f
                      ? {
                          borderColor: "var(--accent)",
                          color:       "var(--accent)",
                          background:  "var(--accent-glow)",
                        }
                      : {
                          borderColor: "var(--border)",
                          color:       "var(--text-muted)",
                          background:  "var(--bg-card)",
                        }
                  }
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-dim)" }}
              />
              <input
                type="text"
                placeholder="Search projects…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full text-[0.85rem] outline-none transition-all w-[220px] focus:w-[280px] border"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                }}
              />
            </div>
          </div>

          {/* Mini project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.length === 0 ? (
              <p className="col-span-3 py-8 text-center" style={{ color: "var(--text-dim)" }}>
                No projects found. Try a different filter.
              </p>
            ) : (
              filtered.map((p) => (
                <a
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="block p-6 rounded-xl border transition-all hover:-translate-y-0.5 no-underline"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4
                      className="text-[0.95rem] font-semibold leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      {p.title}
                    </h4>
                    <span
                      className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
                      style={{
                        background:  "var(--accent-glow)",
                        color:       "var(--accent)",
                        border:      "1px solid rgba(79,142,247,0.2)",
                      }}
                    >
                      {p.tools[0]}
                    </span>
                  </div>
                  <p className="text-[0.83rem] mb-3" style={{ color: "var(--text-muted)" }}>
                    {p.problem.slice(0, 100)}…
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.metrics.slice(0, 1).map((m, i) => (
                      <span
                        key={i}
                        className="text-[0.75rem] font-bold px-3 py-0.5 rounded-[6px] border"
                        style={
                          m.type === "up"
                            ? { background: "rgba(52,211,153,0.08)", color: "var(--green)", borderColor: "rgba(52,211,153,0.2)" }
                            : m.type === "down"
                            ? { background: "rgba(251,113,133,0.08)", color: "#FB7185", borderColor: "rgba(251,113,133,0.2)" }
                            : { background: "rgba(79,142,247,0.08)", color: "var(--accent)", borderColor: "rgba(79,142,247,0.2)" }
                        }
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

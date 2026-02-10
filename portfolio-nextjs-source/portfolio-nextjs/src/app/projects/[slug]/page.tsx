// ── src/app/projects/[slug]/page.tsx ──
// Dynamic route: /projects/[slug]

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Chip, TagPill, ToolBadge } from "@/components/ui/primitives";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

/* Generate static params for all known slugs */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* Dynamic metadata per project */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title:       `${project.title} — Ngô Bá Quân`,
    description: project.problem,
    openGraph:   { title: project.title, description: project.problem },
  };
}

function tagColor(t: string): "blue" | "violet" | "green" | "amber" {
  if (t.includes("power-bi") || t.includes("sql"))   return "blue";
  if (t.includes("python") || t.includes("pandas"))  return "violet";
  if (t.includes("eda") || t.includes("scikit"))     return "green";
  return "amber";
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.tags.some((t) => project.tags.includes(t)))
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <main className="pt-[68px]">
        {/* ── Hero ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(79,142,247,0.06) 0%, transparent 100%)",
          }}
        >
          <div className="section-container">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[0.85rem] font-medium no-underline mb-8 transition-all hover:-translate-x-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={15} />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tools.map((t) => (
                <TagPill key={t} color={tagColor(t.toLowerCase())}>{t}</TagPill>
              ))}
            </div>

            <h1
              className="font-serif mb-4"
              style={{
                fontSize:   "clamp(2rem, 5vw, 3.8rem)",
                color:      "var(--text)",
                lineHeight: 1.1,
                maxWidth:   "800px",
              }}
            >
              {project.title}
            </h1>

            <p
              className="text-[1rem] font-medium mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {project.context} · {project.dataset}
            </p>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.metrics.map((m, i) => (
                <Chip key={i} chip={m} />
              ))}
            </div>
            {project.sampleMetricsNote && (
              <p className="text-[0.72rem] italic" style={{ color: "var(--text-dim)" }}>
                * Sample metrics for portfolio demonstration
              </p>
            )}
          </div>
        </section>

        {/* ── Case Study Body ── */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-12">

              {/* Main content */}
              <div>
                {/* Problem */}
                <CaseBlock title="Problem Statement">
                  <p className="text-[1.02rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.problem}
                  </p>
                </CaseBlock>

                {/* Approach */}
                <CaseBlock title="Approach & Methodology">
                  <ul className="flex flex-col gap-3">
                    {project.approach.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          className="text-[0.75rem] font-bold mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "var(--accent-glow)",
                            color:      "var(--accent)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span
                          className="text-[1.02rem] leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>

                {/* Impact */}
                <CaseBlock title="Business Impact">
                  <p className="text-[1.02rem] leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((m, i) => (
                      <Chip key={i} chip={m} />
                    ))}
                  </div>
                </CaseBlock>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-5">
                {/* Tools */}
                <div
                  className="p-5 rounded-xl border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.12em] mb-4"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[0.82rem] font-medium"
                        style={{
                          background:  "var(--bg-card2)",
                          borderColor: "var(--border)",
                          color:       "var(--text-muted)",
                        }}
                      >
                        <ToolBadge label={t} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Context */}
                <div
                  className="p-5 rounded-xl border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.12em] mb-3"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Project Context
                  </p>
                  <p className="text-[0.9rem]" style={{ color: "var(--text-muted)" }}>
                    {project.context}
                  </p>
                  <p className="text-[0.9rem] mt-2" style={{ color: "var(--text-muted)" }}>
                    Dataset: {project.dataset}
                  </p>
                </div>

                {/* GitHub link placeholder */}
                <a
                  href="https://github.com/CuanAB"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-5 rounded-xl border no-underline transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <ExternalLink size={16} style={{ color: "var(--accent)" }} />
                  <div>
                    <p className="text-[0.85rem] font-semibold">View on GitHub</p>
                    <p className="text-[0.78rem]" style={{ color: "var(--text-dim)" }}>
                      Source code & notebooks
                    </p>
                  </div>
                </a>
              </div>

            </div>

            {/* Related projects */}
            {related.length > 0 && (
              <div className="mt-20">
                <h3
                  className="font-serif text-[1.4rem] mb-7"
                  style={{ color: "var(--text)" }}
                >
                  Related Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/projects/${r.slug}`}
                      className="p-6 rounded-xl border no-underline transition-all hover:-translate-y-0.5"
                      style={{
                        background:  "var(--bg-card)",
                        borderColor: "var(--border)",
                        color:       "var(--text)",
                      }}
                    >
                      <h4 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                        {r.title}
                      </h4>
                      <p className="text-[0.85rem]" style={{ color: "var(--text-muted)" }}>
                        {r.context}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* Helper: section block */
function CaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-1 h-6 rounded"
          style={{ background: "linear-gradient(180deg, var(--accent), var(--accent2))" }}
        />
        <h2
          className="font-serif text-[1.5rem]"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

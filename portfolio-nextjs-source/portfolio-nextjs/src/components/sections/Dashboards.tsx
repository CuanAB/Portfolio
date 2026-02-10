// ── components/sections/Dashboards.tsx ──

import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/primitives";
import { ExternalLink, Info } from "lucide-react";
import { dashboards } from "@/data/site-data";

export default function Dashboards() {
  return (
    <section
      id="dashboards"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(79,142,247,0.03), transparent)",
      }}
    >
      <div className="section-container">
        <SectionLabel>Gallery</SectionLabel>

        <h2
          className="font-serif mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
        >
          Dashboard <em style={{ color: "var(--accent)" }}>Showcase</em>
        </h2>
        <p className="max-w-lg mb-10" style={{ color: "var(--text-muted)" }}>
          Interactive Power BI dashboards built for real business decisions.
          Click "View Live" to explore the embedded reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((db, i) => (
            <FadeIn key={db.id} delay={i * 0.1}>
              <div
                className="rounded-[20px] overflow-hidden border transition-all hover:shadow-2xl"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                {/* Preview mockup */}
                <div
                  className="h-[240px] relative overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      db.thumbColor === "blue"
                        ? "linear-gradient(135deg, #071020 0%, #0D1E40 50%, #07162E 100%)"
                        : "linear-gradient(135deg, #061A0E 0%, #0A2A18 50%, #041208 100%)",
                  }}
                >
                  {/* Mini dashboard mockup */}
                  <div
                    className="w-[88%] h-[85%] rounded-lg grid grid-cols-2 gap-2 p-3"
                    style={{
                      background:   "rgba(15,30,60,0.75)",
                      border:       "1px solid rgba(79,142,247,0.12)",
                    }}
                  >
                    {/* KPI boxes */}
                    <div
                      className="rounded-md p-3 flex flex-col gap-1"
                      style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.12)" }}
                    >
                      <div className="font-serif text-xl" style={{ color: "var(--accent)", lineHeight: 1 }}>
                        {db.kpi1.value}
                      </div>
                      <div className="text-[0.55rem] uppercase tracking-[0.08em]" style={{ color: "var(--text-dim)" }}>
                        {db.kpi1.label}
                      </div>
                    </div>
                    <div
                      className="rounded-md p-3 flex flex-col gap-1"
                      style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.12)" }}
                    >
                      <div className="font-serif text-xl" style={{ color: "var(--accent2)", lineHeight: 1 }}>
                        {db.kpi2.value}
                      </div>
                      <div className="text-[0.55rem] uppercase tracking-[0.08em]" style={{ color: "var(--text-dim)" }}>
                        {db.kpi2.label}
                      </div>
                    </div>

                    {/* Chart bar area */}
                    <div
                      className="col-span-2 rounded-md flex items-end gap-1 px-2 pb-1 pt-2"
                      style={{ background: "rgba(10,20,40,0.8)", border: "1px solid var(--border)" }}
                    >
                      {[40, 60, 45, 75, 55, 85, 65, 90, 70, 80].map((h, j) => (
                        <div
                          key={j}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              db.thumbColor === "blue"
                                ? j % 3 === 2 ? "rgba(79,142,247,0.9)" : "rgba(79,142,247,0.45)"
                                : j % 3 === 2 ? "rgba(52,211,153,0.9)" : "rgba(52,211,153,0.45)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h4
                    className="font-semibold mb-1.5"
                    style={{ color: "var(--text)" }}
                  >
                    {db.title}
                  </h4>
                  <p className="text-[0.85rem] mb-4" style={{ color: "var(--text-muted)" }}>
                    {db.description}
                  </p>

                  {db.embedUrl ? (
                    <a
                      href={db.embedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[0.82rem] font-semibold no-underline rounded-xl px-4 py-2 border transition-all"
                      style={{
                        borderColor: "var(--border)",
                        color:       "var(--text-muted)",
                        background:  "transparent",
                      }}
                    >
                      <ExternalLink size={13} />
                      View Live Dashboard
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-[0.82rem] font-medium cursor-not-allowed rounded-xl px-4 py-2 border"
                      style={{
                        borderColor: "var(--border)",
                        color:       "var(--text-dim)",
                        background:  "transparent",
                      }}
                    >
                      <ExternalLink size={13} />
                      Embed URL coming soon
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Embed instruction note */}
        <div
          className="mt-6 p-4 rounded-xl border flex gap-3 items-start"
          style={{
            background:   "var(--bg-card2)",
            borderColor:  "var(--border)",
            borderLeft:   "3px solid var(--accent)",
          }}
        >
          <Info size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
          <p className="text-[0.82rem]" style={{ color: "var(--text-muted)", margin: 0 }}>
            <strong style={{ color: "var(--accent)" }}>Embed Power BI dashboards: </strong>
            In Power BI Service → File → Embed Report → Public website → copy the URL.
            Then paste into <code
              className="px-1.5 py-0.5 rounded text-[0.8rem]"
              style={{ background: "var(--bg)", color: "var(--accent2)" }}
            >
              src/data/site-data.ts
            </code>{" "}
            under <code
              className="px-1.5 py-0.5 rounded text-[0.8rem]"
              style={{ background: "var(--bg)", color: "var(--accent2)" }}
            >
              embedUrl
            </code>.
          </p>
        </div>

      </div>
    </section>
  );
}

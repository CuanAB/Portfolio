// ── components/sections/Certifications.tsx ──

import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/primitives";
import { certifications } from "@/data/site-data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="section-container">
        <SectionLabel>Credentials</SectionLabel>

        <h2
          className="font-serif mb-9"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text)", lineHeight: 1.15 }}
        >
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <div
                className="rounded-xl border p-6 flex gap-4 items-start transition-all hover:-translate-y-0.5"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.3rem] flex-shrink-0 border"
                  style={
                    cert.status === "completed"
                      ? { background: "rgba(79,142,247,0.08)", borderColor: "rgba(79,142,247,0.2)" }
                      : { background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.2)" }
                  }
                >
                  {cert.icon}
                </div>

                <div>
                  <h4
                    className="text-[0.95rem] font-semibold mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className="text-[0.8rem] mb-2.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className="text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full border"
                    style={
                      cert.status === "completed"
                        ? {
                            background:  "rgba(52,211,153,0.08)",
                            borderColor: "rgba(52,211,153,0.2)",
                            color:       "var(--green)",
                          }
                        : {
                            background:  "rgba(251,191,36,0.08)",
                            borderColor: "rgba(251,191,36,0.2)",
                            color:       "var(--amber)",
                          }
                    }
                  >
                    {cert.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── components/sections/Blog.tsx ──

import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/primitives";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/site-data";

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        <SectionLabel>Insights</SectionLabel>

        <h2
          className="font-serif mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
        >
          Data <em style={{ color: "var(--accent)" }}>Perspectives</em>
        </h2>
        <p className="max-w-md mb-10" style={{ color: "var(--text-muted)" }}>
          Practical notes on analytics, tooling, and the craft of turning numbers into narratives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <a
                href="#"   /* ← Replace with your actual blog links */
                className="block p-7 rounded-[20px] border no-underline relative overflow-hidden transition-all group hover:-translate-y-0.5"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
                onClick={(e) => e.preventDefault()}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                  }}
                />

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 text-[0.75rem] font-medium" style={{ color: "var(--text-dim)" }}>
                  <span
                    className="px-2 py-0.5 rounded"
                    style={{
                      background:  "var(--accent-glow)",
                      color:       "var(--accent)",
                      border:      "1px solid rgba(79,142,247,0.2)",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-[1.15rem] mb-3 leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[0.87rem] mb-5" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div
                  className="flex items-center gap-1.5 text-[0.82rem] font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Read Article <ArrowRight size={13} />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

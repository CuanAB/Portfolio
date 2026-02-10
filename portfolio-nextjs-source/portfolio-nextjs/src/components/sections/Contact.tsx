"use client";
// ── components/sections/Contact.tsx ──

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/primitives";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to EmailJS / Resend / Formspree here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(79,142,247,0.035))",
      }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.4fr] gap-16 items-start">

          {/* Info column */}
          <FadeIn>
            <SectionLabel>Let's Connect</SectionLabel>
            <h2
              className="font-serif mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", lineHeight: 1.15 }}
            >
              Available for<br />
              <em style={{ color: "var(--accent)" }}>new projects.</em>
            </h2>
            <p className="mb-8 text-[1.02rem]" style={{ color: "var(--text-muted)" }}>
              I'm open to full-time roles, freelance analytical projects, and interesting data challenges.
              If you have a dataset that needs to become a decision — let's talk.
            </p>

            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border no-underline transition-all hover:-translate-y-0.5"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0"
                  style={{ background: "var(--bg-card2)", borderColor: "var(--border)" }}
                >
                  <Mail size={15} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <span
                    className="text-[0.7rem] block"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Email
                  </span>
                  <span className="text-[0.9rem]">{siteConfig.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border no-underline transition-all hover:-translate-y-0.5"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0"
                  style={{ background: "var(--bg-card2)", borderColor: "var(--border)" }}
                >
                  <Linkedin size={15} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <span
                    className="text-[0.7rem] block"
                    style={{ color: "var(--text-dim)" }}
                  >
                    LinkedIn
                  </span>
                  <span className="text-[0.9rem]">linkedin.com/in/quanngo2004</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border no-underline transition-all hover:-translate-y-0.5"
                style={{
                  background:  "var(--bg-card)",
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0"
                  style={{ background: "var(--bg-card2)", borderColor: "var(--border)" }}
                >
                  <Github size={15} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <span
                    className="text-[0.7rem] block"
                    style={{ color: "var(--text-dim)" }}
                  >
                    GitHub
                  </span>
                  <span className="text-[0.9rem]">github.com/CuanAB</span>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-[20px] border p-9"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <form onSubmit={handleSubmit}>
                {(["name", "email", "message"] as const).map((field) => (
                  <div key={field} className="mb-5">
                    <label
                      className="block text-[0.8rem] font-semibold uppercase tracking-[0.05em] mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Message"}
                    </label>
                    {field === "message" ? (
                      <textarea
                        required
                        rows={5}
                        placeholder="Hi Quân, I came across your portfolio and would love to discuss…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border outline-none resize-none transition-all text-[0.9rem]"
                        style={{
                          background:  "var(--bg)",
                          borderColor: "var(--border)",
                          color:       "var(--text)",
                          fontFamily:  "var(--font-dm-sans)",
                        }}
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        required
                        placeholder={field === "name" ? "Nguyen Van A" : "you@company.com"}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-[0.9rem]"
                        style={{
                          background:  "var(--bg)",
                          borderColor: "var(--border)",
                          color:       "var(--text)",
                          fontFamily:  "var(--font-dm-sans)",
                        }}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-[0.9rem] font-semibold text-white border-none transition-all flex items-center justify-center gap-2"
                  style={{
                    background: submitted ? "var(--green)" : "var(--accent)",
                    cursor:     "pointer",
                  }}
                >
                  {submitted ? (
                    "✓ Message Sent!"
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── src/app/page.tsx ──
// Main homepage: assembles all sections

import Navbar         from "@/components/ui/Navbar";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Projects       from "@/components/sections/Projects";
import Dashboards     from "@/components/sections/Dashboards";
import Experience     from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Blog           from "@/components/sections/Blog";
import Contact        from "@/components/sections/Contact";
import Footer         from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <Hero />

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── About ── */}
        <About />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Featured Projects + All Projects ── */}
        <Projects />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Dashboard Gallery ── */}
        <Dashboards />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Experience & Education ── */}
        <Experience />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Certifications ── */}
        <Certifications />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Blog / Insights ── */}
        <Blog />

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Contact ── */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

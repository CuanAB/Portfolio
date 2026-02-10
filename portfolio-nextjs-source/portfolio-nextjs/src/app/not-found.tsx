// ── src/app/not-found.tsx ──

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--bg)" }}
    >
      <p
        className="font-serif text-[6rem] leading-none mb-4"
        style={{ color: "var(--accent)", opacity: 0.3 }}
      >
        404
      </p>
      <h1 className="font-serif text-[2rem] mb-3" style={{ color: "var(--text)" }}>
        Page not found
      </h1>
      <p className="mb-8 max-w-sm" style={{ color: "var(--text-muted)" }}>
        Looks like this data point doesn't exist. Let's head back to the dashboard.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-white no-underline rounded-xl px-6 py-3"
        style={{ background: "var(--accent)" }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}

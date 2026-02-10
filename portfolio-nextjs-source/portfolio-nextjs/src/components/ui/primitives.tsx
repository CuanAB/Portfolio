// ── components/ui/primitives.tsx ──
// Tiny reusable components

import { cn } from "@/lib/utils";
import type { MetricChip as MetricChipType } from "@/types";

/* Section label with leading line */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <span className="block w-5 h-px" style={{ background: "var(--accent)" }} />
      <span
        className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </span>
    </div>
  );
}

/* Metric impact chip */
export function Chip({ chip }: { chip: MetricChipType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[0.78rem] font-bold px-3 py-1 rounded-[6px] border",
        chip.type === "up"      && "chip-up",
        chip.type === "down"    && "chip-down",
        chip.type === "neutral" && "chip-neutral"
      )}
    >
      {chip.label}
    </span>
  );
}

/* Skill pill */
export function SkillPill({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.82rem] font-medium border transition-all hover:-translate-y-0.5 cursor-default"
      style={
        primary
          ? {
              background:   "var(--accent-glow)",
              borderColor:  "rgba(79,142,247,0.3)",
              color:        "var(--accent)",
            }
          : {
              background:   "var(--bg-card2)",
              borderColor:  "var(--border)",
              color:        "var(--text-muted)",
            }
      }
    >
      {children}
    </span>
  );
}

/* Tag pill for projects */
export function TagPill({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "violet" | "green" | "amber";
}) {
  const cls: Record<string, string> = {
    blue:   "tag-blue",
    violet: "tag-violet",
    green:  "tag-green",
    amber:  "tag-amber",
  };
  return (
    <span className={cn("text-[0.72rem] font-semibold px-3 py-0.5 rounded-full tracking-[0.05em]", cls[color])}>
      {children}
    </span>
  );
}

/* Result chip (green) */
export function ResultChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[0.78rem] font-semibold px-3 py-1 rounded-full border"
      style={{
        background:  "rgba(52,211,153,0.08)",
        borderColor: "rgba(52,211,153,0.2)",
        color:       "var(--green)",
      }}
    >
      {children}
    </span>
  );
}

/* Tool icon badge */
export function ToolBadge({ label }: { label: string }) {
  // Abbreviate to 2-3 chars
  const abbr = label.length > 3 ? label.slice(0, 3).toUpperCase() : label.toUpperCase();
  return (
    <div
      className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[0.65rem] font-bold border"
      style={{ background: "var(--bg-card2)", borderColor: "var(--border)", color: "var(--text-dim)" }}
    >
      {abbr}
    </div>
  );
}

/* Animated fade-in wrapper (client) */

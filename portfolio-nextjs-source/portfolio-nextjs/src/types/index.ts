// ── Core project types ──

export interface MetricChip {
  label: string;
  type: "up" | "down" | "neutral";
}

export interface Project {
  slug:       string;
  title:      string;
  context:    string;       // e.g. "Marketing Team · 6 Platforms · 18 months"
  dataset:    string;       // e.g. "1.2M rows · PostgreSQL"
  tools:      string[];     // e.g. ["Power BI", "DAX", "SQL"]
  tags:       string[];     // for filtering: ["power-bi", "dashboard", "sql"]
  featured:   boolean;
  thumbColor: string;       // Tailwind gradient class or inline style key
  problem:    string;
  approach:   string[];
  impact:     string;       // paragraph
  metrics:    MetricChip[];
  sampleMetricsNote?: boolean; // true = show "sample metrics" disclaimer
}

export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  tag:       string;
  date:      string;
  readTime:  string;
}

export interface TimelineEntry {
  date:    string;
  title:   string;
  org:     string;
  desc:    string;
  results: string[];
}

export interface Certification {
  name:   string;
  issuer: string;
  year:   string;
  status: "completed" | "in-progress";
  icon:   string;
}

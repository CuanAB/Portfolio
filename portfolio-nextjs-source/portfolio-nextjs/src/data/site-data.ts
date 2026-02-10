// ── site-data.ts ──
// Static content: bio, experience, education, certifications, blog posts

import type { BlogPost, TimelineEntry, Certification } from "@/types";

// ── PERSONAL INFO ──────────────────────────────────────────────
export const siteConfig = {
  name:       "Ngô Bá Quân",
  role:       "Data Analyst",
  stack:      "SQL · Power BI · Python · Excel",
  tagline:    "I turn data into decisions.",
  email:      "quannb377@gmail.com",
  linkedin:   "https://www.linkedin.com/in/quanngo2004",
  github:     "https://github.com/CuanAB",
  cvLink:     "https://drive.google.com/file/d/1RPEJc8kYlcl_Rxwi2TahWyDzsnq52VAT/view?usp=sharing",
  location:   "Hà Nội, Vietnam",
  heroMetrics: [
    { value: "12+",  label: "Dashboards Built"   },
    { value: "5M+",  label: "Rows Processed"     },
    { value: "3×",   label: "Reporting Speed"    },
  ],
  aboutText: [
    "I'm a Data Analyst based in Hà Nội, with a passion for translating messy datasets into clear, actionable business insights. My approach always starts with the <strong>business question</strong>, not the tool.",
    "I specialize in building <strong>end-to-end analytical solutions</strong> — from data modeling and SQL pipelines to interactive Power BI dashboards that stakeholders actually use. I believe the best analysis is one that changes a decision.",
    "Beyond technical skills, I invest in <strong>data storytelling</strong> — making numbers understandable for non-technical audiences through clear visualizations, well-structured reports, and concise presentations.",
  ],
  coreSkills:      ["SQL", "Power BI", "Python", "Excel / VBA"],
  analyticsSkills: ["DAX", "Data Modeling", "ETL / ELT", "Star Schema", "Statistics", "pandas / numpy"],
  softSkills:      ["Data Storytelling", "Stakeholder Comm.", "Business Thinking", "Problem Framing"],
};

// ── EXPERIENCE ──────────────────────────────────────────────────
export const experience: TimelineEntry[] = [
  {
    date:    "2024 – Present",
    title:   "Data Analyst Intern",
    org:     "Company / Organization — Hà Nội",  // ← REPLACE
    desc:    "Developed Power BI dashboards for marketing and sales teams. Wrote optimized SQL queries against 5M+ row datasets. Automated monthly reporting workflows, reducing manual effort by 70%.",
    results: ["↓ 70% report time", "12 dashboards built"],
  },
  {
    date:    "2023",
    title:   "Freelance Data Projects",
    org:     "Independent · Remote",
    desc:    "Delivered customer segmentation analysis and sales performance reporting for 2 small businesses. Built Excel-based models for demand forecasting.",
    results: ["3 clients served", "↑ 18% decision speed"],
  },
];

// ── EDUCATION ──────────────────────────────────────────────────
export const education: TimelineEntry[] = [
  {
    date:    "2022 – 2026",
    title:   "Bachelor of [Your Major]",       // ← REPLACE
    org:     "Your University — Hà Nội, Vietnam", // ← REPLACE
    desc:    "Relevant coursework: Statistics & Probability, Database Management, Business Intelligence, Machine Learning Fundamentals, Data Visualization.",
    results: ["GPA: [Your GPA]"],               // ← REPLACE
  },
  {
    date:    "2023",
    title:   "Google Data Analytics Certificate",
    org:     "Coursera / Google",
    desc:    "8-course program covering data preparation, process, analysis, and visualization with R, SQL, and Tableau.",
    results: ["Professional Certificate"],
  },
];

// ── CERTIFICATIONS ──────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    name:   "Google Data Analytics",
    issuer: "Coursera · Google · 2023",
    year:   "2023",
    status: "completed",
    icon:   "📊",
  },
  {
    name:   "Microsoft PL-300",
    issuer: "Power BI Data Analyst Associate",
    year:   "2025",
    status: "in-progress",
    icon:   "🔷",
  },
  {
    name:   "SQL for Data Analysis",
    issuer: "Mode Analytics / Udemy · 2023",
    year:   "2023",
    status: "completed",
    icon:   "🗄",
  },
  {
    name:   "Python for Data Science",
    issuer: "DataCamp / Coursera · 2023",
    year:   "2023",
    status: "completed",
    icon:   "🐍",
  },
];

// ── BLOG POSTS ─────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    slug:     "star-schema-social-performance",
    title:    "How I Built a Star Schema for Social Media Performance",
    excerpt:  "Most analysts dump everything into a flat table. Here's why I spent two extra hours designing a proper star schema — and how it saved 40 hours of rework later.",
    tag:      "Power BI",
    date:     "Jan 2025",
    readTime: "6 min read",
  },
  {
    slug:     "dax-patterns-i-use",
    title:    "5 DAX Patterns I Use in Every Power BI Project",
    excerpt:  "Time intelligence, dynamic ranking, and the CALCULATE + FILTER combo that unlocks 80% of business questions. Copy-paste ready patterns with explanations.",
    tag:      "DAX",
    date:     "Dec 2024",
    readTime: "5 min read",
  },
  {
    slug:     "sql-optimization-checklist",
    title:    "My SQL Optimization Checklist for Analyst Queries",
    excerpt:  "Before I share any query with an engineer, I run through this 8-point checklist. It's caught slow scans, redundant joins, and missing indexes more times than I can count.",
    tag:      "SQL",
    date:     "Nov 2024",
    readTime: "4 min read",
  },
];

// ── DASHBOARD GALLERY ──────────────────────────────────────────
export const dashboards = [
  {
    id:          "social-dashboard",
    title:       "Social Media Performance Dashboard",
    description: "Multi-platform KPI tracker with time-intelligence and engagement breakdown.",
    embedUrl:    "", // ← PASTE Power BI public embed URL here
    thumbColor:  "blue",
    kpi1:        { value: "4.2M", label: "Total Reach" },
    kpi2:        { value: "6.8%", label: "Avg Eng. Rate" },
  },
  {
    id:          "sales-funnel-dashboard",
    title:       "Sales Funnel Visualization",
    description: "Stage-by-stage funnel with drop-off rates, cohort overlays, and conversion trend lines.",
    embedUrl:    "", // ← PASTE Power BI public embed URL here
    thumbColor:  "green",
    kpi1:        { value: "$2.1M", label: "Revenue" },
    kpi2:        { value: "32%",   label: "Conv. Rate" },
  },
];

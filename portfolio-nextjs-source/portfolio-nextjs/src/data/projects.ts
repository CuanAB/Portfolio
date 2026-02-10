// ── projects.ts ──
// Central data store. Edit this file to update portfolio content.

import type { Project } from "@/types";

export const projects: Project[] = [
  // ── FEATURED PROJECT 1 ──────────────────────────────────────────
  {
    slug:       "social-media-dashboard",
    title:      "Social Media Performance Dashboard",
    context:    "Marketing Team · 6 Platforms · 18 months of data",
    dataset:    "1.2M rows · Power BI Service",
    tools:      ["Power BI", "DAX", "SQL", "Excel"],
    tags:       ["power-bi", "dashboard", "dax"],
    featured:   true,
    thumbColor: "blue",
    problem:
      "Marketing team was spending 3+ hours weekly compiling performance reports across 6 social platforms in spreadsheets — with no unified view of channel ROI or trend analysis.",
    approach: [
      "Designed a star schema: 1 fact table (posts) + 5 dimension tables",
      "Built custom DAX measures: engagement rate, CTR, share of voice",
      "Created time-intelligence comparisons: WoW, MoM, YoY",
      "Implemented row-level security for brand-level access control",
      "Delivered drill-through pages for post-level investigation",
    ],
    impact:
      "The dashboard became the single source of truth for weekly marketing reviews. The team eliminated manual reporting entirely and gained the ability to detect performance anomalies 3x faster. Senior management now uses the dashboard in quarterly strategy meetings.",
    metrics: [
      { label: "↓ 87% report time",      type: "down"    },
      { label: "↑ 25% CTR visibility",   type: "up"      },
      { label: "1.2M rows processed",    type: "neutral" },
      { label: "6 platforms unified",    type: "neutral" },
    ],
    sampleMetricsNote: true,
  },

  // ── FEATURED PROJECT 2 ──────────────────────────────────────────
  {
    slug:       "sales-funnel-cohort-analysis",
    title:      "Sales Funnel & Cohort Analysis",
    context:    "E-commerce Platform · PostgreSQL + Python · 24-month window",
    dataset:    "500K+ transactions · PostgreSQL",
    tools:      ["Python", "SQL", "pandas", "PostgreSQL"],
    tags:       ["sql", "python", "eda"],
    featured:   true,
    thumbColor: "violet",
    problem:
      "The business couldn't explain why Month-2 customer retention dropped 40%. Leadership needed a cohort-level breakdown to understand churn drivers and identify high-LTV segments.",
    approach: [
      "Wrote complex CTEs to build funnel stages from raw event logs",
      "Constructed cohort matrix in pandas using pivot tables",
      "Identified 3 behavioral segments with distinct retention patterns",
      "Built heatmap visualization for exec-level presentation",
      "Delivered actionable recommendations for each at-risk segment",
    ],
    impact:
      "The analysis uncovered that Month-2 churn was driven by a specific onboarding gap for users who skipped the tutorial step. After the product team addressed it, M2 retention improved by 28%. The cohort matrix is now a standard monthly report.",
    metrics: [
      { label: "↑ 68% M2 retention",    type: "up"      },
      { label: "↑ 32% conversion rate", type: "up"      },
      { label: "500K+ transactions",    type: "neutral" },
      { label: "3 segments identified", type: "neutral" },
    ],
    sampleMetricsNote: true,
  },

  // ── FEATURED PROJECT 3 ──────────────────────────────────────────
  {
    slug:       "customer-segmentation",
    title:      "Customer Segmentation with K-Means Clustering",
    context:    "Retail Brand · 50K customers · RFM + behavioral features",
    dataset:    "50K customers · Python (scikit-learn)",
    tools:      ["Python", "scikit-learn", "pandas", "matplotlib"],
    tags:       ["python", "eda"],
    featured:   true,
    thumbColor: "green",
    problem:
      "The marketing team was sending identical campaigns to all customers — resulting in high unsubscribe rates and poor ROI. The business needed clearly defined segments to enable personalized outreach.",
    approach: [
      "Feature engineered 12 RFM + behavioral attributes from transaction logs",
      "Applied K-Means clustering (k=5 via elbow + silhouette method)",
      "Profiled each segment with business-readable archetypes",
      "Validated clusters using Davies-Bouldin and Silhouette scores",
      "Delivered playbook with tailored campaign recommendations per cluster",
    ],
    impact:
      "The 5-segment model enabled the marketing team to personalize email campaigns for the first time. High-value 'Champions' received early-access offers; at-risk 'Hibernating' customers received win-back sequences. Overall campaign performance improved within the first month.",
    metrics: [
      { label: "↓ 22% unsubscribe rate", type: "down"    },
      { label: "↑ 18% campaign ROI",    type: "up"      },
      { label: "5 distinct segments",   type: "neutral" },
      { label: "50K customers profiled",type: "neutral" },
    ],
    sampleMetricsNote: true,
  },

  // ── ADDITIONAL PROJECTS ─────────────────────────────────────────
  {
    slug:       "revenue-kpi-dashboard",
    title:      "Revenue KPI Dashboard",
    context:    "Finance Team · Executive-facing",
    dataset:    "ERP export · Excel",
    tools:      ["Power BI", "DAX", "Excel"],
    tags:       ["power-bi", "dashboard"],
    featured:   false,
    thumbColor: "blue",
    problem:    "Finance needed a real-time P&L view with YoY variance.",
    approach:   ["Built dynamic P&L model", "YoY variance measures in DAX", "Drill-through to transaction level"],
    impact:     "Reduced finance reporting cycle from 5 days to same-day.",
    metrics:    [{ label: "↑ 40% faster decisions", type: "up" }],
    sampleMetricsNote: true,
  },
  {
    slug:       "product-performance-sql",
    title:      "Product Performance Analysis",
    context:    "Operations · SKU-level deep dive",
    dataset:    "2.5M rows · SQL Server",
    tools:      ["SQL", "Excel"],
    tags:       ["sql", "eda"],
    featured:   false,
    thumbColor: "violet",
    problem:    "Operations needed SKU-level margin and inventory insights.",
    approach:   ["Window functions for ranking", "CTE chains for category rollups", "Inventory turnover calculations"],
    impact:     "Identified top 20 underperforming SKUs contributing 35% of stockout cost.",
    metrics:    [{ label: "2.5M rows queried", type: "neutral" }],
    sampleMetricsNote: true,
  },
  {
    slug:       "churn-prediction-eda",
    title:      "Churn Prediction EDA",
    context:    "SaaS Product · Feature analysis",
    dataset:    "80+ features · Python",
    tools:      ["Python", "pandas", "seaborn"],
    tags:       ["python", "eda"],
    featured:   false,
    thumbColor: "green",
    problem:    "ML team needed clean, ranked features before model training.",
    approach:   ["Automated missing value analysis", "Correlation heatmaps", "Feature importance with Random Forest"],
    impact:     "Feature set reduced from 83 to 22; model accuracy improved 15%.",
    metrics:    [{ label: "↑ 15% model accuracy", type: "up" }],
    sampleMetricsNote: true,
  },
  {
    slug:       "hr-analytics-dashboard",
    title:      "HR Analytics Dashboard",
    context:    "People Team · Headcount & Attrition",
    dataset:    "HRIS export · 3 years",
    tools:      ["Power BI", "DAX"],
    tags:       ["power-bi", "dashboard"],
    featured:   false,
    thumbColor: "blue",
    problem:    "HR had no visibility into attrition trends by department or tenure band.",
    approach:   ["Designed attrition funnel", "Tenure-band segmentation", "Department-level drill-through"],
    impact:     "HR reporting time reduced 30%; attrition root cause identified for 2 departments.",
    metrics:    [{ label: "↓ 30% HR reporting time", type: "down" }],
    sampleMetricsNote: true,
  },
  {
    slug:       "ab-test-analysis",
    title:      "A/B Test Statistical Analysis",
    context:    "Product Team · Landing page test",
    dataset:    "40K sessions · Google Analytics export",
    tools:      ["Python", "scipy", "pandas"],
    tags:       ["python", "eda", "sql"],
    featured:   false,
    thumbColor: "violet",
    problem:    "Product team ran an A/B test but had no framework to validate statistical significance.",
    approach:   ["Chi-square test for conversion rates", "t-test for revenue impact", "Power analysis for sample size", "Effect size reporting"],
    impact:     "Winning variant identified with 95% confidence; 12% conversion lift validated.",
    metrics:    [{ label: "↑ 12% conversion (winner)", type: "up" }],
    sampleMetricsNote: true,
  },
  {
    slug:       "supply-chain-delay",
    title:      "Supply Chain Delay Root-Cause",
    context:    "Logistics Team · 7-stage pipeline",
    dataset:    "300K shipments · SQL",
    tools:      ["SQL", "Excel"],
    tags:       ["sql", "eda"],
    featured:   false,
    thumbColor: "green",
    problem:    "Operations couldn't identify which pipeline stage caused most delivery delays.",
    approach:   ["Window functions for stage duration", "LAG/LEAD for transition timing", "Bottleneck scoring model"],
    impact:     "Stage 4 identified as primary bottleneck; process change reduced avg delay 18%.",
    metrics:    [{ label: "↓ 18% avg delay", type: "down" }],
    sampleMetricsNote: true,
  },
];

// Helper: get featured projects
export const featuredProjects = projects.filter(p => p.featured);

// Helper: get project by slug
export const getProjectBySlug = (slug: string) =>
  projects.find(p => p.slug === slug);

# 🗂 Ngô Bá Quân — Data Analyst Portfolio

A premium, minimalist portfolio built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** + **Framer Motion**.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Heading font | DM Serif Display (editorial, italic warmth) |
| Body font | DM Sans (clean, modern) |
| Primary accent | `#4F8EF7` (blue) — light: `#2563EB` |
| Secondary accent | `#A78BFA` (violet) |
| Success | `#34D399` (green) |
| Warning | `#FBBF24` (amber) |
| Dark bg | `#090E1A` |
| Light bg | `#F4F7FF` |
| Border radius | 12px (card), 20px (large card) |

---

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← Root layout, fonts, SEO metadata
│   │   ├── page.tsx                ← Homepage (assembles all sections)
│   │   ├── globals.css             ← Design tokens + global styles
│   │   ├── not-found.tsx           ← 404 page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx        ← Dynamic project case study page
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            ← Hero with metrics
│   │   │   ├── About.tsx           ← About + skills
│   │   │   ├── Projects.tsx        ← Featured + filterable grid
│   │   │   ├── Dashboards.tsx      ← Dashboard gallery
│   │   │   ├── Experience.tsx      ← Timeline (work + education)
│   │   │   ├── Certifications.tsx  ← Cert cards
│   │   │   ├── Blog.tsx            ← Insights / articles
│   │   │   ├── Contact.tsx         ← Form + social links
│   │   │   └── Footer.tsx          ← Minimal footer
│   │   └── ui/
│   │       ├── Navbar.tsx          ← Sticky nav + theme toggle
│   │       ├── FadeIn.tsx          ← Scroll-triggered animation
│   │       ├── ProjectCard.tsx     ← Featured project card
│   │       └── primitives.tsx      ← SectionLabel, Chip, SkillPill…
│   ├── data/
│   │   ├── projects.ts             ← ⭐ ALL PROJECT DATA (edit this!)
│   │   └── site-data.ts            ← ⭐ ALL PERSONAL DATA (edit this!)
│   ├── lib/
│   │   └── utils.ts                ← cn() and helpers
│   └── types/
│       └── index.ts                ← TypeScript interfaces
├── public/                         ← Static assets (add your images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)

### Steps

```bash
# 1. Clone or extract this folder
cd portfolio-nextjs

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## ☁️ Deploy to Vercel (Free)

### Option A: Vercel CLI (fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts → your site will be live at https://[project].vercel.app
```

### Option B: Vercel Dashboard (GUI)
1. Push code to GitHub: `git init && git add . && git commit -m "init" && git push`
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done in ~90 seconds!

### Custom Domain
- In Vercel Dashboard → Settings → Domains → Add your domain

---

## ✏️ Checklist: Things to Replace

Open `src/data/site-data.ts` and `src/data/projects.ts` and update:

### Personal Info (`site-data.ts`)
- [ ] `heroMetrics` — update with your real numbers
- [ ] `aboutText` — personalize the 3 paragraphs
- [ ] Experience: replace `"Company / Organization"` with your actual employer
- [ ] Education: replace `"Bachelor of [Your Major]"` + university name + GPA
- [ ] `certifications` — add/remove your real certificates

### Projects (`projects.ts`)
- [ ] All 3 featured projects: update `problem`, `approach`, `impact`, `metrics`
- [ ] `sampleMetricsNote: false` — remove disclaimer once you have real numbers
- [ ] Add more projects to the array as needed (they'll auto-appear in the grid)

### Dashboards (`site-data.ts`)
- [ ] Paste your Power BI public embed URL into `embedUrl` for each dashboard
  - How to get: Power BI Service → File → Embed Report → Public website → copy URL

### Blog (`site-data.ts`)
- [ ] Replace `href="#"` in `Blog.tsx` with actual article URLs
- [ ] Or connect to a CMS / MDX for real blog posts

### CV
- [ ] Verify `cvLink` in `site-data.ts` points to your latest CV

### Images (Optional Enhancement)
- [ ] Add project screenshots to `/public/projects/[slug].png`
- [ ] Update `ProjectCard.tsx` to use `<Image>` instead of CSS gradient thumbs
- [ ] Add OG image to `/public/og-image.png` (1200×630px) and reference in `layout.tsx`

---

## ⚡ Performance Tips

- All fonts loaded via `next/font/google` — zero layout shift
- Images: use `next/image` with `priority` on hero images
- Framer Motion: `"use client"` only on interactive components (already done)
- CSS variables for theming — no runtime JS for colors

---

## 🔌 Optional Integrations

### Contact Form (Real Emails)
Replace the `handleSubmit` function in `Contact.tsx` with:

```ts
// Option A: EmailJS (free tier, no backend)
import emailjs from '@emailjs/browser';
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');

// Option B: Resend API (Next.js API route)
// Create: src/app/api/contact/route.ts
```

### Analytics
```ts
// In layout.tsx, add Google Analytics or Plausible
import { GoogleAnalytics } from '@next/third-parties/google';
// <GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 📄 License
Personal portfolio — all rights reserved to Ngô Bá Quân.

# Design System — Ngô Bá Quân Portfolio

## 1. Typography

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| H1 Hero | DM Serif Display | clamp(3rem, 7vw, 6rem) | 400 | italic accent in accent color |
| H2 Section | DM Serif Display | clamp(2rem, 4vw, 3rem) | 400 | with italic emphasis |
| H3 Card | DM Serif Display | 1.35rem | 400 | |
| H4 Label | DM Sans | 1rem | 600 | ALL CAPS, letter-spacing |
| Body | DM Sans | 1rem | 400 | line-height: 1.75 |
| Caption / Tag | DM Sans | 0.72–0.82rem | 500–700 | |
| Section Label | DM Sans | 0.72rem | 600 | UPPERCASE, 0.14em spacing |

## 2. Color Palette

### Dark Mode (Default)
| Name | Hex | Usage |
|---|---|---|
| bg | #090E1A | Page background |
| bg-card | #0F1629 | Card surfaces |
| bg-card2 | #141B30 | Pill backgrounds, nested |
| border | rgba(255,255,255,0.07) | All borders |
| text | #E8EDF8 | Primary text |
| text-muted | #7A89AA | Body copy, descriptions |
| text-dim | #4A5880 | Labels, placeholders |
| accent | #4F8EF7 | Blue — buttons, highlights |
| accent2 | #A78BFA | Violet — secondary accents |
| green | #34D399 | Success, "up" metrics |
| amber | #FBBF24 | Warning, in-progress |

### Light Mode Overrides
| Name | Hex |
|---|---|
| bg | #F4F7FF |
| bg-card | #FFFFFF |
| accent | #2563EB |
| accent2 | #7C3AED |
| text | #0D1424 |
| text-muted | #5A6A8A |

## 3. Spacing System
- Section padding: 100px vertical (80px on tablet, 72px on mobile)
- Container max-width: 1140px, padding: 24px (16px mobile)
- Card padding: 28px (24px compact)
- Gap between cards: 24px

## 4. Background Texture
- Subtle CSS grid: 48px × 48px, rgba(accent, 0.025) lines
- Noise overlay: SVG feTurbulence, opacity 0.4
- Hero glow: radial-gradient blob, animated pulse
- No external images needed

## 5. Components

### Project Card
- CSS gradient thumbnail (no images required)
- Problem → Approach → Impact flow
- Metrics chips with color-coded types (up/down/neutral)
- "Sample metrics" disclaimer note

### Section Label
- 20px leading line + text, accent color, uppercase

### Skill Pill
- Rounded full pill, border variant (muted) and primary variant (accent-tinted)

### Metric Chip
- Color-coded: green (up), pink (down), blue (neutral)
- 6px border radius (not round) for data feel

### Timeline
- Left border gradient (accent → accent2 → transparent)
- Circular dot connectors
- Date → Title → Org → Description → Result chips

## 6. Animation System
- Scroll-triggered fade-in: opacity 0→1, translateY 24→0, 0.6s cubic
- Stagger: 0.1s delay increments
- Theme toggle: CSS variable swap, no flash
- Framer Motion used only on Hero (mount animations)
- Hover: translateY(-2px to -4px) on cards
- Scroll progress bar: 2px top, gradient accent → accent2

## 7. Responsive Breakpoints
- Mobile: < 640px — single column, stacked hero metrics
- Tablet: 640–900px — 2-col grids
- Desktop: > 900px — full layout with sidebar

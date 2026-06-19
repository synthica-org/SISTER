# SISTER — Summer Institute of Science, Technology & Engineering Research

A clean, animated marketing site for the SISTER summer research program,
organized by Synthica. Built with **Next.js (App Router)** + **Framer Motion**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route | What it is |
|-------|-----------|
| `/` | Hero, org marquee, featured tracks, framework, figures, join-forces |
| `/framework` | The tripartite model (tracks · core · publication) in detail |
| `/tracks` | All curated research tracks with focus areas & Track Leads |
| `/schedule` | Weekly structure, animated 4-week timeline, logistics |
| `/organizations` | Parallax org cards + who-leads-what + become a Track Lead |
| `/publication` | The path to the Synthica Journal, double-blind review |

Apply buttons link to the external Google Forms interest form (`APPLY_URL` in `lib/data.ts`). `/apply` redirects there for old bookmarks.

## The animation system

- **`components/PageTransition.tsx`** — full-screen 10-bar side-wipe between
  routes. Capture-phase link interception, phase machine
  (idle → covering → covered → uncovering), navigation happens while covered.
  Bars use the navy gradient color scheme.
- **`app/template.tsx`** — per-route opacity fade (no transform, so `fixed`
  descendants stay anchored).
- **`components/Reveal.tsx`** — `<Reveal>` (blur + slide-up) and `<MaskLines>`
  (line-by-line headline reveal) primitives on a shared easing curve.
- **`components/BackgroundField.tsx`** — a fluid, 3D-looking gradient
  "metaball" field (SVG goo filter + drifting masses) that stays mounted across
  transitions, so pages never feel like they hard-cut.
- **`components/Mark.tsx`** — the spinning orbital brand mark.
- **`components/OrgMarquee.tsx`** — scroll-driven parallax marquee of partners.

## Content

All copy lives in **`lib/data.ts`** — tracks, organizations, phases, pillars,
figures, and logistics. Edit there to update the site.

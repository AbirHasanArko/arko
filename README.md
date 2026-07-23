# Abir Hasan Arko — Portfolio

Personal portfolio built with **Next.js 15 (App Router)**, deployed free on **Vercel**.
Retro-minimal design with 3D wireframe artifacts, CSS-only animations, and a
local-first admin tool for content updates.

🌐 Live: [abirhasanarko.dev](https://abirhasanarko.dev) (configure custom domain in Vercel)

## Features

- **Next.js 15 App Router** with React Server Components for fast SSG
- **Framer Motion** scroll reveals, 3D card tilts, and page transitions
- **CSS Modules** — no Tailwind, fully scoped styles
- **MDX blog** with frontmatter parsing via `gray-matter`
- **Contact API route** powered by Resend (100 emails/day free tier)
- **Local admin tool** (`admin/index.html`) excluded from Vercel deploy
- **Zero runtime cost** — Vercel Hobby tier covers everything
- Fully responsive, reduced-motion friendly, dark-footer accents

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project structure

```
app/                      # App Router pages
  api/contact/route.js    # Serverless contact handler
  blog/[slug]/            # Dynamic MDX post route
  projects/               # Filterable project gallery
  academics/              # Education + experience timelines
  contact/                # Contact form page
components/               # 17 reusable UI components
data/                     # profile, projects, skills, academics, navigation
content/blog/             # MDX blog posts
lib/                      # mdx.js, utils.js helpers
admin/                    # Local CMS tool (not deployed)
```

## Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/AbirHasanArko/portfolio.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new) → sign in with GitHub
   - Import the repository
   - Vercel auto-detects Next.js — click **Deploy**

3. **(Optional) Configure environment variables** in Vercel project settings:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com) (free tier)
   - `CONTACT_TO_EMAIL` — destination address (default: `abirhasanarko2004@gmail.com`)
   - `CONTACT_FROM_EMAIL` — sender address (default: `noreply@abirhasanarko.dev`)

4. **(Optional) Custom domain**
   - Vercel → Project → Settings → Domains
   - Update DNS records as instructed
   - Free SSL auto-configured

## Adding content

### Edit projects, skills, academics

Edit the corresponding file in `data/` and push:

- `data/profile.js` — name, bio, contact, socials, stats
- `data/projects.js` — array of project objects
- `data/skills.js` — categories with proficiency percentages
- `data/academics.js` — education, experience, certifications, achievements
- `data/navigation.js` — top-nav links

### Add a blog post

Create `content/blog/<slug>.mdx` with frontmatter:

```mdx
---
title: "Your post title"
date: "2025-07-01"
excerpt: "Short summary for cards and SEO."
tags: ["AI", "Engineering"]
readingTime: "5 min read"
---

## Heading

Your content here. Markdown + React components supported.
```

### Use the admin tool (no coding required)

Open `admin/index.html` in your browser (double-click the file).
Drafts autosave to `localStorage`. Copy generated output into the
matching file in `data/` or `content/blog/`, then commit.

## Design tokens

| Token            | Value      | Usage                       |
| ---------------- | ---------- | --------------------------- |
| `--bg`           | `#F5F0E8`  | Page background             |
| `--bg-dark`      | `#1A1A2E`  | Dark sections, nav bar      |
| `--text`         | `#1A1A2E`  | Primary text                |
| `--accent`       | `#E8A87C`  | Terracotta — links, accents |
| `--secondary`    | `#6B8F71`  | Sage green — tags, badges   |
| `--surface`      | `#FEFCF7`  | Card backgrounds            |
| `--border`       | `#D4CFC4`  | Subtle borders              |

Typography: **Playfair Display** (headings) + **JetBrains Mono** (UI/body).

## License

Source code: MIT. Content (text, images, project descriptions): all rights reserved by Abir Hasan Arko.
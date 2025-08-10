## SoraTech Landing (Next.js)

Pixel‑accurate migration of the Wix landing page to Next.js (App Router, TypeScript, Tailwind). The site reproduces the original layout and animations while adding production‑grade performance, SEO, security headers, and a clean responsive strategy.

---

### Tech stack
- Next.js (App Router, TypeScript)
- Tailwind CSS (utility layer lives in `src/app/globals.css`)
- next/image for images (explicit `sizes`, controlled `priority`)
- Lightweight intersection/animation helpers (`AnimateOnView`, CSS motion classes)

---

## Project structure

```
src/
  app/
    error.tsx                # 500 page (branded)
    not-found.tsx            # 404 page (branded)
    layout.tsx               # global metadata, canonical, font preload
    page.tsx                 # single-page landing
    robots.ts                # robots.txt
    sitemap.ts               # sitemap.xml
  components/
    Header.tsx, Footer.tsx
    HeroMedia.tsx            # GPU parallax with no-bounce smoothing
    ...
  app/globals.css           # tokens, grid utilities, responsive overrides
public/
  assets/fonts/             # Satoshi variable + static
  assets/images/            # local images (about, hero, etc.)
  assets/video/             # hero-left video
```

---

## Performance

- Fonts
  - Preload `Satoshi-Variable.woff2` in `layout.tsx` (swap behavior for render speed)
  - Self‑hosted in `/public/assets/fonts/`
- Images
  - next/image with explicit `sizes` (e.g., About uses `(min-width: 1200px) 660px, 100vw`)
  - Only above‑the‑fold media should use `priority`
- Parallax stability
  - Parallax updates are applied directly to the DOM (no React re‑render thrash) with device‑pixel snapping and critically damped smoothing → eliminates scroll jitter
- Caching/compression
  - `middleware.ts` sets aggressive cache for `/assets/**` (1 year, immutable); Vercel serves gzip/brotli by default

## Security headers

Via `src/middleware.ts` (adjust as needed):
- `Content-Security-Policy` default‑deny with allowances for self data/blob images
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy` for camera/microphone/geolocation

## SEO

- Metadata: `layout.tsx` includes title/description, OG/Twitter, and canonical (from `NEXT_PUBLIC_SITE_URL`)
- robots/sitemap: `app/robots.ts` + `app/sitemap.ts`
- Headings: H1 in hero, H2 per section (About/Problem/Solution/White Paper/Build on/Contact)
- Alt text: All visible images use descriptive `alt`; decorative images can use empty `alt` if needed

---

## Getting started

```bash
pnpm i
pnpm dev
```
Open http://localhost:3000

### Scripts
- `pnpm dev` – local development
- `pnpm build` – production build
- `pnpm start` – run production build locally

### Environment variables
Set in Vercel → Project Settings → Environment Variables:
- `NEXT_PUBLIC_SITE_URL` (e.g., `https://soratech.example`)

---

## Deploying to Vercel
1) Import the repository in Vercel
2) Set `NEXT_PUBLIC_SITE_URL` (production URL)
3) Use default Next.js settings (App Router)
4) Deploy a preview → validate responsive ranges → promote to production

---

## Editing content safely

- Keep the 980px grid utilities for alignment (`.content-980`, `.content-left-980`)
- Prefer adjusting section sizes in the responsive blocks inside `globals.css` (1200–1365, 1366–1699, 768–1199, ≤767) rather than editing component math
- Use next/image with explicit `sizes` when adding images; avoid `priority` unless above‑the‑fold

---

## Troubleshooting

- Parallax looks jittery on some devices
  - Ensure hardware acceleration is available; the implementation uses `transform` + pixel snapping with critically damped smoothing
- Assets don’t update after deploy
  - Files in `/assets/**` are cached as immutable for 1 year; rename the file (cache‑bust) if you replace it
- Canonical/robots/sitemap show example.com
  - Set `NEXT_PUBLIC_SITE_URL` in the environment (Preview and Production)

---

## Roadmap / nice‑to‑haves

- Visual regression tests for the home page (Playwright + Pixelmatch) against the reference PNG
- Optional Plausible/Vercel Analytics and Sentry with CSP allowances
- PWA (manifest + service worker) if install/offline is desired


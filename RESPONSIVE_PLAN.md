# Responsive Adaptation Plan

## Goals
- Preserve pixel-perfect desktop while adding tablet (≤1024px) and mobile (≤640px) layouts.
- No inline styles; use global utility classes and media queries in `globals.css`.
- Zero visual regressions on desktop.

## Breakpoints
- Tablet: max-width: 1024px
- Mobile: max-width: 640px

## Sections and Tasks

1. Global utilities
- Add responsive overrides in `globals.css` for paddings (`.px-110`, `.px-120`), grids (`.grid-736-736`, `.grid-294-1178`, `.grid-500-972`), and typography (`.h1-hero`, `.h2-66`, `.subtitle-hero`).
- Fluid heights: convert fixed heights to auto within breakpoints (e.g., `.h-565`, `.h-766`, `.h-213`, `.h-149`, `.h-155`, `.h-238`).
- Buttons/inputs width: set `.btn-500x43`, `.w-500` to 100% on tablet/mobile.

2. Header
- Ensure layout remains readable on tablet/mobile (menu toggle already present).

3. Hero
- Tablet: stack subtitle and CTA vertically; maintain spacing.
- Mobile: scale down `.h1-hero` and `.subtitle-hero`; preserve margins.

4. Media Hero (video + parallax)
- Tablet: keep two columns; Mobile: stack (video first, image second), full width.

5. About
- Stack image and text on small screens; maintain offsets with utilities.

6. Problem
- Keep heading readable; reduce left offsets on small screens via utilities.

7. Solution
- Stack to single column; keep dividers full width with small side margins.

8. White Paper
- Stack title and button; button full width.

9. Build On
- Stack title and logo; keep logo size consistent.

10. Contact
- Stack grid; make inputs and button full width; keep labels/rows via `.contact-*` utilities.

## Acceptance Criteria
- Desktop unchanged.
- Tablet/mobile layouts readable and clean; no overflow; no inline styles added.

## Execution Checklist
- [x] Add responsive overrides to `globals.css`.
- [x] Scale headings and paddings at breakpoints.
- [ ] Update contact grids to use `.grid-500-972` for stacking.
- [ ] Visual QA at 1280/1024/768/640/375 widths.
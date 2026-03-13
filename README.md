# Mapped Futures

Mapped Futures is an editorial design publication led by Mica.

It is built as a static-first Next.js site for explaining design after certainty:
an atlas of disciplines, frameworks, field guides, and signals about AI, systems,
institutions, materials, and the futures design is still shaping.

## Brand

- Brand surface: `Mapped Futures`
- Editorial voice: `Mica`
- Current technical placeholder domain in app metadata: `explainme.design`

The visible site branding has been renamed to `Mapped Futures`, but the technical
canonical/domain references remain on `explainme.design` until the final domain is
chosen and migrated.

## Stack

- Next.js 16
- React 19
- `@paper-design/shaders-react` for the animated heatmap treatment
- Plain CSS in [`app/globals.css`](/Users/stefi/Sandbox/explainme.design/app/globals.css)

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Main Surfaces

- `/`
- `/about`
- `/atlas`
- `/frameworks`
- `/guides`
- `/signals`

Each content type also has static detail pages generated from the canonical content
data in [`lib/site-data.js`](/Users/stefi/Sandbox/explainme.design/lib/site-data.js).

## Content Model

The site currently publishes:

- 21 disciplines
- 9 frameworks
- 9 field guides
- 11 signals

The canonical content source is [`lib/site-data.js`](/Users/stefi/Sandbox/explainme.design/lib/site-data.js).
Detail pages render Mica-first explainer content rather than generic glossary copy.

## Project Notes

- Dark mode is the default theme.
- The home page uses a Paper heatmap shader for the animated hero card.
- The shared brand lockup lives in [`public/mica-logo.svg`](/Users/stefi/Sandbox/explainme.design/public/mica-logo.svg).
- GitHub remote: `autotelicbydesign/mapped-futures`

## Next Branding Step

Once the final domain is purchased, update:

- [`app/layout.js`](/Users/stefi/Sandbox/explainme.design/app/layout.js)
- [`app/sitemap.js`](/Users/stefi/Sandbox/explainme.design/app/sitemap.js)
- [`app/robots.js`](/Users/stefi/Sandbox/explainme.design/app/robots.js)

Those still point to `https://explainme.design` by design for now.

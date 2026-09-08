# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

The 열린창 (Yeollinchang) marketing site: a Korean-language company site for a curtain business — curtains, curtain-making components, and curtain-making machines. The home page is a marketing/brand page (hero, stats, core business, partners, CTA). `/products` is a display-only product catalog with search and category filtering — there is no cart, checkout, or pricing anywhere in the UI. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (product catalog pages) + custom CSS in `styles.css` (home page) |
| Icons | lucide-react |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── placeholder.png            # Placeholder product image reused across the catalog
│   └── images/                    # Hero photos + product photos
├── src
│   ├── data
│   │   └── products.ts            # Product catalog: categories + product list (name, description, specs)
│   ├── components
│   │   ├── SiteNav.tsx             # Header/search/filter panel used by the product catalog pages
│   │   ├── CatalogFooter.tsx       # Footer used by /products and /products/$productId
│   │   └── home/                   # Components used only by the home page (/)
│   │       ├── HomeHeader.tsx
│   │       ├── Hero.tsx
│   │       ├── StatsCard.tsx       # "주요 성과" floating stats card — edit the `stats` array to change numbers
│   │       ├── BusinessSection.tsx # "3대 핵심 사업" cards — edit the `items` array to change cards
│   │       ├── PartnersSection.tsx # Partner logo grid — edit the `partners` array to add/remove names
│   │       ├── CtaBanner.tsx
│   │       └── HomeFooter.tsx
│   ├── routes
│   │   ├── __root.tsx              # Root HTML shell: lang="ko", Pretendard font, base meta
│   │   ├── index.tsx               # Home page (/) — assembles the home/ components above
│   │   └── products
│   │       ├── index.tsx           # Catalog page (/products): search, category filter, right-side nav
│   │       └── $productId.tsx      # Product detail page (/products/:id) — description + specs, no price
│   ├── router.tsx                  # TanStack Router instance
│   └── styles.css                  # Tailwind import + theme CSS variables + home page's custom CSS
├── netlify.toml                    # Build command (vite build), publish dir (dist/client), dev server
├── package.json
├── tsconfig.json
└── vite.config.ts                  # TanStack Start + React + Tailwind + Netlify vite plugins
```

## Key Concepts

### File-based routing (TanStack Router)

- `__root.tsx` wraps every page (HTML shell, Pretendard font, base `<head>` metadata). It does **not** render a shared footer — each page renders its own (`HomeFooter` for `/`, `CatalogFooter` for `/products*`), since the two sections have different footer designs.
- `index.tsx` is `/` — the home/marketing page.
- `products/index.tsx` is `/products` — the catalog listing with search + category filter.
- `products/$productId.tsx` is `/products/:productId` — product detail, loaded via the route's `loader` from `src/data/products.ts`.
- Each route sets its own `<title>`/description via its `head()` option.

### Product data

All product content lives in `src/data/products.ts` as a typed array (`Product[]`) plus a `categories` list (`curtain` / `component` / `machine`). This is static display data, not user-generated data, so it is committed as code rather than stored in a database. To add a product, add an entry to the array with `id`, `category`, `image`, `shortDescription`, `description`, and `specs`.

### Search and filtering

Both are implemented client-side in `src/routes/products/index.tsx` with `useState`/`useMemo` over the static `products` array — no backend calls. The category filter doubles as the "menu" on the right side (`NavPanel` component in `SiteNav.tsx`), which collapses into a slide-over panel on small screens (`lg:` breakpoint).

### Home page styling

The home page (`src/components/home/*` + `src/routes/index.tsx`) uses hand-written CSS in `styles.css` (under the `/* ===== Home page ===== */` marker), not Tailwind utility classes — this preserves an exact, previously-approved visual design. When editing the home page, prefer editing the CSS custom properties at the top of that block (`--navy`, `--navy-2`, `--slate`, etc.) over changing individual rules, and keep new markup using the same class-name conventions (e.g. `.hero-copy`, `.business-card`) rather than introducing Tailwind classes there.

### Catalog theming

The product catalog (`SiteNav.tsx`, `products/index.tsx`, `products/$productId.tsx`, `CatalogFooter.tsx`) uses Tailwind's arbitrary-value syntax against CSS variables defined in `styles.css`'s `:root` block (`--color-linen`, `--color-clay`, `--color-clay-dark`, `--color-ink`, `--color-taupe`, `--color-border`). These are set to match the home page's navy/slate palette. To retheme the catalog, change these variables rather than editing every component.

## Conventions

### Language
- All user-facing copy is Korean. Keep new copy in Korean unless told otherwise.
- `<html lang="ko">` is set in `__root.tsx`.

### Typography
- Single font family site-wide: Pretendard (loaded via CDN link in `__root.tsx`), with weight used for hierarchy rather than mixing typefaces.

### TypeScript
- Strict mode enabled.
- Type-only imports use the `type` keyword (see `Category` import in the routes).

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — run ESLint across the repo
- `npm run preview` — serve the built `dist/` locally
- `npm run deploy` — builds and publishes `dist/` to the `gh-pages` branch via the `gh-pages` package (manual alternative to the GitHub Actions flow)

There is no test suite configured.

## Architecture

Single-page React 19 portfolio built with Vite. Entry is [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx), which renders a fixed sequence of section components (`Navbar`, `Hero`, `About`, `Services`, `Portfolio`, `Contact`) that correspond to the in-page anchor links (`#home`, `#about`, `#services`, `#portfolio`, `#contact`) used by the navbar.

Each section lives in [src/components/](src/components/) as a `.jsx` + co-located `.css` pair. Styles are plain CSS (no Tailwind, no CSS modules). Animations use `framer-motion`; icons come from `react-icons/fa`. Content (skills, projects, services, contact info) is hardcoded inside each component — editing a project or skill means editing the component file, not a data source.

### Asset paths and `base`

[vite.config.js](vite.config.js) sets `base: '/portfolio/'` because the site is served from `https://<user>.github.io/portfolio/`. All runtime references to files in `public/` MUST be prefixed with `import.meta.env.BASE_URL` (see [About.jsx:30](src/components/About.jsx#L30), [Portfolio.jsx:7](src/components/Portfolio.jsx#L7), [Contact.jsx:17](src/components/Contact.jsx#L17)). Using a bare `/images/...` path works in dev but 404s in production. If the repo is ever renamed or hosted at a different path, `base` must be updated to match.

### Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. The `npm run deploy` script is a secondary path that pushes to the `gh-pages` branch directly — prefer the CI flow for normal releases.

### Lint rule worth knowing

[eslint.config.js](eslint.config.js) sets `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'`, so unused PascalCase imports (e.g. `React` in files that only use JSX) and `SCREAMING_CASE` constants won't trip the linter.

## Screenshot verification loop

Any visual change (CSS edits, JSX layout changes, new components, responsive tweaks) MUST be verified by screenshot with Playwright before the task is reported complete. Type-checking and successful builds prove the code compiles — they do not prove the UI looks right.

Workflow for every visual change:

1. Start the dev server (`npm run dev`) in the background if it isn't already running. Default URL is `http://localhost:5173/portfolio/` (note the `base` path).
2. Use Playwright MCP (or `npx playwright` in a one-off script) to navigate to the page and capture a screenshot of the affected section. For section-level changes, scroll to the anchor (`#about`, `#portfolio`, etc.) and screenshot just that section; for full-page checks, take a fullpage screenshot.
3. Open the screenshot and compare against the intended result — the user's reference image, or the prior state if it's a refinement. Check spacing (px-level), font sizes/weights, colors (exact hex), alignment, border radii, shadows, and hover/active states where relevant.
4. If anything is off, edit the code, let HMR reload, and re-screenshot. Repeat until the result matches within ~2–3px everywhere.
5. Also capture mobile width (e.g. 390px viewport) when the change could affect the responsive layout — the navbar hamburger, stacked sections, and image sizing are the usual risk areas.

Do NOT stop after a single screenshot. Always do at least two comparison rounds. If you cannot run Playwright (no browser available, MCP not configured), say so explicitly instead of claiming the change looks correct.

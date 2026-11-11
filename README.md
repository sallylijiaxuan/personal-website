# Sally Li’s portfolio

A React + Vite portfolio with a homepage and dedicated FocusPet and Quick Meal case studies.

## Run locally

Requires Node.js 22.12+ (or Node 20.19+).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Use this server instead of opening index.html directly or using Python's static server.

## Production

```sh
npm run build
npm run preview
```

Deploy the `dist/` directory to a static host. The build produces real HTML entry points for `/`, `/projects/focuspet/`, and `/projects/quick-meal/`, so direct case-study URLs work without SPA rewrite rules.

## Editing

- `src/projects.js`: featured project summaries, tags, and metadata.
- `src/App.jsx`: shared layout, React interactions, case studies, and supporting projects.
- `src/styles.css`: shared responsive styling.
- `public/`: photos, project imagery, résumé, and project PDFs.
- `vite.config.js`: HTML entry points for the production build.

Project illustrations are labeled; Quick Meal is an academic team concept. Business targets are distinguished from measured outcomes.

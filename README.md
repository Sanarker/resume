# Sanarker S - Professional Resume

Personal resume site built with React, TypeScript, Material UI, and Vite.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Checks and production preview:

```sh
npm audit
npm run lint
npm run build
npm run preview
```

## Automatic deployment

GitHub Actions runs on pull requests to `main`, pushes to `main`, and manual workflow runs.

Each step must pass before the next runs:

1. Install dependencies from `package-lock.json` using `npm ci`.
2. Audit all dependencies. Known vulnerabilities stop the workflow.
3. Lint with zero warnings allowed.
4. Type-check and build the site.
5. Verify that the HTML and JavaScript build output exists.
6. Upload the Pages artifact and deploy it, only on `main` after all checks succeed.

Pull requests run the checks without deploying. Deployment failures are reported by the Pages action.

In repository Settings > Pages, set the build and deployment source to **GitHub Actions**.
Push these changes to `main` to activate the updated workflow, or run it from the Actions tab after it is committed.

Production builds use the base path returned by GitHub Pages, including custom domains.
Local builds default to `/resume/`; set `VITE_BASE_PATH=/` when building for a root domain manually.

The `gh-pages` npm package is not needed by this workflow. Version 6.3.0 was tested during setup but its dependency chain reintroduced high-severity audit findings, so it was removed.

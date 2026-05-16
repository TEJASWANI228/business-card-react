# Business Card (React + Vite)

Simple personal business-card site built with React and Vite.

## Quick start

Requirements: Node.js (v16+) and npm.

Install and run in development:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build

Create a production build (output: `dist/`):

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured to publish the `dist/` folder to GitHub Pages using the `gh-pages` package.

1. Make sure `homepage` in `package.json` and `base` in `vite.config.js` match your repository path. For example, if your repository is `TEJASWANI228/business-card-react` the base should be `/business-card-react/`.
2. Push your code to GitHub and then run:

```bash
npm run deploy
```

3. In your GitHub repository settings → Pages, confirm the site is published from the `gh-pages` branch. The URL will be:

```
https://TEJASWANI228.github.io/business-card-react/
```

## Notes
- Use `npm run preview` to locally preview the built `dist` folder (this uses Vite preview).
- If `npm run deploy` fails, confirm `gh-pages` is installed and your Git remote is set to your GitHub repository URL.


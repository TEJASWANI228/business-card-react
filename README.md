# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to GitHub Pages

This project is already configured for GitHub Pages with the Vite base path set to `/business-card-react/` in `vite.config.js`.

1. Make sure your repository name matches the base path or update `base` in `vite.config.js` to match your repo name.
2. Push your code to GitHub.
3. Build and publish:

```bash
npm install
npm run build
npm run deploy
```

4. In GitHub, open your repository settings, then Pages, and make sure the site is published from the `gh-pages` branch.

If you want the app to run at the root of a custom domain or a different repository name, update the `base` setting in `vite.config.js` before deploying.

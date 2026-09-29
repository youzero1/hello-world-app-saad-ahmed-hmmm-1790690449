---
status: implemented
title: Hello World App
---

1. Scaffold the base app files if not present: `index.html`, `vite.config.ts` (with the React, Tailwind, and TanStack Router Vite plugins and the `@/` → `src/` alias), `tsconfig.json` (with the same path alias), and `package.json` with React, TanStack Router, Vite, TypeScript, and Tailwind CSS v4 dependencies. Expected outcome: `npm run dev` can start a working dev server.

2. Create `src/styles/global.css` containing exactly the Tailwind v4 import as its first line. Expected outcome: Tailwind utilities available app-wide.

3. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the router from the generated `src/routeTree.gen.ts`, and mounts the app into the root element. Expected outcome: app renders through TanStack Router.

4. Create `src/routes/__root.tsx` as the app shell: a root layout rendering an `Outlet` inside a full-height wrapper with a subtle background (soft light gradient or neutral tint, with a dark-mode-friendly variant) and base text color. Expected outcome: consistent background and layout for every route.

5. Create `src/components/Greeting.tsx`: a presentational component that renders the "Hello, World!" heading plus a short friendly subline. Use responsive Tailwind typography (larger heading sizes at `sm`/`md`/`lg`), tight tracking, and muted subline color. Accept optional `name` and `subtitle` props with sensible defaults. Expected outcome: reusable, self-contained greeting block.

6. Create `src/routes/index.tsx` as the home route (`/`): centers `@/components/Greeting` both vertically and horizontally using flex centering on a min-height screen container, with responsive horizontal padding and a max-width text container. Expected outcome: visiting `/` shows the centered greeting on all screen sizes.

7. Verify: run the dev server, confirm `src/routeTree.gen.ts` is generated automatically (never hand-edited), confirm `/` renders the centered greeting, and check layout at narrow mobile and wide desktop widths. Expected outcome: no console or type errors, greeting stays centered and legible at every breakpoint.

# Routes

This is a plain Vite + React SPA. Routing is client-side via **React Router**
(`react-router` v7, data router). Routes are declared explicitly in
`src/router.tsx` — files in this directory are just page components.

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `auth.tsx` | `/auth` (sign in) |
| `signup.tsx` | `/signup` (sign up) |
| `_authenticated/route.tsx` | layout + `requireUser` loader gate (redirects to `/auth`) |
| `_authenticated/app.tsx` | `/app` (dashboard) |
| `__root.tsx` | app shell, error boundary and 404 — preserve `<Outlet />` |

To add a page: create the component here, then add it to `routes` in
`src/router.tsx`. Signed-in pages go under the `_authenticated` children.
Per-page titles/meta use `usePageMeta()` from `@/hooks/usePageMeta`.

Deep links work in production because `vercel.json` rewrites every path to
`/index.html`.

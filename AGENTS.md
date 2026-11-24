# Todo App — React + Vite

Client-only SPA with no backend, router, TypeScript, or state library.

## Commands

- `npm install` — install project dependencies
- `npm run dev` — Vite dev server at [http://localhost:5173](http://localhost:5173)
- `npm run lint` — ESLint flat config (includes `react-hooks` and `react-refresh`)
- `npm run build` — production build into `dist/` (gitignored)
- `npm run preview` — preview the production build locally

There is no test runner and no CI. Do not invent test commands; verify with `npm run lint`, `npm run build`, and a manual check in `npm run dev`.

## Architecture

- `src/App.jsx` owns all state (`todolist`, `theme`) and every todos operation. Components in `src/components/` are presentational and receive callbacks via props — there is no Context.
- Todo shape: `{ id: Date.now(), text, isComplete }`. `id` is a timestamp, so code must not rely on string IDs.
- Persistence lives in `App.jsx` effects: `localStorage["todos"]` stores the JSON array, `localStorage["theme"]` stores `"dark"` (default) or `"light"`. Initial reads are guarded (`getInitialTodos`), so keep new stored data validated before use.
- Theme is applied as `data-theme="light"` on `<html>`; colors are CSS variables defined in `src/App.css` (`:root` is the dark theme, `[data-theme="light"]` overrides it). Add new colors as variables instead of hardcoding.
- Styles are a single global `src/App.css`, imported only in `App.jsx`; components depend on its class names (e.g. `task-item`, `icon-btn`, `edit-input`).

## Known gaps — do not assume these work

- `TodoFilters` renders only an `All` button plus a literal `…`; filtering is unimplemented.
- `Footer`'s "Clear Completed" is wired to `clearAll` and deletes **all** todos, not only completed ones.
- The pencil button in `TodoItem` has no handler; the edit feature was deliberately removed.
- UI copy is English; keep new UI text consistent rather than translating it.

## Gotchas

- Manual browser testing writes real data to the app's `localStorage` and changes the visible list. Reset after testing with `localStorage.removeItem("todos")`; the app seeds no default tasks, so an empty list appears only when that key is absent or `[]`.
- Do not delete or modify existing user data during testing unless it is necessary. Preserve stored todos and theme preferences whenever possible.
- `react-refresh/only-export-components` is an **error**: keep helper functions/constants out of files that export components, or ESLint will fail the lint check.

## Agent Working Guidelines

- Inspect the relevant files and understand existing patterns before making changes.
- Follow the existing project architecture and naming conventions.
- Write clean, readable, maintainable JavaScript and React code.
- Use functional components and React Hooks appropriately.
- Keep components focused and avoid unnecessary complexity.
- Reuse existing components, styles, and dependencies whenever possible.
- Do not introduce new dependencies, libraries, or architectural patterns without a clear need.
- Make reasonable technical decisions independently. Do not ask for approval for routine implementation details.
- Ask for clarification only when requirements are genuinely ambiguous or a decision could significantly affect the project.
- Preserve existing functionality unless the requested change requires modifying it.
- Avoid unrelated refactoring or unnecessary changes.
- After implementation, run `npm run lint` and `npm run build`.
- Report what changed, any important decisions, and verification results.

## Security & Data Safety

- Never expose secrets, credentials, or sensitive information in source code.
- Do not modify or delete environment files without explicit approval.
- Do not delete or overwrite user data in localStorage unless required by the task.
- Validate data read from localStorage before using it.

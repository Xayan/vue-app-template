# AGENTS.md

## Build & Test Pipeline

**Critical: Execution order matters.** All workflows enforce this sequence:

```
npm run build  →  format → lint (with type-check) → vue-tsc -b → vite build
npm run test   →  format → lint → vitest
```

Do not run `vitest`, `vite build`, or `vue-tsc` directly. Always use the npm scripts.

## Scripts

| Command | Effect | Use when |
|---------|--------|----------|
| `npm run dev` | Start Vite dev server (port 5173 or next available) | Local development |
| `npm run build` | Full production build with quality gates | Deploying or verifying release |
| `npm run test -- --run` | Run tests once with quality checks | CI or one-off verification |
| `npm run test` | Tests in watch mode with quality checks | Active development |
| `npm run check` | Format + lint only, no tests | Quick validation |

## Format & Lint Behavior

- **Prettier** auto-fixes on every `npm run format`
- **ESLint** runs after Prettier; some violations auto-fix with `npm run lint:fix`
- **Vue components** require multi-word names (enforced by rule `vue/multi-word-component-names`)
- **Unused args** prefixed with `_` are allowed: `(_unused) => { ... }`
- **Prettier + ESLint** are integrated; do not try to disable Prettier rules in ESLint

## Icons

Project uses **Feather Icons** (not an icon font; direct SVG via npm).

In components, import and render SVGs at script setup time:

```typescript
import * as featherIcons from 'feather-icons'

const githubSvg = featherIcons.icons.github.toSvg({ class: 'w-5 h-5', 'stroke-width': '2' })
```

Then use `v-html` in templates:
```html
<span class="w-5 h-5" v-html="githubSvg"></span>
```

Do not dynamically compute SVG strings in templates; compute once at setup time.

## TypeScript & Feather Icons

- `feather-icons` has @types package: `@types/feather-icons`
- Vue Router imports must use `type` for types: `import type { RouteRecordRaw } from 'vue-router'`
- `vue-tsc -b` enforces `verbatimModuleSyntax` in tsconfig; respect type-only imports

## Testing

- Test files: `src/**/__tests__/*.spec.ts`
- Environment: jsdom (DOM available)
- Globals: `describe`, `it`, `expect` (no import needed)
- Path alias `@` resolves to `src/`
- Tests automatically run quality checks (`npm run check`) first; if they fail, tests do not run

## TailwindCSS v4

- Uses new `@tailwindcss/postcss` plugin (not legacy `tailwindcss` PostCSS plugin)
- CSS entry: `src/style.css` with `@import 'tailwindcss'`
- No custom CSS classes in this template; all styling via Tailwind utilities
- PostCSS includes Autoprefixer (no manual vendor prefixes needed)

## Routing

- Router config: `src/router/index.ts`
- Example view: `src/views/HomePage.vue`
- Views lazy-load: `component: () => import('../views/PageName.vue')`
- `App.vue` renders `<RouterView />`

## Git & Repo

- Default branch: `master` (configured globally via `git config --global init.defaultBranch master`)
- `.gitignore` includes: `node_modules`, `dist`, `.vscode`, `.DS_Store`, log files
- Repository: `https://github.com/Xayan/vue-app-template`

## Known Quirks

- First `npm run dev` may show "Port 5173 is in use, trying another one..." if 5173 is taken
- Vite will re-optimize dependencies if `package-lock.json` changes
- Component tests in `__tests__/` must find their parent component via relative paths (e.g., `../HelloWorld.vue`, not `../components/HelloWorld.vue`)

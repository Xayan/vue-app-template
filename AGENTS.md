# AGENTS.md

## Build & Test Pipeline

**Critical: Execution order matters.** All workflows enforce this sequence:

```
npm run build  →  format → lint (with type-check) → vue-tsc -b → vite build
npm run test   →  format → lint → vitest
```

Do not run `vitest`, `vite build`, or `vue-tsc` directly. Always use the npm scripts.

## Scripts

| Command                 | Effect                                              | Use when                       |
| ----------------------- | --------------------------------------------------- | ------------------------------ |
| `npm run dev`           | Start Vite dev server (port 5173 or next available) | Local development              |
| `npm run build`         | Full production build with quality gates            | Deploying or verifying release |
| `npm run test -- --run` | Run tests once with quality checks                  | CI or one-off verification     |
| `npm run test`          | Tests in watch mode with quality checks             | Active development             |
| `npm run check`         | Format + lint only, no tests                        | Quick validation               |

## Format & Lint Behavior

- **Prettier** auto-fixes on every `npm run format`
- **ESLint** runs after Prettier; some violations auto-fix with `npm run lint:fix`
- **Vue components** require multi-word names (enforced by rule `vue/multi-word-component-names`)
- **Unused args** prefixed with `_` are allowed: `(_unused) => { ... }`
- **Prettier + ESLint** are integrated; do not try to disable Prettier rules in ESLint

## Components & Styling

### Reusable Components

- **BaseButton.vue** - Flexible button with variants (primary/secondary/danger/ghost) and sizes (sm/md/lg)
- **BaseLink.vue** - Semantic `<a>` tag with optional button styling via `button` prop
- **SvgIcon.vue** - Lucide icon wrapper with size presets (sm/md/lg/xl) and stroke width customization

### Button Styles

- Button styling logic extracted to `src/utils/buttonStyles.ts`
- Exports `ButtonVariant`, `ButtonSize` types and `getButtonClasses(variant, size)` function
- Used by both `BaseButton` and `BaseLink` for consistent styling

### Typography CSS

- Semantic typography classes in `src/assets/css/typography.css` using `@apply`
- Classes: `.heading-page`, `.heading-section`, `.subheading-descriptive`, `.text-body-primary`, `.text-emphasis-pink`
- Encapsulates Tailwind utilities while maintaining semantic HTML

### Theme

- Dark theme by default (no light mode classes)
- Color palette: slate-800/900/100 range for dark backgrounds and text

## Icons

Project uses **Lucide Icons** (Vue components; direct SVG via npm).

In components, use the `SvgIcon` component wrapper:

```typescript
import SvgIcon from './SvgIcon.vue'
```

Then use in templates with kebab-case icon names:

```html
<SvgIcon name="zap" size="md" :stroke-width="2" class="text-pink-500" />
```

The `SvgIcon` component automatically converts kebab-case names to PascalCase for Lucide icons.

## TypeScript & Icons

- `lucide-vue-next` is the icon library (pre-installed, no additional types needed)
- Vue Router imports must use `type` for types: `import type { RouteRecordRaw } from 'vue-router'`
- `vue-tsc -b` enforces `verbatimModuleSyntax` in tsconfig; respect type-only imports

## Testing

- Test files: `src/**/__tests__/*.spec.ts`
- Environment: jsdom (DOM available)
- Globals: `describe`, `it`, `expect` (no import needed)
- Path alias `@` resolves to `src/`
- Tests automatically run quality checks (`npm run check`) first; if they fail, tests do not run
- **Always run `npm test -- --run` after each batch of changes** to ensure everything still works before proceeding

## TailwindCSS v4

- Uses new `@tailwindcss/postcss` plugin (not legacy `tailwindcss` PostCSS plugin)
- CSS entry: `src/style.css` with `@import 'tailwindcss'`
- Semantic typography classes in `src/assets/css/typography.css` using `@apply`
- PostCSS includes Autoprefixer (no manual vendor prefixes needed)

## CSS Organization

CSS is modularized into submodules in `src/assets/css/`:

- **style.css** (main) - Entry point that imports Tailwind and all CSS modules
- **typography.css** - Semantic text styling classes (`.heading-page`, `.heading-section`, `.subheading-descriptive`, `.text-body-primary`, `.text-emphasis-pink`)
- **animation.css** - Custom animations (`.animate-periodic-bounce`, `.animate-periodic-shake`, etc.)

New CSS modules should be created in `src/assets/css/` and imported in `src/style.css`. Keep CSS organized by concern (typography, animations, components, layouts, etc.).

## Routing

- Router config: `src/router/index.ts`
- Example view: `src/views/HomeView.vue`
- Views lazy-load: `component: () => import('../views/PageName.vue')`
- `App.vue` renders `<RouterView />`

## Git & Repo

- Default branch: `master` (configured globally via `git config --global init.defaultBranch master`)
- `.gitignore` includes: `node_modules`, `dist`, `.vscode`, `.DS_Store`, log files
- Repository: `https://github.com/Xayan/vue-app-template`
- **Do not automatically create git commits unless specifically asked to do so**
- Only commit when explicitly requested by the user

## Serena MCP Server

This project is configured to work with the **Serena MCP server**, a powerful symbolic code analysis tool. If available in your OpenCode environment, it is **strongly encouraged** to use it for:

- **Efficient code exploration** - Use symbolic tools instead of reading entire files
- **Precise code modifications** - Edit symbols directly without affecting surrounding code
- **Project understanding** - Get overviews of code structure and relationships
- **Refactoring** - Safely rename symbols and find all references

**Serena Instructions:**

- Always read the Serena Instructions Manual before starting work (call `initial_instructions` tool)
- Prioritize symbolic tools over generic file reading for token efficiency
- Use `find_symbol`, `get_symbols_overview`, and `search_for_pattern` for exploration
- Use `replace_symbol_body` for complete symbol replacements
- Use `replace_content` for targeted line-based edits
- Project name in Serena: `test`

## Context7 MCP Server

This project can also use the **Context7 MCP server** for accessing external library documentation and code examples. If available in your OpenCode environment, use it to:

- **Research external libraries** - Query Vue, TailwindCSS, Vitest, TypeScript docs
- **Find code examples** - Get practical patterns and best practices
- **Resolve library IDs** - Use `resolve-library-id` to find official documentation sources
- **Query documentation** - Use `query-docs` to search for specific implementation details

**Context7 Workflow:**

1. Call `context7_resolve-library-id` with library name and query to get the library ID
2. Call `context7_query-docs` with the library ID and specific question
3. Use results to inform implementation decisions or reference best practices

## Known Quirks

- Vite will re-optimize dependencies if `package-lock.json` changes
- Component tests in `__tests__/` must find their parent component via relative paths (e.g., `../HelloWorld.vue`, not `../components/HelloWorld.vue`)

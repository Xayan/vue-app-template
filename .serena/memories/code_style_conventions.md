# Code Style & Conventions

## TypeScript & JavaScript

- **Module System**: ES modules
- **Type Hints**: Always use TypeScript types; prefer type-only imports for types
- **Unused Variables**: Arguments starting with `_` are allowed (e.g., `(_unused) => {}`)
- **Naming**: camelCase for variables and functions, PascalCase for classes and components

## Vue Components

- **Format**: Single-File Components (.vue)
- **Naming**: Multi-word names required (e.g., `HelloWorld.vue`, not `Hello.vue`)
- **Template**: Use kebab-case for component and HTML attributes
- **Script**: Use `<script setup lang="ts">` for composition API
- **Icons**: Import `SvgIcon` and use kebab-case names (auto-converts to PascalCase)

## Styling

- **Framework**: TailwindCSS v4 utilities only (no custom CSS classes)
- **PostCSS**: Includes Autoprefixer (no manual vendor prefixes)
- **CSS Entry**: `src/style.css` with `@import 'tailwindcss'`

## Formatting & Linting

- **Formatter**: Prettier (auto-fixes on `npm run format`)
- **Linter**: ESLint with Vue and TypeScript support
- **Auto-fixes**: Some ESLint violations auto-fix with `npm run lint:fix`
- **Integration**: Prettier + ESLint are tightly integrated; do not disable Prettier rules in ESLint config

## Routing

- **Views**: Lazy-load with `component: () => import('../views/PageName.vue')`
- **Router Config**: `src/router/index.ts`
- **Root Render**: `App.vue` renders `<RouterView />`

## Testing

- **Test Location**: `src/**/__tests__/*.spec.ts`
- **Environment**: jsdom (DOM available)
- **Globals**: `describe`, `it`, `expect` (no import needed)
- **Path Alias**: `@` resolves to `src/`
- **Component References**: Use relative paths (e.g., `../HelloWorld.vue`)

## Git

- **.gitignore**: `node_modules`, `dist`, `.vscode`, `.DS_Store`, log files
- **Commit Policy**: Do not auto-commit unless explicitly requested
- **Default Branch**: master

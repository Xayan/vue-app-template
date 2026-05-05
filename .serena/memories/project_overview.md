# Vue App Template - Project Overview

## Purpose

A Vue 3 template project for building modern single-page applications with TypeScript, Vite, and TailwindCSS v4.

## Tech Stack

- **Frontend Framework**: Vue 3 (^3.5.32)
- **Routing**: Vue Router (^5.0.6)
- **Language**: TypeScript (~6.0.2)
- **Build Tool**: Vite (^8.0.10)
- **Styling**: TailwindCSS v4 (@tailwindcss/postcss) with Autoprefixer
- **Icons**: Lucide Vue Next (^0.438.0)
- **UI Components**: Reka UI (^2.9.6)
- **Testing**: Vitest (^4.1.5) with jsdom environment
- **Code Quality**: ESLint (^10.2.1), Prettier (^3.8.3)
- **Node Env**: ES modules ("type": "module" in package.json)

## Repository

- **GitHub**: https://github.com/Xayan/vue-app-template
- **Default Branch**: master
- **Platform**: macOS (Darwin)

## Project Structure

- `src/` - Application source code
  - `components/` - Reusable Vue components
  - `views/` - Page components (lazy-loaded by router)
  - `router/` - Vue Router configuration
  - `lib/` - Utility libraries and helper functions
  - `utils/` - Utility functions
  - `assets/` - Static assets
  - `App.vue` - Root component
  - `main.ts` - Application entry point
  - `style.css` - Global styles with Tailwind imports
  - `env.d.ts` - TypeScript environment definitions
- `dist/` - Production build output (gitignored)
- `public/` - Static files served as-is

## Important Notes

- **Serena Project Name**: `test`
- **Type-only imports**: Vue Router types must use `import type` syntax (enforced by `verbatimModuleSyntax`)
- **Vue components**: Must have multi-word names (e.g., `HelloWorld.vue`, not `Hello.vue`)
- **Component tests**: Must reference parent components via relative paths
- **Lucide Icons**: Import components directly from `lucide-vue-next`

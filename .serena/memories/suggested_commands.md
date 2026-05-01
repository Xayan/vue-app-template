# Suggested Development Commands

## Core Workflows

- `npm run dev` - Start Vite dev server (port 5173 or next available) for local development
- `npm run build` - Full production build with quality gates (format → lint → type-check → vite build)
- `npm run test -- --run` - Run tests once with quality checks (for CI or one-off verification)
- `npm run test` - Run tests in watch mode with quality checks (during active development)
- `npm run check` - Format + lint only, without tests (quick validation)

## Formatting & Linting

- `npm run format` - Auto-fix formatting with Prettier
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Auto-fix some ESLint violations

## Testing Utilities

- `npm run test:ui` - Run tests with interactive UI

## System Commands (macOS)

- `git status` - Check git status
- `git add <files>` - Stage changes
- `git commit -m "message"` - Create commit
- `docker compose up -d` - Start Serena MCP server (if needed)

## Critical Execution Order

**DO NOT run `vitest`, `vite build`, or `vue-tsc` directly.** Always use the npm scripts:

- `npm run build` → format → lint (with type-check) → vue-tsc -b → vite build
- `npm run test` → format → lint → vitest

## Always Run After Changes

- `npm test -- --run` - Ensures everything still works before proceeding with next task

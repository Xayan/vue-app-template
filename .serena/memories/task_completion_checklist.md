# Task Completion Checklist

After completing any task, follow this sequence to ensure code quality:

## 1. Verify Code Quality

- [ ] Code follows Vue 3, TypeScript, and TailwindCSS conventions
- [ ] Component names are multi-word (enforced by linting)
- [ ] Type-only imports use `import type` syntax
- [ ] Unused arguments are prefixed with `_`
- [ ] No manual vendor prefixes in CSS (Autoprefixer handles it)

## 2. Run Quality Checks

Execute in this exact order:

```
npm run check          # Format + lint only (quick check)
npm run test -- --run  # Full test suite with quality gates
```

If `npm run check` fails:

- Prettier auto-fixes will be applied
- ESLint violations remain; fix manually or use `npm run lint:fix`

If tests fail:

- Debug the failing test
- Ensure all changes are properly typed
- Re-run `npm run test -- --run` after fixes

## 3. Verify Build

```
npm run build  # Full production build
```

This runs: format → lint (with type-check) → vue-tsc -b → vite build

## 4. Git Management

- Do not auto-commit unless explicitly requested
- When asked to commit, provide clear messages describing the "why"
- Verify with `git status` before committing
- Use `git diff` to review changes

## 5. Documentation

- Update component comments if adding new features
- Ensure TypeScript types are documented
- Update routing references if adding new routes

## Common Issues

- **Vite re-optimizes**: If `package-lock.json` changes, Vite re-optimizes dependencies
- **Component test paths**: Use relative paths, not path aliases (e.g., `../HelloWorld.vue`)
- **Lucide icons**: Import directly from `lucide-vue-next` as PascalCase components

# Vue App Template

![Vue App Template](docs/demo.png)

A modern, production-ready Vue 3 project template with TypeScript, Vite, TailwindCSS, and a complete development tooling setup.

## 🚀 Tech Stack

### Core Framework

- **Vue 3** - Progressive JavaScript framework for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend build tool with lightning-fast HMR

### Styling & UI

- **TailwindCSS v4** - Utility-first CSS framework with `@tailwindcss/postcss` plugin
- **PostCSS** - CSS transformations with Autoprefixer
- **Lucide Icons** - Beautiful, minimal SVG icons with Vue 3 components

### Routing

- **Vue Router** - Official router for Vue.js applications

### Code Quality & Formatting

- **ESLint** - JavaScript linter with Vue plugin support
- **Prettier** - Code formatter
- **@typescript-eslint** - TypeScript ESLint support

### Testing

- **Vitest** - Unit testing framework powered by Vite
- **Vue Test Utils** - Component testing utilities for Vue
- **jsdom** - DOM implementation for testing

## 🛠️ Available Scripts

### Development

```bash
npm run dev          # Start development server with HMR
npm run preview      # Preview production build locally
```

### Building

```bash
npm run build        # Full build pipeline: format → lint → type-check → bundle
```

### Code Quality

```bash
npm run check        # Run format and lint checks
npm run format       # Format code with Prettier
npm run lint         # Check code with ESLint
npm run lint:fix     # Auto-fix ESLint violations
```

### Testing

```bash
npm run test         # Run tests in watch mode with quality checks
npm run test --run   # Run tests once
npm run test:ui      # Interactive test UI dashboard
```

## ✨ Features

- ✅ **TypeScript Support** - Full type safety across the entire project
- ✅ **Vite HMR** - Instant Hot Module Replacement during development
- ✅ **TailwindCSS v4** - Modern utility-first styling with semantic typography classes
- ✅ **Component Library** - Reusable `BaseButton`, `BaseLink`, and `SvgIcon` components
- ✅ **Routing** - Vue Router with lazy-loaded components
- ✅ **Testing** - Vitest with component testing utilities
- ✅ **Code Quality** - ESLint, Prettier, and TypeScript type checking
- ✅ **Icons** - Lucide Icons integration via `SvgIcon` component wrapper
- ✅ **Semantic Typography** - CSS classes with `@apply` for consistent text styling
- ✅ **Dark Theme** - Production-ready dark mode by default
- ✅ **Pre-commit Quality** - Format and lint run automatically before builds and tests

## 🚀 Quick Start

### 1. Set up the project

```bash
# Clone the repo and navigate into it
git clone https://github.com/Xayan/vue-app-template.git && cd vue-app-template

# Install dependencies
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

The build process automatically:

1. Formats all code with Prettier
2. Lints code with ESLint
3. Type-checks with vue-tsc
4. Bundles with Vite for production

## 🧪 Testing

Example test included: `src/views/__tests__/HomeView.spec.ts`

```bash
# Run tests once
npm run test -- --run

# Run tests in watch mode
npm run test

# View interactive test dashboard
npm run test:ui
```

## 🎨 Component Library

### BaseButton

Flexible button component with multiple variants and sizes:

```html
<BaseButton variant="primary" size="lg" @click="handleClick"> Click me </BaseButton>
```

**Props:** `variant` (primary/secondary/danger/ghost), `size` (sm/md/lg), `disabled`, `type`

### BaseLink

Semantic link component with optional button styling:

```html
<BaseLink href="/docs" button variant="secondary"> Documentation </BaseLink>
```

**Props:** `href`, `target`, `rel`, `button` (enable button styling), `variant`, `size`

## 🔧 Config Files

- `vite.config.ts` - Vite configuration
- `vitest.config.ts` - Vitest configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration
- `.prettierrc`, `.prettierignore` - Prettier configuration

---

- `opencode.json` - OpenCode configuration for MCP integration
- `AGENTS.md` - Documentation for agents and project structure

## 📚 Read Also

### Documentation

- [State Management](docs/STATE_MANAGEMENT.md)

### External Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Guide](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS v4 Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vitest Documentation](https://vitest.dev/)

## 📄 License

MIT

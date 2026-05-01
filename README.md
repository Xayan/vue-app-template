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

## 📦 Key Dependencies

| Package              | Version  | Purpose                    |
| -------------------- | -------- | -------------------------- |
| vue                  | ^3.5.32  | UI framework               |
| vue-router           | ^5.0.6   | Client-side routing        |
| lucide-vue-next      | ^0.438.0 | Icon library               |
| tailwindcss          | ^4.2.4   | CSS utility framework      |
| @tailwindcss/postcss | ^4.2.4   | Tailwind v4 PostCSS plugin |
| vitest               | ^4.1.5   | Unit testing               |
| prettier             | ^3.8.3   | Code formatting            |
| eslint               | ^10.2.1  | Code linting               |

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

### 1. Clone the repository

```bash
git clone https://github.com/Xayan/vue-app-template.git
cd vue-app-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for production

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

### SvgIcon

Icon wrapper for Lucide Icons with semantic sizing:

```html
<SvgIcon name="zap" size="md" :stroke-width="2" class="text-pink-500" />
```

**Props:** `name` (kebab-case icon name), `size` (sm/md/lg/xl), `strokeWidth`, `class`

## 📐 Typography

Semantic typography classes are defined in `src/assets/css/typography.css`:

- `.heading-page` - Large page titles (5xl)
- `.heading-section` - Section headings (2xl)
- `.subheading-descriptive` - Descriptive text
- `.text-body-primary` - Body text with primary color
- `.text-emphasis-pink` - Pink emphasized text

These use `@apply` to encapsulate Tailwind utilities while maintaining semantic HTML.

### CSS Modules

The project organizes CSS into modular files in `src/assets/css/`:

- **typography.css** - Semantic text styling classes with `@apply`
- **animation.css** - Custom animations (e.g., `animate-periodic-bounce`)

All modules are imported into `src/style.css` which is the main CSS entry point for the application.

## 📚 Learning Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Guide](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS v4 Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vitest Documentation](https://vitest.dev/)

## 🔧 Config Files

- `vite.config.ts` - Vite configuration
- `vitest.config.ts` - Vitest configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 📝 Notes

- This template uses Vue 3 `<script setup>` syntax
- Component names should be multi-word (enforced by ESLint)
- All code is automatically formatted and linted before commits
- TypeScript strict mode is enabled

## 📄 License

MIT

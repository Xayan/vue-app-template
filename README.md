# Vue App Template

A modern, production-ready Vue 3 project template with TypeScript, Vite, TailwindCSS, and a complete development tooling setup.

## 🚀 Tech Stack

### Core Framework

- **Vue 3** (3.5.32) - Progressive JavaScript framework for building user interfaces
- **TypeScript** (6.0.2) - Type-safe JavaScript development
- **Vite** (8.0.10) - Next-generation frontend build tool with lightning-fast HMR

### Styling & UI

- **TailwindCSS** (4.2.4) - Utility-first CSS framework
- **PostCSS** (8.5.12) - CSS transformations
- **Feather Icons** (4.29.0) - Beautiful, minimal SVG icons

### Routing

- **Vue Router** (5.0.6) - Official router for Vue.js applications

### Code Quality & Formatting

- **ESLint** (10.2.1) - JavaScript linter with Vue plugin support
- **Prettier** (3.8.3) - Code formatter
- **@typescript-eslint** (8.59.1) - TypeScript ESLint support

### Testing

- **Vitest** (4.1.5) - Unit testing framework powered by Vite
- **Vue Test Utils** (2.4.10) - Component testing utilities for Vue
- **jsdom** (29.1.1) - DOM implementation for testing

## 📋 Project Structure

```
src/
├── components/          # Vue components
│   ├── HelloWorld.vue  # Example component with TailwindCSS & Feather icons
│   └── __tests__/      # Component tests
├── views/              # Page components
├── router/             # Vue Router configuration
├── App.vue             # Root component
├── main.ts             # Application entry point
└── style.css           # Global styles (with Tailwind)
```

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

| Package       | Version | Purpose               |
| ------------- | ------- | --------------------- |
| vue           | ^3.5.32 | UI framework          |
| vue-router    | ^5.0.6  | Client-side routing   |
| feather-icons | ^4.29.0 | Icon library          |
| tailwindcss   | ^4.2.4  | CSS utility framework |
| vitest        | ^4.1.5  | Unit testing          |
| prettier      | ^3.8.3  | Code formatting       |
| eslint        | ^10.2.1 | Code linting          |

## ✨ Features

- ✅ **TypeScript Support** - Full type safety across the entire project
- ✅ **Vite HMR** - Instant Hot Module Replacement during development
- ✅ **TailwindCSS** - Utility-first styling with optimized bundle
- ✅ **Routing** - Vue Router with lazy-loaded components
- ✅ **Testing** - Vitest with component testing utilities
- ✅ **Code Quality** - ESLint, Prettier, and TypeScript type checking
- ✅ **Icons** - Feather Icons integration for beautiful SVG icons
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

Example test included: `src/components/__tests__/HelloWorld.spec.ts`

```bash
# Run tests once
npm run test -- --run

# Run tests in watch mode
npm run test

# View interactive test dashboard
npm run test:ui
```

## 📚 Learning Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Guide](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Feather Icons](https://feathericons.com/)
- [Vitest Documentation](https://vitest.dev/)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `vitest.config.ts` - Vitest configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration (flat config)
- `.prettierrc` - Prettier configuration

## 📝 Notes

- This template uses Vue 3 `<script setup>` syntax
- Component names should be multi-word (enforced by ESLint)
- All code is automatically formatted and linted before commits
- TypeScript strict mode is enabled

## 📄 License

MIT

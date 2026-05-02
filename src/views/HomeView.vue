<script setup lang="ts">
import { BookOpenText, Zap } from 'lucide-vue-next'
import ShadButton from '../components/ui/button/ShadButton.vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

interface Link {
  name: string
  url: string
  logo: string
}

const getLogoUrl = (name: string) => {
  return `/logo/${name}.svg`
}

const links: Link[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', logo: getLogoUrl('typescript') },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: getLogoUrl('tailwind') },
  { name: 'Vue 3', url: 'https://vuejs.org/', logo: getLogoUrl('vue') },
  { name: 'Shadcn Vue', url: 'https://www.shadcn-vue.com/', logo: getLogoUrl('shadcn') },
  { name: 'Pinia', url: 'https://pinia.vuejs.org/', logo: getLogoUrl('pinia') },
  {
    name: 'TanStack Query',
    url: 'https://tanstack.com/query/',
    logo: getLogoUrl('tanstack-query'),
  },
  { name: 'Lucide Icons', url: 'https://lucide.dev/', logo: getLogoUrl('lucide') },
  { name: 'Vite', url: 'https://vite.dev/', logo: getLogoUrl('vite') },
]
</script>

<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Left: Logo and Name -->
      <div class="flex items-center gap-3">
        <Zap :stroke-width="2" :size="28" class="text-yellow-300" />
        <span class="text-xl font-semibold text-slate-100">Vue Template</span>
      </div>

      <!-- Right: Social Icons -->
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/Xayan/vue-app-template"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="GitHub"
        >
          🐙 GitHub
        </a>
        <a
          href="https://x.com/xayan__"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="Twitter"
        >
          𝕏 Twitter/X
        </a>
      </div>
    </div>
  </nav>

  <main>
    <section id="get-started">
      <Zap :stroke-width="1.5" :size="56" class="text-yellow-300 animate-periodic-bounce" />

      <h1 class="heading-page m-4">Get started</h1>
      <p class="text-body-primary">
        Edit
        <code>src/views/HomeView.vue</code>
        and save to test
        <code>HMR</code>
      </p>
    </section>

    <section id="counter">
      <ShadButton variant="default" size="lg" class="text-lg" @click="counter.increment">
        Count is {{ counter.count }}
      </ShadButton>

      <p class="text-emphasis-pink mt-2">Click to increment</p>
    </section>

    <section id="docs">
      <div class="flex items-center justify-center gap-3 mb-4">
        <BookOpenText :size="24" class="text-amber-400 shrink-0" />
        <h2 class="heading-section">Documentation</h2>
      </div>

      <p class="subheading-descriptive mb-6">Your questions, answered</p>

      <ul class="grid grid-cols-2 gap-3 w-full max-w-md">
        <li v-for="link in links" :key="link.url">
          <a :href="link.url" class="link" target="_blank">
            <img :src="link.logo" :alt="`${link.name} logo`" />
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </section>
  </main>

  <footer>
    <div
      class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm"
    >
      <p>&copy; {{ new Date().getFullYear() }} Vue App Template. Built with Vue 3 & Tailwind.</p>
      <div class="flex items-center gap-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-slate-300 transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-slate-300 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

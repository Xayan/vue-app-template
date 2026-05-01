<script setup lang="ts">
import { BookOpenText, Zap } from 'lucide-vue-next'
import BaseButton from '../components/BaseButton.vue'
import BaseLink from '../components/BaseLink.vue'
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
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: getLogoUrl('typescript'),
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    logo: getLogoUrl('tailwind'),
  },
  { name: 'Vue 3', url: 'https://vuejs.org/', logo: getLogoUrl('vue') },
  { name: 'Reka UI', url: 'https://reka-ui.com/', logo: getLogoUrl('reka') },
  { name: 'Pinia', url: 'https://pinia.vuejs.org/', logo: getLogoUrl('pinia') },
  {
    name: 'TanStack Query',
    url: 'https://tanstack.com/query/latest',
    logo: getLogoUrl('tanstack-query'),
  },
  { name: 'Lucide Icons', url: 'https://lucide.dev/', logo: getLogoUrl('lucide') },
  { name: 'Vite', url: 'https://vite.dev/', logo: getLogoUrl('vite') },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-br from-slate-800 to-slate-950">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <Zap :stroke-width="1.5" :size="56" class="text-yellow-300 animate-periodic-bounce" />

      <div class="text-center mt-8 mb-8">
        <h1 class="heading-page mb-4">Get started</h1>
        <p class="text-body-primary">
          Edit
          <code>src/views/HomeView.vue</code>
          and save to test
          <code>HMR</code>
        </p>
      </div>

      <BaseButton
        variant="primary"
        size="lg"
        @click="counter.increment"
        class="animate-periodic-shake"
      >
        Count is {{ counter.count }}
      </BaseButton>

      <p class="text-emphasis-pink mt-2">Click to increment</p>

      <div class="flex items-center justify-center gap-3 mt-20 mb-4">
        <BookOpenText :size="24" class="text-purple-400 shrink-0" />
        <h2 class="heading-section">Documentation</h2>
      </div>

      <p class="subheading-descriptive mb-6">Your questions, answered</p>

      <ul id="docs" class="grid grid-cols-2 gap-3 w-full max-w-md">
        <li v-for="link in links" :key="link.url">
          <BaseLink
            :href="link.url"
            button
            variant="secondary"
            size="md"
            target="_blank"
            class="w-full justify-center"
          >
            <img class="h-5 w-5" :src="link.logo" :alt="`${link.name} logo`" />
            {{ link.name }}
          </BaseLink>
        </li>
      </ul>
    </section>
  </div>
</template>

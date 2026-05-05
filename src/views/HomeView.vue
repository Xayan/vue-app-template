<script setup lang="ts">
  import ShadButton from '@/components/ui/button/ShadButton.vue'
  import { useCounterStore } from '@/stores/counter'
  import { BookOpenText, Zap } from 'lucide-vue-next'

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
    {
      name: 'Shadcn Vue',
      url: 'https://www.shadcn-vue.com/',
      logo: getLogoUrl('shadcn'),
    },

    {
      name: 'Pinia',
      url: 'https://pinia.vuejs.org/',
      logo: getLogoUrl('pinia'),
    },
    {
      name: 'TanStack Query',
      url: 'https://tanstack.com/query/',
      logo: getLogoUrl('tanstack-query'),
    },
    {
      name: 'Lucide Icons',
      url: 'https://lucide.dev/',
      logo: getLogoUrl('lucide'),
    },
    { name: 'Vite', url: 'https://vite.dev/', logo: getLogoUrl('vite') },
  ]
</script>

<template>
  <section id="get-started">
    <Zap :stroke-width="1.5" :size="48" class="text-yellow-300 animate-periodic-bounce" />

    <h1 class="heading-page m-4">Get started</h1>
    <p class="text-body-primary">
      Edit
      <code>src/views/HomeView.vue</code>
      and save to test
      <code>HMR</code>
    </p>
  </section>

  <section id="counter">
    <ShadButton variant="default" class="mb-2" @click="counter.increment"> Count is {{ counter.count }} </ShadButton>

    <p class="text-emphasis-pink">Click to increment</p>
  </section>

  <section id="docs">
    <div class="flex items-center justify-center gap-3 mb-4">
      <BookOpenText :size="24" class="text-lime-400 shrink-0" />
      <h2 class="heading-section">Documentation</h2>
    </div>

    <p class="subheading-descriptive mb-6">Your questions, answered</p>

    <ul class="grid grid-cols-2 gap-3 w-full max-w-md">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url" class="link" target="_blank" rel="noopener noreferrer">
          <img :src="link.logo" :alt="`${link.name} logo`" />
          <span>{{ link.name }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

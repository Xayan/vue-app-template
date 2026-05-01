<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseLink from '../components/BaseLink.vue'
import SvgIcon from '../components/SvgIcon.vue'

const count = ref(0)

interface Link {
  name: string
  url: string
  logo: string
}

const links: Link[] = [
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: '/src/assets/typescript.svg',
  },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: '/src/assets/tailwind.svg' },
  { name: 'Vue 3', url: 'https://vuejs.org/', logo: '/src/assets/vue.svg' },
  { name: 'Reka UI', url: 'https://reka-ui.com/', logo: '/src/assets/reka.svg' },
  { name: 'Lucide Icons', url: 'https://lucide.dev/', logo: '/src/assets/lucide.svg' },
  { name: 'Vite', url: 'https://vite.dev/', logo: '/src/assets/vite.svg' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-br from-slate-800 to-slate-950">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <SvgIcon
        name="zap"
        size="xl"
        :stroke-width="1.5"
        class="text-yellow-300 mb-8 animate-periodic-bounce"
      ></SvgIcon>

      <div class="text-center mb-8">
        <h1 class="heading-page mb-4">Get started</h1>
        <p class="text-body-primary">
          Edit
          <code>src/views/HomeView.vue</code>
          and save to test
          <code>HMR</code>
        </p>
      </div>

      <BaseButton variant="primary" size="lg" @click="count++" class="animate-periodic-shake">
        Count is {{ count }}
      </BaseButton>

      <p class="text-emphasis-pink mt-2">Click to increment</p>

      <div class="flex items-center gap-3 mt-20 mb-4">
        <SvgIcon name="book-open-text" size="md" class="text-purple-400 shrink-0"></SvgIcon>
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

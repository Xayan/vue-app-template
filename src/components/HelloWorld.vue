<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseLink from './BaseLink.vue'
import SvgIcon from './SvgIcon.vue'

const count = ref(0)

interface DocLink {
  name: string
  url: string
  logo: string
}

const docs: DocLink[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', logo: '/src/assets/typescript.svg' },
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
      <SvgIcon name="zap" size="xl" :stroke-width="1.5" class="text-pink-500 mb-8"></SvgIcon>

      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold text-slate-100 mb-4">Get started</h1>
        <p class="text-lg text-slate-400">
          Edit
          <code class="bg-slate-800 px-2 py-1 rounded text-sm">src/App.vue</code>
          and save to test
          <code class="bg-slate-800 px-2 py-1 rounded text-sm">HMR</code>
        </p>
      </div>

      <BaseButton variant="primary" size="lg" @click="count++"> Count is {{ count }} </BaseButton>

      <p class="text-lg text-pink-500 italic mt-2">Click to increment</p>

      <div class="flex items-center gap-3 mt-20 mb-4">
        <SvgIcon name="book-open" size="md" class="text-purple-400 shrink-0"></SvgIcon>
        <h2 class="text-2xl font-bold text-slate-100">Documentation</h2>
      </div>

      <p class="text-slate-400 mb-6">Your questions, answered</p>

      <ul class="grid grid-cols-2 gap-3 w-full max-w-md">
        <li v-for="link in docs" :key="link.url">
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

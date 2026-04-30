<script setup lang="ts">
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'
import BaseButton from './BaseButton.vue'
import BaseLink from './BaseLink.vue'
import SvgIcon from './SvgIcon.vue'

const count = ref(0)
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

      <div class="flex items-center gap-3 mt-20 mb-4">
        <SvgIcon name="book-open" size="md" class="text-purple-400 shrink-0"></SvgIcon>
        <h2 class="text-2xl font-bold text-slate-100">Documentation</h2>
      </div>
      <p class="text-slate-400 mb-6">Your questions, answered</p>
      <ul class="flex gap-3 flex-wrap">
        <li>
          <BaseLink href="https://vite.dev/" button variant="secondary" size="md" target="_blank">
            <img class="h-5 w-5" :src="viteLogo" alt="" />
            Explore Vite
          </BaseLink>
        </li>
        <li>
          <BaseLink href="https://vuejs.org/" button variant="secondary" size="md" target="_blank">
            <img class="h-5 w-5" :src="vueLogo" alt="" />
            Learn more
          </BaseLink>
        </li>
      </ul>
    </section>
  </div>
</template>

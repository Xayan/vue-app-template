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
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-950">
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
    </section>

    <div class="border-t border-slate-700"></div>

    <!-- Next Steps Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 border-t border-slate-700">
      <!-- Documentation -->
      <div class="p-8 border-b md:border-b-0 md:border-r border-slate-700">
        <div class="flex items-center gap-3 mb-4">
          <SvgIcon name="book-open" size="md" class="text-purple-400 flex-shrink-0"></SvgIcon>
          <h2 class="text-2xl font-bold text-slate-100">Documentation</h2>
        </div>
        <p class="text-slate-400 mb-6">Your questions, answered</p>
        <ul class="flex gap-3 flex-wrap">
          <li>
            <BaseLink href="https://vite.dev/" variant="primary" size="md" target="_blank">
              <img class="h-5 w-5" :src="viteLogo" alt="" />
              Explore Vite
            </BaseLink>
          </li>
          <li>
            <BaseLink href="https://vuejs.org/" variant="secondary" size="md" target="_blank">
              <img class="h-5 w-5" :src="vueLogo" alt="" />
              Learn more
            </BaseLink>
          </li>
        </ul>
      </div>

      <!-- Social -->
      <div class="p-8">
        <div class="flex items-center gap-3 mb-4">
          <SvgIcon name="share-2" size="md" class="text-purple-400 flex-shrink-0"></SvgIcon>
          <h2 class="text-2xl font-bold text-slate-100">Connect with us</h2>
        </div>
        <p class="text-slate-400 mb-6">Join the Vite community</p>
        <ul class="grid grid-cols-2 gap-2">
          <li>
            <BaseLink
              href="https://github.com/vitejs/vite"
              variant="secondary"
              size="md"
              target="_blank"
              class="w-full"
              title="GitHub"
            >
              <SvgIcon name="github" size="sm"></SvgIcon>
              GitHub
            </BaseLink>
          </li>
          <li>
            <BaseLink
              href="https://chat.vite.dev/"
              variant="secondary"
              size="md"
              target="_blank"
              class="w-full"
              title="Discord"
            >
              <SvgIcon name="message-circle" size="sm"></SvgIcon>
              Discord
            </BaseLink>
          </li>
          <li>
            <BaseLink
              href="https://x.com/vite_js"
              variant="secondary"
              size="md"
              target="_blank"
              class="w-full"
              title="X.com"
            >
              <SvgIcon name="twitter" size="sm"></SvgIcon>
              X.com
            </BaseLink>
          </li>
          <li>
            <BaseLink
              href="https://bsky.app/profile/vite.dev"
              variant="secondary"
              size="md"
              target="_blank"
              class="w-full"
              title="Bluesky"
            >
              <SvgIcon name="share" size="sm"></SvgIcon>
              Bluesky
            </BaseLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

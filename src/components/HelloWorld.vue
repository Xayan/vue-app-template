<script setup lang="ts">
import * as featherIcons from 'feather-icons'
import { ref } from 'vue'
import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'

const count = ref(0)

// Get SVG strings from Feather icons
const bookOpenSvg = featherIcons.icons['book-open'].toSvg({
  class: 'w-6 h-6',
  'stroke-width': '2',
})
const share2Svg = featherIcons.icons['share-2'].toSvg({
  class: 'w-6 h-6',
  'stroke-width': '2',
})
const githubSvg = featherIcons.icons.github.toSvg({
  class: 'w-5 h-5',
  'stroke-width': '2',
})
const messageCircleSvg = featherIcons.icons['message-circle'].toSvg({
  class: 'w-5 h-5',
  'stroke-width': '2',
})
const twitterSvg = featherIcons.icons.twitter.toSvg({
  class: 'w-5 h-5',
  'stroke-width': '2',
})
const shareSvg = featherIcons.icons.share.toSvg({
  class: 'w-5 h-5',
  'stroke-width': '2',
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-br from-slate-300 to-slate-50">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <div class="relative mb-8 h-44 w-44 flex items-center justify-center">
        <img :src="heroImg" class="h-44 w-44" width="170" height="179" alt="" />
        <img :src="vueLogo" class="absolute h-28 w-28 transform -rotate-45" alt="Vue logo" />
        <img
          :src="viteLogo"
          class="absolute h-20 w-20 transform -rotate-45 translate-y-12"
          alt="Vite logo"
        />
      </div>

      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold text-slate-900 mb-4">Get started</h1>
        <p class="text-lg text-slate-600">
          Edit
          <code class="bg-slate-200 px-2 py-1 rounded text-sm">src/App.vue</code>
          and save to test
          <code class="bg-slate-200 px-2 py-1 rounded text-sm">HMR</code>
        </p>
      </div>

      <button
        type="button"
        class="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        @click="count++"
      >
        Count is {{ count }}
      </button>
    </section>

    <div class="border-t border-slate-200"></div>

    <!-- Next Steps Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 border-t border-slate-200">
      <!-- Documentation -->
      <div class="p-8 border-b md:border-b-0 md:border-r border-slate-200">
        <div class="w-6 h-6 mb-4 text-blue-600 inline-block" v-html="bookOpenSvg"></div>
        <h2 class="text-2xl font-bold text-slate-900 mb-2">Documentation</h2>
        <p class="text-slate-600 mb-6">Your questions, answered</p>
        <ul class="flex gap-3 flex-wrap">
          <li>
            <a
              href="https://vite.dev/"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
            >
              <img class="h-5 w-5" :src="viteLogo" alt="" />
              Explore Vite
            </a>
          </li>
          <li>
            <a
              href="https://vuejs.org/"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
            >
              <img class="h-5 w-5" :src="vueLogo" alt="" />
              Learn more
            </a>
          </li>
        </ul>
      </div>

      <!-- Social -->
      <div class="p-8">
        <div class="w-6 h-6 mb-4 text-amber-600 inline-block" v-html="share2Svg"></div>
        <h2 class="text-2xl font-bold text-slate-900 mb-2">Connect with us</h2>
        <p class="text-slate-600 mb-6">Join the Vite community</p>
        <ul class="grid grid-cols-2 gap-2">
          <li>
            <a
              href="https://github.com/vitejs/vite"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
              title="GitHub"
            >
              <span class="w-5 h-5" v-html="githubSvg"></span>
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://chat.vite.dev/"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
              title="Discord"
            >
              <span class="w-5 h-5" v-html="messageCircleSvg"></span>
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://x.com/vite_js"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
              title="X.com"
            >
              <span class="w-5 h-5" v-html="twitterSvg"></span>
              X.com
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/vite.dev"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors"
              title="Bluesky"
            >
              <span class="w-5 h-5" v-html="shareSvg"></span>
              Bluesky
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

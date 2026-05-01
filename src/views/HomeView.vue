<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Zap, BookOpenText, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import BaseButton from '../components/BaseButton.vue'
import BaseLink from '../components/BaseLink.vue'
import { useCounterStore } from '../stores/counter'
import { useUsers } from '../composables/useUsers'

const counter = useCounterStore()
const { data: users, isPending, error, refetch } = useUsers()

const currentAvatarIndex = ref(0)
let autoRotateTimer: ReturnType<typeof setInterval> | null = null

function nextAvatar() {
  if (users.value) {
    currentAvatarIndex.value = (currentAvatarIndex.value + 1) % users.value.length
  }
}

function previousAvatar() {
  if (users.value) {
    currentAvatarIndex.value =
      (currentAvatarIndex.value - 1 + users.value.length) % users.value.length
  }
}

function startAutoRotate() {
  autoRotateTimer = setInterval(() => {
    nextAvatar()
  }, 5000)
}

function stopAutoRotate() {
  if (autoRotateTimer) {
    clearInterval(autoRotateTimer)
    autoRotateTimer = null
  }
}

onMounted(() => {
  startAutoRotate()
})

onUnmounted(() => {
  stopAutoRotate()
})

interface Link {
  name: string
  url: string
  logo: string
}

const getLogoUrl = (name: string) => {
  return new URL(`../assets/img/logo/${name}.svg`, import.meta.url).href
}

const links: Link[] = [
  { name: 'Vue 3', url: 'https://vuejs.org/', logo: getLogoUrl('vue') },
  { name: 'Reka UI', url: 'https://reka-ui.com/', logo: getLogoUrl('reka') },
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
  { name: 'Lucide Icons', url: 'https://lucide.dev/', logo: getLogoUrl('lucide') },
  { name: 'Vite', url: 'https://vite.dev/', logo: getLogoUrl('vite') },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-br from-slate-800 to-slate-950">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <Zap :stroke-width="1.5" class="w-12 h-12 text-yellow-300 mb-8 animate-periodic-bounce" />

      <div class="text-center mb-8">
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

      <div class="flex items-center gap-3 mt-20 mb-4">
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

      <!-- Avatar Carousel Section -->
      <div class="mt-16 w-full max-w-md">
        <div class="flex items-center gap-3 mb-6">
          <h2 class="heading-section">Featured Users</h2>
        </div>

        <div v-if="isPending" class="text-center py-8">
          <p class="text-body-primary">Loading avatars...</p>
        </div>

        <div v-else-if="error" class="text-center py-8">
          <p class="text-red-400">Failed to load avatars</p>
          <BaseButton variant="secondary" size="sm" @click="() => refetch()" class="mt-4">
            Retry
          </BaseButton>
        </div>

        <div v-else-if="users" class="flex flex-col items-center gap-4">
          <!-- Avatar Display -->
          <div
            class="relative w-32 h-32 rounded-full overflow-hidden bg-slate-700 flex items-center justify-center shadow-lg"
          >
            <img
              :src="users[currentAvatarIndex].avatar"
              :alt="users[currentAvatarIndex].name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- User Info -->
          <div class="text-center">
            <p class="text-lg font-semibold text-slate-100">{{ users[currentAvatarIndex].name }}</p>
            <p class="text-sm text-slate-400">{{ users[currentAvatarIndex].email }}</p>
          </div>

          <!-- Navigation Controls -->
          <div class="flex items-center gap-3">
            <button
              @click="previousAvatar"
              class="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              aria-label="Previous user"
            >
              <ChevronLeft :size="20" class="text-slate-100" />
            </button>

            <div class="flex gap-2">
              <button
                v-for="(_, index) in users"
                :key="index"
                @click="currentAvatarIndex = index"
                :class="[
                  'w-2 h-2 rounded-full transition-all',
                  index === currentAvatarIndex
                    ? 'bg-pink-500 w-6'
                    : 'bg-slate-600 hover:bg-slate-500',
                ]"
                :aria-label="`Go to user ${index + 1}`"
              />
            </div>

            <button
              @click="nextAvatar"
              class="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              aria-label="Next user"
            >
              <ChevronRight :size="20" class="text-slate-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

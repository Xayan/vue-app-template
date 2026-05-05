<script setup lang="ts">
  import { ShadButton } from '@/components/ui/button'
  import { Frown } from 'lucide-vue-next'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-6 px-4">
    <Frown :stroke-width="1.5" :size="64" class="text-red-400/50" />

    <h1 class="heading-page">404</h1>
    <p class="text-body-primary">Page not found</p>

    <ShadButton variant="default" as-child>
      <RouterLink to="/">Go Home</RouterLink>
    </ShadButton>
  </section>
</template>

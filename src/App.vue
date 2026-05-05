<script setup lang="ts">
  import { SiteFooter, SiteHeader } from '@/components/layout'
  import { RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <SiteHeader />
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <SiteFooter />
  </footer>
</template>

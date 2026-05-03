<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SiteFooter from './components/layout/SiteFooter.vue'
  import SiteHeader from './components/layout/SiteHeader.vue'
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

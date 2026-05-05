<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { Zap } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <RouterLink id="home-link" to="/">
        <Zap :stroke-width="2" :size="28" class="text-yellow-300" />
        <span class="text-xl font-semibold text-slate-100">Vue Template</span>
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <RouterLink to="/examples">Examples</RouterLink>
    </div>
  </div>
</template>

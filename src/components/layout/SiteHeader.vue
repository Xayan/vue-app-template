<script setup lang="ts">
  import { Zap } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <a id="home-link" href="/">
        <Zap :stroke-width="2" :size="28" class="text-yellow-300" />
        <span class="text-xl font-semibold text-slate-100">Vue Template</span>
      </a>
    </div>

    <div class="flex items-center gap-4">
      <a href="/examples">Examples</a>
    </div>
  </div>
</template>

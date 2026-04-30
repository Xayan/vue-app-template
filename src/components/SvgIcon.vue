<script setup lang="ts">
import * as featherIcons from 'feather-icons'
import { computed } from 'vue'

interface Props {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  strokeWidth?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  strokeWidth: 2,
})

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

const iconSvg = computed(() => {
  const icon = featherIcons.icons[props.name as keyof typeof featherIcons.icons]
  if (!icon) {
    console.warn(`Icon "${props.name}" not found in Feather Icons`)
    return ''
  }
  return icon.toSvg({
    class: sizeMap[props.size],
    'stroke-width': props.strokeWidth.toString(),
  })
})

const classes = computed(() => {
  return props.class || ''
})
</script>

<template>
  <span :class="classes" v-html="iconSvg"></span>
</template>

<script setup lang="ts">
import * as lucideVueNext from 'lucide-vue-next'
import { computed } from 'vue'
import { cn } from '../lib/utils'

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

// Convert kebab-case to PascalCase for Lucide icon names
const getIconComponent = () => {
  const pascalName = props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const icon = lucideVueNext[pascalName as keyof typeof lucideVueNext]
  if (!icon) {
    console.warn(`Icon "${props.name}" not found in Lucide Icons`)
    return null
  }
  return icon
}

const IconComponent = computed(() => getIconComponent())

const iconClasses = computed(() => {
  return cn(sizeMap[props.size], props.class)
})
</script>

<template>
  <component
    :is="IconComponent as any"
    v-if="IconComponent"
    v-bind="{ 'stroke-width': strokeWidth, class: iconClasses }"
  />
</template>

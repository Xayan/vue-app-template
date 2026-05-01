<script setup lang="ts">
import { computed } from 'vue'
import { getButtonClasses, type ButtonSize, type ButtonVariant } from '../lib/buttonStyles'
import { cn } from '../lib/utils'

interface Props {
  href: string
  button?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  button: false,
  variant: 'primary',
  size: 'md',
  target: '_self',
})

const linkClasses = computed(() => {
  if (!props.button) {
    return props.class || ''
  }
  const baseClasses = getButtonClasses(props.variant, props.size)
  return cn(baseClasses, props.class)
})

const computedRel = computed(() => {
  if (props.target === '_blank') {
    return props.rel ? `${props.rel} noopener noreferrer` : 'noopener noreferrer'
  }
  return props.rel || undefined
})
</script>

<template>
  <a :href="props.href" :class="linkClasses" :target="props.target" :rel="computedRel">
    <slot />
  </a>
</template>

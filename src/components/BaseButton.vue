<script setup lang="ts">
import { computed } from 'vue'
import { getButtonClasses, type ButtonSize, type ButtonVariant } from '../lib/buttonStyles'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const buttonClasses = computed(() => getButtonClasses(props.variant, props.size))
</script>

<template>
  <button :type="props.type" :class="buttonClasses" :disabled="props.disabled">
    <slot />
  </button>
</template>

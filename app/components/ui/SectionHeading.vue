<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

withDefaults(defineProps<Props>(), {
  eyebrow: '',
  subtitle: '',
  align: 'center',
})
</script>

<template>
  <div :class="[align === 'center' ? 'text-center' : 'text-left', 'max-w-3xl', align === 'center' ? 'mx-auto' : '']">
    <span v-if="eyebrow" class="section-eyebrow">
      <span class="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
      {{ eyebrow }}
    </span>
    <h2 class="section-title">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

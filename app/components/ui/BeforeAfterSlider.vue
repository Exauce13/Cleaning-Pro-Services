<script setup lang="ts">
interface Props {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  title?: string
  aspectRatio?: string
  initialPosition?: number
}

const props = withDefaults(defineProps<Props>(), {
  beforeAlt: 'Avant nettoyage',
  afterAlt: 'Après nettoyage',
  title: '',
  aspectRatio: 'aspect-video',
  initialPosition: 50,
})

const sliderPosition = ref(props.initialPosition)
const isDragging = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const containerWidth = ref(0)

function measureWidth() {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.offsetWidth
  }
}

function updatePosition(clientX: number) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const offsetX = clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100))
  sliderPosition.value = Math.round(percentage)
}

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  updatePosition(e.clientX)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  updatePosition(e.clientX)
}

function handleMouseUp() {
  isDragging.value = false
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
}

function handleTouchStart(e: TouchEvent) {
  if (!e.touches[0]) return
  isDragging.value = true
  updatePosition(e.touches[0].clientX)
}

function handleTouchMove(e: TouchEvent) {
  if (!isDragging.value || !e.touches[0]) return
  updatePosition(e.touches[0].clientX)
}

function handleTouchEnd() {
  isDragging.value = false
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  measureWidth()
  window.addEventListener('resize', measureWidth)
  if (containerRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => measureWidth())
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', measureWidth)
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl transition-all duration-300 hover:border-gold-500/40">
    <div
      ref="containerRef"
      class="relative select-none overflow-hidden cursor-ew-resize"
      :class="aspectRatio"
      style="touch-action: pan-y;"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <!-- Image APRÈS (Fond complet) -->
      <img
        :src="afterImage"
        :alt="afterAlt"
        class="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        draggable="false"
      >

      <!-- Image AVANT (Clipée selon la position du curseur) -->
      <div
        class="absolute inset-0 h-full overflow-hidden select-none pointer-events-none"
        :style="{ width: `${sliderPosition}%` }"
      >
        <img
          :src="beforeImage"
          :alt="beforeAlt"
          class="absolute inset-0 h-full max-w-none object-cover select-none pointer-events-none"
          :style="{
            width: containerWidth > 0 ? `${containerWidth}px` : '100%',
            height: '100%',
          }"
          draggable="false"
        >
      </div>

      <!-- Badge "Avant" -->
      <div
        class="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-lg pointer-events-none transition-opacity duration-200"
        :style="{ opacity: sliderPosition < 15 ? 0 : 1 }"
      >
        <span class="h-2 w-2 rounded-full bg-red-400" />
        Avant
      </div>

      <!-- Badge "Après" -->
      <div
        class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 rounded-full bg-gold-gradient px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-white shadow-gold pointer-events-none transition-opacity duration-200"
        :style="{ opacity: sliderPosition > 85 ? 0 : 1 }"
      >
        <span class="h-2 w-2 rounded-full bg-white" />
        Après
      </div>

      <!-- Ligne de séparation & Curseur interactif -->
      <div
        class="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(35,145,230,0.8)] pointer-events-none"
        :style="{ left: `calc(${sliderPosition}% - 2px)` }"
      >
        <!-- Poignée ronde azurée -->
        <div
          class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gold-gradient text-white shadow-gold-lg border-2 border-white cursor-ew-resize transition-transform duration-150 hover:scale-110 active:scale-95"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m8 7-5 5 5 5M16 7l5 5-5 5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <!-- Indication d'interaction en bas -->
      <div class="absolute bottom-2.5 sm:bottom-3 inset-x-0 z-20 flex justify-center pointer-events-none">
        <span class="rounded-full bg-slate-900/75 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium text-white backdrop-blur-md border border-white/15 shadow">
          ↔ Glissez pour comparer
        </span>
      </div>
    </div>

    <!-- Légende optionnelle sous le slider -->
    <div v-if="title" class="bg-white p-4 text-center border-t border-slate-100">
      <p class="text-sm font-semibold text-slate-800">{{ title }}</p>
    </div>
  </div>
</template>

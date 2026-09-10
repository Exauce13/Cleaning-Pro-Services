<script setup lang="ts">
const showTooltip = ref(true)

function closeTooltip() {
  showTooltip.value = false
}

onMounted(() => {
  setTimeout(() => {
    showTooltip.value = false
  }, 12000)
})
</script>

<template>
  <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3">
    <!-- Bulle d'incitation (Tooltip) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-4"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showTooltip"
        class="hidden sm:flex items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-white py-2 px-3.5 text-xs font-medium text-slate-800 shadow-xl backdrop-blur-xl"
      >
        <div class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </div>
        <div>
          <p class="font-semibold text-emerald-700">Besoin d'un devis express ?</p>
          <p class="text-slate-500 text-[11px]">Réponse immédiate sur WhatsApp</p>
        </div>
        <button
          class="text-slate-400 hover:text-slate-700 ml-1 text-sm font-bold"
          aria-label="Fermer"
          @click="closeTooltip"
        >
          ×
        </button>
      </div>
    </Transition>

    <!-- Bouton Flottant WhatsApp -->
    <a
      href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec Cleaning Pro Service sur WhatsApp"
      class="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-emerald-500/30"
    >
      <!-- Pulse halo -->
      <span class="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />

      <!-- WhatsApp SVG Icon -->
      <svg viewBox="0 0 24 24" class="relative z-10 h-6 w-6 sm:h-7 sm:w-7 fill-current drop-shadow">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.17 8.17 0 0 1-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
      </svg>
    </a>
  </div>
</template>

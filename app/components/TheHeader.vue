<script setup lang="ts">
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services & Tarifs', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Contact', to: '/contact' },
]

const isOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3'
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4'
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none">
        <div class="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white p-0.5 shadow-md ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/images/logo.png"
            alt="Cleaning Pro Services Logo"
            class="h-full w-full object-contain"
          />
          <span class="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
        </div>
        <div class="leading-tight">
          <div class="flex items-center gap-1 sm:gap-1.5">
            <span class="font-display text-sm sm:text-base font-extrabold tracking-wider text-slate-900 group-hover:text-gold-600 transition-colors">
              CLEANING PRO
            </span>
            <span class="rounded bg-gold-500/15 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-gold-600 border border-gold-400/30">
              SERVICES
            </span>
          </div>
          <p class="text-[10px] sm:text-[11px] font-semibold tracking-widest text-gold-600 uppercase">
            Parakou · Bénin
          </p>
        </div>
      </NuxtLink>

      <!-- Nav desktop -->
      <nav class="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-sm lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-600 transition-all duration-200 hover:text-gold-600 hover:bg-slate-100"
          active-class="!text-gold-600 !bg-gold-500/15 font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Actions desktop -->
      <div class="hidden items-center gap-3 lg:flex">
        <a
          href="https://wa.me/22997952738"
          target="_blank"
          rel="noopener"
          class="group flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-3 py-2 text-xs font-semibold text-slate-800 backdrop-blur-md transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-100"
        >
          <span class="flex h-5 w-5 items-center justify-center rounded-lg bg-emerald-500 text-white">
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
            </svg>
          </span>
          <span class="hidden xl:inline">+229 97 95 27 38</span>
          <span class="xl:hidden">WhatsApp</span>
        </a>

        <NuxtLink
          to="/devis"
          class="btn-gold !py-2.5 !px-4 text-xs sm:text-sm !rounded-xl"
        >
          <span>Devis WhatsApp</span>
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Burger mobile -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-100 lg:hidden"
        aria-label="Ouvrir le menu"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Nav mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-b border-slate-200 bg-white/98 px-5 py-5 sm:px-6 sm:py-6 shadow-xl backdrop-blur-2xl lg:hidden max-h-[85vh] overflow-y-auto">
        <div class="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
          <div class="h-10 w-10 rounded-full bg-white p-0.5 shadow-md ring-1 ring-slate-200 flex-none">
            <img src="/images/logo.png" alt="Cleaning Pro Services" class="h-full w-full object-contain" />
          </div>
          <div>
            <p class="font-display text-base font-bold text-slate-900">Cleaning Pro Services</p>
            <p class="text-xs text-gold-600">Nettoyage Haut de Gamme Parakou</p>
          </div>
        </div>

        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-gold-600"
            active-class="!bg-gold-500/10 !text-gold-600 font-semibold border-l-2 border-gold-500"
            @click="isOpen = false"
          >
            <span>{{ link.label }}</span>
            <span class="text-xs text-slate-400">→</span>
          </NuxtLink>

          <div class="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://wa.me/22997952738"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              <span>Écrire sur WhatsApp (+229 97 95 27 38)</span>
            </a>
            <NuxtLink
              to="/devis"
              class="btn-gold !py-3 text-center text-sm"
              @click="isOpen = false"
            >
              Demander un devis en ligne
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

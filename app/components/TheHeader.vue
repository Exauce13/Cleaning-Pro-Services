<script setup lang="ts">
const route = useRoute()

const links = [
  { 
    label: 'Accueil', 
    to: '/'
  },
  { 
    label: 'À propos', 
    to: '/a-propos'
  },
  { 
    label: 'Services & Tarifs', 
    to: '/services'
  },
  { 
    label: 'Réalisations', 
    to: '/realisations'
  },
  { 
    label: 'Contact', 
    to: '/contact'
  },
]

const isOpen = ref(false)
const isScrolled = ref(false)

// Close on route change
watch(() => route.path, () => {
  isOpen.value = false
})

// Body scroll lock when menu is open
watch(isOpen, (value) => {
  if (import.meta.client) {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      isOpen.value = false
    }
  }
  window.addEventListener('keydown', handleKeyDown)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeyDown)
    if (import.meta.client) {
      document.body.style.overflow = ''
    }
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled || isOpen
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3'
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4'
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none" @click="isOpen = false">
        <div class="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white p-0.5 shadow-md ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/images/logo.png"
            alt="Cleaning Pro Services Logo"
            class="h-full w-full object-contain"
          />
        </div>
        <div class="flex items-center gap-1 sm:gap-1.5">
          <span class="font-display text-sm sm:text-base font-extrabold tracking-wider text-slate-900 group-hover:text-gold-600 transition-colors">
            CLEANING PRO SERVICES
          </span>
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
          href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
          target="_blank"
          rel="noopener"
          class="group flex items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-slate-800 backdrop-blur-md transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-100"
        >
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

      <!-- Burger mobile button -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-100 active:scale-95 lg:hidden"
        :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-6 w-6 text-slate-900" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer (apparition depuis la droite) -->
    <Teleport to="body">
      <!-- Backdrop sombre avec flou -->
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          @click="isOpen = false"
        />
      </Transition>

      <!-- Panel Tiroir depuis la droite -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isOpen"
          class="fixed top-0 right-0 bottom-0 z-50 w-[86vw] max-w-sm h-full bg-white shadow-2xl lg:hidden flex flex-col justify-between overflow-y-auto p-5 sm:p-6 border-l border-slate-200/80"
          style="overscroll-behavior: contain;"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div>
            <!-- Header du tiroir : Logo + Bouton fermer -->
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <NuxtLink to="/" class="flex items-center gap-2.5" @click="isOpen = false">
                <div class="h-9 w-9 flex items-center justify-center rounded-full bg-white p-0.5 shadow-sm ring-1 ring-slate-200">
                  <img src="/images/logo.png" alt="Cleaning Pro Services Logo" class="h-full w-full object-contain" />
                </div>
                <span class="font-display text-xs sm:text-sm font-extrabold tracking-wider text-slate-900">
                  CLEANING PRO
                </span>
              </NuxtLink>

              <button
                type="button"
                class="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 active:scale-95"
                aria-label="Fermer le menu"
                @click="isOpen = false"
              >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

            <!-- Navigation Links -->
            <nav class="flex flex-col gap-1.5 pt-4">
              <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="flex items-center rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-gold-600 active:scale-[0.99]"
                :class="[
                  route.path === link.to
                    ? 'bg-gold-500/10 text-gold-700 font-bold border-l-4 border-gold-500 shadow-sm'
                    : 'border-l-4 border-transparent'
                ]"
                @click="isOpen = false"
              >
                <span>{{ link.label }}</span>
              </NuxtLink>
            </nav>
          </div>

          <!-- Bottom Actions -->
          <div class="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-3 pb-2">
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-50 py-3 px-4 text-sm font-semibold text-emerald-800 transition-all duration-200 hover:bg-emerald-100 hover:border-emerald-400 active:scale-[0.99] shadow-sm text-center"
            >
              <span>Écrire sur WhatsApp (+229 97 95 27 38)</span>
            </a>

            <!-- Online Quote Button -->
            <NuxtLink
              to="/devis"
              class="btn-gold !py-3 text-center text-sm w-full flex items-center justify-center shadow-md"
              @click="isOpen = false"
            >
              <span>Demander un devis en ligne</span>
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>


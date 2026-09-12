<script setup lang="ts">
const route = useRoute()

const links = [
  { 
    label: 'Accueil', 
    to: '/', 
    icon: 'home'
  },
  { 
    label: 'À propos', 
    to: '/a-propos', 
    icon: 'about'
  },
  { 
    label: 'Services & Tarifs', 
    to: '/services', 
    icon: 'services'
  },
  { 
    label: 'Réalisations', 
    to: '/realisations', 
    icon: 'realisations'
  },
  { 
    label: 'Contact', 
    to: '/contact', 
    icon: 'contact'
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

    <!-- Nav mobile full drawer / overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 h-[calc(100dvh-100%)] bg-white/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between overflow-y-auto px-5 py-5 sm:px-6 shadow-2xl border-t border-slate-200/80"
        style="overscroll-behavior: contain;"
      >
        <!-- Navigation Links -->
        <nav class="flex flex-col gap-2 pt-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="group flex items-center justify-between rounded-xl p-3 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-gold-600 active:scale-[0.99]"
            :class="[
              route.path === link.to
                ? 'bg-gold-500/10 text-gold-700 font-bold border-l-4 border-gold-500 shadow-sm'
                : 'border-l-4 border-transparent'
            ]"
            @click="isOpen = false"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                :class="[
                  route.path === link.to
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-gold-500/15 group-hover:text-gold-600'
                ]"
              >
                <!-- Home Icon -->
                <svg v-if="link.icon === 'home'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="9 22 9 12 15 12 15 22" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- About Icon -->
                <svg v-else-if="link.icon === 'about'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- Services Icon -->
                <svg v-else-if="link.icon === 'services'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- Realisations Icon -->
                <svg v-else-if="link.icon === 'realisations'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="21 15 16 10 5 21" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- Contact Icon -->
                <svg v-else-if="link.icon === 'contact'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="text-base font-semibold">{{ link.label }}</span>
            </div>
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-600">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </nav>

        <!-- Bottom Actions & Reassurance -->
        <div class="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-3 pb-4">
          <!-- Reassurance pill -->
          <div class="rounded-xl border border-gold-500/20 bg-gold-50/60 p-3 text-xs text-slate-600 flex items-center gap-2.5">
            <span class="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-600 font-bold text-sm">
              ⚡
            </span>
            <p class="leading-snug">
              <span class="font-bold text-slate-900">Devis gratuit sous 15 min</span> · Intervention rapide sur Parakou
            </p>
          </div>

          <!-- WhatsApp Button -->
          <a
            href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 py-3 px-4 text-sm font-semibold text-emerald-800 transition-all duration-200 hover:bg-emerald-100 hover:border-emerald-400 active:scale-[0.99] shadow-sm"
          >
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white flex-none">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
              </svg>
            </span>
            <span>Écrire sur WhatsApp (+229 97 95 27 38)</span>
          </a>

          <!-- Online Quote Button -->
          <NuxtLink
            to="/devis"
            class="btn-gold !py-3 text-center text-sm w-full flex items-center justify-center gap-2 shadow-md"
            @click="isOpen = false"
          >
            <span>Demander un devis en ligne</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>

          <!-- Footer reassurance info -->
          <div class="pt-2 flex items-center justify-between text-xs text-slate-500">
            <span class="flex items-center gap-1.5 font-medium text-emerald-600">
              <span class="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Disponible 7j/7
            </span>
            <span class="font-medium text-slate-500">Parakou · Bénin</span>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>


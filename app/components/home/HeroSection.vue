<script setup lang="ts">
const highlights = [
  { icon: '✓', text: 'Déplacement 0 FCFA' },
  { icon: '✓', text: 'Personnel formé & discret' },
  { icon: '✓', text: 'Produits de qualité inclus' },
  { icon: '✓', text: 'Satisfaction garantie' },
]
</script>

<template>
  <section class="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
    <!-- Halo azuré en arrière-plan -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gold-500/8 blur-[130px] pointer-events-none" />

    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
      <!-- Colonne Texte (7 cols) -->
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <!-- Eyebrow Pill -->
        <div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 backdrop-blur-md">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
          </span>
          <span class="text-xs font-bold tracking-widest text-gold-700 uppercase">
            Nettoyage Haut de Gamme à Parakou
          </span>
        </div>

        <!-- Grand Titre -->
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900 break-words">
          Un espace propre
          <span class="text-gradient-gold block mt-1">
            change tout.
          </span>
        </h1>

        <!-- Paragraphe descriptif -->
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Un service de nettoyage haut de gamme pour vos <strong class="text-slate-800">studios</strong>, <strong class="text-slate-800">appartements</strong> et <strong class="text-slate-800">espaces professionnels</strong>. Qualité irréprochable, produits professionnels et satisfaction garantie.
        </p>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
          <NuxtLink to="/devis" class="btn-gold w-full sm:w-auto text-sm sm:text-base text-center justify-center">
            <span>Demander un devis gratuit</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 sm:h-5 sm:w-5">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>

          <a
            href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
            target="_blank"
            rel="noopener"
            class="btn-outline w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <span>WhatsApp direct</span>
            <span class="text-emerald-500">💬</span>
          </a>
        </div>

        <!-- Badges de réassurance clés -->
        <div class="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-left">
          <div
            v-for="item in highlights"
            :key="item.text"
            class="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-700"
          >
            <span class="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-600 text-[10px] font-bold">
              {{ item.icon }}
            </span>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>

      <!-- Colonne Image & Badges flottants (5 cols) -->
      <div class="lg:col-span-5 relative mt-6 lg:mt-0">
        <!-- Cadre Image Principal -->
        <div class="relative mx-auto max-w-lg lg:max-w-none">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl">
            <img
              src="/images/hero_luxury_villa.jpg"
              alt="Salon contemporain éclatant nettoyé par Cleaning Pro Service"
              class="h-[280px] xs:h-[340px] sm:h-[460px] w-full object-cover transition-transform duration-700 hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none" />

            <!-- Petit encart sur l'image -->
            <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-2xl border border-white/20 bg-slate-950/80 p-3 sm:p-3.5 backdrop-blur-md">
              <div class="flex items-center justify-between gap-2">
                <div class="pl-0 sm:pl-2">
                  <p class="text-xs sm:text-sm font-bold text-white leading-tight">Studios & Appartements Parakou</p>
                  <p class="text-[10px] sm:text-[11px] text-gold-300 leading-tight mt-0.5">Nettoyage Complet du sol au plafond</p>
                </div>
                <span class="flex-none rounded-full bg-emerald-500/20 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                  Déplacement 0 F ✓
                </span>
              </div>
            </div>
          </div>

          <!-- Badge flottant 1 (Haut Droite) : Déplacement 0 F -->
          <div class="absolute -top-3 -right-3 sm:-top-4 sm:-right-5 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/95 py-2 px-3 sm:py-2.5 sm:px-3.5 shadow-lg ring-1 ring-gold-500/20 backdrop-blur-xl animate-float z-20">
            <div class="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600 font-bold text-xs sm:text-sm">
              0 F
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 leading-tight">Déplacement Offert</p>
              <p class="text-[10px] sm:text-[11px] text-gold-600 font-semibold leading-tight">Sur tout Parakou</p>
            </div>
          </div>

          <!-- Badge flottant 2 (Bas Gauche) : Tarifs transparents (format compact) -->
          <div class="hidden sm:flex absolute -bottom-4 -left-4 sm:-bottom-4 sm:-left-5 items-center gap-2 rounded-xl border border-slate-200 bg-white/95 py-1.5 px-3 sm:py-2 sm:px-3 shadow-lg ring-1 ring-slate-200 backdrop-blur-xl z-20">
            <div class="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 font-bold text-xs">
              ✓
            </div>
            <div>
              <p class="font-display text-xs sm:text-sm font-bold text-gold-600 leading-tight">Dès 3 000 FCFA</p>
              <p class="text-[10px] text-slate-500 leading-tight">Tarifs clairs & sans surprise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

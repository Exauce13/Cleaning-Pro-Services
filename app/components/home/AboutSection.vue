<script setup lang="ts">
const stats = [
  { label: "Déplacement", value: '0 FCFA', sub: 'Offert sur Parakou' },
  { label: 'Prix de départ', value: '3 000 F', sub: 'Pour les studios' },
  { label: 'Satisfaction', value: '100%', sub: 'Qualité irréprochable' },
  { label: 'Disponibilité', value: '6j / 7', sub: '7h00 à 19h00' },
]

const values = [
  {
    title: 'Discrétion & Confiance',
    desc: 'Nos agents interviennent dans le respect total de votre vie privée et de vos biens.',
  },
  {
    title: 'Rigueur & Efficacité',
    desc: 'Un nettoyage méticuleux dans les moindres recoins, sans laisser la moindre trace.',
  },
  {
    title: 'Produits de Qualité Inclus',
    desc: 'Matériel et détergents efficaces fournis sans aucun frais supplémentaire.',
  },
]
</script>

<template>
  <section class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <!-- Colonne Image Équipe (5 cols) -->
      <div class="lg:col-span-5 relative">
        <div class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl">
          <img
            src="/images/about_team_csp.jpg"
            alt="Équipe professionnelle de Cleaning Pro Service"
            class="h-[300px] xs:h-[380px] sm:h-[460px] w-full object-cover transition-transform duration-500 hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          <!-- Badge sur image -->
          <div class="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl border border-white/20 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl">
            <div class="flex items-center gap-3">
              <div class="flex h-9 w-9 sm:h-10 sm:w-10 flex-none items-center justify-center rounded-full bg-white p-0.5 shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Cleaning Pro Services"
                  class="h-full w-full object-contain"
                />
              </div>
              <div>
                <p class="text-xs sm:text-sm font-bold text-white leading-tight">Cleaning Pro Services</p>
                <p class="text-[10px] sm:text-xs text-gold-300 leading-tight mt-0.5">Personnel qualifié, ponctuel & de confiance</p>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <!-- Colonne Texte & Valeurs (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-700">
          <span>À propos de nous</span>
        </div>

        <h2 class="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Votre partenaire de propreté à
          <span class="text-gradient-gold">Parakou</span>
        </h2>

        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
          <strong class="text-slate-800">Cleaning Pro Service</strong> vous propose des prestations de nettoyage soignées pour vos studios, appartements et locaux professionnels. Notre équipe qualifiée met tout en œuvre pour vous offrir des espaces impeccables et agréables à vivre.
        </p>

        <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Nous mettons l'accent sur la qualité d'exécution, la ponctualité et des tarifs particulièrement avantageux, avec les frais de déplacement offerts sur tout Parakou.
        </p>

        <!-- Grille des valeurs -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
          <div
            v-for="val in values"
            :key="val.title"
            class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p class="text-xs font-bold text-gold-600">{{ val.title }}</p>
            <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>

        <!-- Chiffres clés -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200 pt-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="space-y-1"
          >
            <p class="font-display text-xl sm:text-3xl font-extrabold text-gold-600">
              {{ stat.value }}
            </p>
            <p class="text-xs font-semibold text-slate-800">{{ stat.label }}</p>
            <p class="text-[10px] text-slate-500">{{ stat.sub }}</p>
          </div>
        </div>

        <!-- Liens d'action -->
        <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <NuxtLink to="/services" class="btn-gold !py-2.5 !px-5 text-xs text-center justify-center">
            Voir nos forfaits & tarifs →
          </NuxtLink>
          <a
            href="https://wa.me/22997952738"
            target="_blank"
            rel="noopener"
            class="btn-outline !py-2.5 !px-5 text-xs text-center justify-center"
          >
            WhatsApp direct
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

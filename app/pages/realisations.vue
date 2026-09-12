<script setup lang="ts">
useSeoMeta({
  title: 'Nos Réalisations Avant / Après — Cleaning Pro Service Parakou',
  description: 'Visualisez les résultats spectaculaires de nos prestations de nettoyage à Parakou : studios, appartements et grand nettoyage en profondeur.',
})

interface Realisation {
  id: string
  title: string
  category: 'studio' | 'appartement' | 'general'
  categoryLabel: string
  location: string
  before: string
  after: string
  description: string
  duration: string
  price: string
}

const projects: Realisation[] = [
  {
    id: 'studio-titirou',
    title: 'Nettoyage Séjour & Espace Repas — Titirou',
    category: 'studio',
    categoryLabel: 'Studio & Séjour',
    location: 'Quartier Titirou, Parakou',
    before: '/images/realisations/sejour_before.jpg',
    after: '/images/realisations/sejour_after.jpg',
    description: 'Remise en état complète d\'un séjour et espace repas : dépoussiérage du mobilier, décapage et lustrage minutieux des sols carrelés.',
    duration: '2h30',
    price: '3 000 – 7 000 FCFA',
  },
  {
    id: 'cuisine-centre-ville',
    title: 'Cuisine Complète & Évier — Centre-Ville',
    category: 'appartement',
    categoryLabel: 'Cuisine',
    location: 'Centre-ville, Parakou',
    before: '/images/realisations/cuisine_before.jpg',
    after: '/images/realisations/cuisine_after.jpg',
    description: 'Dégraissage intensif de l\'évier inox, désinfection des surfaces de cuisson, nettoyage des placards et carrelage mural.',
    duration: '3 heures',
    price: '10 000 – 20 000 FCFA',
  },
  {
    id: 'sanitaires-farani',
    title: 'Sanitaires & Salle d\'Eau — Ladji Farani',
    category: 'appartement',
    categoryLabel: 'Sanitaires',
    location: 'Quartier Ladji Farani, Parakou',
    before: '/images/realisations/sb.jpg',
    after: '/images/realisations/salle_de_bain_before.jpg',
    description: 'Détartrage du lavabo colonne, élimination des résidus de savon et calcaire, désinfection totale des faïences et du sol.',
    duration: '2 heures',
    price: '10 000 – 20 000 FCFA',
  },
  {
    id: 'couloir-albarika',
    title: 'Couloir & Sols de Circulation — Albarika',
    category: 'general',
    categoryLabel: 'Sols & Couloir',
    location: 'Quartier Albarika, Parakou',
    before: '/images/realisations/couloir_before.jpg',
    after: '/images/realisations/couloir_after.jpg',
    description: 'Lavage approfondi et lustrage de carrelage de circulation : élimination des poussières tenaces et finitions impeccables sans traces.',
    duration: '2 heures',
    price: '10 000 – 30 000 FCFA',
  },
]

const currentFilter = ref<'all' | 'studio' | 'appartement' | 'general'>('all')

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return projects
  return projects.filter(p => p.category === currentFilter.value)
})
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 break-words">
          La preuve par <span class="text-gradient-gold">l'image</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          Découvrez la métamorphose de nos interventions à Parakou. Utilisez le curseur interactif sur chaque projet pour comparer le résultat.
        </p>
      </div>

      <!-- Filtres -->
      <div class="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          class="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          :class="[
            currentFilter === 'all'
              ? 'bg-gold-gradient text-white shadow-gold'
              : 'border border-slate-200 bg-white text-slate-600 hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 shadow-sm'
          ]"
          @click="currentFilter = 'all'"
        >
          Tous nos projets ({{ projects.length }})
        </button>
        <button
          class="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          :class="[
            currentFilter === 'studio'
              ? 'bg-gold-gradient text-white shadow-gold'
              : 'border border-slate-200 bg-white text-slate-600 hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 shadow-sm'
          ]"
          @click="currentFilter = 'studio'"
        >
          Studios (3 000 – 7 000 F)
        </button>
        <button
          class="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          :class="[
            currentFilter === 'appartement'
              ? 'bg-gold-gradient text-white shadow-gold'
              : 'border border-slate-200 bg-white text-slate-600 hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 shadow-sm'
          ]"
          @click="currentFilter = 'appartement'"
        >
          Appartements (10 000 – 20 000 F)
        </button>
        <button
          class="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          :class="[
            currentFilter === 'general'
              ? 'bg-gold-gradient text-white shadow-gold'
              : 'border border-slate-200 bg-white text-slate-600 hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 shadow-sm'
          ]"
          @click="currentFilter = 'general'"
        >
          Nettoyage Général (10 000 – 30 000 F)
        </button>
      </div>

      <!-- Projets -->
      <div class="mt-10 sm:mt-14 space-y-12 sm:space-y-16">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-8 shadow-xl transition-all duration-300 hover:border-gold-500/30 hover:shadow-2xl"
        >
          <!-- Comparateur Slider (7 cols) -->
          <div class="lg:col-span-7">
            <UiBeforeAfterSlider
              :before-image="project.before"
              :after-image="project.after"
              :before-alt="`${project.title} avant nettoyage`"
              :after-alt="`${project.title} après nettoyage`"
              aspect-ratio="aspect-[16/10]"
              :initial-position="50"
            />
          </div>

          <!-- Fiche Descriptive (5 cols) -->
          <div class="lg:col-span-5 space-y-3 sm:space-y-4">
            <div class="flex items-center justify-between">
              <span class="badge-gold">{{ project.categoryLabel }}</span>
              <span class="text-xs text-slate-500">{{ project.location }}</span>
            </div>

            <h2 class="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {{ project.title }}
            </h2>

            <p class="font-display text-xl sm:text-2xl font-extrabold text-gold-600">
              {{ project.price }}
            </p>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p class="text-[10px] uppercase font-bold text-slate-400">Durée d'action</p>
                <p class="text-sm font-bold text-gold-600 mt-0.5">{{ project.duration }}</p>
              </div>
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p class="text-[10px] uppercase font-bold text-slate-400">Déplacement</p>
                <p class="text-sm font-bold text-emerald-600 mt-0.5">0 FCFA</p>
              </div>
            </div>

            <div class="pt-2">
              <a
                :href="`https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20commander%20une%20prestation%20similaire%20à%20:%20${encodeURIComponent(project.title)}%20(${project.price}).`"
                target="_blank"
                rel="noopener"
                class="btn-gold w-full text-center text-xs sm:text-sm !py-3.5 flex items-center justify-center gap-2"
              >
                <span>Commander sur WhatsApp</span>
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA Bas de page -->
      <div class="mt-16 sm:mt-20 text-center rounded-3xl border border-gold-500/30 bg-white p-6 sm:p-10 shadow-xl">
        <h3 class="font-display text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900">
          Vous voulez un résultat identique chez vous ?
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Contactez-nous sur WhatsApp. Déplacement totalement gratuit à Parakou.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
            target="_blank"
            rel="noopener"
            class="btn-gold flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <span>Écrire sur WhatsApp (+229 97 95 27 38)</span>
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
            </svg>
          </a>
          <NuxtLink to="/devis" class="btn-outline text-xs sm:text-sm text-center justify-center">Simuler mon devis</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
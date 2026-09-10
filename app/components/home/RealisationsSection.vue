<script setup lang="ts">
interface RealisationProject {
  id: string
  title: string
  category: string
  location: string
  before: string
  after: string
  description: string
  duration: string
  teamSize: string
  price: string
}

const projects: RealisationProject[] = [
  {
    id: 'studio',
    title: 'Nettoyage Complet Studio — Parakou',
    category: 'Studio',
    location: 'Quartier Titirou, Parakou',
    before: '/images/realisation_living_before.jpg',
    after: '/images/realisation_living_after.jpg',
    description: 'Dépoussiérage intégral, lustrage des carreaux, nettoyage complet du mobilier, des vitres et assainissement des textiles.',
    duration: '2h30',
    teamSize: '2 agents',
    price: '3 000 – 7 000 FCFA',
  },
  {
    id: 'appartement',
    title: 'Appartement F3 Toutes Pièces — Parakou',
    category: 'Appartement',
    location: 'Centre-ville, Parakou',
    before: '/images/realisation_kitchen_before.jpg',
    after: '/images/realisation_kitchen_after.jpg',
    description: 'Dégraissage intensif cuisine, détartrage sanitaires, aspiration et lavage de toutes les pièces et recoins.',
    duration: '4 heures',
    teamSize: '3 agents',
    price: '10 000 – 20 000 FCFA',
  },
  {
    id: 'general',
    title: 'Grand Nettoyage Général & En Profondeur',
    category: 'Nettoyage Général',
    location: 'Quartier Ladji Farani, Parakou',
    before: '/images/realisation_postcon_before.jpg',
    after: '/images/realisation_postcon_after.jpg',
    description: 'Grand décrassage du sol au plafond, lustrage complet des sols, décapage et désinfection complète.',
    duration: '6 heures',
    teamSize: '4 agents',
    price: '10 000 – 30 000 FCFA',
  },
]

const activeIndex = ref(0)
const activeProject = computed<RealisationProject>(() => {
  return projects[activeIndex.value] ?? (projects[0] as RealisationProject)
})

const whatsappOrderUrl = computed(() => {
  const text = `Bonjour Cleaning Pro Service, je souhaite commander une prestation pour mon ${activeProject.value.category} (${activeProject.value.price}).`
  return `https://wa.me/22997952738?text=${encodeURIComponent(text)}`
})
</script>

<template>
  <section id="realisations" class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <!-- En-tête de section -->
    <UiSectionHeading
      eyebrow="Nos Résultats Par la Preuve"
      title="Comparateur Avant / Après Interactif"
      subtitle="Faites glisser le curseur pour visualiser la métamorphose de nos interventions à Parakou."
    />

    <!-- Onglets de sélection du projet -->
    <div class="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button
        v-for="(p, index) in projects"
        :key="p.id"
        class="flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200"
        :class="[
          activeIndex === index
            ? 'bg-gold-gradient text-white shadow-gold scale-105'
            : 'border border-slate-200 bg-white text-slate-600 hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 shadow-sm'
        ]"
        @click="activeIndex = index"
      >
        <span>{{ p.category }} ({{ p.price }})</span>
      </button>
    </div>

    <!-- Conteneur principal Showcase -->
    <div class="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
      <!-- Colonne Slider Avant/Après (8 cols) -->
      <div class="lg:col-span-8">
        <UiBeforeAfterSlider
          :key="activeProject.id"
          :before-image="activeProject.before"
          :after-image="activeProject.after"
          :before-alt="`${activeProject.title} avant nettoyage`"
          :after-alt="`${activeProject.title} après nettoyage`"
          aspect-ratio="aspect-[16/10]"
          :initial-position="50"
        />
      </div>

      <!-- Colonne Détails du projet (4 cols) -->
      <div class="lg:col-span-4 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
        <div>
          <div class="flex items-center justify-between">
            <span class="badge-gold">{{ activeProject.category }}</span>
            <span class="text-xs text-slate-500">{{ activeProject.location }}</span>
          </div>

          <h3 class="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-3 leading-snug">
            {{ activeProject.title }}
          </h3>

          <p class="font-display text-2xl font-extrabold text-gold-600 mt-2">
            {{ activeProject.price }}
          </p>

          <p class="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {{ activeProject.description }}
          </p>

          <!-- Métriques intervention -->
          <div class="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
            <div class="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <p class="text-[10px] uppercase font-bold text-slate-400">Durée d'action</p>
              <p class="text-sm font-bold text-gold-600 mt-0.5">{{ activeProject.duration }}</p>
            </div>
            <div class="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <p class="text-[10px] uppercase font-bold text-slate-400">Déplacement</p>
              <p class="text-sm font-bold text-emerald-600 mt-0.5">0 FCFA</p>
            </div>
          </div>
        </div>

        <div class="space-y-3 pt-2">
          <a
            :href="whatsappOrderUrl"
            target="_blank"
            rel="noopener"
            class="btn-gold w-full text-center text-xs sm:text-sm !py-3 flex items-center justify-center gap-2"
          >
            <span>Commander sur WhatsApp</span>
            <span>💬</span>
          </a>
          <NuxtLink
            to="/realisations"
            class="block text-center text-xs text-slate-500 hover:text-gold-600 transition-colors"
          >
            Voir tous nos projets →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Services & Tarifs — Cleaning Pro Service Parakou',
  description: 'Tarifs transparents pour le nettoyage de studios (3 000 - 7 000 F), appartements (10 000 - 20 000 F), grand nettoyage complet (10 000 - 30 000 F) et abonnements à Parakou.',
})

const servicesList = [
  {
    id: 'studio',
    title: 'Nettoyage Studio',
    subtitle: 'Idéal pour étudiants, jeunes cadres et petites surfaces',
    price: '3 000 – 7 000 FCFA',
    desc: 'Nettoyage complet de votre studio, du sol au plafond pour retrouver un intérieur parfaitement propre et ordonné.',
    included: [
      'Dépoussiérage et lustrage de l’ensemble des meubles et étagères',
      'Nettoyage et désinfection du coin cuisine (évier, plaques, plan de travail)',
      'Désinfection intégrale de la salle d’eau et sanitaires',
      'Balayage, aspiration et lavage humide des sols',
      'Nettoyage des vitres intérieures et miroirs',
      'Vidage et nettoyage des poubelles',
    ],
  },
  {
    id: 'appartement',
    title: 'Nettoyage Appartement',
    subtitle: 'Pour 2, 3 pièces ou plus — Un confort absolu chez vous',
    price: '10 000 – 20 000 FCFA',
    desc: 'Nettoyage intégral de votre appartement, toutes pièces et recoins inclus, avec des produits professionnels de haute qualité.',
    included: [
      'Nettoyage complet du salon, salle à manger et couloirs',
      'Dépoussiérage et aération soignée de toutes les chambres',
      'Dégraissage en profondeur des plans de travail et crédences cuisine',
      'Détartrage et désinfection des sanitaires et salles de bain',
      'Lavage haute clarté des fenêtres et baies vitrées accessibles',
      'Produits de qualité supérieure fournis par nos soins',
    ],
  },
  {
    id: 'general',
    title: 'Nettoyage Général & Complet',
    subtitle: 'Villas, locaux professionnels ou après travaux / déménagement',
    price: '10 000 – 30 000 FCFA',
    desc: 'Grand nettoyage approfondi pour tout type d\'espace nécessitant une intervention d\'envergure ou une remise à neuf.',
    included: [
      'Décrassage et désinfection intensive de toutes les pièces',
      'Traitement lustrant des sols (carreaux, faïences, marbre)',
      'Décapage des graisses incrustées et résidus de travaux',
      'Nettoyage minutieux des plinthes, portes, poignées et interrupteurs',
      'Désodorisation et assainissement de l’atmosphère',
      'Déplacement 100% offert sur Parakou (0 FCFA)',
    ],
  },
  {
    id: 'lessive',
    title: 'Service Lessive & Repassage',
    subtitle: 'Prestation sur-mesure à la demande',
    price: 'Sur devis / À part',
    desc: 'Confiez votre linge à notre équipe expérimentée pour un lavage doux, un détachage soigné et un repassage impeccable.',
    included: [
      'Tri méticuleux des textiles délicats, cotons et couleurs',
      'Lavage avec lessives professionnelles douces pour les fibres',
      'Séchage et repassage soigné sur cintre ou plié prêt à ranger',
      'Possibilité d’intégrer la lessive dans votre abonnement mensuel',
    ],
  },
]

const subscriptions = [
  {
    name: 'Abonnement Essentiel',
    price: '18 000 FCFA/mois',
    desc: 'Nettoyage simple · 4 passages par mois (1x / semaine)',
    features: ['4 interventions programmées', 'Nettoyage des pièces de vie', 'Produits d’entretien inclus', 'Horaires flexibles'],
  },
  {
    name: 'Abonnement Confort',
    price: '35 000 FCFA/mois',
    desc: 'Nettoyage complet · 8 passages par mois (2x / semaine)',
    features: ['8 interventions programmées', 'Nettoyage complet et approfondi', 'Produits professionnels inclus', 'Agent dédié de confiance'],
  },
]
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 break-words">
          Nos Services de <span class="text-gradient-gold">Nettoyage à Parakou</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          Des forfaits clairs et sans frais cachés. Déplacement à <strong class="text-slate-800">0 FCFA</strong> sur toute la ville de Parakou.
        </p>
      </div>

      <!-- Catalogue Prestations -->
      <div class="mt-10 sm:mt-16 space-y-8 sm:space-y-10">
        <article
          v-for="service in servicesList"
          :key="service.id"
          class="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-10 shadow-xl transition-all duration-300 hover:border-gold-500/40 hover:shadow-2xl"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div class="lg:col-span-7 space-y-3 sm:space-y-4">
              <span class="badge-gold font-display text-xs sm:text-sm">{{ service.price }}</span>

              <h2 class="font-display text-xl sm:text-3xl font-bold text-slate-900">
                {{ service.title }}
              </h2>
              <p class="text-xs sm:text-sm font-semibold text-gold-600">{{ service.subtitle }}</p>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ service.desc }}</p>

              <div class="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  :href="`https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20commander%20la%20prestation%20:%20${encodeURIComponent(service.title)}%20(${service.price}).`"
                  target="_blank"
                  rel="noopener"
                  class="btn-gold !py-2.5 !px-5 text-xs sm:text-sm flex items-center justify-center"
                >
                  <span>Commander sur WhatsApp</span>
                </a>
                <NuxtLink
                  :to="`/devis?service=${service.id}`"
                  class="btn-outline !py-2.5 !px-5 text-xs text-center justify-center"
                >
                  Simuler mon devis
                </NuxtLink>
              </div>
            </div>

            <!-- Inclusions -->
            <div class="lg:col-span-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-6">
              <p class="text-xs font-bold uppercase tracking-wider text-gold-700">Ce qui est inclus :</p>
              <ul class="mt-4 space-y-2.5">
                <li
                  v-for="item in service.included"
                  :key="item"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <span class="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="h-2.5 w-2.5">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <!-- Abonnements -->
      <div class="mt-20">
        <UiSectionHeading
          title="Gardez votre espace toujours propre"
          subtitle="Des formules mensuelles avantageuses avec passages programmés et produits inclus."
        />

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="sub in subscriptions"
            :key="sub.name"
            class="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl flex flex-col justify-between hover:border-gold-500/40 transition-colors"
          >
            <div>
              <h3 class="font-display text-2xl font-bold text-slate-900">{{ sub.name }}</h3>
              <p class="text-xs text-slate-500 mt-1">{{ sub.desc }}</p>
              <p class="font-display text-3xl font-black text-gold-600 mt-4">{{ sub.price }}</p>

              <ul class="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                <li
                  v-for="f in sub.features"
                  :key="f"
                  class="flex items-center gap-2 text-xs text-slate-700"
                >
                  <span class="text-emerald-600 flex-none">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="h-3.5 w-3.5">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-4 border-t border-slate-100">
              <a
                :href="`https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20souscrire%20à%20l'%20${encodeURIComponent(sub.name)}%20(${sub.price}).`"
                target="_blank"
                rel="noopener"
                class="btn-gold w-full text-center text-xs !py-3 flex items-center justify-center"
              >
                <span>Souscrire sur WhatsApp (+229 97 95 27 38)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
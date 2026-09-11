<script setup lang="ts">
const mainServices = [
  {
    id: 'studio',
    title: 'Studio',
    price: '3 000 – 7 000 FCFA',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    description: 'Nettoyage complet de votre studio, du sol au plafond pour un espace impeccable.',
    features: ['Dépoussiérage et rangement complet', 'Désinfection cuisine & sanitaires', 'Lavage minutieux des sols et vitres'],
    popular: false,
  },
  {
    id: 'appartement',
    title: 'Appartement',
    price: '10 000 – 20 000 FCFA',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    description: 'Nettoyage intégral de votre appartement, toutes pièces et recoins inclus.',
    features: ['Salons, chambres et couloirs', 'Dégraissage cuisine et sanitaires', 'Produits de nettoyage de qualité inclus'],
    popular: true,
  },
  {
    id: 'general',
    title: 'Nettoyage Général & Complet',
    price: '10 000 – 30 000 FCFA',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    description: 'Grand nettoyage en profondeur pour tout type d\'espace (villas, commerces, après travaux).',
    features: ['Grand décrassage et désinfection', 'Traitement sols, vitres et faïences', 'Remise en état complète'],
    popular: true,
  },
]

const subscriptions = [
  {
    name: 'Abonnement Essentiel',
    price: '18 000 FCFA',
    period: '/ mois',
    description: 'La solution idéale pour garder votre espace propre au quotidien.',
    features: [
      'Nettoyage simple et efficace',
      '4 passages par mois (1x par semaine)',
      'Produits d\'entretien inclus',
      'Horaires flexibles selon votre planning',
    ],
    popular: false,
  },
  {
    name: 'Abonnement Confort',
    price: '35 000 FCFA',
    period: '/ mois',
    description: 'Le soin premium complet pour une tranquillité d\'esprit totale.',
    features: [
      'Nettoyage complet approfondi',
      '8 passages par mois (2x par semaine)',
      'Produits professionnels inclus',
      'Horaires flexibles & agent dédié',
    ],
    popular: true,
  },
]
</script>

<template>
  <section id="services" class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <!-- En-tête de section -->
    <UiSectionHeading
      eyebrow="Nos Services & Tarifs"
      title="Des prestations adaptées à vos besoins"
      subtitle="Des tarifs clairs, transparents et compétitifs pour studios, appartements et nettoyage complet à Parakou."
    />

    <!-- Mention Service Lessive -->
    <div class="mt-4 text-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1 text-xs text-gold-700 font-medium">
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-current" stroke-width="1.8">
          <path d="M4 6h16M7 6V4a1 1 0 011-1h8a1 1 0 011 1v2m-13 3l1.5 11.5a2 2 0 002 1.5h9a2 2 0 002-1.5L20 9H4z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Service Lessive disponible — tarif sur mesure à la demande</span>
      </span>
    </div>

    <!-- Grille des Prestations Ponctuelles -->
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      <article
        v-for="service in mainServices"
        :key="service.id"
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-gold-500/50 hover:shadow-xl hover:-translate-y-1"
      >
        <div v-if="service.popular" class="absolute top-0 right-0 rounded-bl-2xl bg-gold-gradient px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
          Populaire
        </div>

        <div>
          <div class="flex h-13 w-13 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600 border border-gold-400/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current" stroke-width="1.8">
              <path :d="service.icon" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <h3 class="font-display text-xl font-bold text-slate-900 mt-4 group-hover:text-gold-600 transition-colors">
            {{ service.title }}
          </h3>

          <p class="font-display text-2xl font-extrabold text-gold-600 mt-2">
            {{ service.price }}
          </p>

          <p class="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {{ service.description }}
          </p>

          <ul class="mt-5 space-y-2 border-t border-slate-100 pt-4">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-2 text-xs text-slate-700"
            >
              <span class="mt-0.5 text-gold-600 font-bold">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-8 pt-4 border-t border-slate-100">
          <NuxtLink
            :to="`/devis?service=${service.id}`"
            class="btn-gold w-full text-center text-xs !py-3"
          >
            Demander ce service par WhatsApp →
          </NuxtLink>
        </div>
      </article>
    </div>

    <!-- Section Formules d'Abonnement Mensuel -->
    <div class="mt-20">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="section-eyebrow">Formules Mensuelles</span>
        <h3 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
          Nos Formules d'Abonnement
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-2">
          Profitez d'un espace toujours propre grâce à nos passages réguliers programmés.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="sub in subscriptions"
          :key="sub.name"
          class="relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300"
          :class="[
            sub.popular
              ? 'border-2 border-gold-500 bg-white shadow-xl ring-1 ring-gold-500/20'
              : 'border-slate-200/80 bg-white shadow-sm hover:shadow-md'
          ]"
        >
          <div v-if="sub.popular" class="absolute -top-3.5 right-8 rounded-full bg-gold-gradient px-4 py-1 text-xs font-bold text-white shadow-md">
            Recommandé
          </div>

          <div>
            <h4 class="font-display text-xl font-bold text-slate-900">{{ sub.name }}</h4>
            <p class="text-xs text-slate-500 mt-1">{{ sub.description }}</p>

            <div class="mt-4 flex items-baseline gap-1">
              <span class="font-display text-3xl sm:text-4xl font-extrabold text-gold-600">{{ sub.price }}</span>
              <span class="text-xs text-slate-400">{{ sub.period }}</span>
            </div>

            <ul class="mt-6 space-y-3 border-t border-slate-100 pt-6">
              <li
                v-for="f in sub.features"
                :key="f"
                class="flex items-center gap-2.5 text-xs text-slate-700"
              >
                <span class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-bold">✓</span>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100">
            <a
              :href="`https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20souscrire%20à%20l'%20${encodeURIComponent(sub.name)}%20(${sub.price}/mois).`"
              target="_blank"
              rel="noopener"
              class="btn-gold w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
            >
              <span>Choisir cette formule sur WhatsApp</span>
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À Propos — Cleaning Pro Service Parakou',
  description: 'Découvrez Cleaning Pro Service : votre entreprise de nettoyage professionnel haut de gamme à Parakou pour studios, appartements et espaces professionnels.',
})

const pillars = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Satisfaction Garantie',
    desc: 'Contrôle qualité rigoureux et reprise immédiate si le moindre détail ne vous convient pas.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Personnel de Confiance',
    desc: 'Agents formés, méticuleux et respectueux de votre intimité et de vos locaux professionnels.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Produits de Qualité Inclus',
    desc: 'Nous apportons l’ensemble du matériel et des détergents professionnels sans surcoût.',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Déplacement 0 FCFA',
    desc: 'Déplacement totalement offert sur tout le périmètre urbain de Parakou.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Demande sur WhatsApp',
    desc: 'Indiquez votre type d’espace (studio, appartement, grand nettoyage) et votre quartier à Parakou.',
  },
  {
    number: '02',
    title: 'Confirmation instantanée',
    desc: 'Nous vous confirmons le tarif transparent et l’horaire d’intervention selon vos disponibilités.',
  },
  {
    number: '03',
    title: 'Intervention experte',
    desc: 'Notre équipe arrive ponctuellement avec tout le matériel et nettoie l’espace de fond en comble.',
  },
  {
    number: '04',
    title: 'Espace impeccable',
    desc: 'Vous retrouvez un cadre frais, propre et lumineux sans aucun effort.',
  },
]
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 break-words">
          L'Excellence du Nettoyage à <span class="text-gradient-gold">Parakou</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          <strong class="text-slate-800">Cleaning Pro Service</strong> est votre partenaire de référence pour l'entretien et la propreté de vos studios, appartements et locaux à Parakou et au Bénin.
        </p>
      </div>

      <!-- Image & Présentation -->
      <div class="mt-10 sm:mt-14 grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12">
        <div class="lg:col-span-6 relative">
          <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src="/images/cpsgroupe.jpeg"
              alt="Équipe Cleaning Pro Service"
              class="h-[280px] xs:h-[360px] sm:h-[420px] w-full object-cover"
            >
          </div>
          <div class="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden xs:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 py-2 px-3.5 sm:p-4 shadow-xl ring-1 ring-gold-500/20 backdrop-blur-xl">
            <p class="font-display text-xl sm:text-2xl font-bold text-gold-600">0 FCFA</p>
            <p class="text-[11px] sm:text-xs text-slate-700 font-medium">Déplacement offert à Parakou</p>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-4 sm:space-y-6">
          <h2 class="font-display text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            Un service de confiance pour votre confort quotidien
          </h2>
          <p class="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Nous avons conçu Cleaning Pro Service pour simplifier la vie des particuliers, étudiants, professionnels et propriétaires à Parakou. Fini les corvées de ménage complexes : nous prenons tout en charge, avec rigueur et ponctualité.
          </p>
          <p class="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Que ce soit pour un nettoyage ponctuel de studio (dès 3 000 FCFA), un appartement complet ou un abonnement régulier mensuel, nous vous garantissons des résultats éclatants.
          </p>

          <div class="pt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm">
              <p class="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">Registre Commerce</p>
              <p class="text-xs sm:text-sm font-bold text-gold-600 font-display mt-1">RB/PKO/26 A 29336</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm">
              <p class="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">Identifiant Fiscal</p>
              <p class="text-xs sm:text-sm font-bold text-gold-600 font-display mt-1">IFU 833679711</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Nos 4 Piliers -->
      <div class="mt-16 sm:mt-24">
        <UiSectionHeading
          title="Pourquoi faire appel à nous ?"
          subtitle="Des garanties concrètes pour un service sans souci."
        />

        <div class="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="p in pillars"
            :key="p.title"
            class="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold-500/40 hover:shadow-md"
          >
            <div class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600 border border-gold-400/20">
              <svg viewBox="0 0 24 24" class="h-5 w-5 sm:h-6 sm:w-6 fill-none stroke-current" stroke-width="1.8">
                <path :d="p.icon" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="font-display text-base sm:text-lg font-bold text-slate-900 mt-3 sm:mt-4">{{ p.title }}</h3>
            <p class="text-xs text-slate-500 mt-1.5 sm:mt-2 leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Processus en 4 étapes -->
      <div class="mt-16 sm:mt-24">
        <UiSectionHeading
          title="Comment réserver votre prestation"
          subtitle="Une prise en charge simple et immédiate sur WhatsApp."
        />

        <div class="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <span class="font-display text-2xl sm:text-3xl font-black text-gold-600/30">{{ step.number }}</span>
            <h4 class="font-display text-sm sm:text-base font-bold text-slate-900 mt-2">{{ step.title }}</h4>
            <p class="text-xs text-slate-500 mt-1.5 sm:mt-2 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Bas de page -->
      <div class="mt-16 sm:mt-20 text-center rounded-3xl border border-gold-500/30 bg-white p-6 sm:p-10 shadow-xl">
        <h3 class="font-display text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900">
          Besoin d'un devis pour votre espace ?
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Échangez directement avec nous sur WhatsApp pour obtenir votre estimation gratuite.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
            target="_blank"
            rel="noopener"
            class="btn-gold flex items-center justify-center text-xs sm:text-sm"
          >
            <span>Discuter sur WhatsApp (+229 97 95 27 38)</span>
          </a>
          <NuxtLink to="/services" class="btn-outline text-xs sm:text-sm text-center justify-center">Consulter tous les tarifs</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

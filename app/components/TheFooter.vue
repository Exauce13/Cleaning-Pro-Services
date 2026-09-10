<script setup lang="ts">
const year = new Date().getFullYear()
const email = ref('')
const isSubscribed = ref(false)

function subscribe() {
  if (!email.value) return
  isSubscribed.value = true
  email.value = ''
  setTimeout(() => {
    isSubscribed.value = false
  }, 6000)
}

const trustBadges = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Satisfaction Garantie',
    desc: 'Qualité irréprochable et suivi méticuleux de chaque prestation',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Déplacement 0 FCFA',
    desc: 'Déplacement offert sur Parakou pour toute intervention',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Équipe Professionnelle',
    desc: 'Personnel formé, discret, ponctuel et de confiance',
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Produits Efficaces & Sains',
    desc: 'Matériel et détergents de qualité supérieure inclus',
  },
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-slate-800 bg-slate-900 text-white">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

    <!-- Bandeau de réassurance -->
    <div class="border-b border-slate-800/80 bg-slate-950/40">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="badge in trustBadges"
          :key="badge.title"
          class="flex items-start gap-4 p-3"
        >
          <div class="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 border border-gold-400/20">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current" stroke-width="1.8">
              <path :d="badge.icon" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div>
            <p class="font-semibold text-white text-sm">{{ badge.title }}</p>
            <p class="mt-1 text-xs text-slate-400 leading-relaxed">{{ badge.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bannière CTA dynamique -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <div class="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-slate-800 p-6 sm:p-8 md:p-12 shadow-2xl">
        <div class="relative z-10 flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row">
          <div class="text-center lg:text-left">
            <span class="badge-gold">
              ✨ Devis Gratuit & Réponse Rapide
            </span>
            <h3 class="font-display text-xl xs:text-2xl sm:text-3xl font-bold text-white mt-3">
              Besoin d'un espace propre sans effort ?
            </h3>
            <p class="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-xl">
              Studios, appartements ou grand nettoyage complet à Parakou. Contactez-nous dès maintenant sur WhatsApp.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full lg:w-auto">
            <NuxtLink to="/devis" class="btn-gold w-full sm:w-auto text-center justify-center text-xs sm:text-sm">
              <span>Simuler mon devis</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <a
              href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/20 hover:text-white active:scale-[0.98] w-full sm:w-auto"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation principale footer -->
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Colonne Marque -->
      <div class="space-y-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white p-0.5 shadow-md">
            <img
              src="/images/logo.png"
              alt="Cleaning Pro Services Logo"
              class="h-full w-full object-contain"
            />
          </div>
          <div>
            <p class="font-display text-lg font-bold text-white">Cleaning Pro Service</p>
            <p class="text-xs uppercase tracking-widest text-gold-400">Parakou · Bénin</p>
          </div>
        </NuxtLink>

        <p class="text-sm text-slate-400 leading-relaxed">
          Service de nettoyage professionnel haut de gamme pour studios, appartements et espaces d'exception à Parakou.
        </p>

        <div class="text-xs text-slate-400 space-y-1">
          <p>IFU : <strong class="text-white">833679711</strong></p>
          <p>RC : <strong class="text-white">RB/PKO/26 A 29336</strong></p>
        </div>
      </div>

      <!-- Navigation -->
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-gold-400">Navigation</p>
        <ul class="mt-4 space-y-2.5 text-sm text-slate-300">
          <li><NuxtLink to="/" class="transition-colors hover:text-gold-300">Accueil</NuxtLink></li>
          <li><NuxtLink to="/a-propos" class="transition-colors hover:text-gold-300">À propos</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Services & Tarifs</NuxtLink></li>
          <li><NuxtLink to="/realisations" class="transition-colors hover:text-gold-300">Galerie Avant / Après</NuxtLink></li>
          <li><NuxtLink to="/contact" class="transition-colors hover:text-gold-300">Contact & Accès</NuxtLink></li>
          <li><NuxtLink to="/devis" class="transition-colors hover:text-gold-300">Devis WhatsApp</NuxtLink></li>
        </ul>
      </div>

      <!-- Prestations & Tarifs -->
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-gold-400">Nos Prestations</p>
        <ul class="mt-4 space-y-2.5 text-sm text-slate-300">
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Studio (3 000 – 7 000 FCFA)</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Appartement (10 000 – 20 000 FCFA)</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Nettoyage Général (10 000 – 30 000 FCFA)</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Abonnement Essentiel (18 000 F/mois)</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Abonnement Confort (35 000 F/mois)</NuxtLink></li>
          <li><NuxtLink to="/services" class="transition-colors hover:text-gold-300">Service Lessive (Sur mesure)</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact direct -->
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-gold-400">Coordonnées</p>
        <ul class="mt-4 space-y-2.5 text-xs text-slate-300">
          <li class="flex items-center gap-2">
            <span class="text-gold-400">📞</span>
            <a href="tel:+2290197952738" class="hover:text-white">+229 01 97 95 27 38</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-400">💬</span>
            <a href="https://wa.me/22997952738" target="_blank" rel="noopener" class="hover:text-emerald-300">WhatsApp: +229 97 95 27 38</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-gold-400">✉️</span>
            <a href="mailto:cleanproservice7@gmail.com" class="hover:text-white">cleanproservice7@gmail.com</a>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-gold-400">📍</span>
            <span>Parakou, Bénin (Déplacement 0 F)</span>
          </li>
        </ul>

        <div class="mt-6 pt-4 border-t border-slate-800">
          <p class="text-xs font-semibold text-white">Horaires d'ouverture</p>
          <p class="text-xs text-slate-400 mt-1">Lundi - Samedi : 7h00 - 19h00</p>
        </div>
      </div>
    </div>

    <!-- Bas de page légal -->
    <div class="border-t border-slate-800 bg-slate-950 px-6 py-6 text-center text-xs text-slate-400">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {{ year }} Cleaning Pro Service. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/mentions-legales" class="hover:text-gold-300 transition-colors">Mentions légales</NuxtLink>
          <span>·</span>
          <NuxtLink to="/confidentialite" class="hover:text-gold-300 transition-colors">Politique de confidentialité</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
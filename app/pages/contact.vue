<script setup lang="ts">
import { validateClientName, validateBeninPhoneNumber, validateClientMessage } from '~/utils/validators'

useSeoMeta({
  title: 'Contactez-Nous — Cleaning Pro Service Parakou',
  description: 'Demandez votre devis gratuit ou posez vos questions à Cleaning Pro Service. Réponse sous 24h et contact direct par WhatsApp au +229 97 95 27 38.',
})

const form = ref({
  name: '',
  phone: '',
  service: 'Studio (3 000 – 7 000 FCFA)',
  message: '',
})

const errors = ref<{
  name?: string
  phone?: string
  message?: string
}>({})

const touched = ref<{
  name?: boolean
  phone?: boolean
  message?: boolean
}>({})

const isSubmitted = ref(false)

function onNameInput() {
  if (touched.value.name) {
    const res = validateClientName(form.value.name)
    errors.value.name = res.isValid ? undefined : res.error
  }
}

function onNameBlur() {
  touched.value.name = true
  const res = validateClientName(form.value.name)
  errors.value.name = res.isValid ? undefined : res.error
}

function onPhoneInput() {
  if (touched.value.phone) {
    const res = validateBeninPhoneNumber(form.value.phone)
    errors.value.phone = res.isValid ? undefined : res.error
  }
}

function onPhoneBlur() {
  touched.value.phone = true
  const res = validateBeninPhoneNumber(form.value.phone)
  errors.value.phone = res.isValid ? undefined : res.error
}

function onMessageInput() {
  if (touched.value.message) {
    const res = validateClientMessage(form.value.message, true)
    errors.value.message = res.isValid ? undefined : res.error
  }
}

function onMessageBlur() {
  touched.value.message = true
  const res = validateClientMessage(form.value.message, true)
  errors.value.message = res.isValid ? undefined : res.error
}

function submitToWhatsApp() {
  touched.value.name = true
  touched.value.phone = true
  touched.value.message = true

  const nameRes = validateClientName(form.value.name)
  const phoneRes = validateBeninPhoneNumber(form.value.phone)
  const messageRes = validateClientMessage(form.value.message, true)

  errors.value = {
    name: nameRes.isValid ? undefined : nameRes.error,
    phone: phoneRes.isValid ? undefined : phoneRes.error,
    message: messageRes.isValid ? undefined : messageRes.error,
  }

  // Bloquer si l'un des champs est invalide
  if (!nameRes.isValid || !phoneRes.isValid || !messageRes.isValid) {
    return
  }

  isSubmitted.value = true
  const cleanPhone = phoneRes.formatted || form.value.phone.trim()

  const text = `Bonjour Cleaning Pro Service,

Je suis ${form.value.name.trim()}.

Service souhaité : ${form.value.service}
Téléphone : ${cleanPhone}
Message / Précisions : ${form.value.message.trim()}`

  window.open(`https://wa.me/22997952738?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <span class="section-eyebrow">Nous Contacter</span>
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 break-words">
          Contactez <span class="text-gradient-gold">Cleaning Pro Service</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          Demandez votre devis gratuit ou posez vos questions. Nous répondons immédiatement sur WhatsApp.
        </p>
      </div>

      <!-- Coordonnées rapides en 3 cartes -->
      <div class="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <!-- WhatsApp -->
        <a
          href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20je%20souhaite%20un%20devis%20gratuit."
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3.5 sm:gap-4 rounded-3xl border border-emerald-500/30 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-md"
        >
          <div class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-500/30 flex-none">
            <svg viewBox="0 0 24 24" class="h-5 w-5 sm:h-6 sm:w-6 fill-current">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">WhatsApp Direct</p>
            <p class="font-display text-sm sm:text-base font-bold text-slate-900 mt-0.5">+229 97 95 27 38</p>
            <p class="text-[11px] text-slate-500">Réponse instantanée</p>
          </div>
        </a>

        <!-- Téléphone -->
        <a
          href="tel:+2290197952738"
          class="flex items-center gap-3.5 sm:gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold-500/40 hover:shadow-md"
        >
          <div class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600 border border-gold-400/20 flex-none">
            <svg viewBox="0 0 24 24" class="h-5 w-5 sm:h-6 sm:w-6 fill-none stroke-current" stroke-width="1.8">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-gold-600">Appel Téléphonique</p>
            <p class="font-display text-sm sm:text-base font-bold text-slate-900 mt-0.5">+229 01 97 95 27 38</p>
            <p class="text-[11px] text-slate-500">Lun - Sam : 7h00 - 19h00</p>
          </div>
        </a>

        <!-- Email -->
        <a
          href="mailto:cleanproservice7@gmail.com"
          class="flex items-center gap-3.5 sm:gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold-500/40 hover:shadow-md"
        >
          <div class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600 border border-gold-400/20 flex-none">
            <svg viewBox="0 0 24 24" class="h-5 w-5 sm:h-6 sm:w-6 fill-none stroke-current" stroke-width="1.8">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="overflow-hidden">
            <p class="text-xs font-bold uppercase tracking-wider text-gold-600">Email Officiel</p>
            <p class="font-display text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate">cleanproservice7@gmail.com</p>
            <p class="text-[11px] text-slate-500">Parakou, Bénin</p>
          </div>
        </a>
      </div>

      <!-- Formulaire + Bloc Coordonnées & Registre -->
      <div class="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Formulaire avec transmission WhatsApp (7 cols) -->
        <div class="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-8 shadow-xl">
          <div class="flex items-center justify-between">
            <h2 class="font-display text-xl sm:text-2xl font-bold text-slate-900">Envoyez votre demande</h2>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-gold-700 border border-gold-200 flex-none">
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-gold-600">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              <span>Réponse rapide</span>
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">Votre message sera directement formaté et envoyé sur notre WhatsApp officiel après vérification.</p>

          <form class="mt-6 space-y-4" novalidate @submit.prevent="submitToWhatsApp">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Champ Nom -->
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Votre Nom *
                  <span class="text-[10px] font-normal text-slate-400">(lettres uniquement)</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Ex: Jean-Paul"
                  class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                  :class="[
                    errors.name
                      ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                  ]"
                  @input="onNameInput"
                  @blur="onNameBlur"
                >
                <p v-if="errors.name" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1.5">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-red-500 flex-none"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                  <span>{{ errors.name }}</span>
                </p>
              </div>

              <!-- Champ Téléphone -->
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Téléphone / WhatsApp *
                  <span class="text-[10px] font-normal text-slate-400">(normes Bénin)</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Ex: 01 97 95 27 38"
                  class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                  :class="[
                    errors.phone
                      ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                  ]"
                  @input="onPhoneInput"
                  @blur="onPhoneBlur"
                >
                <p v-if="errors.phone" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1.5">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-red-500 flex-none"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                  <span>{{ errors.phone }}</span>
                </p>
                <p v-else class="mt-1 text-[10px] text-slate-400">
                  Numéro à 8 chiffres (ex: 97 95 27 38) ou 10 chiffres (ex: 01 97 95 27 38).
                </p>
              </div>
            </div>

            <!-- Champ Service -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Service Souhaité</label>
              <select
                v-model="form.service"
                class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-gold-500 focus:bg-white focus:outline-none"
              >
                <option value="Studio (3 000 – 7 000 FCFA)">Studio (3 000 – 7 000 FCFA)</option>
                <option value="Appartement (10 000 – 20 000 FCFA)">Appartement (10 000 – 20 000 FCFA)</option>
                <option value="Nettoyage Général (10 000 – 30 000 FCFA)">Nettoyage Général (10 000 – 30 000 FCFA)</option>
                <option value="Abonnement Essentiel (18 000 FCFA/mois)">Abonnement Essentiel (18 000 FCFA/mois)</option>
                <option value="Abonnement Confort (35 000 FCFA/mois)">Abonnement Confort (35 000 FCFA/mois)</option>
                <option value="Service Lessive">Service Lessive</option>
              </select>
            </div>

            <!-- Champ Message / Précisions -->
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">
                Message / Précisions *
                <span class="text-[10px] font-normal text-slate-400">(texte rédigé)</span>
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Votre quartier à Parakou (ex: Titirou, Ladji Farani), date d'intervention souhaitée..."
                class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                :class="[
                  errors.message
                    ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                    : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                ]"
                @input="onMessageInput"
                @blur="onMessageBlur"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-red-500 flex-none"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                <span>{{ errors.message }}</span>
              </p>
              <p v-else class="mt-1 text-[10px] text-slate-400">
                Décrivez votre besoin en quelques mots (pas uniquement des chiffres).
              </p>
            </div>

            <button
              type="submit"
              class="btn-gold w-full text-xs sm:text-sm !py-3.5 flex items-center justify-center gap-2"
            >
              <span>Envoyer sur WhatsApp</span>
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
              </svg>
            </button>
          </form>
        </div>

        <!-- Encadré entreprise & garanties (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="rounded-3xl border border-gold-500/30 bg-white p-6 sm:p-8 shadow-xl">
            <span class="badge-gold">Informations Officielles</span>
            <h3 class="font-display text-xl font-bold text-slate-900 mt-3">Cleaning Pro Service</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Entreprise déclarée et enregistrée à Parakou au Registre du Commerce et du Crédit Mobilier.
            </p>

            <div class="mt-6 border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-700">
              <div class="flex justify-between py-1.5 border-b border-slate-100">
                <span class="text-slate-400">IFU :</span>
                <strong class="text-slate-900">833679711</strong>
              </div>
              <div class="flex justify-between py-1.5 border-b border-slate-100">
                <span class="text-slate-400">Registre de Commerce :</span>
                <strong class="text-slate-900">RB/PKO/26 A 29336</strong>
              </div>
              <div class="flex justify-between py-1.5 border-b border-slate-100">
                <span class="text-slate-400">Ville :</span>
                <strong class="text-slate-900">Parakou, Bénin</strong>
              </div>
              <div class="flex justify-between py-1.5">
                <span class="text-slate-400">Frais de Déplacement :</span>
                <strong class="text-emerald-600 font-bold">0 FCFA</strong>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h4 class="text-sm font-bold text-slate-900">Besoin d'une intervention rapide ?</h4>
            <p class="text-xs text-slate-500 mt-1">Cliquez ci-dessous pour discuter directement avec notre équipe :</p>
            <a
              href="https://wa.me/22997952738?text=Bonjour%20Cleaning%20Pro%20Service%2C%20j'ai%20une%20demande%20de%20nettoyage%20à%20Parakou."
              target="_blank"
              rel="noopener"
              class="btn-outline w-full text-center text-xs !py-3 mt-4 flex items-center justify-center gap-2"
            >
              <span>Ouvrir WhatsApp (+229 97 95 27 38)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
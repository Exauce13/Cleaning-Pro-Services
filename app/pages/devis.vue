<script setup lang="ts">
import { validateClientName, validateBeninPhoneNumber, validateClientMessage } from '~/utils/validators'

useSeoMeta({
  title: 'Demande de Devis Gratuit — Cleaning Pro Service Parakou',
  description: 'Simulez et demandez votre devis de nettoyage pour studio, appartement ou grand nettoyage complet à Parakou. Envoi immédiat sur WhatsApp.',
})

const route = useRoute()

// Types de services avec les tarifs exacts de la plateforme
const services = [
  {
    id: 'studio',
    label: 'Studio',
    priceRange: '3 000 – 7 000 FCFA',
    basePrice: 5000,
    icon: '🏠',
    description: 'Nettoyage complet du studio (sol au plafond)',
  },
  {
    id: 'appartement',
    label: 'Appartement',
    priceRange: '10 000 – 20 000 FCFA',
    basePrice: 15000,
    icon: '🏢',
    description: 'Nettoyage intégral de l’appartement toutes pièces',
  },
  {
    id: 'general',
    label: 'Nettoyage Général & Complet',
    priceRange: '10 000 – 30 000 FCFA',
    basePrice: 20000,
    icon: '✨',
    description: 'Grand nettoyage en profondeur / villa / local pro / fin de chantier',
  },
  {
    id: 'abo-essentiel',
    label: 'Abonnement Essentiel',
    priceRange: '18 000 FCFA/mois',
    basePrice: 18000,
    icon: '📅',
    description: '4 passages / mois (1x par semaine) avec produits inclus',
  },
  {
    id: 'abo-confort',
    label: 'Abonnement Confort',
    priceRange: '35 000 FCFA/mois',
    basePrice: 35000,
    icon: '👑',
    description: '8 passages / mois (2x par semaine) avec nettoyage complet',
  },
]

const selectedService = ref(
  services.find(s => s.id === route.query.service) || services[0]!
)

watch(
  () => route.query.service,
  (newId) => {
    if (newId) {
      const match = services.find(s => s.id === newId)
      if (match) selectedService.value = match
    }
  }
)

// Options additionnelles
const hasLaundry = ref(false)
const clientName = ref('')
const clientPhone = ref('')
const clientLocation = ref('')
const clientMessage = ref('')

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

function onNameInput() {
  if (!clientName.value.trim()) {
    errors.value.name = undefined
    return
  }
  const res = validateClientName(clientName.value, false)
  errors.value.name = res.isValid ? undefined : res.error
}

function onPhoneInput() {
  if (!clientPhone.value.trim()) {
    errors.value.phone = undefined
    return
  }
  const res = validateBeninPhoneNumber(clientPhone.value, false)
  errors.value.phone = res.isValid ? undefined : res.error
}

function onMessageInput() {
  if (!clientMessage.value.trim()) {
    errors.value.message = undefined
    return
  }
  const res = validateClientMessage(clientMessage.value, false)
  errors.value.message = res.isValid ? undefined : res.error
}

function sendWhatsApp() {
  let hasError = false

  if (clientName.value.trim()) {
    touched.value.name = true
    const res = validateClientName(clientName.value, true)
    if (!res.isValid) {
      errors.value.name = res.error
      hasError = true
    } else {
      errors.value.name = undefined
    }
  } else {
    errors.value.name = undefined
  }

  if (clientPhone.value.trim()) {
    touched.value.phone = true
    const res = validateBeninPhoneNumber(clientPhone.value, true)
    if (!res.isValid) {
      errors.value.phone = res.error
      hasError = true
    } else {
      errors.value.phone = undefined
    }
  } else {
    errors.value.phone = undefined
  }

  if (clientMessage.value.trim()) {
    touched.value.message = true
    const res = validateClientMessage(clientMessage.value, true)
    if (!res.isValid) {
      errors.value.message = res.error
      hasError = true
    } else {
      errors.value.message = undefined
    }
  } else {
    errors.value.message = undefined
  }

  if (hasError) return

  const service = selectedService.value || services[0]!
  const serviceName = service.label
  const servicePrice = service.priceRange
  const laundryText = hasLaundry.value ? '\n- Option : Service Lessive inclus' : ''
  const locationText = clientLocation.value.trim() ? `\n- Quartier / Lieu : ${clientLocation.value.trim()}` : ''
  const nameText = clientName.value.trim() ? `Je suis ${clientName.value.trim()}.` : ''
  const phoneFormatted = clientPhone.value.trim() ? (validateBeninPhoneNumber(clientPhone.value, false).formatted || clientPhone.value.trim()) : ''
  const phoneText = phoneFormatted ? `\nTéléphone : ${phoneFormatted}` : ''
  const msgText = clientMessage.value.trim() ? `\nPrécisions : ${clientMessage.value.trim()}` : ''

  const fullMsg = `Bonjour Cleaning Pro Service,

${nameText}
Je souhaite demander un devis pour :
- Service : ${serviceName} (${servicePrice})${laundryText}${locationText}${phoneText}${msgText}

Déplacement : 0 FCFA (Parakou)
Pouvez-vous me confirmer vos disponibilités pour l'intervention ?`

  window.open(`https://wa.me/22997952738?text=${encodeURIComponent(fullMsg)}`, '_blank')
}
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <span class="section-eyebrow">Devis Express Sans Engagement</span>
        <h1 class="font-display text-3xl xs:text-4xl sm:text-5xl font-extrabold text-slate-900 break-words">
          Demandez Votre Devis <span class="text-gradient-gold">Par WhatsApp</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          Sélectionnez votre prestation et transmettez votre demande directement à notre équipe sur WhatsApp pour une réponse immédiate.
        </p>
      </div>

      <!-- Contenu en 2 colonnes -->
      <div class="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Configuration du devis (7 cols) -->
        <div class="lg:col-span-7 space-y-6 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-8 shadow-xl">
          <div>
            <label class="block font-display text-base font-bold text-slate-900 mb-3">
              1. Choisissez la prestation souhaitée
            </label>
            <div class="space-y-3">
              <button
                v-for="s in services"
                :key="s.id"
                type="button"
                class="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 rounded-2xl border p-3.5 sm:p-4 text-left transition-all duration-200 cursor-pointer"
                :class="[
                  selectedService.id === s.id
                    ? 'border-2 border-gold-500 bg-gold-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                ]"
                @click="selectedService = s"
              >
                <div class="flex items-center gap-3">
                  <span class="text-2xl flex-none">{{ s.icon }}</span>
                  <div>
                    <p class="text-sm font-bold text-slate-900">{{ s.label }}</p>
                    <p class="text-xs text-slate-500">{{ s.description }}</p>
                  </div>
                </div>
                <div class="text-left sm:text-right pl-9 sm:pl-0 flex-none">
                  <span class="font-display text-sm sm:text-base font-extrabold text-gold-600">{{ s.priceRange }}</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Option Service Lessive -->
          <div class="border-t border-slate-100 pt-6">
            <label class="flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-colors" :class="hasLaundry ? 'border-2 border-gold-500 bg-gold-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'">
              <div class="flex items-center gap-3">
                <input
                  v-model="hasLaundry"
                  type="checkbox"
                  class="h-4 w-4 accent-[#2391E6] rounded"
                >
                <div>
                  <p class="text-xs sm:text-sm font-bold text-slate-900">Ajouter l'Option Service Lessive</p>
                  <p class="text-[11px] text-slate-500">Lavage, détachage et repassage soigné de votre linge</p>
                </div>
              </div>
              <span class="text-xs text-gold-700 font-semibold">Tarif à part</span>
            </label>
          </div>

          <!-- Vos informations (optionnelles avant WhatsApp) -->
          <div class="border-t border-slate-100 pt-6 space-y-4">
            <p class="font-display text-base font-bold text-slate-900">2. Vos coordonnées (facultatif)</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-slate-700 mb-1">
                  Votre Nom
                  <span class="text-[10px] text-slate-400 font-normal">(lettres uniquement)</span>
                </label>
                <input
                  v-model="clientName"
                  type="text"
                  placeholder="Ex: Roland A."
                  class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                  :class="[
                    errors.name
                      ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                  ]"
                  @input="onNameInput"
                  @blur="touched.name = true; onNameInput()"
                >
                <p v-if="errors.name" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                  <span>⚠️</span> {{ errors.name }}
                </p>
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-700 mb-1">
                  Téléphone / WhatsApp
                  <span class="text-[10px] text-slate-400 font-normal">(normes Bénin)</span>
                </label>
                <input
                  v-model="clientPhone"
                  type="tel"
                  placeholder="Ex: 01 97 95 27 38"
                  class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                  :class="[
                    errors.phone
                      ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                  ]"
                  @input="onPhoneInput"
                  @blur="touched.phone = true; onPhoneInput()"
                >
                <p v-if="errors.phone" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                  <span>⚠️</span> {{ errors.phone }}
                </p>
              </div>
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Quartier ou Adresse à Parakou</label>
              <input
                v-model="clientLocation"
                type="text"
                placeholder="Ex: Titirou, Albarika, Ladji Farani, Centre-ville..."
                class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white focus:outline-none"
              >
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">
                Précisions particulières
                <span class="text-[10px] text-slate-400 font-normal">(texte rédigé)</span>
              </label>
              <textarea
                v-model="clientMessage"
                rows="3"
                placeholder="Nombre de pièces, date souhaitée, état des locaux..."
                class="w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none"
                :class="[
                  errors.message
                    ? 'border-red-400 bg-red-50/40 text-slate-900 focus:border-red-500'
                    : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:bg-white'
                ]"
                @input="onMessageInput"
                @blur="touched.message = true; onMessageInput()"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                <span>⚠️</span> {{ errors.message }}
              </p>
            </div>
          </div>
        </div>

        <!-- Récapitulatif & Bouton WhatsApp (5 cols) -->
        <div class="lg:col-span-5 sticky top-24 space-y-6">
          <div class="rounded-3xl border border-gold-500/30 bg-white p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center justify-between">
              <span class="badge-gold">Récapitulatif</span>
              <span class="text-xs text-emerald-600 font-semibold">Déplacement 0 FCFA</span>
            </div>

            <div class="border-y border-slate-100 py-6 space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Prestation choisie :</span>
                <strong class="text-slate-900 font-display">{{ selectedService.label }}</strong>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Tarif indicatif :</span>
                <strong class="text-gold-600 font-display text-lg">{{ selectedService.priceRange }}</strong>
              </div>
              <div v-if="hasLaundry" class="flex items-center justify-between text-xs text-gold-700">
                <span>Option Lessive :</span>
                <span>Inclus dans la demande</span>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span>Frais de déplacement :</span>
                <strong class="text-emerald-600">0 FCFA (Offert)</strong>
              </div>
            </div>

            <div class="space-y-3">
              <button
                type="button"
                class="btn-gold w-full text-center text-sm !py-3.5 flex items-center justify-center gap-2.5 cursor-pointer"
                @click="sendWhatsApp"
              >
                <span>Envoyer ma demande par WhatsApp</span>
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.12.19-.49.61-.6.73-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.38.09-.08.19-.23.29-.34.09-.12.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.09-.43-1.04-.6-1.42-.16-.38-.32-.33-.43-.33h-.37c-.12 0-.32.05-.49.23-.17.19-.65.64-.65 1.55 0 .92.67 1.8 1.48 2.37 1.84 1.28 2.5 1.4 3.39 1.76.84.34 1.61.3 2.19.22.66-.1 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.19-.15-.38-.25z" />
                </svg>
              </button>

              <p class="text-[11px] text-center text-slate-500">
                💬 Votre message s'ouvrira directement sur WhatsApp avec votre sélection.
              </p>
            </div>
          </div>

          <!-- Assistance téléphonique -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <p class="text-xs text-slate-600">Vous préférez appeler directement ?</p>
            <a href="tel:+2290197952738" class="text-sm font-bold text-gold-600 hover:text-gold-700 mt-1 inline-block">
              📞 +229 01 97 95 27 38
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

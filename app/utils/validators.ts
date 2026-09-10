/**
 * Utilitaires de validation pour les formulaires de Cleaning Pro Service (CSP)
 */

export interface ValidationResult {
  isValid: boolean
  error?: string
  formatted?: string
}

/**
 * Valide le nom :
 * - Doit être uniquement composé de lettres (avec accents, espaces, tirets et apostrophes)
 * - Ne doit comporter aucun chiffre
 * - Doit contenir au moins 2 lettres alphabétiques
 */
export function validateClientName(name: string, isRequired = true): ValidationResult {
  const trimmed = (name || '').trim()

  if (!trimmed) {
    if (!isRequired) return { isValid: true }
    return {
      isValid: false,
      error: 'Veuillez renseigner votre nom.',
    }
  }

  // Vérification explicite de la présence de chiffres
  if (/\d/.test(trimmed)) {
    return {
      isValid: false,
      error: 'Le nom doit être uniquement composé de lettres (aucun chiffre autorisé).',
    }
  }

  // Lettres de l'alphabet (y compris accents français), espaces, tirets et apostrophes
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/
  if (!nameRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Le nom ne doit contenir que des lettres (pas de caractères spéciaux).',
    }
  }

  // Vérification de la présence d'au moins 2 lettres alphabétiques
  const lettersOnly = trimmed.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '')
  if (lettersOnly.length < 2) {
    return {
      isValid: false,
      error: 'Le nom doit comporter au moins 2 lettres.',
    }
  }

  return { isValid: true }
}

/**
 * Valide le numéro de téléphone selon les normes béninoises :
 * - Comporte uniquement des chiffres (avec '+' optionnel au début pour l'indicatif)
 * - Respecte les normes des numéros au Bénin (ARCEP) :
 *    * Format 10 chiffres (nouveau plan officiel avec préfixe '01' : 01 XX XX XX XX)
 *    * Format 8 chiffres (plan historique : 4X, 5X, 6X ou 9X XX XX XX)
 *    * Avec ou sans indicatif international (+229 / 00229 / 229)
 */
export function validateBeninPhoneNumber(phone: string, isRequired = true): ValidationResult {
  const raw = (phone || '').trim()

  if (!raw) {
    if (!isRequired) return { isValid: true }
    return {
      isValid: false,
      error: 'Veuillez renseigner votre numéro de téléphone.',
    }
  }

  // Vérifier qu'il n'y a pas de lettres ou de symboles anormaux
  // On tolère '+' uniquement au début, et les séparateurs usuels (espaces, tirets, points)
  if (!/^(\+)?[\d\s\-().]+$/.test(raw)) {
    return {
      isValid: false,
      error: 'Le numéro de téléphone doit comporter uniquement des chiffres.',
    }
  }

  // Vérification de la présence de lettres
  if (/[a-zA-Z]/.test(raw)) {
    return {
      isValid: false,
      error: 'Le numéro de téléphone ne doit contenir aucune lettre, uniquement des chiffres.',
    }
  }

  // Extraction de tous les chiffres
  let digits = raw.replace(/\D/g, '')

  // Retrait de l'indicatif Bénin si présent au début (00229 ou 229)
  if (raw.startsWith('+229') || raw.startsWith('00229') || digits.startsWith('229')) {
    if (digits.startsWith('00229')) {
      digits = digits.slice(5)
    } else if (digits.startsWith('229') && digits.length >= 11) {
      digits = digits.slice(3)
    }
  }

  // Vérification de la longueur du numéro local
  if (digits.length < 8) {
    return {
      isValid: false,
      error: 'Numéro trop court. Un numéro béninois comporte 8 chiffres (ex: 97 95 27 38) ou 10 chiffres (ex: 01 97 95 27 38).',
    }
  }

  if (digits.length > 10) {
    return {
      isValid: false,
      error: 'Numéro trop long. Un numéro béninois comporte 8 ou 10 chiffres (avec ou sans +229).',
    }
  }

  // Cas 1 : Nouveau format officiel à 10 chiffres (depuis nov 2024, commence obligatoirement par 01)
  if (digits.length === 10) {
    if (!digits.startsWith('01')) {
      return {
        isValid: false,
        error: 'Format béninois à 10 chiffres invalide : il doit commencer par 01 (ex: 01 97 95 27 38).',
      }
    }
    // Le 3ème chiffre correspond aux opérateurs mobiles (généralement 4, 5, 6, 9) ou fixes (2)
    const operatorDigit = digits.charAt(2)
    if (!['2', '4', '5', '6', '9'].includes(operatorDigit)) {
      return {
        isValid: false,
        error: 'Préfixe opérateur non reconnu au Bénin après le 01 (les réseaux mobiles débutent par 4, 5, 6 ou 9).',
      }
    }

    const formatted = `+229 ${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`
    return {
      isValid: true,
      formatted,
    }
  }

  // Cas 2 : Format historique à 8 chiffres (très répandu, débute par 4, 5, 6 ou 9)
  if (digits.length === 8) {
    const firstDigit = digits.charAt(0)
    if (!['2', '4', '5', '6', '9'].includes(firstDigit)) {
      return {
        isValid: false,
        error: 'Numéro béninois invalide. Les numéros au Bénin débutent par 4, 5, 6 ou 9 (ex: 97 95 27 38) ou 01.',
      }
    }

    // Formaté avec le nouvel indicatif officiel 01 ou format 8 chiffres standard
    const formatted = `+229 01 ${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 6)} ${digits.slice(6, 8)}`
    return {
      isValid: true,
      formatted,
    }
  }

  return {
    isValid: false,
    error: 'Numéro béninois invalide (attendu : 8 ou 10 chiffres, ex: 01 97 95 27 38).',
  }
}

/**
 * Valide le champ "Message / Précisions" :
 * - Doit être du texte rédigé
 * - Ne doit pas être vide
 * - Ne doit pas comporter uniquement des chiffres
 * - Doit contenir des lettres de l'alphabet (au moins 3 lettres)
 */
export function validateClientMessage(message: string, isRequired = true): ValidationResult {
  const trimmed = (message || '').trim()

  if (!trimmed) {
    if (!isRequired) return { isValid: true }
    return {
      isValid: false,
      error: 'Veuillez rédiger votre message ou vos précisions.',
    }
  }

  // Refuser si composé uniquement de chiffres
  if (/^\d+$/.test(trimmed)) {
    return {
      isValid: false,
      error: 'Le champ Message / Précisions doit être du texte, pas uniquement des chiffres.',
    }
  }

  // Vérifier qu'il y a bien des lettres de l'alphabet (texte compréhensible)
  const lettersOnly = trimmed.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '')
  if (lettersOnly.length < 3) {
    return {
      isValid: false,
      error: 'Le champ Message / Précisions doit être du texte compréhensible (au moins 3 lettres ou quelques mots).',
    }
  }

  return { isValid: true }
}

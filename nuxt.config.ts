import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2026-08-25',
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Cleaning Service Parakou — Nettoyage & Entretien Haut de Gamme',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "Cleaning Service Parakou (CSP) : L'excellence du nettoyage professionnel à Parakou et au Bénin. Villas, appartements, bureaux, fins de chantier et locaux commerciaux.",
        },
        { name: 'theme-color', content: '#FFFFFF' },
        { property: 'og:image', content: '/images/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap',
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})

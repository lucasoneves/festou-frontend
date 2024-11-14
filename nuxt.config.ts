// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      title: "Festou - Organize sua festa ou evento com facilidade",
      meta: [
        { name: 'description', content: 'Organizador de festas e eventos'}
      ],
      link: [
        { rel: 'stylesheet', href: ''}
      ]
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },

  modules: ['@nuxt/image']
})
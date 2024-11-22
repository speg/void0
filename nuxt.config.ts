// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    rootId: 'void0',
    rootAttrs: {
      class: 'min-h-screen flex flex-col'
    }
  }
})
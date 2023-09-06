// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    token: process.env.API_SECRET_KEY,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
 
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
]


})
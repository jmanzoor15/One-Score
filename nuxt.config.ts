// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    token: process.env.API_SECRET_KEY,
    D1:"2.4",
    D2:"24",
    D3:"2.8",
    D4:"28",
    FB_API_KEY:"AIzaSyAlsYgQM_Cx6JLGqiYKi3b7MPj9dzz5QHo",
    FB_AUTH_DOMAIN:"onescore---sports-live-score.firebaseapp.com",
    FB_PROJECT_ID:"onescore---sports-live-score",
    FB_STORAGE_BUCKET:"onescore---sports-live-score.appspot.com",
    FB_MESSAGING_SENDER_ID:"823355145417",
    FB_APP_ID:"1:823355145417:web:cdaa7d856abeef0321a118",
    FB_MEASUREMENT_ID:"G-NWW2160ZLM",
     
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      token: process.env.API_SECRET_KEY,

      FB_API_KEY:"AIzaSyAlsYgQM_Cx6JLGqiYKi3b7MPj9dzz5QHo",
      FB_AUTH_DOMAIN:"onescore---sports-live-score.firebaseapp.com",
      FB_PROJECT_ID:"onescore---sports-live-score",
      FB_STORAGE_BUCKET:"onescore---sports-live-score.appspot.com",
      FB_MESSAGING_SENDER_ID:"823355145417",
      FB_APP_ID:"1:823355145417:web:cdaa7d856abeef0321a118",
      FB_MEASUREMENT_ID:"G-NWW2160ZLM",

    // FB_API_KEY: process.env.FB_API_KEY,
    // FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    // FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    // FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    // FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    // FB_APP_ID: process.env.FB_APP_ID,
    // FB_MEASUREMENT_ID:  process.env.FB_MEASUREMENT_ID,
    },
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode'
],
colorMode: {
  classSuffix: ''
},
css: ['~/assets/css/main.css'],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
plugins: [
  {
      src:'~/plugins/v-calendar', mode: 'client'
  },

],


})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    FB_API_KEY:"AIzaSyAlsYgQM_Cx6JLGqiYKi3b7MPj9dzz5QHo",
    FB_AUTH_DOMAIN:"onescore---sports-live-score.firebaseapp.com",
    FB_PROJECT_ID:"onescore---sports-live-score",
    FB_STORAGE_BUCKET:"onescore---sports-live-score.appspot.com",
    FB_MESSAGING_SENDER_ID:"823355145417",
    FB_APP_ID:"1:823355145417:web:cdaa7d856abeef0321a118",
    FB_MEASUREMENT_ID:"G-NWW2160ZLM",
     
    public: {
      FB_API_KEY:"AIzaSyAlsYgQM_Cx6JLGqiYKi3b7MPj9dzz5QHo",
      FB_AUTH_DOMAIN:"onescore---sports-live-score.firebaseapp.com",
      FB_PROJECT_ID:"onescore---sports-live-score",
      FB_STORAGE_BUCKET:"onescore---sports-live-score.appspot.com",
      FB_MESSAGING_SENDER_ID:"823355145417",
      FB_APP_ID:"1:823355145417:web:cdaa7d856abeef0321a118",
      FB_MEASUREMENT_ID:"G-NWW2160ZLM",

    
    },
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode'
],
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
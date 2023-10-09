import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getRemoteConfig, getValue, fetchAndActivate } from "firebase/remote-config"
import Services from '~/services'


export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
        //  console.log('config',config)
    const firebaseConfig = {
        
        apiKey: config.public.FB_API_KEY,
        authDomain: config.public.FB_AUTH_DOMAIN,
        projectId: config.public.FB_PROJECT_ID,
        storageBucket: config.public.FB_STORAGE_BUCKET,
        messagingSenderId: config.public.FB_MESSAGING_SENDER_ID,
        appId: config.public.FB_APP_ID,
        measurementId: config.public.FB_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const remoteConfig = getRemoteConfig(app);

    fetchAndActivate(remoteConfig)
    .then(() => {
      // Loop through the keys of Services and fetch values from remoteConfig
      for (const key in Services) {
        if (Services.hasOwnProperty(key)) {
          const value = getValue(remoteConfig, key);
  
          // Handle the value as needed
          // console.log(`${key}:`, value);
  
          // Attach the value to the Nuxt app context
          nuxtApp[key] = value;
        }
      }
    })  
    .catch((err) => {
      // Handle any errors here
    });

    
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
     
    nuxtApp.vueApp.provide('remoteConfig', remoteConfig)
    nuxtApp.provide('remoteConfig', remoteConfig)


      // Set Remote Config settings
    remoteConfig.settings = {
        fetchTimeoutMillis: 60 * 1000, // 1 minute in milliseconds
        minimumFetchIntervalMillis: 15 * 60 * 1000, // 15 minutes in milliseconds
    }
  
        remoteConfig.defaultConfig = Services;


})
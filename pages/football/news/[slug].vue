<template>
  <Header @language-selected="handleLanguageChange" />
  <div class="flex justify-center">
    <div class=" w-[1200px]  relative">
      <FootballNewsDetail v-if="news && news.length > 0" :filteredArticles="news" />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { getValue, fetchAndActivate } from 'firebase/remote-config';
import moment from 'moment';
import 'moment-timezone';
import * as CryptoJS from 'crypto-js';

const nuxtApp = useNuxtApp();
const remoteConfig = nuxtApp.$remoteConfig;
const api_auth = ref({});
const lang = ref('en');
const newsBaseUrl = ref('');


/// generating auth token ////////

const authToken = ref('');
                  
                  const generateAuthToken = (api_auth) => {
                  const user = api_auth.user;
                  const hexCode = CryptoJS.MD5(user).toString();
                  const code = api_auth.code;
                  const secretKey = api_auth.secret;
                  const now = moment.tz('Asia/Dubai').format('YYYYMMDDHH');
                  const tokenFormula1 = `${hexCode}${secretKey}${code}${now}`;
                  const token = CryptoJS.MD5(tokenFormula1).toString();
                  console.log('token:', token);
                  authToken.value = token;
                }
 //   set data and language ///////////////////////////////////////////////////////////////////////////////////

const handleLanguageChange = (language) => {
  console.log('Changing language to:', language);
  lang.value = language;

  // Fetch data when the language changes
  fetchData(language);
};

if (process.client) {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  if (storedLanguage !== null) {
    lang.value = storedLanguage;
  }
}

watch([lang,], async ([newLang, oldLang]) => {
  if (newLang !== oldLang) {
    if (newLang) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('selectedLanguage', newLang);
      }
      fetchData(newLang);
    } else {
      console.error('Lang is not available');
    }
  }
});

const news = ref([]);

const fetchData = async (newLang) => {
  const langToUse = newLang || 'en';
  const newsLangToUse = newLang === 'zhs' || newLang === 'zht' ? 'cn' : newLang;

  try {
    const { data: newsData } = await useFetch(`/api/news_football?&lang=${newsLangToUse}&authToken=${authToken.value}&sport_id=1&item_count=0`);

    if (newsData !== null && newsData.value !== null) {
      console.log('Fetched news data:', langToUse);
      const params = useRoute().params.slug;

      if (Array.isArray(newsData.value.data) && newsData.value.data.length > 0) {

        const filteredNews = newsData.value.data.filter(article => {
          return article.uuid === params;
        });
        news.value = filteredNews;
        localStorage.setItem('newsData', JSON.stringify(newsData.value));
      } else {
        console.error('News data is empty or does not have the expected structure.');
      }
    } else {
      console.error('News data is null or does not have the expected structure.');
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
};


onMounted(() => {
  fetchAndActivate(remoteConfig)
    .then(() => {
      const value2 = getValue(remoteConfig, 'api_auth');
      api_auth.value = JSON.parse(value2._value);
      const value3 = getValue(remoteConfig, 'newsBaseUrl');
      newsBaseUrl.value = value3._value
      // Move generateAuthToken inside the then block
      generateAuthToken(api_auth.value);

      setTimeout(() => {
        fetchData(lang.value);
      }, 500);
    })
    .catch((err) => {
      // Handle any errors here
    });
});


</script>
<style  scoped></style>
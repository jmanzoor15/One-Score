<template>
  <div>
    <!-- <p>Count: {{ $store.state.count }}</p>
    <button class="btn-primary"  @click="$store.commit('increment')">Increment</button> -->
    <!-- {{ match }} -->
     <!-- {{ newsUpdate }} -->
    <!-- <button @click="bbytesToString('�H����J`UWTH�������Hb��RJ����Hb���')">click</button> -->
    <Header @language-selected="handleLanguageChange" :match="match" :search="search" />
    <div class="w100 view ">
      <div class="page-content-box max-w-full mx-auto ">
        <HotMatches :data="match" :topleague="topleague_football" />
        <div class="flex mt-[16px] ">
          <Sidebar :data="sidebar" :topleague="topleague_football" />
          <MatchList :data="match" :date="date" />
          <div class="flex flex-col items-center">
            <div class="ml-8 w-[300px]  rounded-md drop-shadow-md">
              <client-only>
                <DatePicker borderless class="rounded-md" v-if="match.length > 0" locale="en" expanded v-model="date"
                  mode="date" />
              </client-only>
            </div>
            <NewsUpdate :data="newsUpdate" :currentRoute="currentRoute" />
          </div>

        </div>
      </div>
    </div>
    <Footer :data="match"  />
  </div>
</template>

<script setup>
import { getValue, fetchAndActivate } from 'firebase/remote-config';
import { DatePicker } from 'v-calendar';
import moment from 'moment';
import 'moment-timezone';
import * as CryptoJS from 'crypto-js';




const date = ref(new Date());
const lang = ref('en');
const nuxtApp = useNuxtApp();
const remoteConfig = nuxtApp.$remoteConfig;
const topleague_football = ref({});
const sportsBaseUrl = ref('');
const api_auth = ref({});
const newsBaseUrl = ref('');
          
    
 

      //// generating auth token ////////

              const authToken = ref('');
                  
              const generateAuthToken = (api_auth) => {
              const user = api_auth.user;
              const hexCode = CryptoJS.MD5(user).toString();
              const code = api_auth.code;
              const secretKey = api_auth.secret;
              const now = moment.tz('Asia/Dubai').format('YYYYMMDDHH');
              const tokenFormula1 = `${hexCode}${secretKey}${code}${now}`;
              const token = CryptoJS.MD5(tokenFormula1).toString();
              authToken.value = token;
            }

                      

//   set data and language ///////////////////////////////////////////////////////////////////////////////////

const handleLanguageChange = (language) => {
  // console.log('Changing language to:', language);
  lang.value = language;
  fetchData(language);
};

if (process.client) {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  if (storedLanguage !== null) {
    lang.value = storedLanguage;
  }
}

const match = ref([]);
const sidebar = ref([]);
const newsUpdate = ref([]);
const search = ref([]);

watch([lang, date], async ([newLang, newDate], [oldLang, oldDate]) => {
  if (newLang !== oldLang) {
    if (newLang) {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("selectedLanguage", newLang);
      }
      fetchData(newLang);
    } else {
      console.error("Lang is not available");
    }
  } else if (newDate !== oldDate) {
    fetchData(newLang);
  }
});


const fetchData = async (newLang) => {
  const year = date.value.getFullYear();
  const month = String(date.value.getMonth() + 1).padStart(2, '0');
  const day = String(date.value.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const langToUse = newLang || 'en';
  try {
    const { data: competitionData } = await useFetch(`/api/football_competitionList?sport_id=1&lang=${langToUse}&sportsBaseUrl=${sportsBaseUrl.value}&authToken=${authToken.value}`);

    if (competitionData !== null) {
      // console.log('Fetched competition data:', langToUse);
      sidebar.value = competitionData.value;
      localStorage.setItem('sidebarData', JSON.stringify(competitionData.value));
    } else {
      console.error('Competition data is null');
    }
  } catch (error) {
    console.error('Error fetching competition data:', error);
  }


  try {
    const { data: matchData } = await useFetch(`/api/football_matches?lang=${langToUse}&sportsBaseUrl=${sportsBaseUrl.value}&authToken=${authToken.value}&date=${formattedDate}`);

    if (matchData !== null && matchData.value !== null) {
      // console.log('Raw match data:', matchData);
      // const decodedMatchData = bytesToString(matchData.value);
      // console.log('Decoded match data:', decodedMatchData);
      // match.value = decodedMatchData;
      match.value = matchData.value;
      localStorage.setItem('matchData', JSON.stringify(matchData.value));
    } else {
      console.error('Match data is null');
    }
  } catch (error) {
    console.error('Error fetching match data:', error);
  }
  const newsLangToUse = newLang === 'zhs' || newLang === 'zht' ? 'cn' : newLang;
  try {
    const { data: newsData } = await useFetch(`/api/news_football?&lang=${newsLangToUse}&authToken=${authToken.value}&sport_id=1&item_count=5`);

    if (newsData !== null && newsData.value !== null) {
      // console.log('Fetched news data:', newsData.value);
      newsUpdate.value = newsData.value;
      localStorage.setItem('newsData', JSON.stringify(newsData.data));
    } else {
      console.error('news data is null');
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }



};


onMounted(() => {
  fetchAndActivate(remoteConfig)
    .then(() => {
      const value = getValue(remoteConfig, 'topleague_football');
      topleague_football.value = JSON.parse(value._value).data;
      const value1 = getValue(remoteConfig, 'sportsBaseUrl');
      sportsBaseUrl.value = value1._value;
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


const currentRoute = computed(() => useRoute().name);
</script>

<style lang="scss" scoped>
.view {
  width: 1200px;
  margin: 0 auto 16px;
  min-height: calc(100vh - 517px);
}
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
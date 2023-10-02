<template>
  <div>{{ Services.referer }}
    <Header @language-selected="handleLanguageChange" :match="match" :search="search" />
    <div class="w100 view ">
      <div class="page-content-box max-w-full mx-auto ">
        <HotMatches :data="match" />
        <div class="flex mt-[16px] ">
          <Sidebar :data="sidebar" />
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
    <Footer />
  </div>
</template>

<script setup>
import Services from '~/services'
import { DatePicker } from 'v-calendar';
const date = ref(new Date());
const lang = ref('en');


const nuxtApp = useNuxtApp()
const remoteConfig = nuxtApp.$remoteConfig

// }

console.log('remoteConfig',remoteConfig)
// const baseUrl = remoteConfig.getString('baseUrl');
// console.log('Remote Config baseUrl:', baseUrl);




const handleLanguageChange = (language) => {
  console.log('Changing language to:', language);
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
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('selectedLanguage', newLang);
      }
      fetchData(newLang);
    } else {
      console.error('Lang is not available');
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
    const { data: competitionData } = await useFetch(`/api/football_competitionList?sport_id=1&lang=${langToUse}`);

    if (competitionData !== null) {
      console.log('Fetched competition data:', langToUse);
      sidebar.value = competitionData.value;
      localStorage.setItem('sidebarData', JSON.stringify(competitionData.value));
    } else {
      console.error('Competition data is null');
    }
  } catch (error) {
    console.error('Error fetching competition data:', error);
  }


  try {
    const { data: matchData } = await useFetch(`/api/football_matches?${formattedDate}&lang=${langToUse}`);

    if (matchData !== null && matchData.value !== null) {
      console.log('Fetched match data:', langToUse);
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
    const { data: newsData } = await newsApi().getNewsFootball(newsLangToUse);

    if (newsData !== null && newsData.value !== null) {
      console.log('Fetched news data:', langToUse);
      newsUpdate.value = newsData.value;
      localStorage.setItem('newsData', JSON.stringify(newsData.value));
    } else {
      console.error('news data is null');
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }

  try {
    const { data: searchData } = await useFetch(`/api/search?&lang=${langToUse}`)

    if (searchData !== null && searchData.value !== null) {
      console.log('Fetched news data:', langToUse);
      search.value = searchData.value;
      localStorage.setItem('searchData', JSON.stringify(searchData.value));
    } else {
      console.error('news data is null');
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }

};

onMounted(() => {
  setTimeout(() => {
    fetchData(lang.value);
  }, 500);
});

const currentRoute = computed(() => useRoute().name);
</script>

<style lang="scss" scoped>
.view {
  width: 1200px;
  margin: 0 auto 16px;
  min-height: calc(100vh - 517px);
}
</style>
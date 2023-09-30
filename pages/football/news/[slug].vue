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
const lang = ref('en');

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

  try {
    const { data: newsData } = await newsApi().getNewsFootball(langToUse);

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
  setTimeout(() => {
    fetchData(lang.value);
  }, 500);
});

</script>
<style  scoped></style>
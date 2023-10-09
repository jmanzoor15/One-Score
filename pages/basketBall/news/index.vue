<template>
  <div>
    <Header @language-selected="handleLanguageChange" />
    <div>
      <div class="min-h-screen flex bg-white items-center justify-center">
        <div class="mx-4 my-4">
          <div class="border-l-4 border-primary pl-2 text-2xl font-bold my-6 ml-12">
            <h1 class="text-black">Basketball News</h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1200px] mx-12 mt-10">
            <div v-for="post in paginatedPosts" :key="post.id" class="col-span-1">
              <div class="w-full  flex flex-col rounded-lg overflow-hidden pb-2">
                <div class="relative">
                  <NuxtLink :to="`/basketball/news/${post.uuid}`">
                    <img :src="post.thumbnail" class="w-full h-[280px]" />
                  </NuxtLink>
                </div>
              </div>
              <div class="flex flex-col  gap-2 mb-6">
                <NuxtLink :to="`/basketball/news/${post.slug}`">
                  <h2 class="font-bold text-md line-clamp-2 text-ellipsis mb-1 text-black">{{ post.title }}</h2>
                </NuxtLink>
              </div>
            </div>
          </div>
          <Pagination :totalPages="totalPages" :nextPage="nextPage" :prevPage="prevPage" :currentPage="page"
            @prev="prevPageHandler" @next="nextPageHandler" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
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
const newsUpdate = ref([]);
// const { data } = await newsApi().getAllNewsBasketball();
const page = ref(1);
const per_page = ref(12);
// const posts = ref([]);

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

          
                          watch([lang], async ([newLang], [oldLang]) => {
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



          const fetchData = async (newLang) => {

            const langToUse = newLang || 'en';

            const newsLangToUse = newLang === 'zhs' || newLang === 'zht' ? 'cn' : newLang;
              try {
                const { data: newsData } = await useFetch(`/api/news_basketball?&lang=${newsLangToUse}&authToken=${authToken.value}&item_count=0`);

                if (newsData !== null && newsData.value !== null) {
                  // console.log('Fetched news data:', newsData.value);
                  newsUpdate.value = newsData.value.data;
                  localStorage.setItem('newsData', JSON.stringify(newsData.data));
                  console.log('newsUpdate', newsUpdate.value);
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

    // posts.value = newsUpdate.value
    //   console.log("hjunaubd");
    //   console.log('newsUpdate', newsUpdate.value);

    //   // const totalPages = ref(0);
    //   posts.value = newsUpdate;

      const totalPages = computed(() => Math.ceil(newsUpdate.value.length / per_page.value));
      console.log(totalPages.value)
      const prevPage = computed(() => (page.value > 1 ? page.value - 1 : null));
      const nextPage = computed(() => (page.value < totalPages.value ? page.value + 1 : null));

      const paginatedPosts = computed(() => {
        const startIndex = (page.value - 1) * per_page.value;
        const endIndex = startIndex + per_page.value;
        return newsUpdate.value.slice(startIndex, endIndex);
      });

      const prevPageHandler = () => {
        if (page.value > 1) {
          page.value--;
        }
      };

      const nextPageHandler = () => {
        if (page.value < totalPages.value) {
          page.value++;
        }
      };
</script>
    
<style lang="scss" scoped></style>
    
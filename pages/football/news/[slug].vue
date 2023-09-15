<template>
  <Header />
  <!-- <div >{{ filteredArticles}}</div> -->
  <div class="flex justify-center">
    <div class=" w-[1200px]  relative">
      <NewsDetail :filteredArticles="filteredArticles" />
    </div>
  </div>
  <Footer />
</template>

<script setup>

// const { data } = useFetch('/api/news')

const { data } = await newsApi().getPostsFootball();

const news = ref(data);

const params = useRoute().params.slug;

const filteredArticles = computed(() => {
  if (news.value) {
    return news.value.data.filter(article => {
      return article.uuid === params;
    });
  } else {
    return [];
    console.error('Data is not loaded yet.');

  }
});


</script>


<style  scoped></style>
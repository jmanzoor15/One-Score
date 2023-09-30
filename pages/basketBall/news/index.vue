<template>
  <div>
    <Header />
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
const { data } = await newsApi().getAllNewsBasketball();
const page = ref(1);
const per_page = ref(12);
const posts = ref([]);

posts.value = data.value.data;
console.log(data.value.data)
const totalPages = ref(0);
totalPages.value = Math.ceil(posts.value.length / per_page.value);
const prevPage = computed(() => (page.value > 1 ? page.value - 1 : null));
const nextPage = computed(() => (page.value < totalPages.value ? page.value + 1 : null));

const paginatedPosts = computed(() => {
  const startIndex = (page.value - 1) * per_page.value;
  const endIndex = startIndex + per_page.value;
  return posts.value.slice(startIndex, endIndex);
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
    
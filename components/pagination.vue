<template>
  <div class="text-center flex justify-center py-6 ">
    <button v-if="prevPage" @click="$emit('prev')"
      class="relative block bg-gray-900 rounded px-3.5 py-2 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400 mr-2">
      &lt;
    </button>
    <span v-for="pageNumber in displayedPages" :key="pageNumber">
      <span
        :class="['relative block rounded px-3.5 py-2 text-sm transition-all duration-300 text-white mr-2', pageNumber === currentPage ? 'bg-green-500 text-white' : 'bg-gray-900']">
        {{ pageNumber }}
      </span>
    </span>
    <button v-if="nextPage" @click="$emit('next')"
      class="relative block bg-gray-900 rounded  px-3.5 py-2 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-100">
      >
    </button>
  </div>
</template>


<script setup>
const props = defineProps({
  totalPages: Number,
  prevPage: Number,
  nextPage: Number,
  from: Number,
  to: Number,
  currentPage: Number,
});

const pageArray = computed(() => {
  return Array.from({ length: props.totalPages }, (_, index) => index + 1);
});


const maxDisplayedPages = 5;

const displayedPages = computed(() => {
  const middlePage = Math.floor(maxDisplayedPages / 2);
  const startPage = Math.max(props.currentPage - middlePage, 1);
  const endPage = Math.min(startPage + maxDisplayedPages - 1, props.totalPages);

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
});

</script>

<style scoped>
/* Add your custom styles here */
</style>




 
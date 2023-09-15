<template>
  <div class="relative flex items-center justify-between mx-4 right-2">
    <!-- Previous Button -->
    <div>
      <button @click="prevSlide"
        class="absolute left-0 top-6  p-2 rounded-full h-7 border-1  hover:bg-gray-300 flex items-center justify-center transition-colors duration-300">
        &lt;
      </button>
    </div>


    <div class="w-[1100px] top-4 relative  overflow-hidden ">
      <div ref="slider" class="flex space-x-4 transition-transform transform"
        :style="`transform: translateX(${translateX}px);`">
        <!-- Repeat this div for each car -->
        <div v-for="(match, index) in matchData" :key="index"
          class="w-[136px] h-[50px] flex-none border-[1px] border-gray-300 rounded-full flex items-center justify-center">
          <img :src="match.home_team.logo" class="h-[20px] w-[20px] rounded-full" />
          <span class="mx-2"> {{ match.home_scores[0] }} - {{ match.away_scores[0] }} </span>
          <img :src="match.away_team.logo" class="h-[20px] w-[20px] rounded-full" />
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <div>
      <button @click="nextSlide"
        class="absolute right-0 top-6 p-2  rounded-full h-7   hover:bg-gray-300 flex items-center justify-center transition-colors duration-300">
        &gt;
      </button>
    </div>

  </div>
</template>
  
<script setup>
const props = defineProps({
  data: Object,
});
const matchData = ref([]);
matchData.value = props.data;

const translateX = ref(0);
const currentIndex = ref(0);
const carWidth = 20;
const numCars = matchData.value.length;
const carsPerPage = 10;
const slideDistance = carWidth * carsPerPage;

//   const cars = computed(() => {
//     const start = currentIndex.value;
//     const end = start + carsPerPage;
//     return matchData.value.slice(start, end);
//   });

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    if (currentIndex.value % carsPerPage === 0) {
      // Check if the current index is a multiple of carsPerPage
      translateX.value += slideDistance;
    }
  }
};

const nextSlide = () => {
  console.log("jay")
  if (currentIndex.value < numCars - carsPerPage) {
    currentIndex.value++;
    if ((currentIndex.value - carsPerPage + 1) % carsPerPage === 0) {
      // Check if the current index (adjusted for carsPerPage) is a multiple of carsPerPage
      translateX.value -= slideDistance;
    }
  }
};
</script>
  
<style lang="scss" scoped>
/* Add any additional styles you need here */
</style>
  
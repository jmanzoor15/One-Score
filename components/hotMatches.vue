<template > 
  <div class="flex-col items-center justify-between w-[1215px] my-[16px]  h-[100px]" v-if="filteredMatchData.length > 0">
    <span class="font-semibold text-lg  text-[#191919]  w-[382px] h-[23px]">Hot Matches</span>
    <div class="flex items-center justify-between">
      <!-- Previous Button -->
      <div> 
        <button @click="prevSlide" class="relative bottom-2">
          <svg id="arrow_left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <rect id="Rectangle_897" data-name="Rectangle 897" width="24" height="24" fill="none" />
            <path id="arrow_back_ios_FILL0_wght400_GRAD0_opsz48"
              d="M23.28,216.655l-11-11a.955.955,0,0,1-.219-.313.979.979,0,0,1,0-.689.955.955,0,0,1,.219-.313l11-11a1.289,1.289,0,0,1,1.755,0,1.248,1.248,0,0,1,0,1.786L15.165,205l9.87,9.869a1.166,1.166,0,0,1,.36.893A1.257,1.257,0,0,1,24.141,217,1.169,1.169,0,0,1,23.28,216.655Z"
              transform="translate(-6.705 -193)" />
          </svg>

        </button>
      </div>
      <div class=" relative  overflow-hidden px-2 ">
        <div ref="slider" class="flex space-x-4 transition-transform transform"
          :style="`transform: translateX(${translateX}px);`">
          <!-- Repeat this div for each car -->
          <div class="flex flex-col items-center justify-between relative right-6 " v-for="match in filteredMatchData" :key="match.uuid">
          
            <div 
              class="w-[136px] h-[50px] flex-none border-solid border-[1px] border-[#C9CBCF] rounded-full flex items-center justify-center relative left-6">
              <img v-if="match.home_team && match.home_team.logo" :src="match.home_team.logo"
                class="h-[20px] w-[20px]  rounded-full " />
              <span class="mx-2"> {{ match.home_scores[0] }}  </span> - 
              <span class="mx-2"> {{ match.away_scores[0] }} </span>
              <img v-if="match.away_team && match.away_team.logo" :src="match.away_team.logo"
                class="h-[20px] w-[20px] rounded-full" />
            </div>
            <div class="flex items-center justify-between">
              <span
                class="relative text-[10px]  bottom-2 left-[30px] border-2 px-[4px] text[#C9CBCF] bg-white rounded-full  z-10">{{ getStatus(match.status) }}</span>
            </div>

          </div>

        </div>
      </div>

      <!-- Next Button -->
      <div>
        <button @click="nextSlide" class="relative bottom-2 ml-3">
          <svg id="arrow_right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <rect id="Rectangle_897" data-name="Rectangle 897" width="24" height="24" fill="none" />
            <path id="arrow_back_ios_FILL0_wght400_GRAD0_opsz48"
              d="M14.131,216.655l11-11a.955.955,0,0,0,.219-.313.979.979,0,0,0,0-.689.955.955,0,0,0-.219-.313l-11-11a1.289,1.289,0,0,0-1.755,0,1.248,1.248,0,0,0,0,1.786L22.246,205l-9.87,9.869a1.166,1.166,0,0,0-.36.893A1.257,1.257,0,0,0,13.269,217,1.169,1.169,0,0,0,14.131,216.655Z"
              transform="translate(-6.705 -193)" />
          </svg>

        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const props = defineProps({
  data: Object,
  currentRoute: String,
  topleague: Object
});
const matchData = ref([]);

watch(() => props.data, (newData) => {
  if (newData) {
    matchData.value = newData;
  } else {
    matchData.value = [];
  }
});

const topleagues = ref([]);

watch(() => props.topleague, (newLeague) => {
  if (newLeague) {
    topleagues.value = newLeague;
  } else {
    topleagues.value = [];
  }
});


// Filter matchData based on topleague_football UUIDs
const filteredMatchData = computed(() => {
  if (topleagues && topleagues.value.length > 0 ) {
    return matchData.value.filter((match) =>
    topleagues.value.includes( match.competition.uuid )
    );
  } else {
    return matchData.value;
  }
});

      
const translateX = ref(0);
const currentIndex = ref(0);
const carWidth = 20;
const numCars = matchData.value.length;
const carsPerPage = 10;
const slideDistance = carWidth * carsPerPage;

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

function getStatus(matchStatus) {
  console.log(matchStatus,'matchStatus')
  if (matchStatus === 1) {
    return "upcoming";
  } else if (matchStatus === 2) {
    return "live";
  } else if (matchStatus === 3) {
    return "finished"
  }
  else if (matchStatus === 8) {
    return "End";
  }
  else if (matchStatus === 9) {
    return "Delay";
  } else {
    return ""; // or any other default value
  }
}
</script>
  
<style lang="scss" scoped>
/* Add any additional styles you need here */
</style>
  
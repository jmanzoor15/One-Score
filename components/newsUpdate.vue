<template>
  <div class="bg-white w-[300px] ml-8 mt-4 drop-shadow-md rounded-md">
    <div class="flex flex-col items center p-2" v-for="news in data.data" :key="news.uuid">
      <a :href="`${generateDynamicLink(currentRoute)}/${news.uuid}`">
        <div class=" flex">
          <img :src="news.thumbnail" class="w-[98px] h-[79px] border-[1px] rounded-lg" />
          <div class="w-[158px] h-[79px] ml-2">
            <div class=" h-[65px]  overflow-hidden">
              <span class="text-[12px] font-bold text-[#494C52] bottom-2 relative">{{ truncateText(news.title) }}</span>
            </div>
            <div class="flex items-center w-[190px]  relative  ">
              <svg id="time" xmlns="http://www.w3.org/2000/svg" width="5px" height="5px" viewBox="0 0 24 24">
                <g id="Group_15113" data-name="Group 15113" transform="translate(-2 -2)">
                  <g id="Group_15114" data-name="Group 15114" transform="translate(2 2)">
                    <path id="Path_1891" data-name="Path 1891"
                      d="M14,2A12,12,0,1,0,26,14,12.035,12.035,0,0,0,14,2Zm4.26,16.56-4.9-3.012a1.183,1.183,0,0,1-.576-1.02V8.9A.925.925,0,0,1,13.7,8a.907.907,0,0,1,.9.9v5.34l4.608,2.772a.908.908,0,1,1-.948,1.548Z"
                      transform="translate(-2 -2)" style="fill: #494C52;" />
                  </g>
                </g>
              </svg>
              <p class="text-[8px] ml-1 relative bp">{{ getLocalDateTime2(news.published) }} Hours ago</p>
              <div class="flex items-center">
                <svg id="Component_235_9" data-name="Component 235 9" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12">
                  <rect id="Rectangle_1047" data-name="Rectangle 1047" width="50px" height="50px" style="fill: none;" />
                  <path id="Icon_ionic-md-eye" data-name="Icon ionic-md-eye"
                    d="m6,2c-2.63-.01-5,1.57-6,4,1.38,3.31,5.19,4.88,8.5,3.5,1.58-.66,2.84-1.92,3.5-3.5-1-2.43-3.37-4.01-6-4Zm0,6.67c-1.47-.03-2.64-1.25-2.61-2.73s1.25-2.64,2.73-2.61c1.45.03,2.61,1.22,2.61,2.67-.02,1.49-1.24,2.68-2.73,2.67h0Zm0-4.27c-.88.02-1.58.75-1.56,1.64.02.88.75,1.58,1.64,1.56.87-.02,1.56-.73,1.56-1.6-.01-.89-.74-1.61-1.64-1.6Z"
                    style="fill: #494C52;" />
                </svg>
                <p class="text-[8px] ml-2">{{ news.views }} views</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <a :href="`${generateDynamicLink(currentRoute)}`">
      <div class="flex  justify-center  border-t-2  p-2 font-semibold text-gray-500">See All .....</div>
    </a>
  </div>
</template>
  
<script setup>

const props = defineProps({
  data: Object,
  currentRoute: String,
});

const generateDynamicLink = (currentRoute) => {
  if (currentRoute === "index") {
    return "/football/news";
  } else if (currentRoute === "basketBall") {
    return "/basketball/news";
  } else {
    return "/";
  }
};

function truncateText(text) {
  if (typeof text === 'string' && text.length > 70) {
    return text.slice(0, 70) + " ...";
  }
  return text;
}

const getLocalDateTime2 = (dateStr) => {
  if (typeof dateStr !== 'string' || dateStr.trim() === '') {
    return ''; // or some default value, depending on your requirements
  }

  const dateTime = dateStr.split(" ");
  const date = dateTime[0].split("-");
  const time = dateTime[1].split(":");
  let dt = new Date(
    Date.UTC(
      parseInt(date[0], 10),
      parseInt(date[1], 10) - 1, // Months are zero-based
      parseInt(date[2], 10),
      parseInt(time[0], 10),
      parseInt(time[1], 10),
      parseInt(time.length > 2 ? time[2].substring(0, 2) : '00', 10)
    )
  );

  // Adjust for the desired time zone offset (8 hours)
  const ket = dt.setHours(dt.getHours() - 8);

  // Convert to the local time zone
  const currentDate = new Date();
  const timeDifferenceInHours = Math.ceil((currentDate - ket) / (1000 * 60 * 60));

  return timeDifferenceInHours;
};

</script>
  
<style lang="scss" scoped>
#Component_235_9 {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  color: #494C52;
}

#time {
  width: 15px;
  height: 11px;
  color: #494C52;
}
</style>
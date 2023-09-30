<template>
  <div class="flex-col items-center">
    <div class="flex items-center mt-6 mx-2">
      <span class="text-3xl font-semibold"> {{ truncateText(filteredArticles[0].desc) }}</span>
    </div>
    <div class="flex justify-between px-2">

      <div class="flex  mt-6">
        <svg id="time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g id="Group_15113" data-name="Group 15113" transform="translate(-2 -2)">
            <g id="Group_15114" data-name="Group 15114" transform="translate(2 2)">
              <path id="Path_1891" data-name="Path 1891"
                d="M14,2A12,12,0,1,0,26,14,12.035,12.035,0,0,0,14,2Zm4.26,16.56-4.9-3.012a1.183,1.183,0,0,1-.576-1.02V8.9A.925.925,0,0,1,13.7,8a.907.907,0,0,1,.9.9v5.34l4.608,2.772a.908.908,0,1,1-.948,1.548Z"
                transform="translate(-2 -2)" style="fill: #a1a2a5;" />
            </g>
          </g>
        </svg>
        <p class="text-[12px] ml-1 relative ">{{ getLocalDateTime2(filteredArticles[0].published) }} Hours ago</p>
        <svg id="Component_235_9" data-name="Component 235 9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
          <rect id="Rectangle_1047" data-name="Rectangle 1047" width="50px" height="50px" style="fill: none;" />
          <path id="Icon_ionic-md-eye" data-name="Icon ionic-md-eye"
            d="m6,2c-2.63-.01-5,1.57-6,4,1.38,3.31,5.19,4.88,8.5,3.5,1.58-.66,2.84-1.92,3.5-3.5-1-2.43-3.37-4.01-6-4Zm0,6.67c-1.47-.03-2.64-1.25-2.61-2.73s1.25-2.64,2.73-2.61c1.45.03,2.61,1.22,2.61,2.67-.02,1.49-1.24,2.68-2.73,2.67h0Zm0-4.27c-.88.02-1.58.75-1.56,1.64.02.88.75,1.58,1.64,1.56.87-.02,1.56-.73,1.56-1.6-.01-.89-.74-1.61-1.64-1.6Z"
            style="fill: #aaa;" />
        </svg>
        <p class="text-[12px] ml-2">{{ filteredArticles[0].views }} views</p>
      </div>

      <div class="flex mt-6 gap-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"
          viewBox="0 0 24 24">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_128" data-name="Rectangle 128" width="24" height="24"
                transform="translate(65.299 482.279)" />
            </clipPath>
          </defs>
          <g id="Mask_Group_288" data-name="Mask Group 288" transform="translate(-65.299 -482.279)"
            clip-path="url(#clip-path)">
            <path id="_617b60e42ed6a138e25f0d9521c1c8b0" data-name="617b60e42ed6a138e25f0d9521c1c8b0"
              d="M16.729,25.533V14.451h3.72l.557-4.319H16.729V7.375c0-1.25.347-2.1,2.14-2.1h2.287V1.409a30.65,30.65,0,0,0-3.332-.17c-3.3,0-5.555,2.013-5.555,5.709v3.185H8.54v4.319h3.729V25.533h4.46Z"
              transform="translate(62.304 480.772)" fill="#3c5a9a" />
          </g>
        </svg>

        <svg id="Component_413_1" data-name="Component 413 – 1" xmlns="http://www.w3.org/2000/svg" width="26"
          height="24.998" viewBox="0 0 24 23.998">
          <g id="Layer_1" data-name="Layer 1" transform="translate(0 3)">
            <g id="Group_6083" data-name="Group 6083">
              <path id="Path_934" data-name="Path 934"
                d="M0,16.006a11,11,0,0,0,5.159-.753,9.251,9.251,0,0,0,2.075-1.162,7.1,7.1,0,0,1-1.2-.178,5.214,5.214,0,0,1-1.113-.421,4.955,4.955,0,0,1-.979-.664,4.659,4.659,0,0,1-.768-.852,4.3,4.3,0,0,1-.53-1.025c.055,0,.1,0,.137.009a5.3,5.3,0,0,0,1.952-.074.332.332,0,0,0,.1-.04A4.958,4.958,0,0,1,1.473,8.511,4.157,4.157,0,0,1,.9,6.352a5.8,5.8,0,0,0,1.084.4A4.688,4.688,0,0,0,3.108,6.9,4.463,4.463,0,0,1,.941,2.982,4.1,4.1,0,0,1,1.594.849,14.313,14.313,0,0,0,8.923,5.181a14.52,14.52,0,0,0,2.893.409c-.014-.08-.024-.144-.037-.208A4.539,4.539,0,0,1,15.509.131a5.118,5.118,0,0,1,4.658,1.231.2.2,0,0,0,.2.06A10.615,10.615,0,0,0,23.233.429c.038-.02.077-.038.143-.07-.02.059-.031.1-.045.131a4.61,4.61,0,0,1-1.978,2.27.387.387,0,0,0-.1.078A10.127,10.127,0,0,0,24,2.172a.208.208,0,0,1-.062.109A9.492,9.492,0,0,1,21.7,4.394a.218.218,0,0,0-.111.222,9.584,9.584,0,0,1-.027,1.351,11.62,11.62,0,0,1-.416,2.3,13.015,13.015,0,0,1-3.333,5.68,13.482,13.482,0,0,1-6.821,3.691,16.536,16.536,0,0,1-1.9.293,16.266,16.266,0,0,1-2.3.052A14.721,14.721,0,0,1,1.815,16.9a14.49,14.49,0,0,1-1.706-.828c-.037-.021-.073-.043-.109-.065Zm13.323.156h.029c0-.018,0-.035,0-.054h-.02l-.005.053Z"
                transform="translate(0 -0.003)" fill="#ccc" />
              <path id="Path_935" data-name="Path 935" d="M234.67,304.029l.005-.059h.021c0,.02,0,.04,0,.06h-.03Z"
                transform="translate(-221.347 -288.384)" fill="#ccc" />
            </g>
          </g>
          <rect id="Rectangle_1693" data-name="Rectangle 1693" width="23.998" height="23.998" fill="none" />
        </svg>

        <svg id="Share" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g id="Group_15035" data-name="Group 15035">
            <rect id="Rectangle_1681" data-name="Rectangle 1681" width="24" height="24" fill="none" />
            <path id="share_FILL0_wght400_GRAD0_opsz48"
              d="M138.21,200a3.367,3.367,0,0,1-3.375-3.919,2.492,2.492,0,0,1,.135-.521l-9.09-5.28a3.428,3.428,0,0,1-1.11.825,3.1,3.1,0,0,1-1.35.315,3.42,3.42,0,1,1,1.32-6.57,3.621,3.621,0,0,1,1.14.78l9.09-5.22a2.134,2.134,0,0,1-.135-.477,3.064,3.064,0,0,1-.045-.513,3.426,3.426,0,1,1,3.42,3.42,4.01,4.01,0,0,1-1.34-.225,2.566,2.566,0,0,1-1.09-.735l-9.09,5.04a5.541,5.541,0,0,1,.1.555,3.865,3.865,0,0,1,.045.532,2.369,2.369,0,0,1-.045.45q-.045.233-.1.473l9.09,5.16a3.569,3.569,0,0,1,1.05-.675,3.5,3.5,0,0,1,1.38-.255,3.42,3.42,0,1,1,0,6.84Zm0-18.96a1.59,1.59,0,1,0-1.155-.465A1.565,1.565,0,0,0,138.211,181.04Zm-14.79,8.58a1.59,1.59,0,1,0-1.155-.465,1.565,1.565,0,0,0,1.155.465Zm14.79,8.58a1.59,1.59,0,1,0-1.155-.465A1.565,1.565,0,0,0,138.211,198.2ZM138.21,179.42ZM123.42,188ZM138.21,196.58Z"
              transform="translate(-118.816 -176)" />
          </g>
        </svg>


      </div>
    </div>
    <div class="image-container h bg-white rounded-lg">
      <img :src="filteredArticles[0].thumbnail" />

    </div>
    <div class="mt-6 w-[900px]  bg-white rounded-lg p-4">
      <div>
        <span class="text-[16px] font-semibold text-gray-500  relative mt-10" style="white-space: pre-line;">
          <span v-html="filteredArticles[0].article"></span></span>
      </div>
      <div class="flex mt-10 gap-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"
          viewBox="0 0 24 24">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_128" data-name="Rectangle 128" width="24" height="24"
                transform="translate(65.299 482.279)" />
            </clipPath>
          </defs>
          <g id="Mask_Group_288" data-name="Mask Group 288" transform="translate(-65.299 -482.279)"
            clip-path="url(#clip-path)">
            <path id="_617b60e42ed6a138e25f0d9521c1c8b0" data-name="617b60e42ed6a138e25f0d9521c1c8b0"
              d="M16.729,25.533V14.451h3.72l.557-4.319H16.729V7.375c0-1.25.347-2.1,2.14-2.1h2.287V1.409a30.65,30.65,0,0,0-3.332-.17c-3.3,0-5.555,2.013-5.555,5.709v3.185H8.54v4.319h3.729V25.533h4.46Z"
              transform="translate(62.304 480.772)" fill="#3c5a9a" />
          </g>
        </svg>

        <svg id="Component_413_1" data-name="Component 413 – 1" xmlns="http://www.w3.org/2000/svg" width="26"
          height="24.998" viewBox="0 0 24 23.998">
          <g id="Layer_1" data-name="Layer 1" transform="translate(0 3)">
            <g id="Group_6083" data-name="Group 6083">
              <path id="Path_934" data-name="Path 934"
                d="M0,16.006a11,11,0,0,0,5.159-.753,9.251,9.251,0,0,0,2.075-1.162,7.1,7.1,0,0,1-1.2-.178,5.214,5.214,0,0,1-1.113-.421,4.955,4.955,0,0,1-.979-.664,4.659,4.659,0,0,1-.768-.852,4.3,4.3,0,0,1-.53-1.025c.055,0,.1,0,.137.009a5.3,5.3,0,0,0,1.952-.074.332.332,0,0,0,.1-.04A4.958,4.958,0,0,1,1.473,8.511,4.157,4.157,0,0,1,.9,6.352a5.8,5.8,0,0,0,1.084.4A4.688,4.688,0,0,0,3.108,6.9,4.463,4.463,0,0,1,.941,2.982,4.1,4.1,0,0,1,1.594.849,14.313,14.313,0,0,0,8.923,5.181a14.52,14.52,0,0,0,2.893.409c-.014-.08-.024-.144-.037-.208A4.539,4.539,0,0,1,15.509.131a5.118,5.118,0,0,1,4.658,1.231.2.2,0,0,0,.2.06A10.615,10.615,0,0,0,23.233.429c.038-.02.077-.038.143-.07-.02.059-.031.1-.045.131a4.61,4.61,0,0,1-1.978,2.27.387.387,0,0,0-.1.078A10.127,10.127,0,0,0,24,2.172a.208.208,0,0,1-.062.109A9.492,9.492,0,0,1,21.7,4.394a.218.218,0,0,0-.111.222,9.584,9.584,0,0,1-.027,1.351,11.62,11.62,0,0,1-.416,2.3,13.015,13.015,0,0,1-3.333,5.68,13.482,13.482,0,0,1-6.821,3.691,16.536,16.536,0,0,1-1.9.293,16.266,16.266,0,0,1-2.3.052A14.721,14.721,0,0,1,1.815,16.9a14.49,14.49,0,0,1-1.706-.828c-.037-.021-.073-.043-.109-.065Zm13.323.156h.029c0-.018,0-.035,0-.054h-.02l-.005.053Z"
                transform="translate(0 -0.003)" fill="#ccc" />
              <path id="Path_935" data-name="Path 935" d="M234.67,304.029l.005-.059h.021c0,.02,0,.04,0,.06h-.03Z"
                transform="translate(-221.347 -288.384)" fill="#ccc" />
            </g>
          </g>
          <rect id="Rectangle_1693" data-name="Rectangle 1693" width="23.998" height="23.998" fill="none" />
        </svg>

        <svg id="Share" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g id="Group_15035" data-name="Group 15035">
            <rect id="Rectangle_1681" data-name="Rectangle 1681" width="24" height="24" fill="none" />
            <path id="share_FILL0_wght400_GRAD0_opsz48"
              d="M138.21,200a3.367,3.367,0,0,1-3.375-3.919,2.492,2.492,0,0,1,.135-.521l-9.09-5.28a3.428,3.428,0,0,1-1.11.825,3.1,3.1,0,0,1-1.35.315,3.42,3.42,0,1,1,1.32-6.57,3.621,3.621,0,0,1,1.14.78l9.09-5.22a2.134,2.134,0,0,1-.135-.477,3.064,3.064,0,0,1-.045-.513,3.426,3.426,0,1,1,3.42,3.42,4.01,4.01,0,0,1-1.34-.225,2.566,2.566,0,0,1-1.09-.735l-9.09,5.04a5.541,5.541,0,0,1,.1.555,3.865,3.865,0,0,1,.045.532,2.369,2.369,0,0,1-.045.45q-.045.233-.1.473l9.09,5.16a3.569,3.569,0,0,1,1.05-.675,3.5,3.5,0,0,1,1.38-.255,3.42,3.42,0,1,1,0,6.84Zm0-18.96a1.59,1.59,0,1,0-1.155-.465A1.565,1.565,0,0,0,138.211,181.04Zm-14.79,8.58a1.59,1.59,0,1,0-1.155-.465,1.565,1.565,0,0,0,1.155.465Zm14.79,8.58a1.59,1.59,0,1,0-1.155-.465A1.565,1.565,0,0,0,138.211,198.2ZM138.21,179.42ZM123.42,188ZM138.21,196.58Z"
              transform="translate(-118.816 -176)" />
          </g>
        </svg>
      </div>
      <div>
        <div class="mt-10 relative left-4">
          <p class="font-bold text-xl">Related Topics</p>
        </div>
        <div class="flex mt-4 relative left-6 gap-2">
          <ul v-for="category in filteredArticles[0].category">
            <li class="rounded-full py-2 text-sm font-semibold px-2 border-[2px] border-gray-300">
              <nuxt-link :href="`/football/news`">{{ category }}</nuxt-link>
              <!-- {{ category }} -->
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="my-6">
      <p class="font-bold text-3xl">Related News</p>
      <div class="flex items-center justify-between  my-4  h-[260px]  rounded-lg">
        <div class="w-[280px]  h-[260px] bg-white  rounded-lg"></div>
        <div class="w-[280px]  h-[260px] bg-white  rounded-lg"></div>
        <div class="w-[280px]  h-[260px] bg-white  rounded-lg"></div>
        <div class="w-[280px]  h-[260px] bg-white  rounded-lg"></div>
      </div>
    </div>


  </div>
</template>
<script setup>
const props = defineProps({
  filteredArticles: Object
});
// const { data } = await newsApi().getNewsBasketball();


function truncateText(text) {
  if (text.length > 200) {
    return text.slice(0, 220) + " ...";
  }
  return text;
}

const getLocalDateTime2 = (dateStr) => {
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
.image-container {
  width: 1180;
  height: 800px;
  overflow: hidden;
  position: relative;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
#Component_235_9 {
  width: 20px;
  height: 30px;
  color: #494C52;
  position: relative;
  bottom: 5px;
  margin-left: 10px;
}
#time {
  width: 20px;
  height: 15px;
  color: #494C52;
}</style>

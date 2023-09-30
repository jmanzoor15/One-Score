<template>
  <!-- {{ selectedLanguage }} -->
  <!-- {{search.teams[0].name}} -->
  <!-- {{ filteredMatches }} -->
  <div class="top-0 left-0 flex justify-center items-center bg-white">
    <div
      class="header  top-0 left-0 flex justify-center items-center h-[100px] w-[1400px] opacity-100 bg-[#FFFFFF] bg-no-repeat bg-padding-box">
      <div class="header-1 top-[-5px]   w-[1200px]   relative ">
        <header>
          <div class="container  flex items-center justify-between mt-10">

            <div class="logo  bottom-[15px] relative h-[36px] w-[182px]">
              <a href="/">
                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.73 192">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <g>
                        <path class="cls-1"
                          d="m58.59,7.56c-3.4,26.58-24.45,47.63-51.03,51.03C17.27,35.65,35.65,17.27,58.59,7.56Z" />
                        <path class="cls-1"
                          d="m59.08,75.67v108.96C24.39,170.17,0,135.93,0,96c13.27,0,25.91-2.69,37.41-7.57,7.8-3.31,15.09-7.61,21.67-12.77Z" />
                        <path class="cls-1"
                          d="m101.13.14c-1.7-.09-3.41-.14-5.13-.14v192c1.72,0,3.43-.05,5.13-.14,50.64-2.67,90.87-44.56,90.87-95.86S151.77,2.8,101.13.14Zm0,12.93c15.17.93,29.24,5.95,41.15,13.96l8.97,27.26-19.17,15.18-11.92-3.87-19.03-6.19V13.06Zm44.79,139.9l-3.69,12.05c-11.89,7.99-25.96,12.99-41.1,13.91v-46.11l30.83-10.02,12.41,11.58,5.64,5.26-4.09,13.33Zm7.2-17.44l-5.78-5.39-12.18-11.36v-45.21l19.18-15.19,21.68,15.19c2,7.14,3.07,14.66,3.07,22.43s-1.12,15.58-3.19,22.86l-22.78,16.67Z" />
                      </g>
                      <g>
                        <path class="cls-1"
                          d="m333.55,95.93c0,10.98-1.81,20.56-5.42,28.72-3.61,8.16-9.15,14.52-16.62,19.07-7.47,4.55-16.95,6.83-28.43,6.83s-20.95-2.28-28.43-6.83c-7.47-4.55-13.01-10.93-16.62-19.15-3.61-8.21-5.42-17.81-5.42-28.8s1.8-20.53,5.42-28.65c3.61-8.11,9.15-14.42,16.62-18.93,7.47-4.5,17-6.75,28.57-6.75s20.93,2.25,28.35,6.75c7.42,4.5,12.94,10.84,16.55,19,3.61,8.16,5.42,17.74,5.42,28.72Zm-77.34,0c0,11.08,2.13,19.82,6.38,26.2,4.25,6.38,11.08,9.57,20.48,9.57s16.48-3.19,20.63-9.57c4.16-6.38,6.23-15.12,6.23-26.2s-2.08-19.82-6.23-26.2c-4.16-6.38-10.98-9.57-20.48-9.57s-16.38,3.19-20.63,9.57c-4.26,6.38-6.38,15.12-6.38,26.2Z" />
                        <path class="cls-1"
                          d="m399.75,66.53c8.71,0,15.68,2.35,20.93,7.05,5.24,4.7,7.87,12.25,7.87,22.64v52.84h-22.12v-47.35c0-5.84-1.04-10.22-3.12-13.14-2.08-2.92-5.39-4.38-9.94-4.38-6.73,0-11.33,2.3-13.8,6.9-2.48,4.6-3.71,11.21-3.71,19.82v38.15h-22.12v-81.05h16.92l2.97,10.39h1.19c2.57-4.16,6.11-7.17,10.61-9.06,4.5-1.88,9.28-2.82,14.32-2.82Z" />
                        <path class="cls-1"
                          d="m484.66,66.53c11.18,0,20.04,3.19,26.57,9.57,6.53,6.38,9.8,15.46,9.8,27.24v10.69h-52.25c.2,6.23,2.05,11.13,5.57,14.7,3.51,3.56,8.39,5.34,14.62,5.34,5.15,0,9.87-.52,14.18-1.56,4.3-1.04,8.73-2.65,13.28-4.82v17.07c-4.06,1.98-8.26,3.44-12.62,4.38-4.36.94-9.65,1.41-15.88,1.41-8.11,0-15.29-1.51-21.52-4.53-6.23-3.02-11.13-7.57-14.7-13.66-3.56-6.09-5.34-13.83-5.34-23.23s1.61-17.27,4.82-23.6c3.21-6.33,7.69-11.08,13.43-14.25,5.74-3.17,12.42-4.75,20.04-4.75Zm.15,15.74c-4.36,0-7.92,1.39-10.69,4.16s-4.4,7.08-4.9,12.91h31.02c-.1-4.85-1.41-8.91-3.93-12.17-2.52-3.27-6.36-4.9-11.51-4.9Z" />
                        <path class="cls-1"
                          d="m641.85,119.68c0,9.4-3.39,16.9-10.17,22.49-6.78,5.59-16.4,8.39-28.87,8.39-11.18,0-21.18-2.13-29.98-6.38v-20.93c5.05,2.18,10.27,4.18,15.66,6.01,5.39,1.83,10.76,2.75,16.11,2.75s9.47-1.06,11.8-3.19c2.32-2.13,3.49-4.82,3.49-8.09,0-2.67-.92-4.95-2.75-6.83-1.83-1.88-4.28-3.64-7.35-5.27-3.07-1.63-6.58-3.39-10.54-5.27-2.48-1.19-5.15-2.6-8.01-4.23-2.87-1.63-5.62-3.66-8.24-6.09-2.62-2.42-4.77-5.37-6.46-8.83-1.68-3.46-2.52-7.62-2.52-12.47,0-9.5,3.21-16.9,9.65-22.19,6.43-5.29,15.19-7.94,26.27-7.94,5.54,0,10.79.64,15.73,1.93,4.95,1.29,10.19,3.12,15.74,5.49l-7.27,17.52c-4.85-1.98-9.2-3.51-13.06-4.6-3.86-1.09-7.82-1.63-11.87-1.63-4.26,0-7.52.99-9.8,2.97-2.28,1.98-3.41,4.55-3.41,7.72,0,3.76,1.68,6.73,5.05,8.91,3.36,2.18,8.36,4.85,14.99,8.02,5.44,2.57,10.07,5.25,13.88,8.01,3.81,2.77,6.75,6.04,8.83,9.8,2.08,3.76,3.12,8.41,3.12,13.95Z" />
                        <path class="cls-1"
                          d="m692.32,150.55c-12.07,0-21.4-3.31-27.98-9.95-6.58-6.63-9.87-17.17-9.87-31.62,0-9.89,1.68-17.96,5.05-24.19,3.36-6.23,8.04-10.84,14.03-13.8,5.99-2.97,12.89-4.45,20.71-4.45,5.54,0,10.36.55,14.47,1.63,4.11,1.09,7.69,2.38,10.76,3.86l-6.53,17.07c-3.47-1.38-6.71-2.52-9.72-3.41-3.02-.89-6.01-1.34-8.98-1.34-11.48,0-17.22,8.16-17.22,24.49,0,8.11,1.51,14.1,4.53,17.96,3.02,3.86,7.25,5.79,12.69,5.79,4.65,0,8.76-.62,12.32-1.86,3.56-1.24,7.03-2.94,10.39-5.12v18.85c-3.37,2.18-6.9,3.74-10.61,4.68-3.71.94-8.39,1.41-14.03,1.41Z" />
                        <path class="cls-1"
                          d="m809.28,108.39c0,13.46-3.54,23.85-10.61,31.17-7.08,7.32-16.7,10.98-28.87,10.98-7.52,0-14.23-1.63-20.11-4.9-5.89-3.27-10.52-8.04-13.88-14.32-3.37-6.28-5.05-13.93-5.05-22.93,0-13.46,3.51-23.8,10.54-31.02,7.02-7.22,16.67-10.84,28.94-10.84,7.62,0,14.35,1.63,20.19,4.9,5.84,3.27,10.44,8.02,13.8,14.25,3.36,6.23,5.05,13.8,5.05,22.71Zm-55.96,0c0,8.02,1.31,14.08,3.93,18.18,2.62,4.11,6.9,6.16,12.84,6.16s10.07-2.05,12.69-6.16c2.62-4.1,3.93-10.17,3.93-18.18s-1.31-14.03-3.93-18.03c-2.62-4.01-6.9-6.01-12.84-6.01s-10.07,2-12.69,6.01c-2.62,4.01-3.93,10.02-3.93,18.03Z" />
                        <path class="cls-1"
                          d="m872.81,66.53c1.09,0,2.38.05,3.86.15,1.48.1,2.67.25,3.56.45l-1.63,20.78c-.79-.2-1.83-.37-3.12-.52-1.29-.15-2.43-.22-3.41-.22-3.76,0-7.37.67-10.84,2-3.47,1.34-6.26,3.49-8.39,6.46-2.13,2.97-3.19,7.03-3.19,12.17v41.27h-22.12v-81.05h16.77l3.27,13.66h1.04c2.37-4.16,5.64-7.72,9.8-10.69,4.16-2.97,8.95-4.45,14.4-4.45Z" />
                        <path class="cls-1"
                          d="m925.36,66.53c11.18,0,20.04,3.19,26.57,9.57,6.53,6.38,9.8,15.46,9.8,27.24v10.69h-52.25c.2,6.23,2.05,11.13,5.57,14.7,3.51,3.56,8.39,5.34,14.62,5.34,5.15,0,9.87-.52,14.18-1.56,4.3-1.04,8.73-2.65,13.28-4.82v17.07c-4.06,1.98-8.26,3.44-12.62,4.38-4.36.94-9.65,1.41-15.88,1.41-8.11,0-15.29-1.51-21.52-4.53-6.23-3.02-11.13-7.57-14.7-13.66-3.56-6.09-5.34-13.83-5.34-23.23s1.61-17.27,4.82-23.6c3.21-6.33,7.69-11.08,13.43-14.25,5.74-3.17,12.42-4.75,20.04-4.75Zm.15,15.74c-4.36,0-7.92,1.39-10.69,4.16-2.77,2.77-4.4,7.08-4.9,12.91h31.02c-.1-4.85-1.41-8.91-3.93-12.17-2.52-3.27-6.36-4.9-11.51-4.9Z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div class="border-l h-10  mb-6"></div>
            <div class="flex gap-2">
              <p class="text-[#00B996] relative bottom-[13px] text-[14px]">Get the app</p>
              <span class="relative bottom-[10px]"><svg id="download_FILL0_wght400_GRAD0_opsz48_2_"
                  data-name="download_FILL0_wght400_GRAD0_opsz48 (2)" xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" viewBox="0 0 16 16">
                  <path id="download_FILL0_wght400_GRAD0_opsz48_2_2" data-name="download_FILL0_wght400_GRAD0_opsz48 (2)"
                    d="M168,267.875a.725.725,0,0,1-.272-.05.762.762,0,0,1-.25-.175l-3.775-3.775a.692.692,0,0,1-.212-.538.78.78,0,0,1,.238-.537.754.754,0,0,1,1.075,0l2.45,2.475V256.75a.724.724,0,0,1,.217-.534A.732.732,0,0,1,168,256a.718.718,0,0,1,.533.216.731.731,0,0,1,.212.534v8.525l2.475-2.475a.76.76,0,1,1,1.075,1.075l-3.775,3.775a.7.7,0,0,1-.528.225ZM161.5,272a1.538,1.538,0,0,1-1.5-1.5v-2.825a.724.724,0,0,1,.217-.534.732.732,0,0,1,.537-.216.718.718,0,0,1,.533.216.731.731,0,0,1,.212.534V270.5h13v-2.825a.724.724,0,0,1,.217-.534.732.732,0,0,1,.537-.216.718.718,0,0,1,.533.216.731.731,0,0,1,.212.534V270.5a1.538,1.538,0,0,1-1.5,1.5Z"
                    transform="translate(-160 -256)" fill="#00b996" />
                </svg>
              </span>
            </div>
            <div class="search-bar mb-7 left-[160px] relative">
              <input v-model="searchQuery"
                class="bar bg-[#E4E5E7]  h-[48px]  rounded-full border px-4 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
              placeholder:Noto Sans, Regular placeholder:text-[#494C52] block w-full  placeholder:text-[14px] 
              py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text" text-color="#494C52" placeholder="Search for match, league, team, and player..." name="search"
                aria-label="Search" />
              <span class="absolute inset-y-1 left-[15px] top-1 flex items-center">
                <svg class="text1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27.621 27.621">
                  <g id="Search" transform="translate(1.5 1.5)">
                    <path id="Path_830" data-name="Path 830" d="M25.5,15A10.5,10.5,0,1,1,15,4.5,10.5,10.5,0,0,1,25.5,15Z"
                      transform="translate(-4.5 -4.5)" fill="none" stroke="#ccc" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="3" />
                    <path id="Path_831" data-name="Path 831" d="M31.5,31.5l-6.525-6.525" transform="translate(-7.5 -7.5)"
                      fill="red" stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                  </g>
                </svg>
              </span>
            </div>
            <div class="favourites flex relative left-[290px]">
              <a aria-label="Favourites">
                <span class=" bottom-[px]  ] relative  text-[14px] text-[#494C52] text-gray-500">Favourites</span>
                <div class=" bottom-[27px]  left-[65px] relative">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                    width="26" height="28" viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                      <path
                        d="M 45.002 75.502 c 2.862 0 5.72 0.684 8.326 2.051 l 19.485 10.243 l -3.721 -21.678 c -1.002 -5.815 0.926 -11.753 5.164 -15.877 L 90 34.895 l -21.768 -3.161 c -5.838 -0.85 -10.884 -4.514 -13.499 -9.806 L 44.998 2.205 l -9.73 19.717 c -2.615 5.292 -7.661 8.962 -13.499 9.811 L 0 34.895 L 15.749 50.25 c 4.224 4.111 6.156 10.044 5.16 15.863 l -3.721 21.682 l 19.466 -10.238 C 39.268 76.19 42.135 75.502 45.002 75.502 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,207,100); fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div class="sign-in bottom-[15px] left-[320px] relative">
              <a href="/sign_in">
                <button
                  class="bg-white border border-gray-300 w-[98px] h-[47px]  rounded-full text-blue-500 text-[17px]   relative"
                  aria-label="Sign In">
                  Sign In
                </button>
              </a>
            </div>

            <div class="top-[4px] left-[330px] relative" ref="dropdownRef">
              <button class=" bg-white bottom-4 relative" @click="isDropdownOpen = !isDropdownOpen">
                <svg id="settings" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path id="Icon_ionic-md-settings" data-name="Icon ionic-md-settings"
                    d="M24.488,16.575a7.5,7.5,0,0,0,.061-1.2c0-.42-.061-.78-.061-1.2l2.577-1.98a.551.551,0,0,0,.123-.78l-2.455-4.14A.6.6,0,0,0,24,7.035l-3.068,1.2a8.932,8.932,0,0,0-2.086-1.2l-.43-3.18a.658.658,0,0,0-.614-.48H12.889a.658.658,0,0,0-.614.48l-.491,3.18A10.392,10.392,0,0,0,9.7,8.235L6.63,7.035a.575.575,0,0,0-.737.24l-2.455,4.14a.725.725,0,0,0,.123.78L6.2,14.175c0,.42-.061.78-.061,1.2s.061.78.061,1.2l-2.577,1.98a.551.551,0,0,0-.123.78l2.455,4.14a.6.6,0,0,0,.737.24l3.068-1.2a8.931,8.931,0,0,0,2.086,1.2l.491,3.18a.6.6,0,0,0,.614.48H17.86a.658.658,0,0,0,.614-.48l.491-3.18a10.385,10.385,0,0,0,2.086-1.2l3.068,1.2a.575.575,0,0,0,.737-.24l2.455-4.14a.724.724,0,0,0-.123-.78Zm-9.144,3a4.2,4.2,0,1,1,4.3-4.2A4.222,4.222,0,0,1,15.344,19.575Z"
                    transform="translate(-3.375 -3.375)" fill="##0000004D" />
                </svg>
              </button>
              <div class="relative w-[352px] right-[315px] top-[12px] z-10">
                <transition enter-active-class="transform transition duration-500 ease-custom"
                  enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                  enter-to-class="translate-y-0 scale-y-100 opacity-100"
                  leave-active-class="transform transition duration-300 ease-custom"
                  leave-class="translate-y-0 scale-y-100 opacity-100"
                  leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                  <ul v-show="isDropdownOpen"
                    class="absolute left-0 right-0 mb-4 bg-white  rounded-md shadow-lg overflow-hidden">
                    <div class="flex  flex-col items-start p-2">
                      <div class=" text-[14px] text-[#494C52]">
                        <p class="mb-2">Sport</p>
                      </div>
                      <nuxt-link to="/" @click="selectFootball">
                        <div :class="{ 'selected': isFootballSelected }"
                          class="flex  items-center text-[14px] text-[#494C52] ">

                          <div class="flex items-center py-1 w-[250px] ">
                            <svg class="mr-2" id="football" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="Icon_ionic-md-football" data-name="Icon ionic-md-football"
                                d="M15.375,3.375a12,12,0,1,0,12,12A12.013,12.013,0,0,0,15.375,3.375ZM7.933,14.348l2.262,1.033.987,3.86-.9,1.69-3.3-.04a10.076,10.076,0,0,1-1.587-4.344Zm12.537,6.583-.9-1.69.987-3.865,2.256-1.027,2.538,2.2a10,10,0,0,1-1.587,4.344ZM22.338,12.5l-2.515,1.131L16.3,10.65V7.927l2.763-1.881a10.287,10.287,0,0,1,4.362,3.335Zm-10.7-6.444,2.752,1.875V10.65l-3.519,2.971L8.394,12.49,7.315,9.4A9.991,9.991,0,0,1,11.642,6.052Zm1.563,19.131c-.04-.012-.075-.017-.115-.029l-1.183-3.179.848-1.7h5.238l.865,1.748-1.142,3.11c-.058.012-.115.029-.173.04a14.545,14.545,0,0,1-2.331.237A9.783,9.783,0,0,1,13.206,25.183Z"
                                transform="translate(-3.375 -3.375)" fill="#c2c2c2" />
                            </svg>
                            <p class="">Football <span class="text-[8px] relative bottom-[2px]">(12)</span> </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isFootballSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>
                      </nuxt-link>

                      <nuxt-link to="/basketball" @click="selectBasketball">
                        <div :class="{ 'selected': isBasketballSelected }"
                          class="flex  items-center text-[14px] text-[#494C52] ">

                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="mr-2" id="Basketball" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="Icon_awesome-basketball-ball" data-name="Icon awesome-basketball-ball"
                                d="M10.273.486A11.929,11.929,0,0,0,4.36,3.09L8.1,6.835A10.777,10.777,0,0,0,10.273.486ZM12,10.73l7.64-7.64A11.96,11.96,0,0,0,12.6.375,13.058,13.058,0,0,1,9.76,8.49Zm-9.285-6a11.929,11.929,0,0,0-2.6,5.913A10.766,10.766,0,0,0,6.46,8.48Zm13.171,9.881A13.1,13.1,0,0,1,24,11.775a11.96,11.96,0,0,0-2.715-7.04l-7.64,7.64,2.24,2.24ZM12,14.02,4.36,21.66a11.991,11.991,0,0,0,7.04,2.715,13.1,13.1,0,0,1,2.84-8.115Zm9.285,6a11.929,11.929,0,0,0,2.6-5.913A10.82,10.82,0,0,0,17.54,16.27ZM8.115,10.135A13.029,13.029,0,0,1,0,12.975a11.96,11.96,0,0,0,2.715,7.04l7.64-7.64Zm5.613,14.129a11.929,11.929,0,0,0,5.913-2.6L15.9,17.915A10.831,10.831,0,0,0,13.727,24.264Z"
                                transform="translate(0 -0.375)" fill="#c2c2c2" />
                            </svg>

                            <p class="">Basketball <span class="text-[8px] relative bottom-[2px]">(12)</span> </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isBasketballSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>

                        </div>
                      </nuxt-link>

                    </div>
                    <div class="py-3  flex items-center text-[14px] text-[#494C52] border-t mx-2"
                      @click="toggleDropdownAndRotate">
                      <button class="hover:text-blue-500 " @click="rotateSVG"> Languages </button>
                      <span class="relative left-[247px] "> <svg id="arrow_right" xmlns="http://www.w3.org/2000/svg"
                          width="20" height="16" viewBox="0 0 24 24"
                          :style="{ transform: isRotated ? 'rotate(90deg)' : '' }">
                          <rect id="Rectangle_897" data-name="Rectangle 897" width="24" height="24" fill="none" />
                          <path id="arrow_back_ios_FILL0_wght400_GRAD0_opsz48"
                            d="M14.131,216.655l11-11a.955.955,0,0,0,.219-.313.979.979,0,0,0,0-.689.955.955,0,0,0-.219-.313l-11-11a1.289,1.289,0,0,0-1.755,0,1.248,1.248,0,0,0,0,1.786L22.246,205l-9.87,9.869a1.166,1.166,0,0,0-.36.893A1.257,1.257,0,0,0,13.269,217,1.169,1.169,0,0,0,14.131,216.655Z"
                            transform="translate(-6.705 -193)" />
                        </svg>
                      </span>
                    </div>
                    <!-- Nested dropdown -->    
                   <transition enter-active-class="transform transition duration-500 ease-custom"
                      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                      enter-to-class="translate-y-0 scale-y-100 opacity-100"
                      leave-active-class="transform transition duration-300 ease-custom"
                      leave-class="translate-y-0 scale-y-100 opacity-100"
                      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">

                      
                      <ul v-show="isNestedDropdownOpen" class="px-2  mb-2 ml-[2px]">
                   
                        <div @click="selectLanguage(LocalizationStatus.en)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.en) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg  class="league-logo w-[20px] h-[20px] object-cover  mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600">
                              <defs><clipPath id="clip-path"><path d="M450,300H900V600Zm0,0V600H0Zm0,0H0V0Zm0,0V0H900Z" style="fill:none"/></clipPath></defs>
                              <rect width="900" height="600" style="fill:#00247d"/><path d="M0,0,900,600M900,0,0,600" style="fill:none;stroke:#fff;stroke-miterlimit:60;stroke-width:103.98382902145386px"/>
                              <g style="clip-path:url(#clip-path)"><path d="M0,0,900,600M900,0,0,600" style="fill:none;stroke:#cf142b;stroke-width:4px"/></g>
                              <path d="M450,0V600M0,300H900" style="fill:none;stroke:#fff;stroke-miterlimit:60;stroke-width:173.3063793182373px"/>
                              <path d="M450,0V600M0,300H900" style="fill:none;stroke:#cf142b;stroke-miterlimit:60;stroke-width:103.98382902145386px"/></svg>
                            <p class="">English </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isEnglishSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>

                        </div>

                    

                        <div @click="selectLanguage(LocalizationStatus.zhs)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.zhs) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                          <svg class="league-logo w-[20px] h-[20px] object-cover  mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" style="fill:#ee1c25"/><path id="s" d="M150,60l52.9,162.81L64.4,122.19H235.6L97.1,222.81Z" style="fill:#ff0"/><path id="s-2" data-name="s" d="M311.74,32.39l-5,56.85L277.37,40.3l52.51,22.33-55.6,12.8Z" style="fill:#ff0"/><path id="s-3" data-name="s" d="M381.53,99.11l-26.67,50.45-8.07-56.49,39.73,41-56.22-9.78Z" style="fill:#ff0"/><path id="s-4" data-name="s" d="M388.18,199.71l-44.93,35.18L358.92,180l19.57,53.6-47.34-31.86Z" style="fill:#ff0"/><path id="s-5" data-name="s" d="M310.58,241.93l-2.64,57-31.37-47.67L330,271.39l-55,15.1Z" style="fill:#ff0"/></svg>
                            <p class="">Chinese  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isChineseSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>

                        </div>

                        <div @click="selectLanguage(LocalizationStatus.id)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.id) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="league-logo w-[20px] h-[20px] object-cover mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path d="M0,0H900V600H0Z" style="fill:#fff"/><path d="M0,0H900V300H0Z" style="fill:red"/></svg>
                            <p class="">Indonesia  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isIndonesiaSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>

                        </div>
                     

                        <div @click="selectLanguage(LocalizationStatus.vi)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.vi) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg  class="league-logo w-[20px] h-[20px] object-cover mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" style="fill:#da251d"/><polygon points="450 120 344.1 445.5 621.3 244.5 278.7 244.5 555.9 445.5 450 120" style="fill:#ff0"/></svg>

                            <p class="">Vietnam  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isVietnamSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>


                        <div @click="selectLanguage(LocalizationStatus.th)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.th) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="league-logo w-[20px] h-[20px] object-cover mr-2"  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" style="fill:#a51931"/><rect y="100" width="900" height="400" style="fill:#f4f5f8"/><rect y="200" width="900" height="200" style="fill:#2d2a4a"/></svg>

                            <p class="">Thailand  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isThailandSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>
                        
                       
                        <div @click="selectLanguage(LocalizationStatus.ms)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.ms) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg  class="league-logo w-[20px] h-[20px] object-cover mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><g id="surface1"><rect width="900" height="600" style="fill:#cc0001"/><path d="M0,557.14H900V600H0Z" style="fill:#fff"/><path d="M0,471.43H900v42.86H0Z" style="fill:#fff"/><path d="M0,385.71H900v42.86H0Z" style="fill:#fff"/><path d="M0,300H900v42.86H0Z" style="fill:#fff"/><path d="M0,214.29H900v42.85H0Z" style="fill:#fff"/><path d="M0,128.57H900v42.86H0Z" style="fill:#fff"/><path d="M0,42.86H900V85.71H0Z" style="fill:#fff"/><path d="M0,0H450V342.86H0Z" style="fill:#010066"/><path d="M171.86,42.86c-71.21,0-129,57.6-129,128.57S100.65,300,171.86,300a128.62,128.62,0,0,0,69.82-20.48,114.29,114.29,0,0,1-37.4,6.26c-63.14,0-114.38-51.07-114.38-114s51.24-114,114.38-114A114.3,114.3,0,0,1,244,64.83,128.65,128.65,0,0,0,171.86,42.86Z" style="fill:#fc0"/><path d="M385.79,238.36,331.45,210l16.07,58L311.17,219.5l-11.34,59.07-11.15-59.11-36.5,48.43,16.25-58L214,238.1l40.43-45.35-61.57,2.35,56.6-23.75-56.53-23.92L254.5,150,214.22,104.5l54.33,28.35-16.07-58,36.35,48.54,11.34-59.07,11.15,59.1L347.82,75l-16.25,58L386,104.75l-40.43,45.36,61.57-2.36-56.6,23.75,56.53,23.93-61.57-2.55Z" style="fill:#fc0"/></g></svg>

                            <p class="">Malaysia  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isMalaysiaSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>


                        <div @click="selectLanguage(LocalizationStatus.hi)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.hi) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                       <svg class="league-logo w-[20px] h-[20px] object-cover mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path d="M0,0H900V600H0Z" style="fill:#f93"/><path d="M0,200H900V600H0Z" style="fill:#fff"/><path d="M0,400H900V600H0Z" style="fill:#128807"/><circle cx="450" cy="300" r="80" style="fill:#008"/><circle cx="450" cy="300" r="70" style="fill:#fff"/><circle cx="450" cy="300" r="14" style="fill:#008"/><g id="d"><g id="c"><g id="b"><g id="a"><circle cx="519.4" cy="309.14" r="3.5" style="fill:#008"/><path d="M450,370l2.4-42L450,308l-2.4,20Z" style="fill:#008"/></g><g id="a-2" data-name="a"><circle cx="514.67" cy="326.79" r="3.5" style="fill:#008"/><path d="M431.88,367.61l13.19-39.94,2.86-19.94-7.5,18.69Z" style="fill:#008"/></g></g><g id="b-2" data-name="b"><g id="a-3" data-name="a"><circle cx="505.53" cy="342.61" r="3.5" style="fill:#008"/><path d="M415,360.62l23.08-35.17L446,306.93l-12.08,16.12Z" style="fill:#008"/></g><g id="a-4" data-name="a"><circle cx="492.61" cy="355.53" r="3.5" style="fill:#008"/><path d="M400.5,349.5l31.4-28,12.44-15.84L428.5,318.1Z" style="fill:#008"/></g></g></g><g id="c-2" data-name="c"><g id="b-3" data-name="b"><g id="a-5" data-name="a"><circle cx="476.79" cy="364.67" r="3.5" style="fill:#008"/><path d="M389.38,335,427,316.08,443.07,304l-18.52,7.92Z" style="fill:#008"/></g><g id="a-6" data-name="a"><circle cx="459.14" cy="369.4" r="3.5" style="fill:#008"/><path d="M382.39,318.12l41.19-8.55,18.69-7.5-19.94,2.86Z" style="fill:#008"/></g></g><g id="b-4" data-name="b"><g id="a-7" data-name="a"><circle cx="440.86" cy="369.4" r="3.5" style="fill:#008"/><path d="M380,300l42,2.4,20-2.4-20-2.4Z" style="fill:#008"/></g><g id="a-8" data-name="a"><circle cx="423.21" cy="364.67" r="3.5" style="fill:#008"/><path d="M382.39,281.88l39.94,13.19,19.94,2.86-18.69-7.5Z" style="fill:#008"/></g></g></g></g><g id="d-2" data-name="d"><g id="c-3" data-name="c"><g id="b-5" data-name="b"><g id="a-9" data-name="a"><circle cx="407.39" cy="355.53" r="3.5" style="fill:#008"/><path d="M389.38,265l35.17,23.08L443.07,296,427,283.92Z" style="fill:#008"/></g><g id="a-10" data-name="a"><circle cx="394.47" cy="342.61" r="3.5" style="fill:#008"/><path d="M400.5,250.5l28,31.4,15.84,12.44L431.9,278.5Z" style="fill:#008"/></g></g><g id="b-6" data-name="b"><g id="a-11" data-name="a"><circle cx="385.33" cy="326.79" r="3.5" style="fill:#008"/><path d="M415,239.38,433.92,277,446,293.07l-7.92-18.52Z" style="fill:#008"/></g><g id="a-12" data-name="a"><circle cx="380.6" cy="309.14" r="3.5" style="fill:#008"/><path d="M431.88,232.39l8.55,41.19,7.5,18.69-2.86-19.94Z" style="fill:#008"/></g></g></g><g id="c-4" data-name="c"><g id="b-7" data-name="b"><g id="a-13" data-name="a"><circle cx="380.6" cy="290.86" r="3.5" style="fill:#008"/><path d="M450,230l-2.4,42,2.4,20,2.4-20Z" style="fill:#008"/></g><g id="a-14" data-name="a"><circle cx="385.33" cy="273.21" r="3.5" style="fill:#008"/><path d="M468.12,232.39l-13.19,39.94-2.86,19.94,7.5-18.69Z" style="fill:#008"/></g></g><g id="b-8" data-name="b"><g id="a-15" data-name="a"><circle cx="394.47" cy="257.39" r="3.5" style="fill:#008"/><path d="M485,239.38l-23.08,35.17L454,293.07,466.08,277Z" style="fill:#008"/></g><g id="a-16" data-name="a"><circle cx="407.39" cy="244.47" r="3.5" style="fill:#008"/><path d="M499.5,250.5l-31.4,28-12.44,15.84L471.5,281.9Z" style="fill:#008"/></g></g></g></g><g id="d-3" data-name="d"><g id="c-5" data-name="c"><g id="b-9" data-name="b"><g id="a-17" data-name="a"><circle cx="423.21" cy="235.33" r="3.5" style="fill:#008"/><path d="M510.62,265l-37.57,18.92L456.93,296l18.52-7.92Z" style="fill:#008"/></g><g id="a-18" data-name="a"><circle cx="440.86" cy="230.6" r="3.5" style="fill:#008"/><path d="M517.61,281.88l-41.19,8.55-18.69,7.5,19.94-2.86Z" style="fill:#008"/></g></g><g id="b-10" data-name="b"><g id="a-19" data-name="a"><circle cx="459.14" cy="230.6" r="3.5" style="fill:#008"/><path d="M520,300l-42-2.4L458,300l20,2.4Z" style="fill:#008"/></g><g id="a-20" data-name="a"><circle cx="476.79" cy="235.33" r="3.5" style="fill:#008"/><path d="M517.61,318.12l-39.94-13.19-19.94-2.86,18.69,7.5Z" style="fill:#008"/></g></g></g><g id="c-6" data-name="c"><g id="b-11" data-name="b"><g id="a-21" data-name="a"><circle cx="492.61" cy="244.47" r="3.5" style="fill:#008"/><path d="M510.62,335l-35.17-23.08L456.93,304l16.12,12.08Z" style="fill:#008"/></g><g id="a-22" data-name="a"><circle cx="505.53" cy="257.39" r="3.5" style="fill:#008"/><path d="M499.5,349.5l-28-31.4-15.84-12.44L468.1,321.5Z" style="fill:#008"/></g></g><g id="b-12" data-name="b"><g id="a-23" data-name="a"><circle cx="514.67" cy="273.21" r="3.5" style="fill:#008"/><path d="M485,360.62l-18.92-37.57L454,306.93l7.92,18.52Z" style="fill:#008"/></g><g id="a-24" data-name="a"><circle cx="519.4" cy="290.86" r="3.5" style="fill:#008"/><path d="M468.12,367.61l-8.55-41.19-7.5-18.69,2.86,19.94Z" style="fill:#008"/></g></g></g></g></svg>

                            <p class="">India  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isIndiaSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>

                        <div @click="selectLanguage(LocalizationStatus.ar)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.ar) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="league-logo w-[20px] h-[20px] object-cover mr-2" xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 10368 6912" fill="#fff">
                            <title>Flag of Saudi Arabia</title>
                            <path fill="#006c35" d="m0 0h10368v6912H0z"/>
                            <path d="m6700 5138h-144c-16 21-41 46-55 46-17 0-63-47-63-64 0-13 22-38 42-54v-39H3870c-344 0-515-3-630-118h3240v-39c-19-15-42-41-42-54 0-17 46-64 63-64 17 0 63 47 63 64 0 13-23 39-42 54v39h440c118 0 166 10 166 118 0 115-31 136-80 136-17 0-45-1-66-25h-171a60 40 0 0 1-111 0zm111-36h151c-8-22-8-45 0-75h-440v39c11 8 26 25 34 36h144a60 40 0 0 1 111 0z"/>
                            <path d="m7060 3304c10 12 16 23-1 43-16 14-27 22-44 36-7 12-12 31 11 37 44 12 125-40 125-41 17-12 11-34 10-34-10-10-31-4-45-6-7 0-11-13-1-32 9-12 13-19 19-33 6-14 0-24-24-32-25-4-35-2-62 0-15 3-20 10-23 27 1 26 18 24 35 35zm-190-618c-14 19-24 34 3 49 28 14 70 53 52 97-10 34 0 61 31 12 32-51 7-112-24-151-27-34-45-27-62-7zm842-698c38 33 59 23 35-33-28-56-55-115-80-168-27-56-34-43-65-3-35 39-38 69-25 92 66 523 97 796 104 954 14 230-45 359-280 507-76 49-162 105 21 62 171-41 354-149 354-562 0-311-72-644-64-849zm-280-106c-21 33-17 40 7 76 24 40 45 112 45 168 0 56 21 49 31-3 11-50 7-148-24-217-31-73-42-47-59-24zm201 1089c-7-46-21-92-83-180-62-86-118-165-173-241-17-197-42-408-42-519 28 26 49 0 35-43-14-43-42-158-62-207-18-47-38-37-66 6-24 43-41 63-24 95 7 191 34 376 66 543-56-72-108-141-156-204-3-72-10-144-14-217 31 23 45 17 28-26-14-46-52-142-69-184-18-43-28-43-52-10-38 56-49 95-17 148 3 46 10 95 13 138-31-39-58-79-83-115 31 16 56-10 21-40-31-29-97-79-124-115-31-36-59-36-59-3 0 33 3 62 0 92-7 26-7 53 34 99 80 92 156 187 229 276 27 329 45 540 38 671-4 79-31 125-76 138-45 17-90-13-132-72-76-105-103-85-162 7-56 85-94 158-125 220-27 59-76 112-121 33-41-79-48-168-45-230 0-63-10-112-34-13-62 243-24 296 45 348 86 73 114 79 159 17 90-119 114-224 166-283 41-46 41-10 62 13 52 62 97 85 169 95 73 13 204-46 194-276-7-138-17-326-31-526 69 92 131 174 180 240 24 131 38 250 31 345-7 109 17 109 41-3 7-46 7-142-3-257 93 119 148 198 186 254 42 69 66 128 56-14zm-948-259c0-23 11-30 52-63 35-26 132-92 163-122 31-29 55-56 62-19 3 36 10 49-28 69-38 16-138 75-169 98-35 27-80 60-80 37zm11-405c-7 30-49 30-45-3 3-33 0-27 0-53-4-26 31-43 48-20 21 23 56 96 66 122 14 26 21 20 21-16-4-43-11-83-7-112 3-17 14-37 34-53 25-16 38-20 49 10 7 26 27 29 17 53-14 32-45-33-66 13-10 33 0 125-3 158 0 29-14 72-38 23-17-33-42-89-76-122zm-239-267c49 23 101 37 63-19-39-53-70-142-90-208-25-65-31-62-70-6-58 85-6 168 7 266 49 352 97 711 111 806 14 106 31 175 3 290-10 36 4 46 28 3 97-174 31-326 21-424-17-152-73-553-83-714m-228-10c27 23 59 23 41-26-17-50-31-109-48-165-17-56-28-69-49-43-24 30-41 40-58 60-18 16-21 52 0 85 76 497 79 717 90 902 10 184 38 269-83 394-132 135-211 168-270 181-66 18-93 44-22 44 232 0 255-62 350-162 77-81 114-184 108-428-7-428-70-612-59-842zm-868 1257c35-20 52-36 79-46 28-14 49-10 28 46-21 65-10 85 35 69 41-13 65-30 100-43 31-13 66-13 17 23-38 30-93 69-124 76-69 16-104-10-90-63 14-49 24-69-17-52-49 19-45 0-28-10zm557-1119c13 40 31 59 41 10 7-43 21-56 28-10 10 46 38 40 45-3 10-43 24-66 31-20 7 49 3 66-4 82-3 14-31 30-52 10-24-20-31-20-48-3-38 33-52 10-59-36-3-40 11-56 18-30zm231 829c-31-148-173-385-384-694-6-82-10-158-10-227 31 33 52 13 42-30-21-75-52-138-90-223-14-36-52-46-69 6-25 63-28 76 3 119-3 46 14 125 21 197-38-53-87-118-125-174 59 23 94 6 42-46-52-56-125-112-170-152-45-39-65-13-58 23 3 37 7 63 3 92-3 30 7 50 52 66 90 112 180 227 263 346 10 98 31 207 41 296 28 210 69 483 35 602-28 89 0 128 45-7 41-135 37-263 10-464-11-78-14-177-24-269 145 213 276 417 335 559 31 76 59 92 38-20zm-259-1201c-14 27-24 46 3 66 28 20 70 73 52 132-10 46 0 82 31 16 31-69 7-151-24-204-28-46-45-36-62-10zm-1023 718c-7 46 3 75 20 98 18 23 52 20 63-6 10-30 17-33 38-10 24 23 103 3 65-112-17-46-24-36-24 16 0 83-28 83-59 4-10-30-24-30-27 10 0 75-35 85-56 9-7-32-13-59-20-9zm477 118c72-16 31-23-18-53-51-29-72-29-69 4 4 19 4 39 11 65 24-6 48-9 76-16zm-142-161c55-76 145-53 249 16 104 69 62 178-38 234-24 13-55 26-94 39 11 23-3 30-34 10-90 30-208 73-290 115 100 7 515 0 598-10 83-6 69 7 45 76-25 66-52 59-121 69-111 20-274 66-391 112-118 46-76 128 45 171 93 23 83 33 66 86-14 49-14 62-128 46-280-43-381-191-426-306-172 233-342 362-501 322-79-16-117-85-124-171-111 49-239 92-405 138-38 13-69-3-17-26 110-53 283-141 425-237 14-59 45-141 76-201 17-36 28-23 28 7 0 23-7 82-4 125 25-20 59-39 76-56 97-82 204-135 132-266-31-60-56-102-66-129-62-23-45-56-17-112 27-55 38-69 93-6 80 89 90 128 35 122 86 210 65 319-69 444-63 62-128 112-204 151-7 56 17 112 127 95 146-19 308-200 377-338-31-116-100-323-141-428-21-53 0-76 17-119 21-42 31-69 55-9 24 56 100 197 135 365 38 168 31 312 121 391 42 36 93 60 149 73-42-112 45-198 159-237-69-63-177-53-298-59-89-4-79-14-55-89 24-76 52-86 118-112 90-33 179-66 273-92-59-82-21-142 24-204zm-436-675c-24 23-24 27-3 56 21 23 52 96 41 171-3 33 4 66 21 7 14-59 10-142-7-191-17-49-38-62-52-43zm-470 129c-55 148-52 289 62 411 66 69 114 36 142-40 31-72 52-144 73-194 20-49 38-39 34 7-10 92-17 240 80 296 97 56 245-39 297-138 156 197 294 105 311-86 4-59-24-187-41-223-17-40-7-40 17-20 24 23 66 36 45-30-24-62-52-98-90-128-34-30-41-13-55 10-14 23-11 29-31 46-21 20-18 29 0 66 58 144 114 355 20 375-86 16-141-162-145-240-3-106-17-195-38-250-15-36-24-53-32-53-14 0-34 57-47 79-14 23 0 29 10 75 52 231 45 336-66 395-110 63-169 4-169-69-3-72-3-161 7-227 7-66 24-75 0-108-24-37-45-23-76 19-69 92-138 247-163 319-24 76-72 50-107-13-38-75-34-210-21-263 14-53 7-76-17-16zm-142-56c7-20-10-40-24-10-10 23-14 39 7 53 7-14 14-30 17-43zm-83-30c42-102 180-89 142 43-3 20-14 46-27 72 20 27 10 60-32 53-45 69-131 145-280 207-69 30-79 7-27-23 100-62 193-138 252-217-45-36-45-89-28-135zm-24 365c-41 50-72 122-14 165 32 26 97-3 121-53 25-52 14-59-27-16-59 62-118 6-56-79 42-59 18-73-24-17zm-93 724c7 23 3 76-7 99-14 29 0 43 21 6 20-39 34-85 24-131-4-33-4-43-35-56-34-13-45 6-55 33-14 33 3 69 52 49zm-533-217c-62 16-72-7-69-43 4-36 7-46 49-29 17 6 38 29 59 59-14 3-28 10-39 13zm52-148c-62-59-114-63-166 10-48 69-45 85-41 148 3 62-10 85 41 102 49 16 70 10 101 0 24-7 58-17 93-30 7 33 3 69-17 96-128 144-325 250-412 154-48-52-69-135-55-233 14-83-14-46-24-17-31 96-42 234 0 303 59 95 152 138 301 76 148-63 293-175 287-329 0-30-4-56-4-76 14-7 38-23 55-30 4 53-3 119 0 171 7 168-62 217-124 264-87 65-204 108-304 125-239 32-294-112-291-306 0-30 14-50 14-93-3-82-14-69-41 14-25 79-56 263 24 414 83 152 363 109 581 10 214-99 238-286 228-474 0-49-4-102-7-158 7-3 10-9 14-13 31 96 176 69 221 13 24-26 24-29 45 0 31 43 138 56 166-3 24-62 21-122 14-168-7-46-18-42-49-19-34 26-7 29-3 62 14 125-100 115-114-13-7-79-21-49-31-13-49 154-191 184-177 6 4-52-31-36-48-16-17 13-31 30-48 39-11-144-21-309-39-506 42 49 80-7 52-63-20-43-52-138-72-191-18-52-28-36-73 7-41 46-34 56-14 102-7 56 4 112 18 227 10 82 38 253 51 470-20 10-51 30-72 40-17-36-42-66-80-102zm-743 418c3 33 3 56 3 69 0 23-13 46-20 75-42 142 20 211 55 158 31-52 48-46 45-3-3 142-145 151-156 33-17-188 28-217 42-280 10-42 24-75 31-52zm-73-208c101-115 229-174 294-194 42-13 63-29 63 10 3 36 0 40-35 50-80 19-246 98-301 138-27 20-62 43-21-4zm564-990c-10 27-3 59 14 79 17 23 48 23 69 7 17-20 17-23 35 3 10 20 44 13 55-7 7-16 17-32 7-55-11-23-11-17-18 9-6 43-48 33-51-19 0-50-11-23-25 10-24 49-58 39-58-4 0-36-11-66-28-23zm-149 691c11 119 45 339 45 415 4 79 14 56 35 13 21-43 17-89 14-152-7-65-11-174-25-322 28-20 52-53 63-72 27-50 34-46 45-7 20 79 103 132 214 56 104-69 59-214 14-372 38 7 52-23 27-62-10-23-31-43-48-63-17-20-35-36-52-16-14 20-31 36-41 49-11 13-11 26 3 59 42 92 69 191 76 247 11 53-10 66-48 66-38 0-90-10-111-89-21-79-31-115-27-168 3-52 10-89-28-141-42-53-45-43-55-17-7 30-21 73-7 122 17 72 27 135 38 178 7 29-25 92-69 125-11-99-28-231-35-336 59-20 28-95-21-177-34-63-48-37-72 3-25 39-7 56 10 89-14 26 10 65 21 138 3 46 14 177 24 293-48 0-76-30-93-69-38-83-28-158-11-208 18-49 35-125 4-144-28-20-66 3-90 39-42 59-80 145-83 234-4 36-14 105-31 131-14 27-38 30-63-10-41-62-55-220-51-302 0-40-11-46-25 0-12 42-17 85-17 126 0 116 34 222 62 275 38 72 87 56 121-3 52-89 31-168 80-300 28-82 38-19 28 30-25 132-18 345 179 342zm-297-516c35-93 38-175-3-145-35 26-56 0-28-30 34-43 79-56 90 17 3 56-38 125-59 158z"/>
                          </svg>


                            <p class="">Arabic  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isArabicSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>

                        <div @click="selectLanguage(LocalizationStatus.fr)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.fr) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                     
                            <svg class="league-logo w-[20px] h-[14px] object-cover mr-2" xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="900" height="600" fill="#ED2939"/><rect width="600" height="600" fill="#fff"/><rect width="300" height="600" fill="#002395"/></svg>


                            <p class="">French  </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isFrenchSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>


                        <div @click="selectLanguage(LocalizationStatus.de)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.de) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="league-logo w-[20px] h-[20px] object-cover  mr-2"  xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 9 6">
                                <rect fill="#FFCE00" width="9" height="6"/>
                                <rect fill="#DD0000" width="9" height="4"/>
                                <rect fill="#000000" width="9" height="2"/>
                                </svg>
                            <p class="">German </p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isGermanSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>

                        <div @click="selectLanguage(LocalizationStatus.zht)" :class="{ 'selected': isLanguageSelected(LocalizationStatus.zht) }"
                          class="flex  items-center text-[14px] text-[#494C52] ">
                          <div class="flex items-center py-1 w-[250px]">
                            <svg class="league-logo w-[20px] h-[20px] object-cover  mr-2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" style="fill:#ee1c25"/><path id="s" d="M150,60l52.9,162.81L64.4,122.19H235.6L97.1,222.81Z" style="fill:#ff0"/><path id="s-2" data-name="s" d="M311.74,32.39l-5,56.85L277.37,40.3l52.51,22.33-55.6,12.8Z" style="fill:#ff0"/><path id="s-3" data-name="s" d="M381.53,99.11l-26.67,50.45-8.07-56.49,39.73,41-56.22-9.78Z" style="fill:#ff0"/><path id="s-4" data-name="s" d="M388.18,199.71l-44.93,35.18L358.92,180l19.57,53.6-47.34-31.86Z" style="fill:#ff0"/><path id="s-5" data-name="s" d="M310.58,241.93l-2.64,57-31.37-47.67L330,271.39l-55,15.1Z" style="fill:#ff0"/></svg>

                            <p class="">Traditional Chinese</p>
                          </div>
                          <div class="ml-16">
                            <svg v-if="isTradChinSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                        </div>


                      </ul>
                    </transition>
                    <!-- End of nested dropdown -->
                   <div class="flex flex-col text-[14px] text-[#494C52] border-t mx-2  py-2">
                      <p  class="mb-2">Theme</p>

                     <div class="flex  items-center text-[14px] text-[#494C52]  ">
                     <div  @click="autoMode"  :class="{ 'selected': isAutoModeSelected }" class="flex items-center py-1 w-[250px] "> 
                      <svg class="mr-2" id="automode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23.174 23.999">
                        <g id="Group_15111" data-name="Group 15111" transform="translate(-2.415 -1.707)">
                          <g id="Group_15112" data-name="Group 15112" transform="translate(2.415 1.707)">
                            <path id="Path_1889" data-name="Path 1889" d="M22.287,9.044,23.208,7l2.04-.921a.583.583,0,0,0,0-1.061L23.208,4.1l-.921-2.052a.583.583,0,0,0-1.061,0l-.921,2.04-2.052.921a.583.583,0,0,0,0,1.061l2.04.921.921,2.052A.592.592,0,0,0,22.287,9.044Zm-9.28,1.749L11.153,6.712a1.166,1.166,0,0,0-2.122,0L7.178,10.792,3.1,12.646a1.166,1.166,0,0,0,0,2.122l4.081,1.854L9.031,20.7a1.166,1.166,0,0,0,2.122,0l1.854-4.081,4.081-1.854a1.166,1.166,0,0,0,0-2.122Zm8.208,7.578-.921,2.04-2.04.921a.583.583,0,0,0,0,1.061l2.04.921.921,2.052a.583.583,0,0,0,1.061,0l.921-2.04,2.052-.921a.583.583,0,0,0,0-1.061l-2.04-.921-.921-2.052A.592.592,0,0,0,21.214,18.371Z" transform="translate(-2.415 -1.708)"/>
                          </g>
                        </g>
                      </svg>
                      <p class="">Auto Mode  </p>
                    </div>
                    <div class="ml-16">
                            <svg v-if="isAutoModeSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                      </div>

                      <div class="flex  items-center text-[14px] text-[#494C52]  ">
                        <div  @click="lightMode"  :class="{ 'selected': isLightModeSelected }" class="flex items-center py-1 w-[250px] "> 
                        <svg class="mr-2" id="Theme" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path id="Icon_material-brightness-4" data-name="Icon material-brightness-4" d="M21.523,9.523V4.547H16.547L13.035,1.035,9.523,4.547H4.547V9.523L1.035,13.035l3.512,3.512v4.976H9.523l3.512,3.512,3.512-3.512h4.976V16.547l3.512-3.512ZM13.035,19.4a6.34,6.34,0,0,1-2.653-.584,6.359,6.359,0,0,0,0-11.565A6.364,6.364,0,1,1,13.035,19.4Z" transform="translate(-1.035 -1.035)" fill="#494C52"/>
                      </svg>

                      <p class="">Light Mode  </p>
                      </div>
                      <div class="ml-16">
                            <svg v-if="isLightModeSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                      </div>

                      <div class="flex  items-center text-[14px] text-[#494C52]  ">
                        <div  @click="darkMode"  :class="{ 'selected': isDarkModeSelected }" class="flex items-center py-1 w-[250px] "> 
                        <svg   class="mr-2" id="darkmode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 23.996">
                        <path id="Path_1888" data-name="Path 1888" d="M13.706,3.051a12.032,12.032,0,1,0,13.285,13.3,1.341,1.341,0,0,0-2.058-1.27,7.217,7.217,0,0,1-9.984-9.944A1.344,1.344,0,0,0,13.706,3.051Z" transform="translate(-3 -3.046)"/>
                      </svg>

                      <p class="">Dark Mode  </p>
                      </div>
                      <div class="ml-16">
                            <svg v-if="isDarkModeSelected" id="selected_radio" xmlns="http://www.w3.org/2000/svg"
                              width="16" height="16" viewBox="0 0 24 24">
                              <path id="radio_button_checked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,193.58a5.532,5.532,0,1,0-3.96-1.62A5.387,5.387,0,0,0,92,193.58ZM92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.993,11.993,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>

                            <svg v-else id="unselected_radio" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              viewBox="0 0 24 24">
                              <path id="radio_button_unchecked_FILL0_wght400_GRAD0_opsz48"
                                d="M92,200a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.405-6.4,11.987,11.987,0,0,1,0-9.33,11.992,11.992,0,0,1,2.58-3.81,12.3,12.3,0,0,1,3.825-2.565,11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,92,200Zm0-1.8a10.191,10.191,0,1,0-7.215-2.985A9.815,9.815,0,0,0,92,198.2ZM92,188Z"
                                transform="translate(-80 -176)" />
                            </svg>
                          </div>
                      </div>
               
                    </div>
                    <div class="flex items-center text-[14px] text-[#494C52] border-t mx-2">
                      <svg class="mr-2"  id="Component_355_1" data-name="Component 355 – 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <rect id="Rectangle_1352" data-name="Rectangle 1352" width="24" height="24" fill="none"/>
                      <path id="Path_1497" data-name="Path 1497" d="M13.751,26.5a2.469,2.469,0,0,0,2.462-2.462H11.289A2.461,2.461,0,0,0,13.751,26.5Zm7.385-7.385V12.962c0-3.778-2.018-6.942-5.538-7.778V4.346a1.846,1.846,0,1,0-3.692,0v.837c-3.532.837-5.538,3.988-5.538,7.778v6.154L4.778,20.7a1.231,1.231,0,0,0,.862,2.1H21.849a1.234,1.234,0,0,0,.874-2.1Z" transform="translate(-1.749 -2.5)" fill="#494C52"/>
                    </svg>

                      <p class="py-3">Notifications  </p>
                      
                    </div> 
                  </ul>
                </transition>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>
  

<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['language-selected']);

const props = defineProps({
    match: Object,
    search :Object
});


const searchQuery = ref('');

// Filtered matches computed property
const filteredMatches = computed(() => {
  const query = searchQuery.value.toLowerCase();
  console.log(query)
  return props.match.filter((matchItem) => {
    return matchItem.status_name.toLowerCase().includes(query);
    console.log(query)
  });
});

const isDropdownOpen = ref(false);
const isNestedDropdownOpen = ref(false);

const toggleDropdownAndRotate = () => {
  isNestedDropdownOpen.value = !isNestedDropdownOpen.value;
  rotateSVG();
};

const dropdownRef = ref(null);

const closeDropdown = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
    isNestedDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdown);
});

const isRotated = ref(false);
const rotateSVG = () => {
  isRotated.value = !isRotated.value;
};



const isFootballSelected = ref(true);
const isBasketballSelected = ref(false);

const selectFootball = () => {
  isFootballSelected.value = true;
  isBasketballSelected.value = false;
  localStorage.setItem('selectedSport', 'football');
};

const selectBasketball = () => {
  isFootballSelected.value = false;
  isBasketballSelected.value = true;
  localStorage.setItem('selectedSport', 'basketball');
};

const LocalizationStatus = {
  none: 'none',
  en: 'en',
  zhs: 'zhs',
  id: 'id',
  vi: 'vi',
  th: 'th',
  ms: 'ms',
  hi: 'hi',
  ar: 'ar',
  fr: 'fr',
  de: 'de',
  zht: 'zht',
};
const selectedLanguage = ref(
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('selectedLanguage') || LocalizationStatus.en
    : LocalizationStatus.en
);

const isLanguageSelected = (language) => {
  return selectedLanguage.value === language;
};

  const isEnglishSelected = ref(true);
  const isVietnamSelected = ref(false);
  const isChineseSelected = ref(false);
  const isThailandSelected = ref(false);
  const isIndonesiaSelected = ref(false);
  const isMalaysiaSelected =  ref(false);
  const isIndiaSelected = ref(false);
  const isArabicSelected = ref(false);
  const isFrenchSelected = ref(false);
  const isGermanSelected = ref(false);
  const isTradChinSelected = ref(false);

  


  const selectLanguage = (language) => {
  selectedLanguage.value = language;
  localStorage.setItem('selectedLanguage', language);
  emits('language-selected', language);


  isEnglishSelected.value = language === 'en';
  isVietnamSelected.value = language === 'vi';
  isChineseSelected.value = language === 'zhs';
  isThailandSelected.value = language === 'th';
  isIndonesiaSelected.value = language === 'id';
  isMalaysiaSelected.value = language === 'ms';
  isIndiaSelected.value = language === 'hi';
  isArabicSelected.value =  language === 'ar';
  isFrenchSelected.value =  language === 'fr';
  isGermanSelected.value =  language === 'de';
  isTradChinSelected.value =  language === 'zht';

  // Reset the other language selections based on the selected language
  switch (language.toLowerCase()) {
    case 'en':
      isEnglishSelected.value = true;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'zhs':
    isEnglishSelected.value = false;
      isChineseSelected.value = true;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'id':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = true;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
    case 'vi':
    isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = true;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
  
      case 'th':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = true;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
    
      case 'ms':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = true;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'hi':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = true;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'ar':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = true;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'fr':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = true;
      isGermanSelected.value = false;
      isTradChinSelected.value =false;
      break;
      case 'de':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = true;
      isTradChinSelected.value =false;
      break;
      case 'zsh':
      isEnglishSelected.value = false;
      isChineseSelected.value = false;
      isIndonesiaSelected.value = false;
      isVietnamSelected.value = false;
      isThailandSelected.value = false;
      isMalaysiaSelected.value = false;
      isIndiaSelected.value = false;
      isArabicSelected.value = false;
      isFrenchSelected.value = false;
      isGermanSelected.value = false;
      isTradChinSelected.value =true;
      break;
    default:
      // Handle other languages or unknown cases here
      break;
  }

};


const isAutoModeSelected =  ref(false);
const isLightModeSelected =  ref(true);
const isDarkModeSelected =  ref(false);


const autoMode = () => {
  isAutoModeSelected.value = true;
  isLightModeSelected.value = false;
  isDarkModeSelected.value = false;
  localStorage.setItem('selectedMode', 'auto');
  console.log('auto')
};

const lightMode = () => {
  isAutoModeSelected.value = false;
  isLightModeSelected.value = true;
  isDarkModeSelected.value = false;
  localStorage.setItem('selectedMode', 'light');
  console.log('light')
};

const darkMode = () => {
  isAutoModeSelected.value = false;
  isLightModeSelected.value = false;
  isDarkModeSelected.value = true;
  localStorage.setItem('selectedMode', 'dark');
  console.log('dark')
};



onMounted(() => {
  const selectedSport = localStorage.getItem('selectedSport');
  if (selectedSport === 'football') {
    selectFootball();
  } else if (selectedSport === 'basketball') {
    selectBasketball();
  }

  isEnglishSelected.value = selectedLanguage.value === 'en';
  isChineseSelected.value = selectedLanguage.value === 'zhs';
  isIndonesiaSelected.value = selectedLanguage.value === 'id';
  isVietnamSelected.value = selectedLanguage.value === 'vi';
  isThailandSelected.value = selectedLanguage.value === 'th';
  isMalaysiaSelected.value = selectedLanguage.value === 'ms';
  isIndiaSelected.value = selectedLanguage.value === 'hi';
  isArabicSelected.value = selectedLanguage.value === 'ar';
  isFrenchSelected.value = selectedLanguage.value === 'fr';
  isGermanSelected.value = selectedLanguage.value === 'de';
  isTradChinSelected.value = selectedLanguage.value === 'zht';


  const selectedMode = localStorage.getItem('selectedMode');
  if (selectedMode === 'auto') {
    autoMode();
  } else if (selectedMode === 'light') {
    lightMode();
  }
  else if (selectedMode === 'dark') {
    darkMode();
  }
});

</script>

<style  scoped>.cls-1 {
  fill: #0081db;
}

.bar {
  width: 352px;
}

.text {
  color: #494C52;
}</style>
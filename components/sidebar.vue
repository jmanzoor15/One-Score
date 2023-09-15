<template>
  <div>
    <div class="index-left bg-white p-2  border-[1px] border-gray-300 rounded-md">
      <div class="hot-comps p-0  pb-12 mb-15">
        <div class="title border-b border-gray-300 mb-2 h-10 leading-10 font-medium text-black">
          Popular Leagues
        </div>

        <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
          Premier League
        </a>

      </div>
      <div class="all-comps p-0 pb-12 mb-15">
        <div class="border-b border-gray-300 mb-3 h-10 flex items-center font-medium text-black">
          Other Leagues
        </div>
        <div class="searchBox">
          <input v-model="searchText" placeholder="Filter…" type="text" class="searchInput">
          <span class="searchIcon">
            <Icon name="material-symbols:search-rounded" style="font-size: 1.60rem; color:#cbd3dc; margin-left: 5px;" />
          </span>
        </div>
        <div class="countries-list mt-[10px]">
          <ul>
            <li class="mt-[10px]" v-for="(country, index) in filteredCountries" :key="index">
              <div @click="toggleColor">
                <button @click="selectedCountry = country; toggleCountry(index)"
                  class="inline-flex  px-2 py-2  text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-[260px]">
                  <div>
                    <img :src="country.logo" alt="Away Team Logo"
                      class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                  </div>
                  <div class="flex flex-grow justify-between">
                    {{ getFirstName(country.name) }}
                  </div>
                  <div>
                    <svg class="w-5 h-5 ml-2 -mr-1 " :class="{ 'rotate-0': isRotated[index] }" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div v-show="isClicked">
                <ul v-if="selectedCountry === country">
                  <li v-for="(competition, cIndex) in country.competition" :key="cIndex" class="relative left-2 p-2 flex">
                    <img :src="competition.logo" alt="Away Team Logo"
                      class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                    {{ getFirstName(competition.name) }}

                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = useFetch('/api/competitionList')

let selectedCountry = ref(null);

const isClicked = ref(false);
const toggleColor = () => {
  isClicked.value = !isClicked.value;

};


const isRotated = ref([false]);
const toggleCountry = (index) => {
  console.log(index)
  isRotated[index] = !isRotated[index];
}

const getFirstName = (fullName) => {
  // Split the string using a regular expression that matches either a space or a hyphen
  const names = fullName.split(/[\s-]/);
  return names.slice(0, 3).join(' ');
};

const searchText = ref('');



const filteredCountries = computed(() => {
  if (Array.isArray(data.value)) {
    const normalizedSearchText = searchText.value.trim().toLowerCase();
    return data.value.filter(country =>
      country.name.toLowerCase().includes(normalizedSearchText)
    );
  } else {
    console.error('data is not an array.');
    return [];
  }
});



</script>

<style scoped>
.index-left {
  margin-right: 8px;
  width: 272px;
}

.searchBox {
  display: inline-block;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e0e1e2;
  position: relative;
  margin-bottom: 12px;
}

.searchBox .searchInput {
  display: inline-block;
  width: 135px;
  height: 32px;
  border: 1px;
  text-indent: 12px;
  font-size: 14px;
  color: #000;
  background-color: hsla(0, 0%, 100%, 0);
  outline: none;
  padding: 0;
}

.searchBox .searchIcon {
  display: inline-flex;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.index-left .comps-item {
  box-sizing: border-box;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 32px;
  color: #333;
}

.index-left .comps-item {
  align-items: center;
  display: flex;
  flex: 1;
}

/* .index-left .country-logo {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    border: 1px solid #eee;
    -o-object-fit: contain;
    object-fit: contain;
    overflow: hidden;
    height: 20px;
    width: 20px;
} */
.index-left .country-logo img[data-v-143d32ee] {
  -o-object-fit: contain;
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.ml-xs {
  margin-left: 8px;
}</style>
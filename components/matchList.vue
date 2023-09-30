<template>
  <div class="ml-4">
    <div class="right-box  p-0 rightBox drop-shadow-md ml-2">
      <div class="index-r" style="width:576px;margin:0;min-height:500px;">
        <div class="w-[382px]">
          <div class="h-[28px]">
            <p class=" font-bold text-[20px]">Date, {{ calenderDate }}</p>
          </div>
          <div class="flex items-center z-20 relative mb-[20px] mt-4 h-[32px] gap-2" style="z-index:2;">
            <button class="All p-2  px-4  border-[1px] rounded-full bg-transparent" @click="showMatches(0)"
              :class="{ 'active': currentStatus === 0 }">All</button>
            <button class="All p-2  px-4  border-[1px] rounded-full bg-transparent" @click="showMatches(1)"
              :class="{ 'active': currentStatus === 1 }">Upcoming</button>
            <button class="All p-2  px-4  border-[1px] rounded-full bg-transparent" @click="showMatches(2)"
              :class="{ 'active': currentStatus === 2 }">Live</button>
            <button class="All p-2  px-4  border-[1px] rounded-full bg-transparent" @click="showMatches(3)"
              :class="{ 'active': currentStatus === 3 }">Finished</button>
          </div>
        </div>
        <div class="Match container mx-auto">
          <!-- Check if there is data available -->
          <div v-if="Object.keys(filteredMatches).length > 0">
            <div v-for="(group, competitionUUID) in filteredMatches" :key="competitionUUID"
              class="league-container  px-2 ">
              <div class="league-header flex items-center border-b border-gray-400 last:border-b-0 pb-2">
                <img v-if="group[0].competition.logo" :src="group[0].competition.logo" alt="Competition Logo"
                  class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                <svg v-else id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  width="20px" height="20px" class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                  <!-- SVG content -->
                  <path class="cls-1"
                    d="m156.25,20.17c-9.06,70.87-65.2,127.01-136.07,136.07C46.06,95.07,95.07,46.06,156.25,20.17Z" />
                  <path class="cls-1"
                    d="m157.54,201.78v290.57C65.03,453.79,0,362.49,0,256c35.38,0,69.1-7.18,99.75-20.17,20.81-8.82,40.24-20.3,57.79-34.05Z" />
                  <path class="cls-1"
                    d="m269.68.36c-4.53-.23-9.09-.36-13.69-.36v512c4.6,0,9.15-.13,13.69-.36,135.04-7.11,242.32-118.84,242.32-255.63S404.72,7.47,269.68.36Zm0,34.47c40.45,2.49,77.99,15.86,109.73,37.21l23.93,72.7-51.12,40.47-31.79-10.33-50.76-16.5V34.83Zm119.44,373.06l-9.84,32.13c-31.7,21.31-69.21,34.64-109.6,37.09v-122.95l82.2-26.72,33.11,30.87,15.03,14.03-10.9,35.55Zm19.2-46.5l-15.41-14.37-32.47-30.3v-120.57l51.14-40.49,57.8,40.52c5.34,19.03,8.2,39.09,8.2,59.8s-2.98,41.56-8.52,60.95l-60.74,44.45Z" />
                </svg>
                <h4 class="country-name font-bold  text-[#494C52]" v-if="group[0].country">{{ group[0].country.name }}:
                  &nbsp; </h4>
                <h4 class="league-name  font-bold text-[#494C52]">{{ group[0].competition.name }}</h4>
              </div>
              <ul class="match-list">
                <li v-for="(match, index) in group" :key="match.uuid"
                  class="match-item border-b border-gray-300 last:border-b-0 flex items-center">
                  <div class="flex items-center h-[20px] w-[26px]">
                    <svg v-if="match.status == 1 || match.status == 2" id="like" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24.002 24">
                      <rect id="Rectangle_874" data-name="Rectangle 874" width="24" height="24"
                        transform="translate(0.002)" fill="none" />
                      <g id="Group_15033" data-name="Group 15033" transform="translate(0 0.371)">
                        <path id="star_FILL0_wght400_GRAD0_opsz48"
                          d="M130.568,282.814l5.291-3.168,5.291,3.2-1.415-6,4.65-4.044-6.133-.539-2.393-5.661-2.393,5.627-6.133.539,4.65,4.044Zm5.291-.809-6.268,3.774a.958.958,0,0,1-.573.152,1,1,0,0,1-.539-.185,1.04,1.04,0,0,1-.354-.438,1,1,0,0,1-.051-.607l1.651-7.144-5.526-4.819a.9.9,0,0,1-.32-.522,1.321,1.321,0,0,1,.017-.556.823.823,0,0,1,.3-.455,1.079,1.079,0,0,1,.573-.219l7.312-.64,2.831-6.739a.944.944,0,0,1,.4-.455,1.034,1.034,0,0,1,1.078,0,.944.944,0,0,1,.4.455l2.831,6.739,7.312.64a1.079,1.079,0,0,1,.573.219.823.823,0,0,1,.3.455,1.322,1.322,0,0,1,.017.556.9.9,0,0,1-.32.522l-5.526,4.819,1.651,7.144a1,1,0,0,1-.051.607,1.04,1.04,0,0,1-.354.438,1,1,0,0,1-.539.185.958.958,0,0,1-.573-.152ZM135.858,275.064Z"
                          transform="translate(-123.857 -262.838)" />
                      </g>
                    </svg>
                  </div>
                  <div class=" flex flex-col items-center ⬤  jutsify-between  w-[50px] ">
                    <span v-if="match.status_name && match.status !== 2 && match.status !== 1"
                      class="text-red-400 text-[10px] relative mt-3 right-2 ">{{ convertTimestamp(match.match_time)
                      }}</span>
                    <span v-if="match.status_name && match.status == 2"
                      class="text-red-400 text-[10px] relative ">&nbsp;{{ match.status_name }}</span>
                    <span class="text-red-400 text-[10px] relative ">
                      &nbsp;{{ stringMatchPlayedTimeMapping(match.status_id, match.kick_off_timestamp,
                        match.match_time) }}</span>
                  </div>
                  <div class="py-2  flex flex-col ">
                    <div class="flex items-center  mb-1">
                      <img v-if="match.home_team && match.home_team.logo" :src="match.home_team.logo" alt="Home Team Logo"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                      <svg v-else id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512" width="20px" height="20px"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                        <!-- SVG content -->
                        <path class="cls-1"
                          d="m156.25,20.17c-9.06,70.87-65.2,127.01-136.07,136.07C46.06,95.07,95.07,46.06,156.25,20.17Z" />
                        <path class="cls-1"
                          d="m157.54,201.78v290.57C65.03,453.79,0,362.49,0,256c35.38,0,69.1-7.18,99.75-20.17,20.81-8.82,40.24-20.3,57.79-34.05Z" />
                        <path class="cls-1"
                          d="m269.68.36c-4.53-.23-9.09-.36-13.69-.36v512c4.6,0,9.15-.13,13.69-.36,135.04-7.11,242.32-118.84,242.32-255.63S404.72,7.47,269.68.36Zm0,34.47c40.45,2.49,77.99,15.86,109.73,37.21l23.93,72.7-51.12,40.47-31.79-10.33-50.76-16.5V34.83Zm119.44,373.06l-9.84,32.13c-31.7,21.31-69.21,34.64-109.6,37.09v-122.95l82.2-26.72,33.11,30.87,15.03,14.03-10.9,35.55Zm19.2-46.5l-15.41-14.37-32.47-30.3v-120.57l51.14-40.49,57.8,40.52c5.34,19.03,8.2,39.09,8.2,59.8s-2.98,41.56-8.52,60.95l-60.74,44.45Z " />
                      </svg>
                      <div class="h-8 w-60 flex items-center">
                        <span v-if="match.home_team && match.home_team.name"
                          class=" relative text-[14px] text-[#191919] font-semibold">{{ match.home_team.name }}</span>
                        <span class=" relative text-[8px]  text-[#191919] "
                          v-if="match.home_position === match.home_position ? match.home_position : ''"> &nbsp;[{{
                            match.home_position }}]</span>
                      </div>
                      <div class="w-[40px] h-[11px]">
                        <svg v-if="match.status == 2" id="Livestreaming" xmlns="http://www.w3.org/2000/svg" width="12"
                          height="11" viewBox="0 0 24 24">
                          <rect id="Rectangle_875" data-name="Rectangle 875" width="24" height="24" fill="none" />
                          <path id="Icon_material-live-tv" data-name="Icon material-live-tv"
                            d="M23.318,7.4h-8.28l3.589-3.619L17.864,3,13.5,7.4,9.136,3l-.775.781,3.6,3.619H3.682A2.19,2.19,0,0,0,1.5,9.6V22.8A2.2,2.2,0,0,0,3.682,25H23.318A2.2,2.2,0,0,0,25.5,22.8V9.6A2.19,2.19,0,0,0,23.318,7.4Zm0,15.4H3.682V9.6H23.318Zm-13.091-11v8.8l7.636-4.4Z"
                            transform="translate(-1.5 -2)" fill="#0081DB" />
                        </svg>
                      </div>
                      <span v-if="match.status == 2 || match.status == 3" class="left-[120px]  relative">{{
                        match.home_scores[0] }}</span>
                    </div>
                    <div class="flex items-center">
                      <img v-if="match.away_team && match.away_team.logo" :src="match.away_team.logo" alt="Away Team Logo"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                      <svg v-else id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512" width="20px" height="20px"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                        <!-- SVG content -->
                        <path class="cls-1"
                          d="m156.25,20.17c-9.06,70.87-65.2,127.01-136.07,136.07C46.06,95.07,95.07,46.06,156.25,20.17Z" />
                        <path class="cls-1"
                          d="m157.54,201.78v290.57C65.03,453.79,0,362.49,0,256c35.38,0,69.1-7.18,99.75-20.17,20.81-8.82,40.24-20.3,57.79-34.05Z" />
                        <path class="cls-1"
                          d="m269.68.36c-4.53-.23-9.09-.36-13.69-.36v512c4.6,0,9.15-.13,13.69-.36,135.04-7.11,242.32-118.84,242.32-255.63S404.72,7.47,269.68.36Zm0,34.47c40.45,2.49,77.99,15.86,109.73,37.21l23.93,72.7-51.12,40.47-31.79-10.33-50.76-16.5V34.83Zm119.44,373.06l-9.84,32.13c-31.7,21.31-69.21,34.64-109.6,37.09v-122.95l82.2-26.72,33.11,30.87,15.03,14.03-10.9,35.55Zm19.2-46.5l-15.41-14.37-32.47-30.3v-120.57l51.14-40.49,57.8,40.52c5.34,19.03,8.2,39.09,8.2,59.8s-2.98,41.56-8.52,60.95l-60.74,44.45Z" />
                      </svg>
                      <div class="h-[20px] w-60  flex items-center">
                        <span v-if="match.away_team && match.away_team.name"
                          class=" relative text-[14px]  text-[#494C52] font-semibold">{{ match.away_team.name }}</span>
                        <span class=" relative text-[8px] text-[#494C52] "
                          v-if="match.home_position === match.home_position ? match.home_position : ''">&nbsp;[{{
                            match.away_position }}]</span>
                      </div>
                      <div class="w-[40px] h-[11px]" :class="{ 'relative left-8 bottom-4': match.status === 3 }">
                        <svg v-if="match.status == 2 || match.status == 3" id="Live" xmlns="http://www.w3.org/2000/svg"
                          width="12" height="11" viewBox="0 0 24 24">
                          <rect id="Rectangle_876" data-name="Rectangle 876" width="24" height="24" fill="none" />
                          <g id="Group_7214" data-name="Group 7214" transform="translate(-408 -120)">
                            <rect id="Rectangle_1329" data-name="Rectangle 1329" width="24" height="24"
                              transform="translate(408 120)" fill="none" />
                            <g id="Layer_1" data-name="Layer 1" transform="translate(408 122.5)">
                              <path id="Path_1489" data-name="Path 1489"
                                d="M22.909,0H1.091A1.074,1.074,0,0,0,0,1.055V17.945A1.074,1.074,0,0,0,1.091,19H22.909A1.074,1.074,0,0,0,24,17.945V1.055A1.074,1.074,0,0,0,22.909,0Zm-12,16.889H2.182V2.111h8.727V5.428a4.193,4.193,0,0,0-3.138,5.109,4.275,4.275,0,0,0,3.138,3.036v3.316ZM9.818,9.5A2.183,2.183,0,1,1,12,11.611,2.147,2.147,0,0,1,9.818,9.5Zm12,7.389H13.091V13.572a4.193,4.193,0,0,0,3.138-5.109,4.275,4.275,0,0,0-3.138-3.036V2.111h8.727Z"
                                fill="#c2c2c2" />
                            </g>
                          </g>
                        </svg>
                        <svg class="relative bottom-4 left-8" v-if="match.status == 1" id="statistics"
                          xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 24 24">
                          <path id="analytics_FILL0_wght400_GRAD0_opsz48"
                            d="M122,240a2.051,2.051,0,0,1-2-2V218a2.051,2.051,0,0,1,2-2h20a2.051,2.051,0,0,1,2,2v20a2.051,2.051,0,0,1-2,2Zm0-2h20V218H122Zm4.472-3.233a.957.957,0,0,0,.711-.288.975.975,0,0,0,.283-.712v-4.833a.965.965,0,0,0-.289-.713.976.976,0,0,0-.717-.287.957.957,0,0,0-.711.287.975.975,0,0,0-.283.713v4.833a.965.965,0,0,0,.289.712A.976.976,0,0,0,126.473,234.767Zm11.067,0a.957.957,0,0,0,.711-.288.975.975,0,0,0,.283-.712v-12a.965.965,0,0,0-.289-.713.976.976,0,0,0-.717-.287.957.957,0,0,0-.711.287.975.975,0,0,0-.283.713v12a.965.965,0,0,0,.289.712A.976.976,0,0,0,137.539,234.767Zm-5.533,0a.957.957,0,0,0,.711-.288.975.975,0,0,0,.283-.712v-1.933a.965.965,0,0,0-.289-.712.976.976,0,0,0-.717-.288.957.957,0,0,0-.711.288.975.975,0,0,0-.283.712v1.933a.965.965,0,0,0,.289.712A.976.976,0,0,0,132.006,234.767Zm.011-6.833a.944.944,0,0,0,.7-.288.975.975,0,0,0,.283-.712V226.9a.9.9,0,0,0-.3-.689,1.018,1.018,0,0,0-.717-.278.944.944,0,0,0-.7.287.975.975,0,0,0-.283.713v.033a.9.9,0,0,0,.3.689A1.018,1.018,0,0,0,132.017,227.933ZM122,238v0Z"
                            transform="translate(-120 -216)" />
                        </svg>
                      </div>
                      <span v-if="match.status == 2 || match.status == 3" class="left-[120px] relative">{{
                        match.away_scores[0] }}</span>
                    </div>
                  </div>
                  <div v-if="match.status == 1">
                    <div class="flex flex-col items-start relative top-[2px] right-2">
                      <template v-if="match.odds && match.odds[0] && match.odds[0].name === 'BET365'">
                        <span class="left-[120px] relative home_odds text-[14px]">{{ match.odds[0].eu[0][2] }}</span>
                        <span class="left-[120px] relative draw_odds text-[14px]">{{ match.odds[0].eu[0][3] }}</span>
                        <span class="left-[120px] relative away_odds text-[14px]">{{ match.odds[0].eu[0][4] }}</span>
                      </template>
                      <template v-else>
                        <span class="left-[130px] relative home_odds text-[14px]">-</span>
                        <span class="left-[130px] relative draw_odds text-[14px]">-</span>
                        <span class="left-[130px] relative away_odds text-[14px]">-</span>
                      </template>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Display a message when no data is available -->
          <div v-else class="no-data-message text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="no-data-icon w-6 h-6 inline-block align-middle mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="no-data-text">No data found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup >
const props = defineProps({
  data: Object,
  date: Object
});

const matchData = ref([]);

watch(() => props.data, (newData) => {
  if (newData) {
    matchData.value = newData;
  } else {
    matchData.value = [];
  }
});


const dateList = new Date();
const currentStatus = ref(2);

watch(() => props.date, (newDate) => {
  if (newDate === dateList) {
    currentStatus.value = 2;
  } else {
    currentStatus.value = 0;
  }
});

const calenderDate = computed(() => {
  const year = props.date.getFullYear();
  const month = String(props.date.getMonth() + 1).padStart(2, '0');
  const day = String(props.date.getDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
});

const showMatches = (statusId) => {
  currentStatus.value = statusId;
};

const filteredMatches = computed(() => {
  if (currentStatus.value === 0) {
    // Return all matches if no status is selected
    return groupedMatches.value;
  }

  const filteredGroups = {};
  // Iterate through each competition UUID
  for (const competitionUUID in groupedMatches.value) {
    const matches = groupedMatches.value[competitionUUID];

    const filteredMatches = matches.filter((match) => {
      if (currentStatus.value === 1) {
        return match.status === 1;
      } else if (currentStatus.value === 2) {
        return match.status === 2;
      } else if (currentStatus.value === 3) {
        return match.status === 3;
      }
    });

    if (filteredMatches.length > 0) {
      filteredGroups[competitionUUID] = filteredMatches;
    }
  }
  return filteredGroups;
});

const groupedMatches = computed(() => {
  const grouped = {};
  // Group matches by competition UUID
  for (const match of matchData.value) {
    const competitionUUID = match.competition.uuid;
    if (!grouped[competitionUUID]) {
      grouped[competitionUUID] = [];
    }
    grouped[competitionUUID].push(match);
  }
  return grouped;
});

const isClicked = ref(false);

const toggleColor = () => {
  isClicked.value = !isClicked.value;
};

const convertTimestamp = (timestamp) => {
  const dt = new Date(timestamp * 1000);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return dt.toLocaleTimeString(undefined, options);
};

const matchMinutes = ref(0);
const currentTimestamp = new Date().getTime() / 1000;
const currentDate = new Date().toLocaleDateString();


function stringMatchPlayedTimeMapping(newStatusId, kickOffTimestamp, startTime) {
  if (newStatusId === 1) {
    return convertTimestamp(startTime);
  }
  if (newStatusId === 2) {
    if (kickOffTimestamp > 0) {
      return Math.floor(matchMinutes.value = (currentTimestamp - kickOffTimestamp) / 60 + 1);
    }
    else {
      return Math.floor(matchMinutes.value = (currentTimestamp - startTime) / 60 + 1);
    }
  } else if (newStatusId === 4) {
    if (kickOffTimestamp > 0) {
      return Math.floor(matchMinutes.value = (currentTimestamp - kickOffTimestamp) / 60 + 45 + 1);
    } else {
      return Math.floor(matchMinutes.value = (currentTimestamp - startTime) / - 15 + 1);
    }
  } else if (newStatusId === 5 || newStatusId === 6 || newStatusId === 7) {
    if (kickOffTimestamp > 0) {
      return Math.floor(matchMinutes.value = (currentTimestamp - kickOffTimestamp) / + 15 + 1);
    } else {
      return Math.floor(matchMinutes.value = (currentTimestamp - startTime) / - 20 + 1);
    }
  } else if (newStatusId === 8) {
    return "End";
  }
  else if (newStatusId === 9) {
    return "Delay";
  }
  else {
    return '';
  }

};

const Scores = ref([]);

const generateScoreScenarios = (homeScores, awayScores) => {
  const result = [];

  if (homeScores && awayScores) {
    if (homeScores[0] === awayScores[0]) {
      result.push({
        title: "Regular Time",
        team1: homeScores[0],
        team2: awayScores[0],
      });
    }
    if (homeScores[1] !== 0 || awayScores[1] !== 0) {
      result.push({
        title: "Half Time",
        team1: homeScores[1],
        team2: awayScores[1],
      });
    }

    if (homeScores[5] !== 0 && awayScores[5] !== 0) {
      result.push({
        title: "Overtime",
        team1: homeScores[5],
        team2: awayScores[5],
      });
    }

    if (homeScores[6] !== 0 || awayScores[6] !== 0) {
      result.push({
        title: "Penalty Shootout",
        team1: homeScores[6],
        team2: awayScores[6],
      });
    }
  }

  return result;
};

matchData.value.forEach((match) => {
  const scenarios = generateScoreScenarios(match.home_scores, match.away_scores);
  Scores.value.push(...scenarios);
});

const getFirstName = (fullName) => {
  // Split the string using a regular expression that matches either a space or a hyphen
  const names = fullName.split(/[\s-]/);
  return names.length >= 1 ? names[0] : '';
};

onMounted(() => {
  convertTimestamp();
  stringMatchPlayedTimeMapping();
  generateScoreScenarios();

});

</script>

<style scoped>
.cls-1 {
  fill: #0084d8;
}

.active {
  background-color: blue;
  color: #fff;
}

.index-r {
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 16px;
}

.right-box .screen-header {
  font-family: Noto Sans, Regular;
  align-items: center;
  position: relative;
  display: flex;
  /* z-index: 2; */
  margin-bottom: 20px;
  font-weight: 500;
}

.right-box .screen-header .s-h-right-box {
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  display: flex;
  font-size: 0;
  min-width: 0;
  flex: 1;
}

.screen-header button {
  border: 1px solid #797E87;
  opacity: 1;
}
</style>
  
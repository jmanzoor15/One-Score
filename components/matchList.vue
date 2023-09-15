<template>
  <div>
    <div class="right-box  p-0 rightBox border-[1px] border-gray-300 rounded-lg ml-2">
      <!-- <span v-for="score in Scores" ><span v-if="score.title === 'Half Time'">{{ score}}</span></span> -->
      <!-- <div class="bannerBox h-24 relative mb-3 cursor-pointer">
                <img src="https://static.aiscore.com/_nuxt/img/banner.dd0e2ed.png" alt="#" class="banner w-full h-24">
                <Icon name="material-symbols:close-rounded" class="close text-xl text-blue-200 absolute top-3 right-4" />
            </div> -->
      <div class="index-r" style="width:576px;margin:0;min-height:500px;">
        <p class="mt-[-3px] font-bold">Matches</p>
        <div class="screen-header mt-2 gap-2" style="z-index:2;">
          <button class="All p-2  px-6  border-[1px] rounded-full bg-transparent" @click="showMatches(0)"
            :class="{ 'active': currentStatus === 0 }">All</button>
          <button class="All p-2  px-6  border-[1px] rounded-full bg-transparent" @click="showMatches(1)"
            :class="{ 'active': currentStatus === 1 }">Upcoming</button>
          <button class="All p-2  px-6  border-[1px] rounded-full bg-transparent" @click="showMatches(2)"
            :class="{ 'active': currentStatus === 2 }">Live</button>
          <button class="All p-2  px-6  border-[1px] rounded-full bg-transparent" @click="showMatches(3)"
            :class="{ 'active': currentStatus === 3 }">Finished</button>

        </div>
        <div class="Match container mx-auto">
          <!-- Check if there is data available -->
          <div v-if="Object.keys(filteredMatches).length > 0">
            <div v-for="(group, competitionUUID) in filteredMatches" :key="competitionUUID"
              class="league-container  p-2 ">
              <div class="league-header flex items-center border-b border-gray-400 last:border-b-0 py-2 ">
                <img :src="group[0].competition.logo" alt="Competition Logo"
                  class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                <h4 class="country-name font-bold text-gray-400" v-if="group[0].country">{{ group[0].country.name }}:
                  &nbsp; </h4>
                <h4 class="league-name  font-bold text-gray-400">{{ group[0].competition.name }}</h4>
              </div>
              <ul class="match-list">
                <li v-for="(match, index) in group" :key="match.uuid"
                  class="match-item border-b border-gray-300 last:border-b-0 flex items-center">
                  <div class="flex items-center">
                    <svg id="like" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24.002 24">
                      <rect id="Rectangle_874" data-name="Rectangle 874" width="24" height="24"
                        transform="translate(0.002)" fill="none" />
                      <g id="Group_15033" data-name="Group 15033" transform="translate(0 0.371)">
                        <path id="star_FILL0_wght400_GRAD0_opsz48"
                          d="M130.568,282.814l5.291-3.168,5.291,3.2-1.415-6,4.65-4.044-6.133-.539-2.393-5.661-2.393,5.627-6.133.539,4.65,4.044Zm5.291-.809-6.268,3.774a.958.958,0,0,1-.573.152,1,1,0,0,1-.539-.185,1.04,1.04,0,0,1-.354-.438,1,1,0,0,1-.051-.607l1.651-7.144-5.526-4.819a.9.9,0,0,1-.32-.522,1.321,1.321,0,0,1,.017-.556.823.823,0,0,1,.3-.455,1.079,1.079,0,0,1,.573-.219l7.312-.64,2.831-6.739a.944.944,0,0,1,.4-.455,1.034,1.034,0,0,1,1.078,0,.944.944,0,0,1,.4.455l2.831,6.739,7.312.64a1.079,1.079,0,0,1,.573.219.823.823,0,0,1,.3.455,1.322,1.322,0,0,1,.017.556.9.9,0,0,1-.32.522l-5.526,4.819,1.651,7.144a1,1,0,0,1-.051.607,1.04,1.04,0,0,1-.354.438,1,1,0,0,1-.539.185.958.958,0,0,1-.573-.152ZM135.858,275.064Z"
                          transform="translate(-123.857 -262.838)" />
                      </g>
                    </svg>
                  </div>
                  <div class=" ml-3 flex flex-col items-center ⬤  w-[70px]">
                    <span class="text-red-400 text-[10px] relative right-6">&nbsp;{{ match.status_name }}</span>
                    <span class="text-red-400 text-[10px] relative right-6">
                      &nbsp;{{ stringMatchPlayedTimeMapping(match.status_id, match.kick_off_timestamp,
                        match.match_time) }}</span>
                  </div>
                  <div class="py-2  flex flex-col ml-6">
                    <div class="flex items-center  mb-1">
                      <img :src="match.home_team.logo" alt="Home Team Logo"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                      <div class="h-8 w-60 flex items-center">
                        <span class=" relative text-[14px]">{{ match.home_team.name }} {{ match.status_name }}</span>
                        <span class=" relative text-[8px] "
                          v-if="match.home_position === match.home_position ? match.home_position : ''"> &nbsp;[{{
                            match.home_position }}]</span>
                      </div>
                      <div class="w-[12px] h-[11px]">
                        <svg id="Livestreaming" xmlns="http://www.w3.org/2000/svg" width="12" height="11"
                          viewBox="0 0 24 24">
                          <rect id="Rectangle_875" data-name="Rectangle 875" width="24" height="24" fill="none" />
                          <path id="Icon_material-live-tv" data-name="Icon material-live-tv"
                            d="M23.318,7.4h-8.28l3.589-3.619L17.864,3,13.5,7.4,9.136,3l-.775.781,3.6,3.619H3.682A2.19,2.19,0,0,0,1.5,9.6V22.8A2.2,2.2,0,0,0,3.682,25H23.318A2.2,2.2,0,0,0,25.5,22.8V9.6A2.19,2.19,0,0,0,23.318,7.4Zm0,15.4H3.682V9.6H23.318Zm-13.091-11v8.8l7.636-4.4Z"
                            transform="translate(-1.5 -2)" fill="#c2c2c2" />
                        </svg>

                      </div>
                      <!-- <span >{{generateScoreScenarios(match.home_scores, match.away_scores) }}</span> -->
                      <span class="left-[110px] relative">{{ match.home_scores[0] }}</span>
                    </div>


                    <div class="flex items-center">
                      <img :src="match.away_team.logo" alt="Away Team Logo"
                        class="league-logo w-[20px] h-[20px] object-cover rounded-full mr-2">
                      <div class="h-8 w-60  flex items-center">
                        <span class=" relative text-[14px]">{{ match.away_team.name }}</span>
                        <span class=" relative text-[8px] "
                          v-if="match.home_position === match.home_position ? match.home_position : ''">&nbsp;[{{
                            match.away_position }}]</span>
                      </div>
                      <!-- <span class="hidden">{{generateScoreScenarios(match.home_scores, match.away_scores) }}</span> -->
                      <div class="w-[12px] h-[11px]">
                        <svg id="Live" xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 24 24">
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

                      </div>
                      <span class="left-[110px] relative">{{ match.away_scores[0] }}</span>
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
  data: Object
});

const matchData = ref([]);
matchData.value = props.data;

const currentStatus = ref(2); // Default to live matches

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

    // Filter matches within each competition based on the selected status
    const filteredMatches = matches.filter((match) => {
      if (currentStatus.value === 1) {
        // Filter upcoming matches (status 1)
        return match.status === 1;
      } else if (currentStatus.value === 2) {
        // Filter live matches (status 2)
        return match.status === 2;
      } else if (currentStatus.value === 3) {
        // Filter finished matches with status 3
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


function stringMatchPlayedTimeMapping(newStatusId, kickOffTimestamp, startTime) {
  if (newStatusId === 2) {
    if (kickOffTimestamp > 0) {
      return Math.floor(matchMinutes.value = (currentTimestamp - kickOffTimestamp) / 60 + 1);
    }
    else {
      return Math.floor(matchMinutes.value = (currentTimestamp - startTime) / 60 + 1);
    }
  } else if (newStatusId === 3) {
    return "HT";
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

// matchData.value.forEach((match) => {
//   const scenarios = generateScoreScenarios(match.home_scores, match.away_scores);
//   Scores.value.push(...scenarios);
// });

// Now, Scores should contain an array of different score scenarios
// console.log(Scores.value);

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
.active {
  background-color: blue;
  color: #fff;
}

.index-r {
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 16px;
}

.right-box .screen-header {
  font-family: Rubik-Medium, Rubik;
  align-items: center;
  position: relative;
  display: flex;
  z-index: 2;
  margin-bottom: 20px;
}

.right-box .screen-header .s-h-right-box {
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  display: flex;
  font-size: 0;
  min-width: 0;
  flex: 1;
}</style>
  
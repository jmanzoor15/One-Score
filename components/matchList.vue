<template>
    <div>
        <div class="right-box  p-0 rightBox" ><span v-for="score in Scores" >{{ score }}<span v-if="score.title === 'Overtime'">{{ score}}</span></span>
            <div class="bannerBox h-24 relative mb-3 cursor-pointer">
                <img src="https://static.aiscore.com/_nuxt/img/banner.dd0e2ed.png" alt="#" class="banner w-full h-24">
                <Icon name="material-symbols:close-rounded" class="close text-xl text-blue-200 absolute top-3 right-4" />
            </div>
            <div class="index-r" style="width:992px;margin:0;min-height:500px;">
                <div class="screen-header" style="z-index:2;">
                    <div class="changTabBox"><span class="changeItem bh notActiveTab">
                            All
                        </span>
                        <span class="changeItem bh ml-12 activeLiveTab">
                            <!-- <span class="liveContentBox">
                                <Icon name="fluent:live-24-filled" class="iconfont liveImg activeLive" />
                                Live
                                <span class="total">(6)</span>
                            </span> -->
                        </span>
                        <span class="changeItem bh ml-12 notActiveTab">
                            Finished
                        </span> <span class="changeItem bh ml-12 notActiveTab">
                            Scheduled
                        </span>
                    </div>

                    <div class="s-h-right-box">
                        <div style="display: none;"></div>
                        <div class="sortByBox">
                            <label class="el-checkbox">
                                <!-- <span class="el-checkbox__input">
                                    <span class="el-checkbox__inner"></span>
                                    <Icon name="material-symbols:check-box-outline-blank" />
                                </span> -->
                            </label>
                            <span class="sortByText bh">Sort by time</span>
                        </div>
                        <div class="oddListBox">
                            <span class="bh">Odds markets</span>
                            <i class="iconfont icon-xiala pullIcon"></i>
                        </div>
                        <div class="modal modal-2" style="display:none;left:-41px;top:35px;">
                            <span data-v-75f7e865="">
                                <div role="tooltip" id="el-popover-8672" aria-hidden="false"
                                    class="el-popover el-popper first-login" style="width:178px;">
                                    <div x-arrow="" class="popper-arrow" style="left:85.5px;"></div>
                                    <div class="o-h">
                                        <i class="el-icon-close" style="float:right;"></i>
                                    </div>
                                    <p class="color-w pt-15 pb-24" style="word-break:break-word;">Sort matches by league or
                                        by time</p>
                                    <div class="flex justify-end align-center" style="text-align:right;margin:0;">
                                        <span class="fs-12 mr-xs color-w">2 of 2</span>
                                        <div class="btn btn-w color-p">Done</div>
                                    </div>
                                </div>
                                <span class="el-popover__reference-wrapper"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="match-box" style="min-height: 789px;">
                    <div class="vue-recycle-scroller scroller ready page-mode direction-vertical relative">
                        <div class="vue-recycle-scroller item-wrapper">
                            <div class="vue-recycle-scroller__item-view">
                                <div class="no-data">
                                    <div class="flex-1">
                                        <img src="https://static.aiscore.com/_nuxt/img/nodata.4f98076.png">
                                        <div data-v-0af7a9f0="" class="text">There are no live games at this moment
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="vue-recycle-scroller__item-view">
                                <div class="status-tip-page">
                                    <i class="iconfont icon-shaozi"></i>
                                    <span class="text"> Today's Upcoming Matches</span>
                                </div>
                            </div>
                            <div class="vue-recycle-scroller__item-view" style="transform:">
                                <div  class="comp-container" v-for="(group, competitionUUID) in groupedMatches" :key="competitionUUID">
                                    <div  class="title">
                                        <!-- <Icon  class="collectImg iconfont icon-weishoucang" name="ic:round-star-outline" style="visibility: visible;" :class="{ 'active': isClicked }" @click="toggleColor" /> -->
                                        <img :src="group[0].competition.logo" class="country-logo squareLogo"  style="background-size: contain;" />
                                        <span class="country-name minitext" v-if="group[0].country">{{ group[0].country.name }}:</span>
                                        <!-- <span  class="country-name minitext" v-if="group[0].country.name">{{ group[0].country.name }}</span> -->
                                        <a  href="/tournament-albanian-super-league/5wv78xi1rfjkrjn"
                                            target="_blank" class="compe-name minitext">{{ group[0].competition.name }}</a>
                                        <span  class="lineMargin">-</span>
                                        <span >{{ group[0].round.round_num }}</span>
                                        <div  class="flex-1">
                                            <!-- <span  class="watchNum" style="margin-right: 7px;">
                                                <i  class="iconfont icon-renshu"></i>
                                                <span >97</span>
                                            </span> -->
                                        </div>
                                        <ul  class="odds" >
                                            <li class="list-item align-parent" ><span >1</span></li>
                                            <li ><span >2</span></li>
                                        </ul>
                                    </div>
                                    <div  class="comp-list">
                                        <a v-for="(match, index) in group" :key="match.uuid"
                                            href="/match-erzeni-vllaznia-shkoder/34kgmizvmw2feko/h2h pending for now" target="_blank"
                                            itemscope="itemscope" itemtype="http://schema.org/SportsEvent"
                                            class="match-container">
                                            <span  class="left-box">
                                                <span  class="v-st-box">
                                                    <!-- <Icon class="collectImg iconfont icon-weishoucang" name="ic:round-star-outline" style="visibility: visible;" :class="{ 'active': isClicked && index !== group.length - 1 }" @click="toggleColor" /> -->
                                                    <span  class="time minitext"> {{convertTimestamp( match.match_time)}} </span>
                                                    <span data-v-f68f0cd8="" class="status minitext">{{stringMatchPlayedTimeMapping(match.status_id, match.kick_off_timestamp, match.match_time) }}  </span>
                                                </span>
                                                <span data-v-f68f0cd8="" class="v-tt-box">
                                                    <span data-v-f68f0cd8="" class="team home">
                                                        <span data-v-f68f0cd8="" class="flex-1 teamBox teamHomeBox">
                                                            <span data-v-f68f0cd8="" class="nameBox"><span
                                                                    data-v-f68f0cd8="" itemprop="homeTeam"
                                                                    class="name minitext maxWidth160">{{ match.home_team.name }}</span>
                                                            </span>
                                                            <span data-v-f68f0cd8="" class="teamLogoBox teamLogoHomeBox">
                                                                <img data-v-f68f0cd8=""
                                                                    :src="match.home_team.logo"
                                                                    alt="https://img0.aiscore.com/football/team/da0b566359c3862f20b5072c3d49bd0f.jpg!w80"
                                                                    itemprop="logo">
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span class="scores scoresBox text-transparent" >{{ Scores.team1 }}-{{ Scores.team2 }}</span>

                                                    <!-- <span data-v-f68f0cd8="" class="scores on"  v-for="(score, index) in Scores" :key="index">
                                                        <span data-v-f68f0cd8="" class="score-home minitext">  {{score.team1  }}</span>
                                                         <span data-v-f68f0cd8="" class="or">-</span>
                                                          <span data-v-f68f0cd8="" class="score-away minitext"> {{ score.team2 }}</span>
                                                         </span> -->


                                                    <span data-v-f68f0cd8="" class="team away">
                                                        <span data-v-f68f0cd8="" class="flex-1 teamBox teamAwayBox">
                                                            <span data-v-f68f0cd8="" class="teamLogoBox teamLogoAwayBox">
                                                                <img data-v-f68f0cd8=""
                                                                    :src="match.away_team.logo"
                                                                    alt="https://img0.aiscore.com/football/team/cafa9c1ed9b974a8306fd1a5b1f4ae16.png!w80"
                                                                    itemprop="logo">
                                                            </span>
                                                            <span data-v-f68f0cd8="" class="nameBox">
                                                                <span data-v-f68f0cd8="" itemprop="awayTeam"
                                                                    class="name minitext maxWidth160">{{ match.away_team.name }}</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <meta data-v-f68f0cd8="" itemprop="name"
                                                        content="Erzeni vs Vllaznia Shkoder">
                                                    <meta data-v-f68f0cd8="" itemprop="url"
                                                        content="https://www.aiscore.com/match-erzeni-vllaznia-shkoder/34kgmizvmw2feko/h2h">
                                                    <meta data-v-f68f0cd8="" itemprop="startDate"
                                                        content="2023-09-01T18:00:00">
                                                    <meta data-v-f68f0cd8="" itemprop="eventStatus"
                                                        content="https://schema.org/EventScheduled">
                                                    <meta data-v-f68f0cd8="" itemprop="description"
                                                        content="2023-09-01T18:00:00, Erzeni vs Vllaznia Shkoder in the Super league">
                                                    <meta data-v-f68f0cd8="" itemprop="location" content="Super league">
                                                    <meta data-v-f68f0cd8="" itemprop="Organization" content="Super league">
                                                </span>
                                                <span data-v-f68f0cd8="" class="v-ft-box">
                                                    <span data-v-f68f0cd8="" class="half-over"></span>
                                                    <span data-v-f68f0cd8="" class="corner cornerBox"></span>
                                                    <span data-v-f68f0cd8="" class="icon-setting disable">
                                                        <i data-v-f68f0cd8=""
                                                            class="iconfont icon-donghuazhibo videoAn"></i>
                                                    </span>
                                                </span>
                                                <span data-v-f68f0cd8="" class="min-scores">
                                                    <span data-v-f68f0cd8="" class="score-home minitext"></span>
                                                    <span data-v-f68f0cd8="" class="score-away minitext"></span>
                                                </span>
                                            </span>
                                            <ul data-v-f68f0cd8="" class="odds oddhoverGreen newOddsBox">
                                                <li data-v-f68f0cd8="" class="f_notOdd">-</li>
                                                <li data-v-f68f0cd8="" class="f_notOdd">-</li>
                                            </ul>
                                        </a>



                                        <a data-v-f68f0cd8=""  data-id="63kv9ixz029hx7e"
                                            href="/match-skenderbeu-korca-ks-dinamo-tirana/63kv9ixz029hx7e/h2h"
                                            target="_blank" itemscope="itemscope" itemtype="http://schema.org/SportsEvent"
                                            class="match-container">
                                            <span data-v-f68f0cd8="" class="left-box"><span data-v-f68f0cd8=""
                                                    class="v-st-box">
                                                    <i data-v-f68f0cd8="" class="collectImg iconfont icon-weishoucang"
                                                        style="visibility: visible;"></i>
                                                    <span data-v-f68f0cd8="" class="time minitext"> 6:00 PM </span>
                                                    <span data-v-f68f0cd8="" class="status minitext">-</span>
                                                </span>
                                                <span data-v-f68f0cd8="" class="v-tt-box">
                                                    <span data-v-f68f0cd8="" class="team home">
                                                        <span data-v-f68f0cd8="" class="flex-1 teamBox teamHomeBox">
                                                            <span data-v-f68f0cd8="" class="nameBox">
                                                                <span data-v-f68f0cd8="" itemprop="homeTeam"
                                                                    class="name minitext maxWidth160"> Skenderbeu Korca
                                                                </span>
                                                            </span>
                                                            <span data-v-f68f0cd8="" class="teamLogoBox teamLogoHomeBox">
                                                                <img data-v-f68f0cd8=""
                                                                    src="https://img0.aiscore.com/football/team/75ce6c855856163768afe7e2d6252469.png!w80"
                                                                    alt="https://img0.aiscore.com/football/team/75ce6c855856163768afe7e2d6252469.png!w80"
                                                                    itemprop="logo">
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span data-v-f68f0cd8="" class="scores scoresBox">V</span>
                                                    <span data-v-f68f0cd8="" class="team away">
                                                        <span data-v-f68f0cd8="" class="flex-1 teamBox teamAwayBox">
                                                            <span data-v-f68f0cd8="" class="teamLogoBox teamLogoAwayBox">
                                                                <img data-v-f68f0cd8=""
                                                                    src="https://img0.aiscore.com/football/team/a0a0e2223545001959dbfd7bb178e717.png!w80"
                                                                    alt="https://img0.aiscore.com/football/team/a0a0e2223545001959dbfd7bb178e717.png!w80"
                                                                    itemprop="logo">
                                                            </span>
                                                            <span data-v-f68f0cd8="" class="nameBox">
                                                                <span data-v-f68f0cd8="" itemprop="awayTeam"
                                                                    class="name minitext maxWidth160">KS Dinamo
                                                                    Tirana</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <meta data-v-f68f0cd8="" itemprop="name"
                                                        content="Skenderbeu Korca vs KS Dinamo Tirana">
                                                    <meta data-v-f68f0cd8="" itemprop="url"
                                                        content="https://www.aiscore.com/match-skenderbeu-korca-ks-dinamo-tirana/63kv9ixz029hx7e/h2h">
                                                    <meta data-v-f68f0cd8="" itemprop="startDate"
                                                        content="2023-09-01T18:00:00">
                                                    <meta data-v-f68f0cd8="" itemprop="eventStatus"
                                                        content="https://schema.org/EventScheduled">
                                                    <meta data-v-f68f0cd8="" itemprop="description"
                                                        content="2023-09-01T18:00:00, Skenderbeu Korca vs KS Dinamo Tirana in the Super league">
                                                    <meta data-v-f68f0cd8="" itemprop="location" content="Super league">
                                                    <meta data-v-f68f0cd8="" itemprop="Organization" content="Super league">
                                                </span>
                                                <span data-v-f68f0cd8="" class="v-ft-box">
                                                    <span data-v-f68f0cd8="" class="half-over"></span>
                                                    <span data-v-f68f0cd8="" class="corner cornerBox"></span>
                                                    <span data-v-f68f0cd8="" class="icon-setting disable">
                                                        <i data-v-f68f0cd8=""
                                                            class="iconfont icon-donghuazhibo videoAn"></i>
                                                    </span>
                                                </span>
                                                <span data-v-f68f0cd8="" class="min-scores">
                                                    <span data-v-f68f0cd8="" class="score-home minitext"></span>
                                                    <span data-v-f68f0cd8="" class="score-away minitext"></span>
                                                </span>
                                            </span>
                                            <ul data-v-f68f0cd8="" class="odds oddhoverGreen newOddsBox">
                                                <li data-v-f68f0cd8="" class="f_notOdd">-</li>
                                                <li data-v-f68f0cd8="" class="f_notOdd">-</li>
                                            </ul>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div v-for="(group, competitionUUID) in groupedMatches" :key="competitionUUID">
                                <span class="text-green-500">


                                    <img :src="group[0].competition.logo" alt="Competition Logo" class="w-[18px] h-[12px]">
                                    {{ group[0].competition.name }}
                                </span>
                               
                                <!-- <h2 class="text-green-500">{{ group[0].competition.name }}</h2> -->
                                <ul>
                                    <li v-for="match in group" :key="match.uuid">
                                        {{ match.home_team.name }} vs {{ match.away_team.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>

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
      return Math.floor( matchMinutes.value = (currentTimestamp - kickOffTimestamp)  / 60 + 1) ; 
    } 
    else {
        return Math.floor( matchMinutes.value = (currentTimestamp - startTime)  / 60 + 1) ; 
     }
    }  else if (newStatusId === 3 ) {
    return "HT";
  }  else if (newStatusId === 4) {
    if (kickOffTimestamp > 0) {
        return Math.floor( matchMinutes.value = (currentTimestamp - kickOffTimestamp)  / 60 + 45 + 1) ; 
    } else {
        return Math.floor( matchMinutes.value = (currentTimestamp - startTime)  / - 15 + 1);
    }
  } else if (newStatusId === 5 || newStatusId === 6 || newStatusId === 7) {
    if (kickOffTimestamp > 0) {
        return Math.floor( matchMinutes.value = (currentTimestamp - kickOffTimestamp)  / + 15 + 1);
    } else {
        return Math.floor( matchMinutes.value = (currentTimestamp - startTime)  / - 20 + 1);
    }
  } else if (newStatusId === 8 ) {
    return "End";
  }  
   else if (newStatusId === 9 ) {
    return "Delay";
  }  
   else {
    return '';
  }

};

const Scores = ref([]);


// const generateScoreScenarios = (homeScores, awayScores) => {
    const generateScoreScenarios = () => {

        const homeScores = [3, 1, 0, 2, 5, 2, 3];
     const awayScores = [2, 0, 1, 4, 4, 2, 2];
  const result = [];

  if (homeScores[0] === awayScores[0]) {
    result.push({
      title: "Regular Time",
      team1: homeScores[0],
      team2: awayScores[0],
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

  // Add more scenarios as needed
     Scores.value = result
  return  Scores;
};

// matchData.value.forEach((match) => {
//   const scenarios = generateScoreScenarios(match.home_scores, match.away_scores);
//   Scores.value.push(...scenarios);
//   console.log("home",match.home_scores)
//   console.log("away",match.away_scores)
// });
// console.log(Scores.value);
// Now, Scores should contain an array of different score scenarios
console.log(Scores);








onMounted(() => {
 convertTimestamp();
 stringMatchPlayedTimeMapping();
 generateScoreScenarios();
});








</script>






<style scoped>
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

.changTabBox {
    height: 36px;
    font-size: 0;
}

.changTabBox .changeItem {
    display: inline-block;
    min-width: 60px;
    max-width: 150px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-size: 13px;
    background-color: #f1f1f1;
    color: #333;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 16px;
    font-family: Rubik-Medium, Rubik;
}

.bh {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.changTabBox .changeItem .liveContentBox {
    position: relative;
    bottom: 2px;
}

.changTabBox .changeItem .activeLive {
    color: #fff;
}

.changTabBox .changeItem .liveImg {
    font-size: 17px;
    position: relative;
    right: 1px;
}

.iconfont {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.changTabBox .activeLiveTab {
    background-color: #c72a1d;
    color: #fff;
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

.sortByBox {
    max-width: 135px;
}

.oddListBox[data-v-0af7a9f0],
.sortByBox {
    display: inline-flex;
    align-items: center;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #eee;
    box-sizing: border-box;
    font-size: 13px;
    cursor: pointer;
    margin-left: 14px;
    padding-right: 16px;
}

.oddListBox .el-checkbox .sortByBox .el-checkbox {
    position: relative;
    top: 1px;
    margin: 0 8px 0 16px;
}

.el-checkbox,
.el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}

.oddListBox .sortByText .sortByBox .sortByText {
    display: inline-block;
    max-width: 80px;
    font-family: Rubik-Regular, Rubik;
    position: relative;
    bottom: 1px;
}

.oddListBox span {
    display: inline-block;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-family: Rubik-Regular, Rubik;
}

.oddListBox .pullIcon {
    color: #999;
    font-size: 12px;
    position: absolute;
    right: 6px;
    top: 11px;
}

.iconfont {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.modal {
    font-family: MicrosoftYaHei, MicrosoftYaHei-Bold, PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial, Microsoft YaHei, STHeitiSC-Light, simsun, WenQuanYi Zen Hei, WenQuanYi Micro Hei, "sans-serif";
    position: absolute;
    top: 50px;
}

.inner-temp .data-box {
    padding-top: 20px;
    font-size: 0;
}

.right-box .match-box {
    position: relative;
    z-index: 2;
}

.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper {
    width: 100%;
}

.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view {
    width: 100%;
}

.vue-recycle-scroller.ready .vue-recycle-scroller__item-view {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
}

.right-box .match-box .no-data {
    background-color: #fff;
    align-items: center;
    text-align: center;
    min-height: 240px;
    display: flex;
}

.right-box .match-box .no-data img {
    width: 140px;
}

.right-box .match-box .no-data .text {
    margin: 20px 0 0;
    font-size: 12px;
    display: block;
    color: #999;
}

.right-box .match-box .status-tip-page {
    background-color: #fff;
    font-size: 16px;
    color: #999;
    box-sizing: border-box;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    margin-top: 1px;
}

.comp-container {
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
}

.comp-container .title {
    background-color: #f1f1f1;
    align-items: center;
    padding: 0 0 0 16px;
    font-size: 13px;
    display: flex;
    height: 40px;
    border-radius: 4px;
}

.comp-container .title .icon-weishoucang {
    color: #c8cdcd;
}

.comp-container .title .collectImg {
    font-size: 20px;
    cursor: pointer;
}

.comp-container .title .country-logo {
    margin-left: 16px;
}
.comp-container .title .squareLogo{
    width: 20px;
    height: 12px;
    -o-object-fit: contain;
    object-fit: contain;
}
.icon.active {
  color: yellow; 
}

.comp-container .title .country-name {
    font-family: Rubik-Medium, Rubik;
    margin-left: 8px;
    font-weight: 500;
    color: #999;
}

.comp-container .title .compe-name {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    font-family: Rubik-Medium, Rubik;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 5px;
    font-weight: 500;
    overflow: hidden;
    min-width: 0;
    color: #333;
}

.comp-container .lineMargin {
    margin: 0 4px;
}

.comp-container .title .watchNum {
    display: flex;
    align-items: center;
    float: right;
    font-size: 12px;
    color: #999;
    font-family: Roboto-Regular;
}


.comp-container .title .odds {
    text-align: center;
    display: flex;
    width: 170px;
}
.comp-container .title .odds li {
    flex: 1;
}
.comp-container .title .odds li span {
    white-space: nowrap;
    color: #999;
    display: block;
    font-size: 13px;
}
.match-container {
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;
}

.match-container:last-child {
    box-shadow: none;
}

.match-container .left-box {
    display: flex;
    flex: 1;
}

.match-container .left-box .v-st-box {
    align-items: center;
    display: flex;
}

.match-container .left-box .icon-weishoucang {
    color: #c8cdcd;
}

.match-container .left-box .collectImg {
    font-size: 20px;
    cursor: pointer;
    margin-left: 16px;
}

.match-container .left-box .v-st-box .time {
    margin-left: 16px;
    font-weight: 400;
    font-size: 13px;
    color: #999;
    width: 64px;
}

.match-container .left-box .v-st-box .status {
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    width: 80px;
    color: #999;
    margin-left: 4px;
}

.match-container .left-box .v-tt-box {
    display: flex;
    flex: 1;
}

.match-container .left-box .v-tt-box .team.home {
    text-align: right;
}

.match-container .left-box .v-tt-box .team {
    align-items: center;
    display: flex;
    height: 100%;
    min-width: 0;
    flex: 1;
}

.teamHomeBox {
    justify-content: flex-end;
}

.teamBox {
    display: flex;
    align-items: center;
}

.nameBox {
    display: inline-block;
}

.match-container .left-box .v-tt-box .team.home {
    text-align: right;
}

.match-container .left-box .v-tt-box .team .name {
    font-family: Rubik-Regular, Rubik;
    font-weight: 400;
    font-size: 13px;
    min-width: 0;
    color: #333;
}

.nameBox .maxWidth160 {
    max-width: 160px;
}

.nameBox .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.teamBox .teamLogoHomeBox {
    margin-left: 8px;
}

.teamBox .teamLogoBox {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0;
    overflow: hidden;
}

.teamBox .teamLogoBox img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}

.match-container .left-box .v-tt-box .scores {
    font-family: Roboto-Regular, MicrosoftYaHei, MicrosoftYaHei-Bold, PingFang SC;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    height: 100%;
    width: 50px;
    color: #333;
    margin: 0 3px;
}

.match-container .left-box .v-tt-box .scoresBox {
    align-items: center;
    justify-content: center;
}

.match-container .left-box .v-tt-box .team.away {
    text-align: left;
}

.match-container .left-box .v-tt-box .team {
    align-items: center;
    display: flex;
    height: 100%;
    min-width: 0;
    flex: 1;
}

.teamAwayBox {
    justify-content: flex-start;
}

.teamBox .teamLogoAwayBox {
    margin-right: 8px;
}

.teamBox .teamLogoBox img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}

.teamBox .teamLogoBox {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0;
    overflow: hidden;
}

.teamBox {
    display: flex;
    align-items: center;
}

.match-container {
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;
}

.match-container {
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;
}


.match-container .left-box .v-tt-box .team .name {
    font-family: Rubik-Regular, Rubik;
    font-weight: 400;
    font-size: 13px;
    min-width: 0;
    color: #333;
}

.nameBox .maxWidth160 {
    max-width: 160px;
}

.nameBox .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

}

.match-container .left-box .v-ft-box{
    align-items: center;
    display: flex;
}

.match-container .left-box .v-ft-box .corner.half-over,
.match-container .left-box .v-ft-box .half-over.half-over {
    font-size: 13px;
    width: 50px;
}

.match-container .left-box .v-ft-box .corner,
.match-container .left-box .v-ft-box .half-over {
    white-space: nowrap;
    margin-left: 8px;
    font-weight: 400;
    color: #999;
}

.match-container .left-box .v-ft-box .corner.corner,
.match-container .left-box .v-ft-box .half-over.corner {
    width: 60px;
}

.match-container .left-box .v-ft-box .cornerBox {
    margin-left: 0;
}

.match-container .left-box .v-ft-box .corner,
.match-container .left-box .v-ft-box .half-over {
    white-space: nowrap;
    margin-left: 8px;
    font-weight: 400;
    color: #999;
}

.match-container .left-box .v-ft-box .icon-setting {
    width: 26px;
    margin-right: 4px;
}

.match-container .left-box .v-ft-box .icon-setting .iconfont {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
}

.icon-donghuazhibo {
    color: #ffa830;
}

.match-container{
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;
}

.match-container .min-scores {
    display: none;
}

.match-container .min-scores .score-away,
.match-container .min-scores .score-home {
    justify-content: center;
    align-items: center;
    line-height: 20px;
    min-width: 20px;
    display: flex;
    flex: 1;
}

.match-container .min-scores .score-away,
.match-container .min-scores .score-home {
    justify-content: center;
    align-items: center;
    line-height: 20px;
    min-width: 20px;
    display: flex;
    flex: 1;
}

.match-container .newOddsBox {
    position: relative;
}

.match-container .odds {
    font-family: Roboto-Regular;
    background-color: #fbfbfb;
    align-items: center;
    text-align: center;
    margin-bottom: 1px;
    display: flex;
    width: 170px;
    border: 0 solid #eee;
    border-right: none;
    border-left: none;
}

.match-container .newOddsBox .f_notOdd {
    font-size: 16px;
}

.match-container .odds li{
    color: #999;
    flex: 1;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.match-container {
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;

}

.match-container:last-child {
    box-shadow: none;
}

.match-container .left-box {
    display: flex;
    flex: 1;
}

.match-container {
    box-shadow: inset 0 -1px 0 0 #eee;
    background-color: #fff;
    display: flex;
    font-size: 0;
    height: 48px;
}
</style>
  
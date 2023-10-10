export default defineEventHandler(async (event) => {
    const body =  getQuery(event)
   
    const { data } = await $fetch(
      `https://livedata.sportsfeed.pro/competitionlist?sport_id=2&lang=${body.lang}&auth=${body.authToken}`
    );
  
    return data; 

  });
  
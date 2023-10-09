export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().token;
    const body =  getQuery(event)
   

    const { data } = await $fetch(
      `https://livedata.sportsfeed.pro/competitionlist?sport_id=2&lang=${body.lang}&auth=${body.authToken}`
    );
  
    return data; 

  });
  
export default defineEventHandler(async (event) => {
  const Url = useRuntimeConfig().API_BASE_URL;
  const token = useRuntimeConfig().token;
  const body =  getQuery(event)
  
   console.log('body',body)
  const  {data}  = await $fetch(
    `https://livedata.sportsfeed.pro/competitionlist?sport_id=1&lang=${body.lang}&auth=${body.authToken}`
  );

  return data; 
});

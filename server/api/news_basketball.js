export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().token;
    const body =  getQuery(event)
    // ${body.sportsBaseUrl}
     console.log('body',body)
    const  data  = await $fetch(
      `https://scrnews77.online/getnews?sport_id=2&lang=${body.lang}&auth=${body.authToken}&item_count=${body.item_count}`
    );
   
    return data; 
  });
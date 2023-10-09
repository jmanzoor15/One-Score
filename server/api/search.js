export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().token;
  
    const query = getQuery(event)
    // console.log('saerch',query)
  
    const { data } = await $fetch(
      `${Url}/search?auth=${token}&sport_id=1&keyword=Real M&lang=${query.lang}` );
   
    return data;
  });
  
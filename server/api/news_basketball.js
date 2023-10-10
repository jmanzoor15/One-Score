export default defineEventHandler(async (event) => {
    const body =  getQuery(event)
    const  data  = await $fetch(
      `https://scrnews77.online/getnews?sport_id=2&lang=${body.lang}&auth=${body.authToken}&item_count=${body.item_count}`
    );
   
    return data; 
  });
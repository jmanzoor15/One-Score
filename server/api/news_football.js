export default defineEventHandler(async (event) => {
    const body =  getQuery(event)
   
    const  data  = await $fetch(
      `https://scrnews77.online/getnews?sport_id=1&lang=${body.lang}&auth=${body.authToken}&item_count=${body.item_count}`
    );
  //  console.log(data);
    return data; 
  });
  
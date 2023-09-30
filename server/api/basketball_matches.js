export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().token;

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;

    const query = getQuery(event)
    const queryValue = Object.keys(query)[0];
    const isLive = formattedDate === queryValue;
    const liveValue = isLive ? 'true' : 'false';
    
    const { data } = await $fetch(`${Url}/matchlist?auth=${token}&date=${queryValue}&live=${liveValue}&sport_id=2&utc_offset=4&lang=${query.lang}&country=vi `);

   return data
  
});
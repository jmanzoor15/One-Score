export default defineEventHandler(async () => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().token;

    var currentDate = new Date();
    var year = currentDate.getFullYear(); 
    var month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    var day = String(currentDate.getDate()).padStart(2, '0'); 
    
    var formattedDate = year + '-' + month + '-' + day;
 
   
    const {data} = await $fetch(`${Url}/matchlist?auth=${token}&date=${formattedDate}&sport_id=1&live=true&utc_offset=4&lang=en&country=vi&id=1 `);
   
    return data
});
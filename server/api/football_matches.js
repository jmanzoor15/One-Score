import moment from 'moment'
export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().public.token;
    const formattedDate = moment().format('YYYY-MM-DD')
    const query = getQuery(event)
    const isLive = formattedDate === query.date;
    const liveValue = isLive ? 'true' : 'false';
        console.log(liveValue)
    const  {data}   = await $fetch(`https://livedata.sportsfeed.pro/matchlist?auth=${query.authToken}&date=${query.date}&live=${liveValue}&sport_id=1&utc_offset=4&lang=${query.lang}`);
 
     return data
});
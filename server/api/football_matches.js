import moment from 'moment'
export default defineEventHandler(async (event) => {
    const Url = useRuntimeConfig().API_BASE_URL;
    const token = useRuntimeConfig().public.token;
    const formattedDate = moment().format('YYYY-MM-DD')
    const query = getQuery(event)
    const queryValue = Object.keys(query)[0];
    console.log(query.sportsBaseUrl)
    const isLive = formattedDate === queryValue;
    const liveValue = isLive ? 'true' : 'false';
    console.log(query.lang)
    // (`${query.sportsBaseUrl}
    const  {data}   = await $fetch(`https://livedata.sportsfeed.pro/matchlist?auth=${query.authToken}&date=${queryValue}&live=${liveValue}&sport_id=1&utc_offset=4&lang=${query.lang}`);
    return data
});
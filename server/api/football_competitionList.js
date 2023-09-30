export default defineEventHandler(async (event) => {
  const Url = useRuntimeConfig().API_BASE_URL;
  const token = useRuntimeConfig().token;
  const body =  getQuery(event)

  const { data } = await $fetch(
    `${Url}/competitionlist?sport_id=${body.sport_id}&lang=${body.lang}&auth=${token}`
  );

  return data; 
});

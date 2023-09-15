export default defineEventHandler(async () => {
  const Url = useRuntimeConfig().API_BASE_URL;
  const token = useRuntimeConfig().token;

  // var currentDate = new Date();
  // var year = currentDate.getFullYear();
  // var month = String(currentDate.getMonth() + 1).padStart(2, '0');
  // var day = String(currentDate.getDate()).padStart(2, '0');

  // var formattedDate = year + '-' + month + '-' + day;

  const { data } = await $fetch(
    `https://scrnews77.online/getnews?lang=en&auth=${token}`
  );

  return data;
});

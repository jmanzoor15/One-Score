export default () => {
  const Url = useRuntimeConfig().public.API_BASE_URL;
  const token = useRuntimeConfig().public.token;

  const get = async (endpoint) => {
    return useFetch(`https://scrnews77.online/getnews${endpoint}`);
  };

  const getPostsFootball = async (sport_id = 1, lang = "en") => {
    let query = `?lang=${lang}&sport_id=${sport_id}&auth=${token}`;
    return get(query);
  };

  const getPostFootball = async (slug) => {
    return get(`${slug}`);
  };

  return {
    get,
    getPostsFootball,
    getPostFootball,
  };
};

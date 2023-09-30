export default () => {
  const Url = useRuntimeConfig().public.API_BASE_URL;
  const token = useRuntimeConfig().public.token;




  const get = async (endpoint) => {
    return useFetch(`https://scrnews77.online/getnews${endpoint}&auth=${token}`);
  };

  const getNewsFootball = async (lang1) => {
    console.log('mylang:', lang1);
    let query = `?lang=${lang1}&item_count=5&sport_id=1`;
    return get(query);
  };

  const getAllNewsFootball = async (sport_id = 1, lang = "en") => {
    let query = `?lang=${lang}&item_count=0&sport_id=${sport_id}`;
    return get(query);
    
  };

  const getNewsBasketball = async ( lang1) => {
    let query = `?lang=${lang1}&item_count=5&sport_id=2`;
    return get(query);
    
  };
  const getAllNewsBasketball = async (sport_id = 2, lang = "en") => {
    let query = `?lang=${lang}&item_count=0&sport_id=${sport_id}`;
    return get(query);
    
  };

  return {
    get,
    getNewsFootball,
    getNewsBasketball,
    getAllNewsFootball,
    getAllNewsBasketball,

  };
};

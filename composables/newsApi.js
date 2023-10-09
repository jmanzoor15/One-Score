// import { getValue, fetchAndActivate } from 'firebase/remote-config';
// import CryptoJS from 'crypto-js';
// import moment from 'moment-timezone';

export default () => {
  const Url = useRuntimeConfig().public.API_BASE_URL;
  const token = useRuntimeConfig().public.token;

  // const nuxtApp = useNuxtApp();
  // const remoteConfig = nuxtApp.$remoteConfig;

  // const api_auth = ref({}); // Initialize as an empty object

  // const authToken = ref('');

  // fetchAndActivate(remoteConfig)
  //   .then(() => {
  //     const value1 = getValue(remoteConfig, 'newsBaseUrl');
  //     // console.log("newsBaseUrl", value1._value);
  //     const value2 = getValue(remoteConfig, 'api_auth');
  //     api_auth.value = JSON.parse(value2._value);

  //     // Generate and set the authentication token
  //     generateAuthToken(api_auth.value);

  //     get(value1._value);
  //   });

  // const generateAuthToken = (api_auth) => {
  //   const user = api_auth.user;
  //   const hexCode = CryptoJS.MD5(user).toString();
  //   const code = api_auth.code;
  //   const secretKey = api_auth.secret;
  //   const now = moment.tz('Asia/Dubai').format('YYYYMMDDHH');
  //   const tokenFormula1 = `${hexCode}${secretKey}${code}${now}`;
  //   const token = CryptoJS.MD5(tokenFormula1).toString();
  //   // console.log('token:', token);
  //   authToken.value = token;
  // }

  // const get = async (baseUrl, query) => {
  //   console.log('authToken.value',query)
  //   // Construct the URL using the passed baseUrl and authToken
  //   const apiUrl = `${baseUrl}getnews?auth=${authToken.value}&lang=en`;
  //   // console.log("API URL:", apiUrl);
  //   const data = useFetch(apiUrl);
  //   return data;
   
  // };
  // const getNewsFootball = async (lang1) => {
  //   let query = `?lang=${lang1}&item_count=5&sport_id=1`;
  //   return get('', query);
  // };

  // const getAllNewsFootball = async (sport_id = 1, lang = "en") => {
  //   let query = `?lang=${lang}&item_count=0&sport_id=${sport_id}`;
  //   return get(query);
  // };

  // const getNewsBasketball = async (lang1) => {
  //   let query = `?lang=${lang1}&item_count=5&sport_id=2`;
  //   return get(query);
  // };

  // const getAllNewsBasketball = async (sport_id = 2, lang = "en") => {
  //   let query = `?lang=${lang}&item_count=0&sport_id=${sport_id}`;
  //   return get(query);
  // };


  const get = async (endpoint) => {
    return useFetch(`https://scrnews77.online/getnews${endpoint}&auth=${token}`);
  };

  const getNewsFootball = async (lang1) => {
    let query = `?lang=${lang1}&item_count=5&sport_id=1`;
    return get(query);
  };

  const getAllNewsFootball = async (sport_id = 1, lang = "en") => {
    let query = `?lang=${lang}&item_count=0&sport_id=${sport_id}`;
    return get(query);
  };

  const getNewsBasketball = async (lang1) => {
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

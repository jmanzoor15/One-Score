const Services = {
  // Strings
  referer: '',
  termsOfUse: '',
  privacyPolicy: '',
  supportEmail: '',
  storeAppStoreUrl: '',
  storeGooglePlayUrl: '',
  socialFacebookUrl: '',
  socialInstagramUrl: '',
  socialTwitterUrl: '',
  maintenance_messages: '',

  // Booleans
  liveBroadcast: false,
  liveAnimation: true,
  fifaLeaderboard: false,
  fibaLeaderboard: false,
  maintenance: false,
  level_bracket: false,
  appleAuth: false,
  facebookAuth: false,
  googleAuth: false,

  // Complex types encoded as JSON strings
  topLeaguesFootball: '[]', // Empty array encoded as a JSON string
  topLeaguesBasketball: '[]', // Empty array encoded as a JSON string
  disabledLiveStreamFootball: '[]', // Empty array encoded as a JSON string
  disabledLiveStreamBasketball: '[]', // Empty array encoded as a JSON string
  oddsBookmakers: '[]', // Empty array encoded as a JSON string
  oddsType: '[]', // Empty array encoded as a JSON string
  hotNewsCategories: '[]', // Empty array encoded as a JSON string

  // Objects encoded as JSON strings
  banner: '{}', // Empty object encoded as a JSON string
  leaderBoardBannerWeb: '{}', // Empty object encoded as a JSON string
  largeRectangleBannerWeb: '{}', // Empty object encoded as a JSON string
  mediumRectangleBannerWeb: '{}', // Empty object encoded as a JSON string
  skyscraperBannerWeb: '{}', // Empty object encoded as a JSON string
  panelBannerWeb: '{}', // Empty object encoded as a JSON string
  popup: '{}', // Empty object encoded as a JSON string
  apiAuthKey: '{"user": "", "code": "", "secret": ""}', // Object encoded as a JSON string

  // Numbers
  bannerHeight: 65,
  numberOfListAds: 0,

  // Strings (URLs and paths)
  baseUrl: '',
  chatBaseUrl: '',
  liveAnimationApiPath: '',
  newsBaseUrl: '',
  sportsBaseUrl: '',
  tempSportsBaseUrl: '',
  sportsUsersBaseUrl: '',
  tempSportsUsersBaseUrl: '',
  shareBaseUrl: '',
  ipAPIUrl: '',
  feedBackUrl: '',
  webSocketUrl: '',
  fbAppId: '',
  oneSignalAppID: '',
  avatarDefault: '',
  landingPageUrl: '',
  sportsUsersApiPath: ''
};

export default Services;

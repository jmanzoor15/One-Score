const Services = {
  // Strings
  referer: '',
  terms_of_use: '',
  privacy_policy: '',
  support_email: '',
  store_appstore_url: '',
  store_googleplay_url: '',
  social_facebook_url: '',
  social_ig_url: '',
  social_twitter_url: '',
  maintenance_messages: '',
  
  

  // Booleans
  live_broadcast: 'false',
  live_animation: false,
  fifa_leaderboard: false,
  fiba_leaderboard: false,
  maintenance: false,
  level_bracket: false,
  apple_auth: false,
  facebook_auth: false,
  google_auth: false,
  chat:false,

  // Complex types encoded as JSON strings
  topleague_football: '[]', // Empty array encoded as a JSON string
  topleague_basketball: '[]', // Empty array encoded as a JSON string
  topleague_football_web: '[]',
  topleagues_basketball_web: '[]',
  disabled_live_stream_football: '[]', // Empty array encoded as a JSON string
  disabled_live_stream_basketball: '[]', // Empty array encoded as a JSON string
  odds_bookmakers: '[]', // Empty array encoded as a JSON string
  odds_type: '[]', // Empty array encoded as a JSON string
  hotNewsCategories: '[]', // Empty array encoded as a JSON string

  // Objects encoded as JSON strings
  banner: '{}', // Empty object encoded as a JSON string
  banner_leader_board_web: '{}', // Empty object encoded as a JSON string
  banner_large_rectangle_web: '{}', // Empty object encoded as a JSON string
  banner_medium_rectangle_web: '{}', // Empty object encoded as a JSON string
  banner_skyscraper_web: '{}', // Empty object encoded as a JSON string
  banner_panel_web: '{}', // Empty object encoded as a JSON string
  pop_up: '{}', // Empty object encoded as a JSON string
  api_auth: '{"user": "", "code": "", "secret": ""}', // Object encoded as a JSON string

  // Numbers
  banner_height: 65,
  numberOfListAds: 0,

  // Strings (URLs and paths)
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
 ipApiUrl: '',
 feedBackUrl: '',
 webSocketUrl: '',
 fbAppId: '',
 oneSignalAppID: '',
 avatarDefault: '',
 landingPageUrl: '',
 sportsUsersApiPath: ''
};

export default Services;

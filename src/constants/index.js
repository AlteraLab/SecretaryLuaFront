const HISTORY_TYPE = 'hash';

<<<<<<< HEAD
export const API_BASE_URL = 'http://203.250.32.29:8083';
=======
export const API_BASE_URL = 'http://39.117.253.166:4000';
>>>>>>> 9382bedd945c7d9bbbae442e8de49f3139135aa5

export const ORGANIZATION_URL = 'https://dcu-icslab.github.io';

export const OAUTH2_REDIRECT_URI = `${process.env.PUBLIC_URL === '' ? window.location.href : ORGANIZATION_URL+process.env.PUBLIC_URL}/oauth2/redirect`

export const KAKAO_AUTH_URL = API_BASE_URL + '/oauth2/authorize/kakao?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const ACCESS_TOKEN = 'accessToken';

export const HUB_EXTERNAL_PORT = 54322;
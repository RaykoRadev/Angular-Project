import { environment } from '../../../environments/environment';

//*
export const SERVER_URL = environment.BASE_URL;

//* links
export const BASE_USER_URL = `${SERVER_URL}/users`;
// export const BASE_USER_URL = 'http://localhost:3001/users';
export const BASE_CARD_URL = `${SERVER_URL}/cards`;
// export const BASE_CARD_URL = 'http://localhost:3001/cards';
export const IMAGE_UPLOAD = `https://api.imgbb.com/1/upload?key=`;

//* tokens
export const USER_TOKEN = 'userToken';
export const API_imgBB_KEY = 'c74f2163636580193aeb4d942fc5ccbd';

//*
export const DOMAINS = ['bg', 'com'];
export const EMAIL_PROVIDERS = ['abv', 'gmail', 'yahoo'];

import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 10000,
});

export const utils = axios.create({
  baseURL: process.env.VUE_APP_UTILS_API_HOST,
  timeout: 10000,
});

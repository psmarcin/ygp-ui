import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 10000,
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://geo.ipify.org/api/v2',
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

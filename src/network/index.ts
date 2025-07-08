import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 5000,
});

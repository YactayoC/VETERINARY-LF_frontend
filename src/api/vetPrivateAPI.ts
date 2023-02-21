import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const vetPrivateAPI = axios.create({
  baseURL: baseURL,
});

vetPrivateAPI.interceptors.request.use(
  (config) => {
    config.headers['x-token'] = localStorage.getItem('token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default vetPrivateAPI;

import axios from 'axios';

const vetPrivateAPI = axios.create({
  baseURL: 'http://localhost:4000/api/',
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

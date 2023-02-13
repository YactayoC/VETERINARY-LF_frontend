import axios from 'axios';

const vetPrivateAPI = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    'x-token': localStorage.getItem('token') || '',
  },
});

export default vetPrivateAPI;

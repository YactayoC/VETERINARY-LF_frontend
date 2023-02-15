import { LocalStorageTypes } from '@/models';
import axios from 'axios';

const vetAPI = axios.create({
  baseURL: 'http://localhost:4000/api/',
});

export default vetAPI;

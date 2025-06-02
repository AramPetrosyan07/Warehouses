import axios from 'axios';
import { baseApiUrl } from '../config';

const api = axios.create({
  baseURL: baseApiUrl, 
  timeout: 5000,
});

export default api;

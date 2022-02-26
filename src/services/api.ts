import axios from 'axios';

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const TIMEOUT = 5000;

const AXIOS_OPTIONS = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true
};

const axiosInstance = axios.create(AXIOS_OPTIONS);

export default axiosInstance;

import axios from 'axios';

const BECKEND_URL = `https://jsonplaceholder.typicode.com`;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BECKEND_URL,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

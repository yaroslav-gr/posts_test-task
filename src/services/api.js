import axios from 'axios';

const BECKEND_URL = ``;

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

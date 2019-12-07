import axios from 'axios';

import {getNotificationError} from './utils';

const configureAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem(`login`);
      onLoginFail();
      return;
    }

    getNotificationError(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};


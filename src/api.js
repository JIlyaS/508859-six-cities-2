import axios from 'axios';

import {getNotificationError} from './utils';
import {UNAUTH_STATUS, AxiosConfig} from './constants';

const configureAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: AxiosConfig.BASE_URL,
    timeout: AxiosConfig.TIMEOUT,
    withCredentials: AxiosConfig.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response && err.response.status === UNAUTH_STATUS) {
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


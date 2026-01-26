import Axios from 'axios';
import type { CreateAxiosDefaults } from 'axios';

import { env } from '@/config/env';
import { paths } from '@/config/paths';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: env.APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
};

export const api = Axios.create(axiosConfig);

// api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import Cookies from 'universal-cookie';

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ACCOUNT_SERVICES_URL,
});

const cookies = new Cookies();
const token = cookies.get('token');
AxiosInstance.interceptors.request.use(
  (config?: any) => {
    if (config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${cookies.get('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
    
  },
  (error) => {
    if (error.response?.status === 401) {
      if (token) {
        cookies.remove('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

const postWithoutHeader =
  <T>(api: string) =>
  (data: T) => {
    return axios.post(api, data, {
      method: 'POST',
    });
  };

const get = (api: string) => (params?: string) => {
  return AxiosInstance(api, {
    method: 'GET', 
    params,
  });
};

const getWithSlug = (api: string) => (slug?: string, params?: string) => {
  return AxiosInstance(`${api}?${slug}`, {
    method: 'GET',
    params,
  });
};

const post =
  <T>(api: string) =>
  (data: T, params?: string) => {
    return AxiosInstance.post(api, data, {
      method: 'POST',
      params,
    });
  };
export { postWithoutHeader, get, getWithSlug, post };

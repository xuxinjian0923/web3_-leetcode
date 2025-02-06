import auth from './auth';
import { AxiosInstance } from 'axios';

export default function customizeAxios<T extends AxiosInstance = AxiosInstance>(axios: T): T {
  axios.defaults.headers.common = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  };
  axios.defaults.timeout = 30 * 1000;
  axios.interceptors.request.use(function (config) {
    if (config.method && ['POST', 'PUT'].includes(config.method.toUpperCase())) {
      config.data = config.data ?? {};
    }
    return config;
  });
  axios.interceptors.response.use(undefined, auth);
  return axios;
}

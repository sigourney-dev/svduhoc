import axios, {InternalAxiosRequestConfig} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {DEFAULT_API_CONFIG} from './api-config';
import {getDataStorage} from '../../utils';
import {KeyStores} from '../../enums/key-storages.ts';

// Create a new instance of Axios
export const api = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiUploadFile = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    'content-type': 'multipart/form-data',
  },
});

const onRequestSuccess = async (config: InternalAxiosRequestConfig<any>) => {
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);
  if (!isConnected) {
    throw new Error('No internet connection');
  }

  const token = await getDataStorage(KeyStores.USER_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

api.interceptors.request.use(onRequestSuccess);
apiUploadFile.interceptors.request.use(onRequestSuccess);

const onResponseSuccess = (response: any) => response;

const onResponseError = (err: any) => Promise.reject(err);

api.interceptors.response.use(onResponseSuccess, onResponseError);
apiUploadFile.interceptors.response.use(onResponseSuccess, onResponseError);

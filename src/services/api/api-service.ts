import axios, {InternalAxiosRequestConfig} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {DEFAULT_API_CONFIG} from './api-config';
import {getDataStorage, setDataStorage} from '../../utils';
import {KeyStores} from '../../enums/key-storage';
import {Logger} from '../../utils/logger';
import {ToastService} from '../toast/toast-service';
import {jwtDecode} from 'jwt-decode';

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

const isTokenExpired = async (token: string) => {
  const decoded = jwtDecode(token);
  const expiryTime = decoded && decoded.exp ? decoded.exp * 1000 : null;
  return new Date().getTime() > (expiryTime || 0);
};

const refreshToken = async () => {
  const refreshTokenOld = await getDataStorage(KeyStores.REFRESH_TOKEN);
  try {
    const response = await axios.post(
      `${DEFAULT_API_CONFIG.url}/auth/refresh-token`,
      {refreshToken: refreshTokenOld},
    );
    const {refreshToken, accessToken} = response.data;
    await setDataStorage(KeyStores.USER_TOKEN, accessToken);
    await setDataStorage(KeyStores.REFRESH_TOKEN, refreshToken);
    return accessToken;
  } catch (error) {
    Logger.error('Fail when refresh token!!!');
    await setDataStorage(KeyStores.USER_TOKEN);
    await setDataStorage(KeyStores.REFRESH_TOKEN);
    throw error;
  }
};

const onRequestSuccess = async (config: InternalAxiosRequestConfig<any>) => {
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);
  if (!isConnected) {
    throw new Error('No internet connection');
  }
  const token = await getDataStorage(KeyStores.USER_TOKEN);
  if (token) {
    if (await isTokenExpired(token)) {
      const newToken = await refreshToken();
      config.headers.Authorization = `Bearer ${newToken}`;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
};

api.interceptors.request.use(onRequestSuccess);
apiUploadFile.interceptors.request.use(onRequestSuccess);

const onResponseSuccess = (response: any) => response;

const onResponseError = async (error: any) => {
  if (error.response) {
    const {status} = error.response;
    if (status === 401 || status === 500) {
      // Kiểm tra nếu mã lỗi là 401 (Unauthorized)
      const token = await getDataStorage(KeyStores.USER_TOKEN);
      if (token && (await isTokenExpired(token))) {
        try {
          const newToken = await refreshToken(); // Gọi hàm refreshToken
          error.config.headers.Authorization = `Bearer ${newToken}`; // Cập nhật header với token mới
          return axios(error.config); // Thực hiện lại yêu cầu với token mới
        } catch (refreshError) {
          Logger.error(refreshError);
          ToastService.showError(
            'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
          );
          await setDataStorage(KeyStores.USER_TOKEN); // Xóa token cũ
          return Promise.reject(refreshError); // Trả về lỗi
        }
      } else {
        ToastService.showError('Hết thời gian đăng nhập. Vui lòng thử lại...');
        await setDataStorage(KeyStores.USER_TOKEN); // Xóa token cũ
      }
    }
  }
  return Promise.reject(error); // Trả về lỗi nếu không phải 401
};

api.interceptors.response.use(onResponseSuccess, onResponseError);
apiUploadFile.interceptors.response.use(onResponseSuccess, onResponseError);

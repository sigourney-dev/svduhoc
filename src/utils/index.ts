import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import 'moment/locale/vi';
import {Platform, Dimensions} from 'react-native';
import {KeyStores} from '../enums/key-storage.tsx';
import {Logger} from './logger.ts';
import { API_URL } from '../services/api/api-config.ts';

export const Utils = {
  isNumber: (n: any) => _.isNumber(n),
  isString: (n: any) => _.isString(n),
  isArray: (n: any) => _.isArray(n),
  isBoolean: (n: any) => _.isBoolean(n),
  isInteger: (n: any) => _.isInteger(n),
  isNull: (n: any) => _.isNull(n),
  isObject: (n: any) => _.isObject(n),
  isDate: (n: any) => _.isDate(n),
  isIOS: () => Platform.OS === 'ios',
  isAndroid: () => Platform.OS === 'android',
};

export const setDataStorage = async (
  Key: KeyStores,
  value?: any,
): Promise<boolean> => {
  try {
    if (value) {
      await AsyncStorage.setItem(Key, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(Key);
    }
    return true;
  } catch (error) {
    Logger.error('Error saving data storage');
    return false;
  }
};

export const getDataStorage = async (Key: KeyStores) => {
  try {
    const data = await AsyncStorage.getItem(Key);
    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (error) {
    Logger.error('Error retrieving data storage');
    return null;
  }
};

const noMoreThanOneCommas = (input: number | string) => {
  const str = input.toString();
  let commasCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') commasCount++;
    if (commasCount > 1) break;
  }
  return commasCount <= 1;
};

export const insertCommas = (
  input: number | undefined | string,
  decimals: number = 4,
) => {
  if (typeof input === 'undefined') return '';
  if (!noMoreThanOneCommas(input)) return '';
  const parts = input.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (parts[1]) parts[1] = parts[1].substring(0, decimals); // Only take the first 4 decimals
  return parts.join('.');
};

export const unInsertCommas = (input: string) => {
  const parts = input.split('.');
  parts[0] = parts[0].split(',').join('');
  if (parts[1]) parts[1] = parts[1].substring(0, 4); // Only take the first 4 decimals
  return parts.join('.');
};

export const calEffectiveTime = (dateEnd: Date) => {
  const currentDate = moment();
  const difference = moment(dateEnd).unix() - currentDate.unix();

  const seconds = Math.floor(difference % 60);
  const minutes = Math.floor((difference / 60) % 60);
  const hours = Math.floor((difference / (60 * 60)) % 24);
  const days = Math.floor(difference / (60 * 60 * 24));
  return {days, hours, minutes, seconds, difference};
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mimeTypes = Object.freeze({
  allFiles: '*/*',
  audio: 'audio/*',
  csv: 'text/csv',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  images: 'image/*',
  pdf: 'application/pdf',
  plainText: 'text/plain',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  video: 'video/*',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
} as const);

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;

export const showImage = (image: string) => {
  return `${API_URL}/Resources/${image}`;
};

export const formatDateMoment = (date: Date) => {
  return moment(date).format('DD/MM/YYYY');
};

export const convertDateMoment = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  const formattedDate = new Date(Date.UTC(year, month - 1, day));
  return formattedDate;
};

export const convertProvince = (object: any) => {
  const provinces: {label: string, value: string}[] = Object.values(object).map((province: any) => ({
    label: province.name,
    value: province.code,
  }));
  return provinces;
};
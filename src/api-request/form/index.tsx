import {AppRequest} from '../../services/api';
import {API_URL} from '../../services/api';

export const formBase = (body: any) => {
  return AppRequest.post(`${API_URL}/contactus/create-contactus`, body);
};

export const createFormTransport = (body: any) => {
  return AppRequest.uploadFile(`${API_URL}/transport/create-transport`, body);
}
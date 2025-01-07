import {API_URL} from '../../services/api';
import {AppRequest} from '../../services/api';

export const getListHome = (body: any) => {
  return AppRequest.post(`${API_URL}/menu/get-list-menu`, body);
};

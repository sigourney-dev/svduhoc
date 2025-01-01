import {AppRequest} from '../../services/api';
import {API_URL} from '../../services/api';

export const getListAbroad = (body: any) => {
  return AppRequest.post(`${API_URL}/study-abroad/get-list-study-abroads`, body);
};

export const getDetailAbroad = (id: any) => {
  return AppRequest.get(
    `${API_URL}/study-abroad/get-study-abroad-detail/${id}`,
  );
};

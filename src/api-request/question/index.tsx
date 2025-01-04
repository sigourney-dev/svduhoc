import {API_URL} from '../../services/api';
import {AppRequest} from '../../services/api';

export const createQuestion = (body: any) => {
  return AppRequest.post(`${API_URL}/question/create-question`, body);
};

export const getListQuestion = (body: any) => {
  return AppRequest.post(`${API_URL}/question/get-list-questions`, body);
};

export const getCountQuestion = () => {
  return AppRequest.get(`${API_URL}/question/count-questions`);
};

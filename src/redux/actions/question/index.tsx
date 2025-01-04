import {types} from '../../types';

export const createQuestionRequest = (payload: any) => ({
  type: types.CREATE_QUESTION_REQUEST,
  payload: payload,
});

export const createQuestionSuccess = (payload: any) => ({
  type: types.CREATE_QUESTION_SUCCESS,
  payload: payload,
});

export const createQuestionFailure = (payload: any) => ({
  type: types.CREATE_QUESTION_FAILURE,
  payload: payload,
});

export const getListQuestionRequest = (payload: any) => ({
  type: types.GET_LIST_QUESTION_REQUEST,
  payload: payload,
});

export const getListQuestionSuccess = (payload: any) => ({
  type: types.GET_LIST_QUESTION_SUCCESS,
  payload: payload,
});

export const getListQuestionFailure = (payload: any) => ({
  type: types.GET_LIST_ABROAD_FAILURE,
  payload: payload,
});

export const getCountQuestionRequest = () => ({
  type: types.GET_COUNT_QUESTION_REQUEST,
});

export const getCountQuestionSuccess = (payload: any) => ({
  type: types.GET_COUNT_QUESTION_SUCCESS,
  payload: payload,
});

export const getCountQuestionFailure = (payload: any) => ({
  type: types.GET_COUNT_QUESTION_FAILURE,
  payload: payload,
});

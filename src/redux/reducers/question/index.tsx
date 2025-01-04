import {Reducer} from 'redux';
import {types} from '../../types';

interface IQuestionState {
  isLoading: boolean;

  createQuestionResult: any;
  createQuestionError: any;

  listQuestionResult: any;
  listQuestionError: any;

  countQuestionResult: any;
  countQuestionError: any;
}

const initialState: IQuestionState = {
  isLoading: false,

  createQuestionError: null,
  createQuestionResult: null,

  listQuestionError: null,
  listQuestionResult: null,

  countQuestionError: null,
  countQuestionResult: null,
};

const questionReducers: Reducer<IQuestionState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.CREATE_QUESTION_REQUEST: {
      return {...state, isLoading: true, createQuestionError: null};
    }
    case types.CREATE_QUESTION_SUCCESS: {
      return {...state, isLoading: false, createQuestionResult: action.payload};
    }
    case types.CREATE_QUESTION_FAILURE: {
      return {...state, isLoading: false, createQuestionError: action.payload};
    }
    case types.GET_LIST_QUESTION_REQUEST: {
      return {...state, isLoading: true, listQuestionError: null};
    }
    case types.GET_LIST_QUESTION_SUCCESS: {
      return {...state, isLoading: false, listQuestionResult: action.payload};
    }
    case types.GET_LIST_QUESTION_FAILURE: {
      return {...state, isLoading: false, listQuestionError: action.payload};
    }
    case types.GET_COUNT_QUESTION_REQUEST: {
      return {...state, isLoading: true, countQuestionError: null};
    }
    case types.GET_COUNT_QUESTION_SUCCESS: {
      return {...state, isLoading: false, countQuestionResult: action.payload};
    }
    case types.GET_COUNT_QUESTION_FAILURE: {
      return {...state, isLoading: false, countQuestionError: action.payload};
    }
    default: {
      return {...state};
    }
  }
};

export default questionReducers;

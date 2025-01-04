import {Reducer} from 'redux';
import {types} from '../../types';

interface IAbroadState {
  isLoading: boolean;

  listAbroadResult: any;
  listAbroadError: any;

  detailAbroadResult: any;
  detailAbroadError: any;
}

const initialState: IAbroadState = {
  isLoading: false,

  listAbroadResult: null,
  listAbroadError: null,

  detailAbroadResult: null,
  detailAbroadError: null,
};

const abroadReducers: Reducer<IAbroadState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.GET_LIST_ABROAD_REQUEST: {
      return {...state, isLoading: true, listAbroadError: null};
    }
    case types.GET_LIST_ABROAD_SUCCESS: {
      return {...state, isLoading: false, listAbroadResult: action.payload};
    }
    case types.GET_LIST_ABROAD_FAILURE: {
      return {...state, isLoading: false, listAbroadError: action.payload};
    }
    case types.GET_DETAIL_ABROAD_REQUEST: {
      return {...state, isLoading: true, detailAbroadError: null};
    }
    case types.GET_DETAIL_ABROAD_SUCCESS: {
      return {...state, isLoading: false, detailAbroadResult: action.payload};
    }
    case types.GET_DETAIL_ABROAD_FAILURE: {
      return {...state, isLoading: false, detailAbroadError: action.payload};
    }
    case types.REMOVE_ABROAD_RESULT: {
      return {
        ...state,
        listAbroadError: null,
        listAbroadResult: null,
        detailAbroadResult: null,
        detailAbroadError: null,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default abroadReducers;

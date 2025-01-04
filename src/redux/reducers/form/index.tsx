import {Reducer} from 'redux';
import {types} from '../../types';

interface IFormState {
  isLoading: boolean;

  formBaseResult: any;
  formBaseError: any;

  createTransportResult: any;
  createTransportError: any;
}

const initialState: IFormState = {
  isLoading: false,

  formBaseResult: null,
  formBaseError: null,

  createTransportResult: null,
  createTransportError: null,
};

const formReducers: Reducer<IFormState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.FORM_BASE_REQUEST: {
      return {...state, isLoading: true, formBaseError: null};
    }
    case types.FORM_BASE_SUCCESS: {
      return {...state, isLoading: false, formBaseResult: action.payload};
    }
    case types.FORM_BASE_FAILURE: {
      return {...state, isLoading: false, formBaseError: action.payload};
    }
    case types.CREATE_FORM_TRANSPORT_REQUEST: {
      return {...state, isLoading: true, createTransportError: null};
    }
    case types.CREATE_FORM_TRANSPORT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        createTransportResult: action.payload,
      };
    }
    case types.CREATE_FORM_TRANSPORT_FAILURE: {
      return {...state, isLoading: false, createTransportError: action.payload};
    }
    case types.REMOVE_FORM: {
      return {
        ...state,
        formBaseResult: null,
        formBaseError: null,
        createTransportResult: null,
        createTransportError: null,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default formReducers;

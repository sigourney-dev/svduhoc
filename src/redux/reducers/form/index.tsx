import {Reducer} from 'redux';
import {types} from '../../types';

interface IFormState {
  isLoading: boolean;

  formBaseResult: any;
  formBaseError: any;
}

const initialState: IFormState = {
  isLoading: false,

  formBaseResult: null,
  formBaseError: null,
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
    case types.REMOVE_FORM: {
      return {
        ...state,
        formBaseResult: null,
        formBaseError: null,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default formReducers;

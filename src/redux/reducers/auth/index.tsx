import {Reducer} from 'redux';
import {types} from '../../types';

interface IAuthState {
  isLoading: boolean;

  isLogin: boolean;
  isSaveLogin: boolean;
  user: string;
  pass: string;
  profile: any;

  loginResult: any;
  loginError: any;
  loadingLogin: boolean;

  changePasswordResult: any;
  changePasswordError: any;

  changeInfoResult: any;
  changeInfoError: any;

  registerResult: any;
  registerError: any;

  forgotPassResult: any;
  forgotPassError: any;

  confirmForgotResult: any;
  confirmForgotError: any;

  deleteResult: any;
  deleteError: any;
}

const initialState: IAuthState = {
  isLoading: false,

  isLogin: false,
  isSaveLogin: false,
  user: '',
  pass: '',
  profile: null,

  loginResult: null,
  loginError: null,
  loadingLogin: false,

  changePasswordResult: null,
  changePasswordError: null,

  changeInfoResult: null,
  changeInfoError: null,

  registerResult: null,
  registerError: null,

  forgotPassError: null,
  forgotPassResult: null,

  confirmForgotError: null,
  confirmForgotResult: null,

  deleteResult: null,
  deleteError: null,
};

const authReducers: Reducer<IAuthState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {...state, loadingLogin: true, loginError: null, isLoading: false};
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loadingLogin: false,
        loginResult: action.payload,
        isLogin: true,
        profile: action.payload.userProfile,
      };
    }
    case types.LOGIN_FAILURE: {
      return {...state, loadingLogin: false, loginError: action.payload};
    }
    case types.SAVE_LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        pass: action.payload.pass,
        isSaveLogin: action.payload.isSaveLogin,
      };
    }
    case types.SAVE_PROFILE: {
      return {...state, profile: action.payload};
    }
    case types.LOGOUT_REQUEST: {
      return {
        ...state,
        isLogin: false,
        loginError: null,
        loginResult: null,
        profile: null,
        loadingLogin: false,
        isLoading: false,
      };
    }
    case types.CHANGE_PASSWORD_REQUEST: {
      return {...state, isLoading: true, changePasswordError: null};
    }
    case types.CHANGE_PASSWORD_SUCCESS: {
      return {...state, isLoading: false, changePasswordResult: action.payload};
    }
    case types.CHANGE_PASSWORD_FAILURE: {
      return {...state, isLoading: false, changePasswordError: action.payload};
    }
    case types.CHANGE_INFORMATION_REQUEST: {
      return {...state, isLoading: true, changeInfoError: null};
    }
    case types.CHANGE_INFORMATION_SUCCESS: {
      return {...state, isLoading: false, changeInfoResult: action.payload};
    }
    case types.CHANGE_INFORMATION_FAILURE: {
      return {...state, isLoading: false, changeInfoError: action.payload};
    }
    case types.REGISTER_REQUEST: {
      return {...state, isLoading: true, registerError: null};
    }
    case types.REGISTER_SUCCESS: {
      return {...state, isLoading: false, registerResult: action.payload};
    }
    case types.REGISTER_FAILURE: {
      return {...state, isLoading: false, registerError: action.payload};
    }
    case types.FORGOT_PASSWORD_REQUEST: {
      return {...state, isLoading: true, forgotPassError: null};
    }
    case types.FORGOT_PASSWORD_SUCCESS: {
      return {...state, isLoading: false, forgotPassResult: action.payload};
    }
    case types.FORGOT_PASSWORD_FAILURE: {
      return {...state, isLoading: false, forgotPassError: action.payload};
    }
    case types.CONFIRM_FORGOT_REQUEST: {
      return {...state, isLoading: true, confirmForgotError: null};
    }
    case types.CONFIRM_FORGOT_SUCCESS: {
      return {...state, isLoading: false, confirmForgotResult: action.payload};
    }
    case types.CONFIRM_FORGOT_FAILURE: {
      return {...state, isLoading: false, confirmForgotError: action.payload};
    }
    case types.REMOVE_AUTH_RESULT: {
      return {
        ...state,
        changeInfoError: null,
        changeInfoResult: null,
        changePasswordError: null,
        changePasswordResult: null,
        registerResult: null,
        registerError: null,
        forgotPassError: null,
        forgotPassResult: null,
        confirmForgotError: null,
        confirmForgotResult: null,
      };
    }
    case types.DELETE_ACCOUNT_REQUEST: {
      return {...state, isLoading: true, deleteError: null};
    }
    case types.DELETE_ACCOUNT_SUCCESS: {
      return {...state, isLoading: false, deleteResult: action.payload};
    }
    case types.DELETE_ACCOUNT_FAILURE: {
      return {...state, isLoading: false, deleteError: action.payload};
    }
    case types.REMOVE_DELETE: {
      return {
        ...state,
        deleteError: null,
        deleteResult: null,
        isLogin: false,
        isSaveLogin: false,
        user: '',
        pass: '',
        profile: null,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default authReducers;

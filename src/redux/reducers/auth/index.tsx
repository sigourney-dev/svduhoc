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

  changePasswordResult: any;
  changePasswordError: any;

  changeInfoResult: any;
  changeInfoError: any;

  registerResult: any;
  registerError: any;
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

  changePasswordResult: null,
  changePasswordError: null,

  changeInfoResult: null,
  changeInfoError: null,

  registerResult: null,
  registerError: null,
};

const authReducers: Reducer<IAuthState, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {...state, isLoading: true};
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loginResult: action.payload,
        isLogin: true,
        profile: action.payload.userProfile,
      };
    }
    case types.LOGIN_FAILURE: {
      return {...state, isLoading: false, loginError: action.payload};
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
    case types.REMOVE_AUTH_RESULT: {
      return {
        ...state,
        changeInfoError: null,
        changeInfoResult: null,
        changePasswordError: null,
        changePasswordResult: null,
        registerResult: null,
        registerError: null,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default authReducers;

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

  refreshTokenResult: any;
  refreshTokenError: any;
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

  refreshTokenResult: null,
  refreshTokenError: null,
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
      return {...state, isLoading: false, loginResult: action.payload, isLogin: true, profile: action.payload.userProfile};
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
    case types.REFRESH_TOKEN_REQUEST: {
        return {...state, isLoading: true};
    }
    case types.REFRESH_TOKEN_SUCCESS: {
        return {...state, isLoading: false, refreshTokenResult: action.payload};
    }
    case types.REFRESH_TOKEN_FAILURE: {
        return {...state, isLoading: false, refreshTokenError: action.payload};
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
    default: {
      return {...state};
    }
  }
};

export default authReducers;

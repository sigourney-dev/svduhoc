import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducers from "./auth";

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: [
      'isLogin',
      'isSaveLogin',
      'user',
      'pass',
      'loginResult',
      'profile',
    ],
};

export const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducers),
});
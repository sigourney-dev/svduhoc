import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducers from './auth';
import categoryReducers from './category';
import postReducers from './post';
import formReducers from './form';
import abroadReducers from './abroad';
import questionReducers from './question';

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
  category: categoryReducers,
  post: postReducers,
  form: formReducers,
  abroad: abroadReducers,
  question: questionReducers,
});

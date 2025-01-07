import {all} from 'redux-saga/effects';
import authSaga from './auth';
import categorySaga from './category';
import postSaga from './post';
import formSaga from './form';
import abroadSaga from './abroad';
import questionSaga from './question';
import menuSaga from './menu';

function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    postSaga(),
    formSaga(),
    abroadSaga(),
    questionSaga(),
    menuSaga(),
  ]);
}

export default rootSaga;

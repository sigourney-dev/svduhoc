import {call, put, takeLatest} from 'redux-saga/effects';
import {
  createQuestion,
  getListQuestion,
  getCountQuestion,
} from '../../../api-request';
import {types} from '../../types';
import {Logger} from '../../../utils/logger';
import * as questionActions from '../../actions';

function* createQuestionSaga(body: any): any {
  try {
    const response = yield call(createQuestion, body.payload);
    if (response.success) {
      yield put(questionActions.createQuestionSuccess(response.message));
    } else {
      yield put(questionActions.createQuestionFailure(response.message));
    }
  } catch (error) {
    Logger.error(error);
    yield put(questionActions.createQuestionFailure(error));
  }
}

function* getListQuestionSaga(body: any): any {
  try {
    const response = yield call(getListQuestion, body.payload);
    if (response.success) {
      yield put(questionActions.getListQuestionSuccess(response.data));
    } else {
      yield put(questionActions.getListQuestionFailure(response.message));
    }
  } catch (error) {
    Logger.error(error);
    yield put(questionActions.getListQuestionFailure(error));
  }
}

function* getCountQuestionSaga(): any {
  try {
    const response = yield call(getCountQuestion);
    if (response.success) {
      yield put(questionActions.getCountQuestionSuccess(response.data));
    } else {
      yield put(questionActions.getCountQuestionFailure(response.message));
    }
  } catch (error) {
    Logger.error(error);
    yield put(questionActions.getCountQuestionFailure(error));
  }
}

export default function* questionSaga() {
  yield takeLatest(types.CREATE_QUESTION_REQUEST, createQuestionSaga);
  yield takeLatest(types.GET_LIST_QUESTION_REQUEST, getListQuestionSaga);
  yield takeLatest(types.GET_COUNT_QUESTION_REQUEST, getCountQuestionSaga);
}

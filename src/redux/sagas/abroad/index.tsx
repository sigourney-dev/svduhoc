import {call, put, takeLatest} from 'redux-saga/effects';
import { getListAbroad, getDetailAbroad } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import * as abroadActions from '../../actions';

function* getListAbroadSaga(body: any): any {
    try {
        const response = yield call(getListAbroad, body.payload);
        if (response.success) {
            yield put(abroadActions.getListAbroadSuccess(response.data));
        } else {
            yield put(abroadActions.getListAbroadFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(abroadActions.getListAbroadFailure(error));
    }
}

function* getDetailAbroadSaga(params: any): any {
    try {
        const response = yield call(getDetailAbroad, params.payload.id);
        if (response.success) {
            yield put(abroadActions.getDetailAbroadSuccess(response.data));
        } else {
            yield put(abroadActions.getDetailAbroadFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(abroadActions.getDetailAbroadFailure(error));
    }
}

export default function* abroadSaga() {
    yield takeLatest(types.GET_LIST_ABROAD_REQUEST, getListAbroadSaga);
    yield takeLatest(types.GET_DETAIL_ABROAD_REQUEST, getDetailAbroadSaga);
}
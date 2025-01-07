import {call, put, takeLatest} from 'redux-saga/effects';
import { getListHome } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import * as menuActions from '../../actions';

function* getListMenuSaga(body: any): any {
    try {
        const response = yield call(getListHome, body.payload);
        if (response.success) {
            yield put(menuActions.getListMenuSuccess(response.data));
        } else {
            yield put(menuActions.getListMenuFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(menuActions.getListMenuFailure(error));
    }
}

export default function* menuSaga() {
    yield takeLatest(types.GET_LIST_MENU_REQUEST, getListMenuSaga);
}
import {call, put, takeLatest} from 'redux-saga/effects';
import { formBase } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import * as formActions from '../../actions';

function* formBaseSaga(body: any): any {
    try {
        const response = yield call(formBase, body.payload);
        if (response.success) {
            yield put(formActions.formBaseSuccess(response.message));
        } else {
            yield put(formActions.formBaseFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(formActions.formBaseFailure(error));
    }
}

export default function* formSaga() {
    yield takeLatest(types.FORM_BASE_REQUEST, formBaseSaga);
}
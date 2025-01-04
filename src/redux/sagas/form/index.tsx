import {call, put, takeLatest} from 'redux-saga/effects';
import { formBase, createFormTransport } from '../../../api-request';
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

function* createFormTransportSaga(body: any): any {
    try {
        const response = yield call(createFormTransport, body.payload);
        if (response.success) {
            yield put(formActions.createFormTransportSuccess(response.message));
        } else {
            yield put(formActions.createFormTransportFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(formActions.createFormTransportFailure(error));
    }
}

export default function* formSaga() {
    yield takeLatest(types.FORM_BASE_REQUEST, formBaseSaga);
    yield takeLatest(types.CREATE_FORM_TRANSPORT_REQUEST, createFormTransportSaga);
}
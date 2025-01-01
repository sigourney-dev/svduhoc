import {call, put, takeLatest} from 'redux-saga/effects';
import { login, changePassword, changeInformation, register } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import { KeyStores } from '../../../enums/key-storage.tsx';
import { setDataStorage, getDataStorage } from '../../../utils';
import * as authActions from '../../actions';

function* loginSaga(body: any): any {
    try {
        const response = yield call(login, body.payload);
        if (response.success) {
            yield put(authActions.loginSuccess(response.data));
            if (response.data.accessToken) {
                setDataStorage(KeyStores.USER_TOKEN, response.data.accessToken).then();
                setDataStorage(KeyStores.REFRESH_TOKEN, response.data.refreshToken).then();
            }
        } else {
            yield put(authActions.loginFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.loginFailure(error));
    }
}

function* changePasswordSaga(body: any): any {
    try {
        const response = yield call(changePassword, body.payload);
        if (response.success) {
            yield put(authActions.changePasswordSuccess(response.message));
        } else {
            yield put(authActions.changePasswordFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.changePasswordFailure(error));
    }
}

function* changeInformationSaga(body: any): any {
    try {
        const response = yield call(changeInformation, body.payload);
        if (response.success) {
            yield put(authActions.changeInformationSuccess(response.message));
        } else {
            yield put(authActions.changeInformationFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.changeInformationFailure(error));
    }
}

function* registerSaga(body: any): any {
    try {
        const response = yield call(register, body.payload);
        if (response.success) {
            yield put(authActions.registerSuccess(response.message));
        } else {
            yield put(authActions.registerFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.registerFailure(error));
    }
}

export default function* authSaga() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga);
    yield takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordSaga);
    yield takeLatest(types.CHANGE_INFORMATION_REQUEST, changeInformationSaga);
    yield takeLatest(types.REGISTER_REQUEST, registerSaga);
}
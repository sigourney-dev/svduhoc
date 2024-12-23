import {call, put, takeLatest} from 'redux-saga/effects';
import { login, changePassword, refreshToken } from '../../../api-request';
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

function* refreshTokenSaga(body: any): any {
    try {
        const response = yield call(refreshToken, body.payload);
        if (response.success) {
            yield put(authActions.refreshTokenSuccess(response.data));
            if (response.data.accessToken) {
                setDataStorage(KeyStores.USER_TOKEN, response.data.accessToken).then();
                setDataStorage(KeyStores.REFRESH_TOKEN, response.data.refreshToken).then();
            }
        } else {
            yield put(authActions.refreshTokenFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.refreshTokenFailure(error));
    }
}

function* changePasswordSaga(body: any): any {
    try {
        const response = yield call(changePassword, body.payload);
        if (response.success) {
            yield put(authActions.changePasswordSuccess(response.message));
        } else if (response.status && response.status === 401) {
            const refreshToken = getDataStorage(KeyStores.REFRESH_TOKEN);
            yield put(authActions.refreshTokenRequest({
                refreshToken: refreshToken,
            }))
        } else {
            yield put(authActions.changePasswordFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(authActions.changePasswordFailure(error));
    }
}

export default function* authSaga() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga);
    yield takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordSaga);
    yield takeLatest(types.REFRESH_TOKEN_REQUEST, refreshTokenSaga);
}
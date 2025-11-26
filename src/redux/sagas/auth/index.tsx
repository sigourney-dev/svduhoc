import {call, put, takeLatest} from 'redux-saga/effects';
import {
  login,
  changePassword,
  changeInformation,
  register,
  confirmForgotPassword,
  forgotPassword,
  deleteAccount,
} from '../../../api-request';
import {types} from '../../types';
import {Logger} from '../../../utils/logger';
import {KeyStores} from '../../../enums/key-storage.tsx';
import {setDataStorage, getDataStorage} from '../../../utils';
import * as authActions from '../../actions';

function* loginSaga(body: any): any {
  try {
    const response = yield call(login, body.payload);
    if (response.success) {
      yield put(authActions.loginSuccess(response.data));
      if (response.data.accessToken) {
        setDataStorage(KeyStores.USER_TOKEN, response.data.accessToken);
        setDataStorage(
          KeyStores.REFRESH_TOKEN,
          response.data.refreshToken,
        );
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

function* forgotPasswordSaga(body: any): any {
  try {
    const response = yield call(forgotPassword, body.payload);
    if (response.success) {
      yield put(authActions.forgotPasswordSuccess(response.message));
    } else {
      yield put(authActions.forgotPasswordFailure(response.message));
    }
  } catch (error) {
    Logger.error(error);
    yield put(authActions.forgotPasswordFailure(error));
  }
}

function* confirmForgotSaga(body: any): any {
  try {
    const response = yield call(confirmForgotPassword, body.payload);
    if (response.success) {
      yield put(authActions.confirmForgotSuccess(response.message));
    } else {
      yield put(authActions.confirmForgotFailure(response.message));
    }
  } catch (error) {
    yield put(authActions.confirmForgotFailure(error));
    Logger.error(error);
  }
}

function* deleteAccountSaga(): any {
  try {
    const response = yield call(deleteAccount);
    if (response.success) {
      yield put(authActions.deleteAccountSuccess(response.message));
    } else {
      yield put(authActions.deleteAccountFailure(response.message));
    }
  } catch (error) {
    Logger.error(error);
    yield put(authActions.deleteAccountFailure(error));
  }
}

export default function* authSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordSaga);
  yield takeLatest(types.CHANGE_INFORMATION_REQUEST, changeInformationSaga);
  yield takeLatest(types.REGISTER_REQUEST, registerSaga);
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(types.CONFIRM_FORGOT_REQUEST, confirmForgotSaga);
  yield takeLatest(types.DELETE_ACCOUNT_REQUEST, deleteAccountSaga);
}

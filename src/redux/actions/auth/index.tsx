import { types } from "../../types";

export const loginRequest = (payload: any) => ({
    type: types.LOGIN_REQUEST,
    payload: payload,
});

export const loginSuccess = (payload: any) => ({
    type: types.LOGIN_SUCCESS,
    payload: payload,
});

export const loginFailure = (payload: any) => ({
    type: types.LOGIN_FAILURE,
    payload: payload,
});

export const saveLogin = (payload: any) => ({
    type: types.SAVE_LOGIN,
    payload: payload,
});

export const logoutRequest = () => ({
    type: types.LOGOUT_REQUEST,
});

export const changePasswordRequest = (payload: any) => ({
    type: types.CHANGE_PASSWORD_REQUEST,
    payload: payload,
});

export const changePasswordSuccess = (payload: any) => ({
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload: payload,
});

export const changePasswordFailure = (payload: any) => ({
    type: types.CHANGE_PASSWORD_FAILURE,
    payload: payload,
});

export const changeInformationRequest = (payload: any) => ({
    type: types.CHANGE_INFORMATION_REQUEST,
    payload: payload,
});

export const changeInformationSuccess = (payload: any) => ({
    type: types.CHANGE_INFORMATION_SUCCESS,
    payload: payload,
});

export const changeInformationFailure = (payload: any) => ({
    type: types.CHANGE_INFORMATION_FAILURE,
    payload: payload,
});

export const saveProfile = (payload: any) => ({
    type: types.SAVE_PROFILE,
    payload: payload,
});

export const forgotPasswordRequest = (payload: any) => ({
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: payload,
});

export const forgotPasswordSuccess = (payload: any) => ({
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload: payload,
});

export const forgotPasswordFailure = (payload: any) => ({
    type: types.FORGOT_PASSWORD_FAILURE,
    payload: payload,
});

export const confirmForgotRequest = (payload: any) => ({
    type: types.CONFIRM_FORGOT_REQUEST,
    payload: payload,
});

export const confirmForgotSuccess = (payload: any) => ({
    type: types.CONFIRM_FORGOT_SUCCESS,
    payload: payload,
});

export const confirmForgotFailure = (payload: any) => ({
    type: types.CONFIRM_FORGOT_FAILURE,
    payload: payload,
});

export const removeAuthResult = () => ({
    type: types.REMOVE_AUTH_RESULT,
});

export const registerRequest = (payload: any) => ({
    type: types.REGISTER_REQUEST,
    payload: payload,
});

export const registerSuccess = (payload: any) => ({
    type: types.REGISTER_SUCCESS,
    payload: payload,
});

export const registerFailure = (payload: any) => ({
    type: types.REGISTER_FAILURE,
    payload: payload,
});
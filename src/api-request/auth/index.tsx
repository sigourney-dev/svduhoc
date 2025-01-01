import { AppRequest } from "../../services/api";
import { API_URL } from "../../services/api";

export const login = (body: any) => {
    return AppRequest.post(`${API_URL}/auth/sign-in`, body);
};

export const changePassword = (body: any) => {
    return AppRequest.put(`${API_URL}/auth/change-password`, body);
};

export const changeInformation = (body: any) => {
    return AppRequest.put(`${API_URL}/auth/change-information-account`, body);
};

export const forgotPassword = (body: any) => {
    return AppRequest.put(`${API_URL}/auth/forgot-password`, body);
};

export const confirmForgotPassword = (body: any) => {
    return AppRequest.put(`${API_URL}/auth/confirm-forgot-password`, body);
};

export const register = (body: any) => {
    return AppRequest.post(`${API_URL}/auth/register`, body);
};
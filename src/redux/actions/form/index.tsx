import { types } from "../../types";

export const formBaseRequest = (payload: any) => ({
    type: types.FORM_BASE_REQUEST,
    payload: payload,
});

export const formBaseSuccess = (payload: any) => ({
    type: types.FORM_BASE_SUCCESS,
    payload: payload,
}); 

export const formBaseFailure = (payload: any) => ({
    type: types.FORM_BASE_FAILURE,
    payload: payload,
});

export const removeForm = () => ({
    type: types.REMOVE_FORM,
});
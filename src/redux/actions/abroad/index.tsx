import { types } from "../../types";

export const getListAbroadRequest = (payload: any) => ({
    type: types.GET_LIST_ABROAD_REQUEST,
    payload: payload,
});

export const getListAbroadSuccess = (payload: any) => ({
    type: types.GET_LIST_ABROAD_SUCCESS,
    payload: payload,
});

export const getListAbroadFailure = (payload: any) => ({
    type: types.GET_LIST_ABROAD_FAILURE,
    payload: payload,
});

export const getDetailAbroadRequest = (payload: any) => ({
    type: types.GET_DETAIL_ABROAD_REQUEST,
    payload: payload,
});

export const getDetailAbroadSuccess = (payload: any) => ({
    type: types.GET_DETAIL_ABROAD_SUCCESS,
    payload: payload,
});

export const getDetailAbroadFailure = (payload: any) => ({
    type: types.GET_DETAIL_ABROAD_FAILURE,
    payload: payload,
});

export const removeAbroadResult = () => ({
    type: types.REMOVE_ABROAD_RESULT,
});
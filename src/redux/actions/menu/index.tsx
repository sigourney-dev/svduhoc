import { types } from "../../types";

export const getListMenuRequest = (payload: any) => ({
    type: types.GET_LIST_MENU_REQUEST,
    payload: payload,
});

export const getListMenuSuccess = (payload: any) => ({
    type: types.GET_LIST_MENU_SUCCESS,
    payload: payload,
});

export const getListMenuFailure = (payload: any) => ({
    type: types.GET_LIST_MENU_FAILURE,
    payload: payload,
});

export const removeMenu = () => ({
    type: types.REMOVE_MENU,
});


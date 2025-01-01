import { types } from "../../types";

export const getListPostsRequest = (payload: any) => ({
    type: types.GET_LIST_POSTS_REQUEST,
    payload: payload,
});

export const getListPostsSuccess = (payload: any) => ({
    type: types.GET_LIST_POSTS_SUCCESS,
    payload: payload,
});

export const getListPostsFailure = (payload: any) => ({
    type: types.GET_LIST_POSTS_FAILURE,
    payload: payload,
});

export const getPostDetailRequest = (payload: any) => ({
    type: types.GET_POST_DETAIL_REQUEST,
    payload: payload,
});

export const getPostDetailSuccess = (payload: any) => ({
    type: types.GET_POST_DETAIL_SUCCESS,
    payload: payload,
});

export const getPostDetailFailure = (payload: any) => ({
    type: types.GET_POST_DETAIL_FAILURE,
    payload: payload,
});

export const removePostResult = () => ({
    type: types.REMOVE_POST_RESULT,
});
import { types } from "../../types";

export const getBannerCategoryRequest = (payload: any) => ({
    type: types.GET_BANNER_CATEGORY_REQUEST,
    payload: payload,
});

export const getBannerCategorySuccess = (payload: any) => ({
    type: types.GET_BANNER_CATEGORY_SUCCESS,
    payload: payload,
});

export const getBannerCategoryFailure = (payload: any) => ({
    type: types.GET_BANNER_CATEGORY_FAILURE,
    payload: payload,
});

export const removeCategoryResult = () => ({
    type: types.REMOVE_CATEGORY_RESULT,
});
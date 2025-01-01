import { Reducer } from "redux";
import { types } from "../../types";

interface ICategoryState {
    isLoading: boolean;

    categoryResult: any;
    categoryError: any;
}

const initialState: ICategoryState = {
    isLoading: false,

    categoryResult: null,
    categoryError: null,
};

const categoryReducers: Reducer<ICategoryState, any> = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BANNER_CATEGORY_REQUEST: {
            return {...state, isLoading: true};
        }
        case types.GET_BANNER_CATEGORY_SUCCESS: {
            return {...state, isLoading: false, categoryResult: action.payload};
        }
        case types.GET_BANNER_CATEGORY_FAILURE: {
            return {...state, isLoading: false, categoryError: action.payload};
        }
        case types.REMOVE_CATEGORY_RESULT: {
            return {...state, categoryError: null, categoryResult: null};
        }
        default: {
            return {...state};
        }
    }
}

export default categoryReducers;
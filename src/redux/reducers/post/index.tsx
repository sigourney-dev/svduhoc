import { Reducer } from "redux";
import { types } from "../../types";

interface IPostState {
    isLoading: boolean;

    postResult: any;
    postError: any;

    postDetailResult: any;
    postDetailError: any;
}

const initialState : IPostState = {
    isLoading: false,

    postError: null,
    postResult: null,

    postDetailResult: null,
    postDetailError: null,
};

const postReducers: Reducer<IPostState, any> = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_POSTS_REQUEST: {
            return {...state, isLoading: true, postError: null};
        }
        case types.GET_LIST_POSTS_SUCCESS: {
            return {...state, isLoading: false, postResult: action.payload};
        }
        case types.GET_LIST_POSTS_FAILURE: {
            return {...state, isLoading: false, postError: action.payload};
        }
        case types.GET_POST_DETAIL_REQUEST: {
            return {...state, isLoading: true, postDetailError: null};
        }
        case types.GET_POST_DETAIL_SUCCESS: {
            return {...state, isLoading: false, postDetailResult: action.payload};
        }
        case types.GET_POST_DETAIL_FAILURE: {
            return {...state, isLoading: false, postDetailError: action.payload};
        }
        case types.REMOVE_POST_RESULT: {
            return {...state, postResult: null, postError: null, postDetailError: null, postDetailResult: null};
        }
        default: {
            return {...state};
        }
    }
}

export default postReducers;
import { Reducer } from "redux";
import { types } from "../../types";

interface IMenuState {
    isLoading: boolean;

    listMenuResult: any;
    listMenuError: any;
}

const initialState: IMenuState = {
    isLoading: false,

    listMenuError: null,
    listMenuResult: null,
};

const menuReducers: Reducer<IMenuState, any> = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_MENU_REQUEST: {
            return {...state, isLoading: true, listMenuError: null};
        }
        case types.GET_LIST_MENU_SUCCESS: {
            return {...state, isLoading: false, listMenuResult: action.payload};
        }
        case types.GET_LIST_MENU_FAILURE: {
            return {...state, isLoading: false, listMenuError: action.payload};
        }
        case types.REMOVE_MENU: {
            return {...state, listMenuError: null, listMenuResult: null};
        }
        default: {
            return {...state};
        }
    }
}

export default menuReducers;
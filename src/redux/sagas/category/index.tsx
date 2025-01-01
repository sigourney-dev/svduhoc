import {call, put, takeLatest} from 'redux-saga/effects';
import { getBannerCategory } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import * as categoryActions from '../../actions';

function* getBannerCategorySaga(params: any): any {
    try {
        const response = yield call(getBannerCategory, params.payload);
        if (response.success) {
            yield put(categoryActions.getBannerCategorySuccess(response.data));
        } else {
            yield put(categoryActions.getBannerCategoryFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(categoryActions.getBannerCategoryFailure(error));
    }
}

export default function* categorySaga() {
    yield takeLatest(types.GET_BANNER_CATEGORY_REQUEST, getBannerCategorySaga);
}
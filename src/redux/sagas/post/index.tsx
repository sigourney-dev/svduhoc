import {call, put, takeLatest} from 'redux-saga/effects';
import { getListPosts, getPostDetail } from '../../../api-request';
import { types } from '../../types';
import { Logger } from '../../../utils/logger';
import * as postActions from '../../actions';

function* getListPostSaga(params: any): any {
    try {
        const response = yield call(getListPosts, params.payload);
        if (response.success) {
            yield put(postActions.getListPostsSuccess(response.data));
        } else {
            yield put(postActions.getListPostsFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(postActions.getListPostsFailure(error));
    }
}

function* getPostDetailSaga(params: any): any {
    try {
        const response = yield call(getPostDetail, params.payload.id);
        if (response.success) {
            yield put(postActions.getPostDetailSuccess(response.data));
        } else {
            yield put(postActions.getPostDetailFailure(response.message));
        }
    } catch (error) {
        Logger.error(error);
        yield put(postActions.getPostDetailFailure(error));
    }
}

export default function* postSaga() {
    yield takeLatest(types.GET_LIST_POSTS_REQUEST, getListPostSaga);
    yield takeLatest(types.GET_POST_DETAIL_REQUEST, getPostDetailSaga);
}
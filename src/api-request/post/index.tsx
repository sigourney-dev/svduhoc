import { AppRequest } from "../../services/api";
import { API_URL } from "../../services/api";

export const getListPosts = (body: any) => {
    return AppRequest.post(`${API_URL}/post/get-list-posts`, body);
};

export const getPostDetail = (id: any) => {
    return AppRequest.get(`${API_URL}/post/get-post-detail/${id}`);
};
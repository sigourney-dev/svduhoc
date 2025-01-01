import { AppRequest } from "../../services/api";
import { API_URL } from "../../services/api";

export const getBannerCategory = (params: any) => {
    return AppRequest.get(`${API_URL}/data/get-banner-category`, params);
};
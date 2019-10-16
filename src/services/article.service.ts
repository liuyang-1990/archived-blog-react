import request from "../utils/request";
import { GridParams } from "../models/GridParams";

export async function getAllTags() {
    return request('tag/all');
}


export async function queryArticlesByPage(params: GridParams) {
    return request("article/page", { params: params });
}

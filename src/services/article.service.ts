import request from "../utils/request";
import { GridParams } from "../models/GridParams";

export async function getAllTags() {
    return request('tag/all');
}


export async function queryArticlesByPage(params: GridParams) {
    const parms = { ...params, Status: 1 };
    return request("article/page", { params: parms });
}


export async function queryArticleDetail(id: number) {
    return request(`article/${id}`);
}
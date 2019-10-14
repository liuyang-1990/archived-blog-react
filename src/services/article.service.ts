import request from "../utils/request";


export async function getAllTags() {
    return request('tag/all');
}

import { request } from "../utils/request"

export function getSearchHot() {
    return request('/search/hot').then(res => res.json())
}
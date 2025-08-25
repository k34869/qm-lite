import { request } from "../utils/request"

export function getTopCate() {
    return request('/top/category').then(res => res.json())
}
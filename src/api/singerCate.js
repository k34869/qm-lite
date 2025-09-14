import { request } from "../utils/request"

export function getSingerCate() {
    return request('/singer/category').then(res => res.json())
}
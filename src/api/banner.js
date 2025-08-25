import { request } from "../utils/request"

export function getRecBanners() {
    return request('/recommend/banner').then(res => res.json())
}
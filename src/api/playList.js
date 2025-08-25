import { request } from "../utils/request"

export function getRecPlaylist() {
    return request('/recommend/playlist/u').then(res => res.json())
}
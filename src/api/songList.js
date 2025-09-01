import { request } from "../utils/request"

export function getSongList(id) {
    return request(`/songlist?id=${id}`).then(res => res.json())
}
import { request } from "../utils/request"

export function getNewSongs() {
    return request('/new/songs').then(res => res.json())
}
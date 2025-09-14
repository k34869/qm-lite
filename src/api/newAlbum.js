import { request } from "../utils/request"

export function getNewAlbum() {
    return request('/new/album').then(res => res.json())
}
import { request } from "../utils/request"

export function getAlbumSongs(id) {
    return request(`/album/songs?albummid=${id}`).then(res => res.json())
}
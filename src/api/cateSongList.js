import { request } from "../utils/request"

export function getCateSongList(options = {}) {
    const { pageSize = 21, pageNo = 1, id = 10000000 } = options
    return request('/songlist/list?pageSize=' + pageSize + '&pageNo=' + pageNo + '&category=' + id).then(res => res.json())
}
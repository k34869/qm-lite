import { request } from "../utils/request"

export function getSingerList(options, pageNo = 1) {
    const { area, genre, index, sex } = options
    return request(`/singer/list?area=${area.id}&genre=${genre.id}&index=${index.id}&sex=${sex.id}&pageNo=${pageNo}`).then(res => res.json())
}
import { defineStore } from "pinia"

export const useCates = defineStore("cates", {
    state: () => ([
        {
            name: '全部',
            id: 10000000
        },
        {
            name: '流行',
            id: 6
        },
        {
            name: '中国风',
            id: 145
        },
        {
            name: '轻音乐',
            id: 15
        },
        {
            name: '民谣',
            id: 28
        },
        {
            name: '经典',
            id: 136
        },
        {
            name: '学习',
            id: 101
        }
    ]),
    persist: true
})
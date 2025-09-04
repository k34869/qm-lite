import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/top',
        name: '排行榜',
        component: () => import('../views/Top.vue')
    },
    {
        path: '/song-list/:id',
        name: '歌单',
        component: () => import('../views/SongList.vue'),
        children: [
            {
                path: 'details',
                name: '歌单详情',
                component: () => import('../views/SongList/SongListDetails.vue')
            }
        ]
    },
    {
        path: '/search',
        name: '搜索',
        component: () => import('../views/Search.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
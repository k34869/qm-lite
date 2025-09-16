import { createRouter, createWebHistory } from 'vue-router'

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
        name: '排行',
        component: () => import('../views/Top.vue')
    },
    {
        path: '/songlist/:id',
        name: '歌单',
        component: () => import('../views/SongList.vue'),
        children: [
            {
                path: 'detail',
                name: '歌单详情',
                component: () => import('../views/SongListDetail.vue')
            }
        ]
    },
    {
        path: '/album/:id',
        name: '专辑',
        component: () => import('../views/Album.vue'),
        children: [
            {
                path: 'view-singers',
                name: '查看歌手',
                component: () => import('../views/AlbumSingersView.vue')
            }
        ]
    },
    {
        path: '/category',
        name: '分类歌单',
        component: () => import('../views/Category.vue'),
        children: [
            {
                path: 'view-category',
                name: '查看分类',
                component: () => import('../views/CategoryView.vue')
            }
        ]
    },
    {
        path: '/singers',
        name: '歌手',
        component: () => import('../views/Singers.vue')
    },
    {
        path: '/search',
        name: '搜索',
        component: () => import('../views/Search.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
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
        path: '/playlist/:id',
        name: '歌单',
        component: () => import('../views/PlayList.vue'),
        children: [
            {
                path: 'detail',
                name: '歌单详情',
                component: () => import('../views/PlayListDetail.vue')
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
        path: '/cate-playlist',
        name: '分类歌单',
        component: () => import('../views/CatePlayList.vue')
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (!/歌单详情|查看歌手/.test(to.name)) {
            if (savedPosition) {
                router.scrollOptions = savedPosition;
            }
        }
    }
})

router.scrollOptions = { left: 0, top: 0 }

export default router
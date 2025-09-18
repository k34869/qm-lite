import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SongList from '@/views/SongList.vue'
import SongListDetail from '../views/SongListDetail.vue'
import Album from '@/views/Album.vue'
import AlbumSingersView from '../views/AlbumSingersView.vue'
import Category from '@/views/Category.vue'
import CategoryView from '../views/CategoryView.vue'
import Singers from '../views/Singers.vue'
import Top from '@/views/Top.vue'
import Search from '../views/Search.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        component: Home
    },
    {
        path: '/top',
        name: '排行',
        component: Top
    },
    {
        path: '/songlist/:id',
        name: '歌单',
        component: () => SongList,
        children: [
            {
                path: 'detail',
                name: '歌单详情',
                component: SongListDetail
            }
        ]
    },
    {
        path: '/album/:id',
        name: '专辑',
        component: Album,
        children: [
            {
                path: 'view-singers',
                name: '查看歌手',
                component: AlbumSingersView
            }
        ]
    },
    {
        path: '/category',
        name: '分类歌单',
        component: Category,
        children: [
            {
                path: 'view-category',
                name: '查看分类',
                component: CategoryView
            }
        ]
    },
    {
        path: '/singers',
        name: '歌手',
        component: Singers
    },
    {
        path: '/search',
        name: '搜索',
        component: Search
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/view/index'
import search from '@/components/view/search'
import user from '@/components/view/user'
import love from '@/components/view/love'
import {
    resolve
} from 'path';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '首页',
            }
        },
        {
            path: '/taoshop/search',
            name: 'search',
            component: search,
            meta: {
                title: '超级搜',
            }
        },
        {
            path: '/taoshop/user',
            name: 'user',
            component: user,
            meta: {
                title: '个人中心',
            }
        },
        {
            path: '/taoshop/love',
            name: 'love',
            component: love,
            meta: {
                title: '我的收藏',
            }
        }
    ]
})
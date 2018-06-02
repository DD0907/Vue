import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import shopDetails from '@/components/shopDetails'

import {
    resolve
} from 'path';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/searchshop/index',
            name: 'index',
            component: index,
            meta: {
                title: '首页',
            }
        }, {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '首页',
            }
        },
        {
            path: '/searchshop/search',
            name: 'search',
            component: search,
            meta: {
                title: '搜索',
            }
        },
        {
            path: '/searchshop/shopDetails',
            name: 'shopDetails',
            component: shopDetails,
            meta: {
                title: '商品详情',
            }
        }
    ]
})
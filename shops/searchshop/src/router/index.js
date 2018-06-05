import Vue from 'vue'
import Router from 'vue-router'
import Shoptao from '@/components/Shoptao'
import ShopJuhuasuan from '@/components/ShopJuhuasuan'
import Shopvideo from '@/components/Shopvideo'
import Shopbaoyou from '@/components/Shopbaoyou'

import {
    resolve
} from 'path';
Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/searchshop/index',
            name: 'index',
            component: resolve => require(['@/components/index'], resolve),
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/',
            name: 'index',
            component: resolve => require(['@/components/index'], resolve),
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/searchshop/search',
            name: 'search',
            component: resolve => require(['@/components/search'], resolve),
            meta: {
                title: '搜索',
                keepAlive: true
            }
        },
        {
            path: '/searchshop/shopDetails',
            name: 'shopDetails',
            component: resolve => require(['@/components/shopDetails'], resolve),
            meta: {
                title: '商品详情',
            }
        }, {
            path: '/searchshop/Shopbrand',
            name: 'Shopbrand',
            component: resolve => require(['@/components/Shopbrand'], resolve),
            meta: {
                title: '品牌馆',
                keepAlive: true
            }
        },
        {
            path: '/searchshop/Shoptao',
            name: 'Shoptao',
            component: Shoptao,
            meta: {
                title: '淘抢购',
                keepAlive: true
            }
        }, {
            path: '/searchshop/ShopJuhuasuan',
            name: 'ShopJuhuasuan',
            component: ShopJuhuasuan,
            meta: {
                title: '聚划算',
                keepAlive: true
            }
        }, {
            path: '/searchshop/Shopvideo',
            name: 'Shopvideo',
            component: Shopvideo,
            meta: {
                title: '短视频',
                keepAlive: true
            }
        }, {
            path: '/searchshop/Shopbaoyou',
            name: 'Shopbaoyou',
            component: Shopbaoyou,
            meta: {
                title: '9.9包邮',
                keepAlive: true
            }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (from.meta.keepAlive) {
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                from.meta.savedPosition = b;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    }
})
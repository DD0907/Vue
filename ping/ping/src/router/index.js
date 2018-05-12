import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/components/view/indexs'
import search from '@/components/view/search'
import test from "@/components/view/test"
import { resolve } from 'path';
import PageDetails from '@/components/view/PageDetails'
import share from '@/components/view/share'
import user from '@/components/view/user'
import order from '@/components/view/order'
import fans from '@/components/view/fans'
import team from '@/components/view/team'
import recommendation from '@/components/view/recommendation'
import Integraldetail from '@/components/view/Integraldetail'
import IntegralDraw from '@/components/view/IntegralDraw'
import Integralmall from '@/components/view/Integralmall'
import love from '@/components/view/love'
import vip from '@/components/view/vip'
import vipnotice from '@/components/view/vipnotice'
import viprecord from '@/components/view/viprecord'
import setting from '@/components/view/setting'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ping/search',
      name: 'search',
      component: search,
      meta: {
        title: 'search',
      }
    },
    {
      path: '/ping/indexs',
      name: 'indexs',
      component: indexs,
      meta: {
        title: '拼团客首页',
        keepAlive: true
      }
    },
    {
      path: '/ping/test',
      name: 'test',
      component: test
    },
    {
      path: '/ping/PageDetails',
      name: 'PageDetails',
      component: PageDetails
    },
    {
      path: '/ping/share',
      name: 'share',
      component: share
    },
    {
      path: '/ping/user',
      name: 'user',
      component: user
    },
    {
      path:'/ping/love',
      name:'love',
      component:love
    },
    {
      path:'/ping/vip',
      name:'vip',
      component:vip
    },
    {
      path:'/ping/vipnotice',
      name:'vipnotice',
      component:vipnotice
    },
    {
      path:'/ping/viprecord',
      name:'viprecord',
      component:viprecord
    },
    {
      path: '/ping/order',
      name: 'order',
      component: order
    },
    {
      path:'/ping/setting',
      name:'setting',
      component:setting
    },
    {
      path: '/ping/fans',
      name: 'fans',
      component: fans
    },
    {
      path: '/ping/team',
      name: 'team',
      component: team
    },
    {
      path: '/ping/recommendation',
      name: 'recommendation',
      component: recommendation
    },
    {
      path: '/ping/Integraldetail',
      name: 'Integraldetail',
      component: Integraldetail
    },
    {
      path: '/ping/IntegralDraw',
      name: 'IntegralDraw',
      component: IntegralDraw
    },
    {
      path:'/ping/Integralmall',
      name:'Integralmall',
      component:Integralmall
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        from.meta.savedPosition = b;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

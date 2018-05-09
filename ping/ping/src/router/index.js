import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/view/index'
import indexs from '@/components/view/indexs'
import search from '@/components/view/search'
import test from "@/components/view/test"
import { resolve } from 'path';
import selecteddata from '@/components/view/selecteddata'
import fruitdata from '@/components/view/fruitdata'
import PageDetails from '@/components/view/PageDetails'
import searchPageDetails from '@/components/view/searchPageDetails'
import shape from '@/components/view/shape'
import timetest from '@/components/view/timetest'
import user from '@/components/view/user'
import order from '@/components/view/order'
import fans from '@/components/view/fans'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ping/index',
      name: 'index',
      component: resolve => require(['@/components/view/index'], resolve),
      // component: index,
      meta: { keepAlive: true }
    },
    {
      path: '/ping/search',
      name: 'search',
      component: search,
      meta:{
        title:'search',
        keepAlive:true
      }
    },
    {
      path: '/ping/indexs',
      name: 'indexs',
      component: indexs,
      meta:{
        title:'indexs',
        keepAlive:true
      }
    },
    {
      path: '/ping/test',
      name: 'test',
      component: test
    },
    {
      path: '/ping/selecteddata',
      name: 'selecteddata',
      component: selecteddata
    },
    {
      path: '/ping/fruitdata',
      name: 'fruitdata',
      component: fruitdata
    },
    {
      path: '/ping/PageDetails',
      name: 'PageDetails',
      component: PageDetails
    },
    {
      path: '/ping/searchPageDetails',
      name: 'searchPageDetails',
      component: searchPageDetails
    },
    {
      path: '/ping/shape',
      name: 'shape',
      component: shape
    },
    {
      path: '/ping/user',
      name: 'user',
      component: user
    },
    {
      path: '/ping/order',
      name: 'order',
      component: order
    },
    {
      path:'/ping/fans',
      name:'fans',
      component:fans
    },
    {
      path: '/ping/timetest',
      name: 'timetest',
      component: timetest
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        var b =document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        from.meta.savedPosition = b;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

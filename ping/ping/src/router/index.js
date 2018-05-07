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
import shape from '@/components/view/shape'
import timetest from '@/components/view/timetest'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ping/index',
      name: 'index',
      component:resolve => require(['@/components/view/index'],resolve),
      // component: index,
      meta:{keepAlive: true}
    },
    {
      path: '/ping/search',
      name: 'search',
      component: search
    },
    {
      path: '/ping/indexs',
      name: 'indexs',
      component: indexs
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
      path: '/ping/shape',
      name: 'shape',
      component: shape
    },
     {
      path: '/ping/timetest',
      name: 'timetest',
      component: timetest
    }
  ]
})

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
import putforwards from '@/components/view/putforwards'
import personal from '@/components/view/personal'
import personalVip from '@/components/view/personalVip'
import commissions from '@/components/view/commissions'
Vue.use(Router)
export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexs',
      component: indexs,
      meta: {
        title:'拼团客首页',
        keepAlive: true
      }
    },
    {
      path: '/ping/search',
      name: 'search',
      component: search,
      meta:{
        title:'搜索'
      }
    },
    {
      path: '/ping/indexs',
      name: 'indexs',
      component: indexs,
      meta: {
        title:'拼团客首页',
        keepAlive: true
      }
    },
    {
      path: '/ping/test',
      name: 'test',
      component: test,
    },
    {
      path: '/ping/PageDetails',
      name: 'PageDetails',
      component: PageDetails,
      meta:{
        title:'商品详情',
      }
    },
    {
      path: '/ping/share',
      name: 'share',
      component: share,
      meta:{
        title:'晒单分享',
      }
    },
    {
      path: '/ping/user',
      name: 'user',
      component: user,
      meta:{
        title:'个人中心',
      }
    },
    {
      path:'/ping/love',
      name:'love',
      component:love,
      meta:{
        title:'我的收藏',
      }
    },
    {
      path:'/ping/vip',
      name:'vip',
      component:vip,
      meta: {
        title: '超级会员',
      }
    },
    {
      path:'/ping/vipnotice',
      name:'vipnotice',
      component:vipnotice,
      meta:{
        title:'超级会员通知',
      }
    },
    {
      path:'/ping/viprecord',
      name:'viprecord',
      component:viprecord,
      meta:{
        title:'超级会员订单记录',
      }
    },
    {
      path: '/ping/order',
      name: 'order',
      component: order
    },
    {
      path:'/ping/setting',
      name:'setting',
      component:setting,
      meta:{
        title:'账户设置',
      }
    },
    {
      path: '/ping/fans',
      name: 'fans',
      component: fans,
      meta:{
        title:'我的粉丝',
      }
    },
    {
      path:'/ping/personal',
      name:'personal',
      component:personal,
      meta:{
        title:'个人主页'        
      }
    },
    {
      path:'/ping/personalVip',
      name:'personalVip',
      component:personalVip,
      meta:{
        title:'个人主页'        
      }
    },
    {
      path:'/ping/commissions',
      name:'commissions',
      component:commissions,
      meta:{
        title:'佣金明细'
      }
    },
    {
      path: '/ping/team',
      name: 'team',
      component: team,
      meta:{
        title:'邀请好友',
      }
    },
    {
      path: '/ping/recommendation',
      name: 'recommendation',
      component: recommendation,
      meta:{
        title:'我的推荐人',
      }
    },
    {
      path: '/ping/putforwards',
      name: 'putforwards',
      component: putforwards,
      meta:{
        title:'可提现的佣金币',
      }
    },
    {
      path: '/ping/Integraldetail',
      name: 'Integraldetail',
      component: Integraldetail,
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
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

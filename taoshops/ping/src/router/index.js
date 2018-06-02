import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/components/view/indexs'
import search from '@/components/view/search'
import Shopbrand from '@/components/view/Shopbrand'
import Shoptao from '@/components/view/Shoptao'
import ShopJuhuasuan from '@/components/view/ShopJuhuasuan'
import Shopvideo from '@/components/view/Shopvideo'
import Shopbaoyou from '@/components/view/Shopbaoyou'

import test from "@/components/view/test"
import {
    resolve
} from 'path';
import PageDetails from '@/components/view/PageDetails'
import user from '@/components/view/user'
import fans from '@/components/view/fans'
import love from '@/components/view/love'
import vip from '@/components/view/vip'
import viprecord from '@/components/view/viprecord'
import vipfansrecord from '@/components/view/vipfansrecord'
import setting from '@/components/view/setting'
import putforwards from '@/components/view/putforwards'
import personal from '@/components/view/personal'
import personalVip from '@/components/view/personalVip'
import personalReferee from '@/components/view/personalReferee'
import personalteach from '@/components/view/personalteach'
import commissions from '@/components/view/commissions'
import bindingnumber from '@/components/view/bindingnumber'
import bindingfriendscan from '@/components/view/bindingfriendscan'
import bindingmoneyscan from '@/components/view/bindingmoneyscan'
import errors from '@/components/view/errors'
import customerservice from '@/components/view/customerservice'
Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'indexs',
            component: indexs,
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/shg/search',
            name: 'search',
            component: search,
            meta: {
                title: '搜索',
                keepAlive: true
            }
        },
        {
            path: '/shg/Shopbrand',
            name: 'Shopbrand',
            component: Shopbrand,
            meta: {
                title: '品牌馆',
                keepAlive: true
            }
        },
        {
            path: '/shg/Shoptao',
            name: 'Shoptao',
            component: Shoptao,
            meta: {
                title: '淘抢购',
                keepAlive: true
            }
        }, {
            path: '/shg/ShopJuhuasuan',
            name: 'ShopJuhuasuan',
            component: ShopJuhuasuan,
            meta: {
                title: '聚划算',
                keepAlive: true
            }
        }, {
            path: '/shg/Shopvideo',
            name: 'Shopvideo',
            component: Shopvideo,
            meta: {
                title: '短视频',
                keepAlive: true
            }
        }, {
            path: '/shg/Shopbaoyou',
            name: 'Shopbaoyou',
            component: Shopbaoyou,
            meta: {
                title: '9.9包邮',
                keepAlive: true
            }
        },
        {
            path: '/shg/indexs',
            name: 'indexs',
            component: indexs,
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/shg/test',
            name: 'test',
            component: test,
            meta: {
                title: '测试',
            }
        },
        {
            path: '/shg/PageDetails',
            name: 'PageDetails',
            component: PageDetails,
            meta: {
                title: '商品详情',
            }
        },
        {
            path: '/shg/user',
            name: 'user',
            component: user,
            meta: {
                title: '个人中心',
            }
        },
        {
            path: '/shg/love',
            name: 'love',
            component: love,
            meta: {
                title: '我的收藏',
                keepAlive: true
            }
        },
        {
            path: '/shg/vip',
            name: 'vip',
            component: vip,
            meta: {
                title: '超级搜',
            }
        },
        {
            path: '/shg/viprecord',
            name: 'viprecord',
            component: viprecord,
            meta: {
                title: '订单记录',
            }
        },
        {
            path: '/shg/vipfansrecord',
            name: 'vipfansrecord',
            component: vipfansrecord,
            meta: {
                title: '订单记录',
            }
        },
        {
            path: '/shg/setting',
            name: 'setting',
            component: setting,
            meta: {
                title: '账户设置',
            }
        },
        {
            path: '/shg/fans',
            name: 'fans',
            component: fans,
            meta: {
                title: '我的粉丝',
            }
        },
        {
            path: '/shg/bindingnumber',
            name: 'bindingnumber',
            component: bindingnumber,
            meta: {
                title: '绑定手机号微信号'
            }
        },
        {
            path: '/shg/bindingfriendscan',
            name: 'bindingfriendscan',
            component: bindingfriendscan,
            meta: {
                title: '上传微信好友二维码'
            }
        },
        {
            path: '/shg/bindingmoneyscan',
            name: 'bindingmoneyscan',
            component: bindingmoneyscan,
            meta: {
                title: '上传微信收钱二维码'
            }
        },
        {
            path: '/shg/personal',
            name: 'personal',
            component: personal,
            meta: {
                title: '拼团客个人主页'
            }
        },
        {
            path: '/shg/personalVip',
            name: 'personalVip',
            component: personalVip,
            meta: {
                title: '超级会员个人主页'
            }
        },
        {
            path: '/shg/personalReferee',
            name: 'personalReferee',
            component: personalReferee,
            meta: {
                title: '我的推荐人'
            }
        },
        {
            path: '/shg/personalteach',
            name: 'personalteach',
            component: personalteach,
            meta: {
                title: '我的专属指导老师'
            }
        },
        {
            path: '/shg/commissions',
            name: 'commissions',
            component: commissions,
            meta: {
                title: '佣金币明细'
            }
        },
        {
            path: '/shg/putforwards',
            name: 'putforwards',
            component: putforwards,
            meta: {
                title: '可提现的佣金币',
            }
        },
        {
            path: '/shg/customerservice',
            name: 'customerservice',
            component: customerservice,
            meta: {
                title: '官方客服',
            }
        },
        {
            path: '/shg/errors',
            name: 'errors',
            component: errors,
            meta: {
                title: '错误提示信息',
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
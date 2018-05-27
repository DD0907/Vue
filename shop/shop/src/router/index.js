import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mcanvas from 'mcanvas'
Vue.use(mcanvas)
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: '主页',
        menuShow: true,
        component: HelloWorld
    }]
})
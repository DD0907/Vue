import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
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
    }]
})
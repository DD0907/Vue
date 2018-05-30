// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import 'lib-flexible'
import axios from 'axios'
Vue.use(require('vue-wechat-title'))
Vue.prototype.$axios = axios;
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$goRoute = function(index) {
        this.$router.push(index)
    }
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
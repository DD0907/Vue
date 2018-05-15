// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant, { Dialog } from 'vant'
import 'vant/lib/vant-css/index.css'
import 'lib-flexible'
import axios from 'axios'
import VueQriously from 'vue-qriously'
// import uploader  from 'vue-easy-uploader'
// import Vuex from 'vuex'
// let store = new Vuex.Store({})
// Vue.use(uploader, store)
var VueCookie = require('vue-cookie');
withCredentials:true
Vue.use(VueCookie);
Vue.use(require('vue-wechat-title'))
// import setTitle from './assets/util/setTitle.js'
// Window.setTitle=setTitle
Vue.use(VueQriously)
Vue.prototype.$axios = axios;
Vue.use(Vant);
Vue.config.productionTip = false
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

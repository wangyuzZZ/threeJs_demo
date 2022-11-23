import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; //仓库
import axios from 'axios'
import './assets/styles/index.scss'; //全局样式
import './permission'; //路由拦截
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
import {
  parseTime
} from './utils/wk'; //通用JS方法
Vue.prototype.parseTime = parseTime; //挂载到Vue实例
// 全局方法挂载
Vue.prototype.$axios = axios;
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
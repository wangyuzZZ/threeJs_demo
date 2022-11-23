import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
// 公共路由
export const constantRoutes = [
  // login
  // {
  //   path: '/login',
  //   component: (resolve) => require(['@/views/login'], resolve),
  //   name: '登录'
  // },
  // // 称重页面
  {
    path: '/',
    component: Layout,
    reactive:'/',
    children: [{
      path: '/',
      component: (resolve) => require(['@/views/home/home.vue'], resolve),
      name: '首页',
    }]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
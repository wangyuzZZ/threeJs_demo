import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  getToken
} from '@/utils/auth'

NProgress.configure({
  showSpinner: false
})

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  NProgress.done()
})
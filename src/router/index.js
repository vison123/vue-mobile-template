import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../framework/env'

const Home = () => import(/* webpackChunkName: "home" */'@/pages/home/home')
const Message = () => import(/* webpackChunkName: "search" */'@/pages/search/search')
const Cart = () => import(/* webpackChunkName: "order" */'@/pages/order/order')
const Profile = () => import(/* webpackChunkName: "profile" */'@/pages/profile/profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showFootMenu: true, selectedMenu: 'Home', showHeader: true, headTitle: '首页', showGoBack: false }
    // meta: {
    //   keepAlive: true // 需要被缓存
    // }
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { showFootMenu: true, selectedMenu: 'Home', showHeader: true, headTitle: '首页', showGoBack: false }
  }, {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: { showFootMenu: true, selectedMenu: 'Message', showHeader: true, headTitle: '消息', showGoBack: false }
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { showFootMenu: true, selectedMenu: 'Cart', showHeader: true, headTitle: '购物车', showGoBack: false }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { showFootMenu: true, selectedMenu: 'Profile', showHeader: true, headTitle: '我的', showGoBack: false }
  }
]

export default new Router({
  routes,
  mode: routerMode
})

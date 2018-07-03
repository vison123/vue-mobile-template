import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../framework/env'

const Home = () => import(/* webpackChunkName: "home" */'@/pages/home/home')
const Search = () => import(/* webpackChunkName: "search" */'@/pages/search/search')
const Order = () => import(/* webpackChunkName: "order" */'@/pages/order/order')
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
    path: '/search',
    name: 'Search',
    component: Search,
    meta: { showFootMenu: true, selectedMenu: 'Search', showHeader: true, headTitle: '搜索', showGoBack: false }
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: { showFootMenu: true, selectedMenu: 'Order', showHeader: true, headTitle: '订单', showGoBack: false }
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

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
    component: Home
    // meta: {
    //   keepAlive: true // 需要被缓存
    // }
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/order',
    name: 'Order',
    component: Order
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: routerMode
})

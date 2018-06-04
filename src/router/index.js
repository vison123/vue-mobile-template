import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../framework/env'

const Home = () => import('@/pages/home/home')
const Search = () => import('@/pages/search/search')
const Order = () => import('@/pages/order/order')
const Profile = () => import('@/pages/profile/profile')

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

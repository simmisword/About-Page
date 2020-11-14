import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import AboutView from '../views/AboutView.vue'
import CodingView from '../views/CodingView.vue'
import CreativeView from '../views/CreativeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: LandingView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/coding',
    name: 'Coding',
    component: CodingView
  },
  {
    path: '/creative',
    name: 'Creative',
    component: CreativeView
  }
]



const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition
    } else {
      return {x:0, y:0}
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/model',
    name: 'Model',
    component: () => import(/* webpackChunkName: "model" */ '@/views/Model.vue')
  },
  {
    path: '/if',
    name: 'If',
    component: () => import(/* webpackChunkName: "if" */ '@/views/If.vue')
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import(/* webpackChunkName: "class" */ '@/views/Class.vue')
  },
  {
    path: '/compo',
    name: 'Compo',
    component: () => import(/* webpackChunkName: "compo" */ '@/views/Compo.vue')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import(/* webpackChunkName: "parent" */ '@/views/Parent.vue')
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '@/views/PageMove.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

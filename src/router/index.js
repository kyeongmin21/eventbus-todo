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
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '@/views/Data.vue')
  },
  {
    path: '/bind',
    name: 'Bind',
    component: () => import(/* webpackChunkName: "bind" */ '@/views/Bind.vue')
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
    path: '/for',
    name: 'For',
    component: () => import(/* webpackChunkName: "for" */ '@/views/For.vue')
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import(/* webpackChunkName: "class" */ '@/views/Class.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '@/views/Computed.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "watch" */ '@/views/Watch.vue')
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
    path: '/updown',
    name: 'UpDown',
    component: () => import(/* webpackChunkName: "updown" */ '@/views/UpDown.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '@/views/Event.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot" */ '@/views/Slot.vue')
  },
  {
    path: '/lifecycle',
    name: 'LifeCycle',
    component: () => import(/* webpackChunkName: "lifecycle" */ '@/views/LifeCycle.vue')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "props" */ '@/views/Props.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import(/* webpackChunkName: "animation" */ '@/views/Animation.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import(/* webpackChunkName: "board" */ '@/views/Board.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "table" */ '@/views/Table.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "modal" */ '@/views/Modal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/legends',
    name: 'legends',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Legends.vue')
  },
  {
    path: '/squares',
    name: 'squares',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Squares.vue')
  },
  {
    path: '/facts',
    name: 'facts',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Facts.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    meta: {
      layout: 'article'
    },
    component: () => import('@/views/Paper.vue') 
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

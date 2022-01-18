import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import systemRoutes from '@/modules/system/router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: {
      layout: 'layout-index'
    }
  },
  ...systemRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/role.vue'),
    meta: {
      title: '角色管理',
      auth: true
    }
  },
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('../views/permission.vue'),
    meta: {
      title: '权限管理',
      auth: true
    }
  }
]

export default routes

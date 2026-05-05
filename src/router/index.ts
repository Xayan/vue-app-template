import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: 'Not Found' },
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const appTitle = document.title

router.beforeEach(to => {
  document.title = to.meta.title ? `${appTitle} | ${to.meta.title}` : appTitle
})

export default router

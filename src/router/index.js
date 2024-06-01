import { createWebHistory, createRouter } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

const routes = [
  {
    path: '/main',
    name: 'mainshell',
    component: () => import('@/shell/mainShell.vue'),
    children: [
      {
        path: ':id?',
        name: 'home',
        meta: { title: 'Home' },
        component: () => import('@/views/home.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404' },
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'About' },
    component: () => import('@/views/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router

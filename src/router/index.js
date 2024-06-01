import { createWebHistory, createRouter } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

//this title is also set inside the html, in case the router is not working you'll still have a title
const defaultTitle = 'My App'

const routes = [
  {
    path: '/',
    name: 'mainshell',
    component: () => import('@/shell/mainShell.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: { title: 'Home' },
        component: () => import('@/views/home.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'About' },
    component: () => import('@/views/about.vue'),
  },
  {
    path: '/swiper',
    name: 'swiper',
    meta: { title: 'Swiper' },
    component: () => import('@/views/swiper.vue'),
  },
  
  {
    path: '/primevue',
    name: 'primevue',
    meta: { title: 'Primevue' },
    component: () => import('@/views/primevue.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = defaultTitle;
  }
  next();
});

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '@/layout/Main'
import Auth from '@/layout/Auth'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/error',
        name: 'Error',
        component: NotFound,
      },
    ],
    meta: { requiresAuth: true },
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Registration,
      },
    ],
  },
  {
    path: '/login',
    redirect: '/auth/login',
  },
  {
    path: '/register',
    redirect: '/auth/register',
  },
  {
    path: '/main',
    redirect: '/',
  },
  {
    path: '*',
    redirect: '/error',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      })
    }
  } else
    next()

})
export default router

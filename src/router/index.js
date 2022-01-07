import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {path: '/cgu',
  name: 'Cgu',
  component: () => import('../views/Cgu.vue')

  },

  {path: '/contact',
  name: 'Contact',
  component: () => import('../views/Contact.vue')

  },

  {path: '/galerie',
  name: 'Galerie',
  component: () => import('../views/Galerie.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

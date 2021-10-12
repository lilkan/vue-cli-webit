import Vue from 'vue'
import VueRouter from 'vue-router'
import 'materialize-css/dist/js/materialize.min'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'mainLayout', exact: true, title:'Главная', menu: 'side'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news/:id',
    name: 'detail',
    meta: {layout: 'mainLayout', title:'Одна новость'},
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {layout: 'mainLayout', title:'Новости', menu: 'side'},
    component: () => import('../views/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

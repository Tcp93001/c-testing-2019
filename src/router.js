import Vue from 'vue'
import Router from 'vue-router'
import DataTemplate from './components/data-template/DataTemplate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataTemplate
    },
    {
      path: '/clientes',
      name: 'clients',
      component: DataTemplate
    },
    {
      path: '/usuarios/:eq_id',
      name: 'users',
      component: DataTemplate
    },
    {
      path: '/getClientes/:eq_id/:user_id',
      name: 'getClients',
      component: DataTemplate
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
